# AGENT.md — MindCores v2

## Project Overview
MindCores is a multilingual mental health therapy platform (EN / DE / RO) built with Next.js 15 App Router. It presents information about psychological conditions and therapy approaches, with an integrated self-assessment tool.

---

## Tech Stack
| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router, RSC) |
| Language | TypeScript |
| Styling | Tailwind CSS + shadcn/ui |
| i18n | next-intl (EN / DE / RO) |
| Icons | lucide-react |
| Build | `node_modules/.bin/next build` |

> **Note:** Use `node_modules/.bin/next build` — `npm run build` and `npx next build` may fail due to Turbopack path issues.

---

## Repository Structure

```
/
├── app/
│   ├── conditions/{key}/page.tsx   # 16 condition pages
│   ├── therapies/{key}/page.tsx    # 15 therapy pages
│   ├── assessment/                 # Self-assessment tool
│   ├── impressum/                  # Legal notice
│   ├── privacy/                    # Privacy policy
│   ├── layout.tsx
│   └── page.tsx                    # Homepage
│
├── components/
│   ├── disorder-page.tsx           # Client component — renders condition pages
│   ├── therapy-page.tsx            # Client component — renders therapy pages
│   ├── header.tsx
│   ├── footer.tsx
│   └── ui/                         # shadcn/ui primitives
│
├── messages/
│   ├── en.json                     # English translations (source of truth)
│   ├── de.json                     # German translations
│   └── ro.json                     # Romanian translations
│
├── markdown_output/                 # Cleaned source markdown (DO NOT DELETE)
│   ├── Engleza/                    # EN condition files
│   ├── Germana/                    # DE condition files
│   ├── Romana/                     # RO condition files
│   └── *.md                        # Therapy files (bilingual DE+EN)
│
├── md_enriched/                    # YAML-frontmatter versions (reference only)
├── i18n/                           # next-intl config
├── lib/                            # Utility functions
└── scripts/                        # Build/sync scripts
```

---

## Content Architecture

### How Pages Get Their Data
All condition and therapy pages are **server components** that render client components:

```tsx
// app/conditions/depression/page.tsx
export default function DepressionPage() {
  return (
    <>
      <Header />
      <DisorderPage disorderKey="depression" iconName="CloudRain" />
      <Footer />
    </>
  )
}
```

The client component (`DisorderPage` / `TherapyPage`) calls `useTranslations()` from next-intl to pull content from `messages/{locale}.json`.

### Condition Keys (16 total)
`anxiety` · `depression` · `trauma` · `addiction` · `adhd` · `attachment` · `eatingDisorders` · `grief` · `relationships` · `stress` · `perinatal` · `sexualDysfunction` · `mensMentalHealth` · `bipolar` · `personality` · `selfEsteem`

### Therapy Keys (15 total)
`emdr` · `mindfulness` · `cbt` · `nlp` · `family` · `couples` · `positivePsychotherapy` · `systemicConstellation` · `solutionFocused` · `identityTrauma` · `schemaTherapy` · `dbt` · `act` · `systemicCounseling` · `bioenergetic`

---

## JSON Schema

### Condition (`messages/{lang}.json → conditions.{key}`)

**Required:**
```jsonc
{
  "title": "string",
  "intro": "string",
  "cta": "string",
  "symptoms": { "title": "string", "items": ["string"] },
  "types": { "title": "string", "key": { "name": "string", "description": "string" } }
}
```

**Optional sections rendered by `DisorderPage`:**
| Key | Type | Component section |
|-----|------|-------------------|
| `subtitle` | string | Hero subtitle |
| `detailedDescription` | string | Hero detail |
| `statistics` | string | Statistics callout |
| `causes.{title,items[]}` | object | Causes list |
| `triggers.{title,description?,items[]}` | object | Triggers list |
| `treatmentApproach.{title,description?,methods[]}` | object | Treatment methods |
| `warningSignsDetailed.{title,description?,items[]}` | object | Warning signs |
| `ptsdNote` | string | PTSD note box |
| `ptsdDetailed.{title,description?,ptsdSymptoms[]}` | object | PTSD detail section |
| `physicalSymptoms.{title,items[]}` | object | Physical symptoms grid |
| `physicalEffects.{title,description?,items[]}` | object | Physical effects grid |
| `attachmentStyles.{title,secure,anxious,avoidant,disorganized}` | object | Attachment style cards |
| `longTermEffects.{title,items[]}` | object | Long-term effects list |
| `stages.{title,items[{stage,description}],note?}` | object | Grief stages cards |
| `effects.{title,description?,physical[],emotional[],cognitive[]}` | object | Effects grid (3 cols) |
| `relationshipTypes.{title,items[{name,description}]}` | object | Relationship type cards |
| `commonIssues.{title,items[]}` | object | Common issues list |
| `selfCare.{title,items[]}` | object | Self-care numbered list |
| `whenToSeekHelp` | string | Seek help callout box |

### Therapy (`messages/{lang}.json → therapies.items.{key}`)

**Required:**
```jsonc
{
  "fullTitle": "string",
  "intro": "string",
  "cta": "string"
}
```

**Optional** (all rendered by `TherapyPage`):
`detailedDescription` · `howItWorks` · `howItHelps` · `goal` · `framework` · `approach` · `concept` · `understanding` · `explanation` · `scope` · `recognition` · `applications` · `conclusion` · `business` · `keyInsight` · `principle` · `schemas` · `balanceModel` · `advantages` · `uniqueAdvantage` · `expertPrinciple` · `vakog` · `bodyMemory.{title,description}` · `whatToExpect.{title,description}` · `sessionInfo.{title,description}` · `miracleQuestion.{title,description}` · `schemaExplanation.{title,description}` · `traumaBiography.{title,description}` · `benefits.{title,items[]}` · `techniques.{title,items[]}` · `principles.{title,items[]}` · `elements.{title,items[]}` · `skills.{title,items[]}` · `methods.{title,items[]}` · `exercises.{title,items[]}` · `phases.{title,items[]}` · `additionalTechniques.{title,items[]}` · `keyPrinciples.{title,items[]}`

---

## Content Pipeline

### Source Markdown
Raw, cleaned markdown lives in `markdown_output/`:
- `Engleza/*.md` — EN conditions
- `Germana/*.md` — DE conditions
- `Romana/*.md` — RO conditions
- `*.md` — Therapies (some bilingual DE+EN in one file)

All files are formatted with: `#` title / `##` sections / `###` sub-items. Boilerplate (nav links, taglines, image placeholders) has been stripped.

### Syncing Content to JSON
To re-sync condition content from markdown into `messages/*.json`:
```bash
python3 /tmp/sync_content_v2.py
```

To re-sync therapy content:
```bash
python3 /tmp/sync_therapies.py
```

---

## Adding a New Condition Page

1. Add the condition key to `messages/en.json`, `de.json`, `ro.json` under `conditions`
2. Create `app/conditions/{slug}/page.tsx`:
   ```tsx
   import { Header } from "@/components/header"
   import { Footer } from "@/components/footer"
   import { DisorderPage } from "@/components/disorder-page"

   export default function NewConditionPage() {
     return (
       <>
         <Header />
         <DisorderPage disorderKey="newKey" iconName="Brain" />
         <Footer />
       </>
     )
   }
   ```
3. Available icon names: `Brain` · `CloudRain` · `Shield` · `Link2` · `Zap` · `Heart` · `Utensils` · `Flower2` · `Users` · `Flame` · `Baby` · `HeartPulse` · `User` · `Activity` · `Puzzle` · `Sparkles`

## Adding a New Therapy Page

1. Add the therapy key under `therapies.items` in all three `messages/*.json` files
2. Create `app/therapies/{slug}/page.tsx`:
   ```tsx
   import { Header } from "@/components/header"
   import { Footer } from "@/components/footer"
   import { TherapyPage } from "@/components/therapy-page"

   export default function NewTherapyPage() {
     return (
       <>
         <Header />
         <TherapyPage therapyKey="newKey" iconName="Brain" />
         <Footer />
       </>
     )
   }
   ```
3. Available icon names: `Eye` · `Brain` · `MessageSquare` · `Lightbulb` · `Users` · `Heart` · `Sparkles` · `Network` · `Target` · `Shield` · `Layers` · `Scale` · `Hand` · `Compass` · `Activity`

---

## i18n Notes
- Default locale: `en`
- Supported: `en`, `de`, `ro`
- Config: `i18n/config.ts`, `i18n/request.ts`
- All user-facing strings must exist in all 3 language files
- Missing keys in `de`/`ro` will fall back silently — always check both files when adding new keys

---

## Common Commands
```bash
# Development
npm run dev

# Production build (use this, not npm run build)
node_modules/.bin/next build

# Lint
npm run lint

# Re-sync condition content from markdown
python3 /tmp/sync_content_v2.py

# Re-sync therapy content from markdown
python3 /tmp/sync_therapies.py
```
