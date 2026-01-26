export interface TraumaChecklistItem {
  id: string
  text: string
}

export interface TraumaChecklistSection {
  title: string
  items: TraumaChecklistItem[]
}

export interface TraumaChecklist {
  title: string
  author: string
  sections: TraumaChecklistSection[]
  healthyIdentity: {
    title: string
    items: TraumaChecklistItem[]
  }
}

export const traumaChecklistEN: TraumaChecklist = {
  title: "Trauma Checklist",
  author: "Based on Prof. Dr. Franz Ruppert",
  sections: [
    {
      title: "Intergenerational Trauma",
      items: [
        { id: "inter_mother_mother", text: "My mother's mother is traumatized" },
        { id: "inter_mother_father", text: "My mother's father is traumatized" },
        { id: "inter_father_mother", text: "My father's mother is traumatized" },
        { id: "inter_father_father", text: "My father's father is traumatized" },
        { id: "inter_mother", text: "My mother is traumatized" },
        { id: "inter_father", text: "My father is traumatized" },
      ],
    },
    {
      title: "Trauma of Identity",
      items: [
        { id: "id_unwanted_mother", text: "I was unwanted as a child by my mother" },
        { id: "id_unwanted_father", text: "I was unwanted as a child by my father" },
        { id: "id_abortion", text: "I survived an attempted abortion" },
        { id: "id_violence_womb", text: "I experienced violence in my mother's womb" },
        { id: "id_panic", text: "I suffer from panic attacks/chronic anxiety" },
        { id: "id_wrong_gender", text: "I have the 'wrong' gender for my parents" },
        { id: "id_will_broken", text: "My will was broken through violence" },
        { id: "id_external_identity", text: "I seek my identity externally" },
        { id: "id_better_than_others", text: "I want to be better than others" },
        { id: "id_adoption", text: "I was given up for adoption" },
      ],
    },
    {
      title: "Trauma of Love",
      items: [
        { id: "love_not_received", text: "I didn't receive the love I needed" },
        { id: "love_save_parents", text: "I have to be there for/save my parents" },
        { id: "love_hope", text: "I still hope to be loved" },
        { id: "love_guilt", text: "I feel guilty" },
        { id: "love_others_think", text: "I am obsessed with what others think" },
        { id: "love_place_family", text: "I'm looking for my place in the family" },
        { id: "love_rage", text: "Fits of rage" },
      ],
    },
    {
      title: "Trauma of Sexuality",
      items: [
        { id: "sex_mutilation", text: "Genital mutilation" },
        { id: "sex_assault", text: "Sexual assault/violence" },
        { id: "sex_birth_violence", text: "Violence during childbirth" },
        { id: "sex_no_memories", text: "No childhood memories" },
        { id: "sex_chronic_illness", text: "Chronic illnesses" },
        { id: "sex_body_rejection", text: "Rejection of the body" },
        { id: "sex_feeling_nothing", text: "Feeling nothing" },
        { id: "sex_drugs", text: "Drug use" },
        { id: "sex_depressive_aggressive", text: "Depressive or aggressive" },
      ],
    },
    {
      title: "Trauma of Own Perpetration",
      items: [
        { id: "perp_abortion", text: "Aborted a child" },
        { id: "perp_violence", text: "Committed violence against others" },
        { id: "perp_no_love_children", text: "Didn't give my children love" },
        { id: "perp_sexual_trauma", text: "Sexually traumatized my child" },
        { id: "perp_conflicts", text: "Life-threatening conflicts" },
        { id: "perp_shame", text: "Feelings of guilt and shame" },
      ],
    },
    {
      title: "Trauma of Loss",
      items: [
        { id: "loss_parent", text: "Lost a parent early" },
        { id: "loss_sibling", text: "Lost a sibling early" },
        { id: "loss_child", text: "Lost a child early" },
      ],
    },
  ],
  healthyIdentity: {
    title: "Guide for a Healthy Identity",
    items: [
      { id: "healthy_self_contact", text: "Stable contact with my self" },
      { id: "healthy_own_will", text: "Having my own will" },
      { id: "healthy_feeling", text: "Feeling what belongs to me" },
      { id: "healthy_love", text: "Love without self-abandonment" },
      { id: "healthy_accept_love", text: "Can accept love" },
      { id: "healthy_critical", text: "Critical thinking skills" },
      { id: "healthy_body", text: "Liking my body/sexuality" },
      { id: "healthy_no_fear", text: "No fear of memories" },
      { id: "healthy_reality", text: "Distinguishing reality from projections" },
      { id: "healthy_relationships", text: "Constructive relationships" },
    ],
  },
}

export const traumaChecklistDE: TraumaChecklist = {
  title: "Checkliste Trauma",
  author: "Basierend auf Prof. Dr. Franz Ruppert",
  sections: [
    {
      title: "Traumata der Vorgeneration",
      items: [
        { id: "inter_mother_mother", text: "Die Mutter meiner Mutter ist traumatisiert" },
        { id: "inter_mother_father", text: "Der Vater meiner Mutter ist traumatisiert" },
        { id: "inter_father_mother", text: "Die Mutter meines Vaters ist traumatisiert" },
        { id: "inter_father_father", text: "Der Vater meines Vaters ist traumatisiert" },
        { id: "inter_mother", text: "Meine Mutter ist traumatisiert" },
        { id: "inter_father", text: "Mein Vater ist traumatisiert" },
      ],
    },
    {
      title: "Trauma der Identität",
      items: [
        { id: "id_unwanted_mother", text: "Ich bin als Kind von meiner Mutter nicht gewollt" },
        { id: "id_unwanted_father", text: "Ich bin als Kind von meinem Vater nicht gewollt" },
        { id: "id_abortion", text: "Ich habe einen Abtreibungsversuch überlebt" },
        { id: "id_violence_womb", text: "Ich habe im Bauch meiner Mutter Gewalt erlebt" },
        { id: "id_panic", text: "Ich leide unter Panikattacken/chronischen Ängsten" },
        { id: "id_wrong_gender", text: "Ich habe für meine Eltern das falsche Geschlecht" },
        { id: "id_will_broken", text: "Mein Wille wurde mit Gewalt gebrochen" },
        { id: "id_external_identity", text: "Ich suche meine Identität im Außen" },
        { id: "id_better_than_others", text: "Ich will besser sein als andere" },
        { id: "id_adoption", text: "Ich wurde zur Adoption weggegeben" },
      ],
    },
    {
      title: "Trauma der Liebe",
      items: [
        { id: "love_not_received", text: "Ich habe nicht die Liebe bekommen, die ich brauchte" },
        { id: "love_save_parents", text: "Ich muss für meine Eltern da sein/sie retten" },
        { id: "love_hope", text: "Ich hoffe immer noch, geliebt zu werden" },
        { id: "love_guilt", text: "Ich habe Schuldgefühle" },
        { id: "love_others_think", text: "Ich bin fixiert auf das, was andere denken" },
        { id: "love_place_family", text: "Ich suche meinen Platz in der Familie" },
        { id: "love_rage", text: "Wutanfälle" },
      ],
    },
    {
      title: "Trauma der Sexualität",
      items: [
        { id: "sex_mutilation", text: "Genitalbeschneidung" },
        { id: "sex_assault", text: "Sexuelle Übergriffe/Gewalt" },
        { id: "sex_birth_violence", text: "Gewalt während der Geburt" },
        { id: "sex_no_memories", text: "Keine Erinnerungen an die Kindheit" },
        { id: "sex_chronic_illness", text: "Chronische Krankheiten" },
        { id: "sex_body_rejection", text: "Ablehnung des Körpers" },
        { id: "sex_feeling_nothing", text: "Fühle nichts" },
        { id: "sex_drugs", text: "Drogenkonsum" },
        { id: "sex_depressive_aggressive", text: "Depressiv oder aggressiv" },
      ],
    },
    {
      title: "Trauma der eigenen Täterschaft",
      items: [
        { id: "perp_abortion", text: "Kind abgetrieben" },
        { id: "perp_violence", text: "Anderen Gewalt angetan" },
        { id: "perp_no_love_children", text: "Meinen Kindern keine Liebe gegeben" },
        { id: "perp_sexual_trauma", text: "Mein Kind sexuell traumatisiert" },
        { id: "perp_conflicts", text: "Existenzbedrohliche Konflikte" },
        { id: "perp_shame", text: "Schuld- und Schamgefühle" },
      ],
    },
    {
      title: "Verlusttrauma",
      items: [
        { id: "loss_parent", text: "Elternteil früh verloren" },
        { id: "loss_sibling", text: "Geschwister früh verloren" },
        { id: "loss_child", text: "Kind früh verloren" },
      ],
    },
  ],
  healthyIdentity: {
    title: "Leitfaden für eine gesunde Identität",
    items: [
      { id: "healthy_self_contact", text: "Stabiler Kontakt mit meinem Ich" },
      { id: "healthy_own_will", text: "Eigener Wille" },
      { id: "healthy_feeling", text: "Fühle, was zu mir gehört" },
      { id: "healthy_love", text: "Liebe ohne Selbstaufgabe" },
      { id: "healthy_accept_love", text: "Kann Liebe annehmen" },
      { id: "healthy_critical", text: "Kritisches Denkvermögen" },
      { id: "healthy_body", text: "Mag meinen Körper/meine Sexualität" },
      { id: "healthy_no_fear", text: "Keine Angst vor Erinnerungen" },
      { id: "healthy_reality", text: "Realität von Projektionen unterscheiden" },
      { id: "healthy_relationships", text: "Konstruktive Beziehungen" },
    ],
  },
}

export const traumaChecklistRO: TraumaChecklist = {
  title: "Lista de Verificare pentru Traumă",
  author: "Bazat pe Prof. Dr. Franz Ruppert",
  sections: [
    {
      title: "Traumele generațiilor anterioare",
      items: [
        { id: "inter_mother_mother", text: "Mama mamei mele este traumatizată" },
        { id: "inter_mother_father", text: "Tatăl mamei mele este traumatizat" },
        { id: "inter_father_mother", text: "Mama tatălui meu este traumatizată" },
        { id: "inter_father_father", text: "Tatăl tatălui meu este traumatizat" },
        { id: "inter_mother", text: "Mama mea este traumatizată" },
        { id: "inter_father", text: "Tatăl meu este traumatizat" },
      ],
    },
    {
      title: "Trauma identității",
      items: [
        { id: "id_unwanted_mother", text: "Nu am fost dorit(ă) ca copil de către mama mea" },
        { id: "id_unwanted_father", text: "Nu am fost dorit(ă) ca copil de către tatăl meu" },
        { id: "id_abortion", text: "Am supraviețuit unei tentative de avort" },
        { id: "id_violence_womb", text: "Am experimentat violență în pântecele mamei mele" },
        { id: "id_panic", text: "Sufăr de atacuri de panică/anxietate cronică" },
        { id: "id_wrong_gender", text: "Am sexul 'greșit' pentru părinții mei" },
        { id: "id_will_broken", text: "Voința mi-a fost frântă prin violență" },
        { id: "id_external_identity", text: "Îmi caut identitatea în exterior" },
        { id: "id_better_than_others", text: "Vreau să fiu mai bun(ă) decât ceilalți" },
        { id: "id_adoption", text: "Am fost dat(ă) spre adopție" },
      ],
    },
    {
      title: "Trauma iubirii",
      items: [
        { id: "love_not_received", text: "Nu am primit iubirea de care aveam nevoie" },
        { id: "love_save_parents", text: "Trebuie să fiu acolo pentru părinții mei/să îi salvez" },
        { id: "love_hope", text: "Încă sper să fiu iubit(ă)" },
        { id: "love_guilt", text: "Am sentimente de vinovăție" },
        { id: "love_others_think", text: "Sunt fixat(ă) pe ceea ce cred alții" },
        { id: "love_place_family", text: "Îmi caut locul în familie" },
        { id: "love_rage", text: "Accese de furie" },
      ],
    },
    {
      title: "Trauma sexualității",
      items: [
        { id: "sex_mutilation", text: "Circumcizie/Mutilare genitală" },
        { id: "sex_assault", text: "Abuz/violență sexuală" },
        { id: "sex_birth_violence", text: "Violență în timpul nașterii" },
        { id: "sex_no_memories", text: "Lipsa amintirilor din copilărie" },
        { id: "sex_chronic_illness", text: "Boli cronice" },
        { id: "sex_body_rejection", text: "Respingerea propriului corp" },
        { id: "sex_feeling_nothing", text: "Nu simt nimic" },
        { id: "sex_drugs", text: "Consum de droguri" },
        { id: "sex_depressive_aggressive", text: "Depresiv(ă) sau agresiv(ă)" },
      ],
    },
    {
      title: "Trauma propriei vinovății (ca autor)",
      items: [
        { id: "perp_abortion", text: "Am avortat un copil" },
        { id: "perp_violence", text: "Am exercitat violență asupra altora" },
        { id: "perp_no_love_children", text: "Nu am oferit iubire copiilor mei" },
        { id: "perp_sexual_trauma", text: "Mi-am traumatizat sexual copilul" },
        { id: "perp_conflicts", text: "Conflicte care pun existența în pericol" },
        { id: "perp_shame", text: "Sentimente de vinovăție și rușine" },
      ],
    },
    {
      title: "Trauma pierderii",
      items: [
        { id: "loss_parent", text: "Am pierdut timpuriu un părinte" },
        { id: "loss_sibling", text: "Am pierdut timpuriu un frate/soră" },
        { id: "loss_child", text: "Am pierdut timpuriu un copil" },
      ],
    },
  ],
  healthyIdentity: {
    title: "Ghid pentru o identitate sănătoasă",
    items: [
      { id: "healthy_self_contact", text: "Contact stabil cu sinele meu" },
      { id: "healthy_own_will", text: "Am propria voință" },
      { id: "healthy_feeling", text: "Simt ce îmi aparține și ce nu" },
      { id: "healthy_love", text: "Iubesc fără a mă abandona pe mine însumi" },
      { id: "healthy_accept_love", text: "Pot accepta iubirea" },
      { id: "healthy_critical", text: "Capacitate de gândire critică" },
      { id: "healthy_body", text: "Îmi place corpul/sexualitatea mea" },
      { id: "healthy_no_fear", text: "Nu am teamă de amintiri" },
      { id: "healthy_reality", text: "Disting realitatea de proiecții" },
      { id: "healthy_relationships", text: "Relații constructive" },
    ],
  },
}

export function getTraumaChecklist(locale: string): TraumaChecklist {
  switch (locale) {
    case "de":
      return traumaChecklistDE
    case "ro":
      return traumaChecklistRO
    default:
      return traumaChecklistEN
  }
}
