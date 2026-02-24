#!/usr/bin/env python3
"""
Refactor and enrich markdown files from markdown_output to md_enriched
"""

import os
import re
import shutil
from pathlib import Path
import argparse
from datetime import datetime
import yaml
from collections import defaultdict

# Language mapping for metadata
LANGUAGE_MAP = {
    'Engleza': 'en',
    'Germana': 'de',
    'Romana': 'ro',
    '': 'en'  # default for root files
}

# Topic mapping for cross-language linking
TOPIC_MAPPING = {
    # English (Engleza) to German (Germana) mappings
    'ADDICTION': 'SUCHT',
    'Anxiety': 'Angst',
    'ATTACHMENT DISORDER': 'BINDUNGSSTÖRUNG',
    'DEPRESSION': 'DEPRESSION',
    'EATING DISORDERS': 'ESSSTÖRUNGEN',
    'GRIEF': 'TRAUER',
    'MEN': 'PSYCHISCHE GESUNDHEIT VON MÄNNERN',
    'PERINATAL MOOD DISORDERS': 'PERINATALE STIMMUNGSSTÖRUNGEN',
    'RELATIONSHIPS': 'BEZIEHUNGEN',
    'SEXUAL DYSFUNCTIONS': 'SEXUELLE DYSFUNKTIONEN',
    'STRESS': 'STRESS1',
    'TRAUMA': 'TRAUMA',
    
    # English to Romanian (Romana) mappings
    'ADDICTION': 'DEPENDENȚĂ',
    'Anxiety': 'Anxietate',
    'ATTACHMENT DISORDER': 'TULBURARE DE ATAȘAMENT',
    'DEPRESSION': 'Depresie',
    'EATING DISORDERS': 'TULBURĂRI DE ALIMENTAȚIE',
    'GRIEF': 'Durere',
    'MEN': 'SĂNĂTATEA MINTALĂ A BĂRBAȚILOR',
    'PERINATAL MOOD DISORDERS': 'TULBURĂRI DE DISPOZIȚIE PERINATALE',
    'RELATIONSHIPS': 'RELAŢII',
    'SEXUAL DYSFUNCTIONS': 'DISFUNCȚII SEXUALE',
    'STRESS': 'Stress',
    'TRAUMA': 'TRAUMĂ',
}

def clean_filename(filename):
    """
    Clean up filenames: remove (1), fix spaces, handle special characters
    """
    # Remove (1), (2), etc.
    filename = re.sub(r'\s*\(\d+\)', '', filename)
    # Replace multiple spaces with single space
    filename = re.sub(r'\s+', ' ', filename)
    # Replace spaces with underscores (optional - can keep spaces if preferred)
    # filename = filename.replace(' ', '_')
    # Remove any remaining special characters but keep umlauts
    filename = re.sub(r'[^\w\säöüßÄÖÜăâîșț\-]', '', filename)
    return filename.strip()

def extract_title_from_content(content):
    """
    Extract the first H1 (# Title) from markdown content
    """
    lines = content.split('\n')
    for line in lines:
        if line.startswith('# '):
            return line[2:].strip()
    return None

def generate_frontmatter(title, language, topic, original_file):
    """
    Generate YAML frontmatter for the markdown file
    """
    frontmatter = {
        'title': title,
        'language': language,
        'topic': topic,
        'source': original_file,
        'last_updated': datetime.now().strftime('%Y-%m-%d'),
        'tags': [topic.lower().replace(' ', '-'), language]
    }
    
    # Convert to YAML string
    yaml_str = yaml.dump(frontmatter, allow_unicode=True, default_flow_style=False)
    return f"---\n{yaml_str}---\n\n"

def find_related_files(topic, language, all_files):
    """
    Find related files in other languages for the same topic
    """
    related = {}
    
    # Get the base topic name (without language-specific suffixes)
    base_topic = topic
    
    # Look for matches in other languages
    for other_lang in ['Engleza', 'Germana', 'Romana']:
        if other_lang == language:
            continue
            
        # Check direct mapping
        if language == 'Engleza' and topic in TOPIC_MAPPING:
            mapped_topic = TOPIC_MAPPING[topic]
            # Find file in other language folder
            for file_path in all_files:
                if other_lang in str(file_path) and mapped_topic in file_path.stem:
                    rel_path = file_path.relative_to(Path('md_enriched'))
                    related[other_lang] = f"../{other_lang}/{rel_path.name}"
                    break
        
        # Reverse mapping
        elif other_lang == 'Engleza':
            for eng_topic, other_topic in TOPIC_MAPPING.items():
                if other_topic == topic:
                    for file_path in all_files:
                        if 'Engleza' in str(file_path) and eng_topic in file_path.stem:
                            rel_path = file_path.relative_to(Path('md_enriched'))
                            related['Engleza'] = f"../Engleza/{rel_path.name}"
                            break
    
    return related

def add_cross_language_links(content, related_files):
    """
    Add cross-language links section to the content
    """
    if not related_files:
        return content
    
    links_section = "\n\n## 🌐 Available in Other Languages\n\n"
    for lang, path in related_files.items():
        lang_name = {
            'Engleza': 'English',
            'Germana': 'German',
            'Romana': 'Romanian'
        }.get(lang, lang)
        links_section += f"- [{lang_name}]({path})\n"
    
    return content + links_section

def add_table_of_contents(content):
    """
    Add a table of contents if the document is long
    """
    lines = content.split('\n')
    if len(lines) > 50:  # Only add TOC for longer documents
        toc = "\n## 📋 Table of Contents\n\n"
        headers = []
        for line in lines:
            if line.startswith('## ') and not line.startswith('## 🌐') and not line.startswith('## 📋'):
                header = line[3:].strip()
                anchor = header.lower().replace(' ', '-').replace('ä', 'ae').replace('ö', 'oe').replace('ü', 'ue').replace('ß', 'ss')
                toc += f"- [{header}](#{anchor})\n"
        
        if headers:
            return toc + "\n" + content
    return content

def process_files(source_dir, target_dir, args):
    """
    Process all markdown files and create enriched versions
    """
    source_path = Path(source_dir)
    target_path = Path(target_dir)
    
    # Create target directory
    target_path.mkdir(parents=True, exist_ok=True)
    
    # Collect all files for cross-referencing
    all_files = list(source_path.rglob("*.md"))
    
    # Statistics
    stats = {
        'processed': 0,
        'with_frontmatter': 0,
        'with_cross_links': 0,
        'errors': 0
    }
    
    # Process each file
    for file_path in all_files:
        try:
            # Get relative path to maintain structure
            rel_path = file_path.relative_to(source_path)
            
            # Determine language from folder
            language = 'en'
            for folder, lang_code in LANGUAGE_MAP.items():
                if folder in str(rel_path):
                    language = lang_code
                    break
            
            # Clean filename
            clean_name = clean_filename(rel_path.stem) + '.md'
            
            # Create target path with same structure
            target_file = target_path / rel_path.parent / clean_name
            target_file.parent.mkdir(parents=True, exist_ok=True)
            
            # Read content
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Extract or generate title
            title = extract_title_from_content(content)
            if not title:
                title = rel_path.stem
            
            # Generate topic from filename
            topic = clean_filename(rel_path.stem)
            
            # Add YAML frontmatter if requested
            if args.add_frontmatter:
                frontmatter = generate_frontmatter(title, language, topic, str(rel_path))
                content = frontmatter + content
                stats['with_frontmatter'] += 1
            
            # Add cross-language links if requested
            if args.add_cross_links:
                related = find_related_files(topic, rel_path.parent.name if len(rel_path.parts) > 1 else '', all_files)
                if related:
                    content = add_cross_language_links(content, related)
                    stats['with_cross_links'] += 1
            
            # Add table of contents if requested
            if args.add_toc:
                content = add_table_of_contents(content)
            
            # Write enriched file
            with open(target_file, 'w', encoding='utf-8') as f:
                f.write(content)
            
            stats['processed'] += 1
            
            if args.verbose:
                print(f"✅ Processed: {rel_path} -> {target_file.relative_to(Path.cwd())}")
                
        except Exception as e:
            stats['errors'] += 1
            print(f"❌ Error processing {file_path}: {str(e)}")
    
    return stats

def generate_master_index(target_dir, stats):
    """
    Generate a master index file with links to all documents
    """
    target_path = Path(target_dir)
    
    index_content = """# 📚 Document Library Index

This index contains all processed documents organized by language and topic.

"""
    
    # Group by language
    languages = {
        'Engleza': 'English',
        'Germana': 'German', 
        'Romana': 'Romanian'
    }
    
    for lang_folder, lang_name in languages.items():
        lang_path = target_path / lang_folder
        if lang_path.exists():
            index_content += f"\n## 🌍 {lang_name}\n\n"
            
            files = sorted(lang_path.glob("*.md"))
            for file in files:
                # Read frontmatter if exists
                try:
                    with open(file, 'r', encoding='utf-8') as f:
                        first_line = f.readline().strip()
                        if first_line == '---':
                            # Skip to end of frontmatter
                            while True:
                                line = f.readline()
                                if line.startswith('---'):
                                    break
                            title = f.readline().strip()
                            if title.startswith('# '):
                                title = title[2:]
                        else:
                            title = file.stem
                except:
                    title = file.stem
                
                rel_path = file.relative_to(target_path)
                index_content += f"- [{title}]({rel_path})\n"
    
    # Add root files
    root_files = [f for f in target_path.glob("*.md") if f.name != "README.md" and f.name != "index.md"]
    if root_files:
        index_content += f"\n## 📄 General Documents\n\n"
        for file in sorted(root_files):
            rel_path = file.relative_to(target_path)
            index_content += f"- [{file.stem}]({rel_path})\n"
    
    # Write index
    index_file = target_path / "index.md"
    with open(index_file, 'w', encoding='utf-8') as f:
        f.write(index_content)
    
    print(f"\n📇 Generated master index: {index_file}")

def main():
    parser = argparse.ArgumentParser(
        description="Refactor and enrich markdown files"
    )
    parser.add_argument(
        "--source", "-s",
        default="./markdown_output",
        help="Source directory (default: ./markdown_output)"
    )
    parser.add_argument(
        "--target", "-t",
        default="./md_enriched",
        help="Target directory (default: ./md_enriched)"
    )
    parser.add_argument(
        "--add-frontmatter",
        action="store_true",
        default=True,
        help="Add YAML frontmatter to files (default: True)"
    )
    parser.add_argument(
        "--add-cross-links",
        action="store_true",
        default=True,
        help="Add cross-language links (default: True)"
    )
    parser.add_argument(
        "--add-toc",
        action="store_true",
        default=False,
        help="Add table of contents for long documents"
    )
    parser.add_argument(
        "--clean-filenames",
        action="store_true",
        default=True,
        help="Clean up filenames (remove numbers, fix spaces)"
    )
    parser.add_argument(
        "--generate-index",
        action="store_true",
        default=True,
        help="Generate master index file"
    )
    parser.add_argument(
        "--verbose", "-v",
        action="store_true",
        help="Show verbose output"
    )
    
    args = parser.parse_args()
    
    source_dir = Path(args.source)
    target_dir = Path(args.target)
    
    if not source_dir.exists():
        print(f"❌ Source directory '{source_dir}' does not exist")
        return
    
    print(f"📂 Source: {source_dir}")
    print(f"�� Target: {target_dir}")
    print("\n🚀 Starting enrichment process...\n")
    
    # Process files
    stats = process_files(source_dir, target_dir, args)
    
    # Generate master index
    if args.generate_index:
        generate_master_index(target_dir, stats)
    
    # Print summary
    print(f"\n📊 Enrichment Summary:")
    print(f"   ✅ Processed: {stats['processed']} files")
    print(f"   📝 With frontmatter: {stats['with_frontmatter']}")
    print(f"   🔗 With cross-links: {stats['with_cross_links']}")
    print(f"   ❌ Errors: {stats['errors']}")
    print(f"\n✨ Enriched files saved to: {target_dir}")

if __name__ == "__main__":
    main()
