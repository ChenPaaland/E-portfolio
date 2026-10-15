/* ============================================================
   TES DONNÉES — modifie uniquement cette partie.
   B("English", "Français") = texte affiché dans la langue choisie.
   Laisse "" (ou []) pour masquer un champ.
   Pour ajouter un projet / une activité : copie un bloc { ... } et sépare-les par une virgule.
   ============================================================ */
const B = (en, fr) => ({ en, fr });

window.DATA = {
  profile: {
    name: "Thomas Casteran",
    pitch: B("Engineering student in Fluid Mechanics, Energetics & Environment (MF2E) at ENSEEIHT, passionate about physical modeling, music, and climate challenges.",
             "Élève ingénieur en Mécanique des fluides, Énergétique et Environnement (MF2E) à l'ENSEEIHT, passionné par la modélisation physique, la musique et les défis climatiques."),
    highlights: [B("Fluid Mechanics & Energy", "Mécanique des fluides & Énergétique"), B("ENSEEIHT, Toulouse", "ENSEEIHT, Toulouse")],
    photo: "assets/img/photo.jpg",
    linkedin: "https://www.linkedin.com/in/thomas-casteran",
    github: "https://github.com/ChenPaaland"
  },
  engineering: {
    skills: [
      { group: B("Languages & Software", "Langages & Logiciels"), items: ["Python", "Pandas", "Matplotlib", "PyQt / PySide", "Qt Designer", "LaTeX", "C", "Linux", "Git"] },
      { group: B("Engineering & Physics", "Ingénierie & Physique"), items: [B("Fluid Mechanics", "Mécanique des fluides"), B("Thermodynamics", "Thermodynamique"), B("Data Analysis", "Analyse de données"), B("Physical Measurements", "Mesures physiques")] },
      { group: B("Soft skills", "Savoir-être"), items: [B("Teamwork", "Travail en équipe"), B("Rigor", "Rigueur scientifique"), B("Adaptability", "Adaptabilité"), B("Leadership", "Esprit d'initiative")] }
    ],
    projects: [
      {
        title: B("Solar Energy Exploitation & Guiana Case Study", "Exploitation de l'énergie solaire & Étude de cas Guyane"),
        type: B("School Project", "Projet scolaire"),
        period: "2026",
        text: B("Conducted an applied physics research project during Prépa T² on solar energy conversion on Earth, combining lab experiments at IUT Mesures Physiques with a contextual case study on French Guiana.",
               "Réalisation d'un projet d'étude en prépa T² sur l'exploitation de l'énergie solaire sur Terre, alliant travaux pratiques à l'IUT Mesures Physiques et étude de cas appliquée au projet Hyguane en Guyane."),
        result: B("Comprehensive LaTeX technical report evaluating solar yield efficiency and tropical micro-grid constraints.",
                "Rapport technique sous LaTeX évaluant les rendements solaires et les contraintes d'intégration en milieu tropical."),
        learned: B("Experimental measurements, solar irradiance physics, and technical synthesis in LaTeX.",
                 "Mesures expérimentales, physique de l'irradiance solaire et rédaction technique sous LaTeX."),
        tools: ["LaTeX", "Python", "Physical Measurements", "Solar Energy"],
        link: "",
        linkLabel: B("View project", "Voir le projet"),
        image: ""
      }
    ]
  },
  mobility: {
    languages: [
      { name: B("English", "Anglais"), level: "C1" },
      { name: B("German", "Allemand"), level: "B1" }
    ],
    experiences: [
      {
        title: B("Language Immersion", "Immersion linguistique"),
        period: "2025 (2 semaines)",
        text: B("Language courses and cultural discovery in Ireland to refine fluency and autonomy in an English-speaking environment.",
               "Cours de langues et immersion culturelle en Irlande pour perfectionner l'anglais et renforcer l'autonomie à l'étranger.")
      },
      {
        title: B("English Language Immersion", "Immersion linguistique"),
        period: "2024 (2 semaines)",
        text: B("Daily communication and cultural immersion in Malta.",
               "Pratique quotidienne de l'anglais et adaptation rapide à un cadre multiculturel à Malte.")
      },
      {
        title: B("Manchester City Football Camp", "Camp de football - Manchester City"),
        period: "2022",
        text: B("High-level sports training combined with daily English language practice in England.",
               "Entraînement sportif intensif de haut niveau combiné à une pratique quotidienne de l'anglais en Angleterre.")
      }
    ],
    text: [
      B("My goal is to complete an academic semester or an engineering R&D internship abroad, focusing on advanced fluid mechanics, renewable energy systems, or computational climate modeling.",
        "Mon objectif est de réaliser un semestre académique ou un stage R&D à l'étranger, axé sur la mécanique des fluides avancée, les énergies renouvelables ou la modélisation numérique des risques climatiques.")
    ]
  },
  engagement: [
    {
      title: B("Universal National Service (SNU)", "Service National Universel (SNU)"),
      text: [
        B("Participation in citizenship and defense workshops, fostering team spirit and civic leadership.",
          "Participation active aux ateliers sur la citoyenneté, la défense et la mémoire. Développement de la cohésion d'équipe et du sens de l'engagement.")
      ]
    }
  ],
  activities: [
    {
      category: B("Music", "Musique"),
      items: [
        {
          title: B("Piano & Viola (Conservatoire)", "Piano & Alto (Conservatoire)"),
          text: B("Practicing piano for over 10 years and former viola student at the Conservatoire for 4 years.",
                 "Pratique du piano depuis plus de 10 ans et ancien élève en alto au conservatoire pendant 4 ans.")
        },
        {
          title: B("Music Band", "Groupe de musique"),
          text: B("Playing music collectively in a band, sharing live performances and arrangements.",
                 "Pratique musicale en groupe, partage de performances live et arrangements.")
        }
      ]
    },
    {
      category: B("Sport", "Sport"),
      items: [
        {
          title: B("Football (ASINP)", "Football (ASINP)"),
          text: B("Playing football with the INP sports association (ASINP). Team spirit and regular matches.",
                 "Pratique du football au sein de l'association sportive de l'INP (ASINP). Esprit d'équipe et matchs réguliers.")
        },
        {
          title: B("Running", "Course à pied"),
          text: B("Regular running sessions for endurance and conditioning.",
                 "Séances régulières de course à pied pour l'endurance et le cardio.")
        }
      ]
    }
  ],
  career: {
    cv: { en: "assets/cv/cv-en.pdf", fr: "assets/cv/cv-fr.pdf" },
    experiences: [
      {
        title: B("Materials Engineering & Data GUI Intern", "Stagiaire création d'interface & matériaux"),
        org: "ONERA (DMPE), Toulouse",
        period: "Mai – Juin 2025",
        logo: "",
        text: B("Within the DMPE department at ONERA, I designed and developed a custom graphical desktop interface to centralize, query, and visualize laboratory materials data.",
               "Au sein du département DMPE de l'ONERA, j'ai conçu et développé une interface graphique sur mesure pour centraliser, consulter et visualiser les données matériaux du laboratoire."),
        bullets: [
          B("Designed user-friendly GUI layouts using Qt Designer integrated with Python (PySide/PyQt).", "Conception d'interfaces ergonomiques avec Qt Designer intégrées à Python (PySide/PyQt)."),
          B("Automated spreadsheet reading and queries using Pandas to process test records.", "Automatisation de la lecture et des requêtes de bases de données avec Pandas."),
          B("Accelerated data access for researchers conducting high-temperature material testing.", "Accélération de l'accès aux données pour les chercheurs analysant les matériaux à haute température.")
        ],
        tools: ["Python", "PyQt", "Pandas", "Qt Designer", "Git"]
      },
      {
        title: B("Cadet of the Gendarmerie", "Cadet de la Gendarmerie"),
        org: "Gendarmerie Nationale, Toulouse",
        period: "Juillet 2023",
        logo: "",
        text: B("Discovery of public safety operations, institutional protocols, and team discipline.",
               "Immersion dans les missions de sécurité publique, découverte de la rigueur institutionnelle et des protocoles d'intervention."),
        bullets: [
          B("Observed teamwork dynamics, chain of command, and crisis management protocols.", "Observation du travail d'équipe, de la chaîne de commandement et de la gestion de crise.")
        ],
        tools: ["Teamwork", "Discipline", "Public Safety"]
      }
    ],
    roleModels: [
      { name: "Role Model 1", job: B("Fluid Mechanics Specialist", "Spécialiste Mécanique des Fluides"), photo: "", points: [B("Academic and research excellence in aerodynamics and energy", "Excellence académique et recherche en aérodynamique et énergie")] },
      { name: "Role Model 2", job: B("Renewable Energy Project Manager", "Chef de projet Énergies Renouvelables"), photo: "", points: [B("Leading green transition infrastructure projects", "Direction de projets d'infrastructures de transition énergétique")] },
      { name: "Role Model 3", job: B("Catastrophe Risk Analyst", "Analyste des risques climatiques"), photo: "", points: [B("Applying physical modeling to climate risk and reinsurance", "Application de la modélisation physique aux risques climatiques et à la réassurance")] }
    ],
    mobilityProjects: [
      {
        title: B("Academic Exchange in Energetics", "Échange académique en énergétique"),
        place: "University Partner (Europe / Americas)",
        roleModel: "Role Model 1",
        text: B("Completing a semester focused on advanced fluid dynamics and renewable energy modeling.",
               "Réalisation d'un semestre axé sur la dynamique des fluides avancée et les énergies renouvelables.")
      },
      {
        title: B("International R&D Internship", "Stage R&D à l'international"),
        place: "Research Center / Industry",
        roleModel: "Role Model 2",
        text: B("Engineering internship working on fluid/thermal optimization and clean energy systems.",
               "Stage ingénieur travaillant sur l'optimisation thermo-fluide et les systèmes d'énergie propre.")
      },
      {
        title: B("Climate Risk & Wind Modeling Mission", "Mission modélisation des risques climatiques"),
        place: "International Risk Agency / Laboratory",
        roleModel: "Role Model 3",
        text: B("Applying numerical wind field modeling to catastrophic event prevention.",
               "Application de la modélisation numérique des champs de vent à la prévention des catastrophes.")
      }
    ],
    video: "https://www.youtube.com/embed/[VIDEO_ID]"   // Remplace [VIDEO_ID] par l'ID de ta vidéo YouTube si tu en as une
  },
  contact: {
    email: "thomas.casteran@etu.toulouse-inp.fr",
    phone: "+33 6 28 23 61 79",
    linkedin: "https://www.linkedin.com/in/thomas-casteran"
  }
};
/* ===================== FIN DES DONNÉES ===================== */
