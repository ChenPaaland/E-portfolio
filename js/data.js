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
    pitch: B("Engineering student at ENSEEIHT. [One sentence: what you do and what makes you different.]",
             "Élève ingénieur à l'ENSEEIHT. [Une phrase : ce que tu fais et ce qui te distingue.]"),
    highlights: [B("[Your main field]", "[Ton domaine principal]"), B("ENSEEIHT, Toulouse", "ENSEEIHT, Toulouse")],
    photo: "assets/img/photo.jpg",
    linkedin: "https://www.linkedin.com/in/[your-profile]",
    github: "https://github.com/ChenPaaland"
  },
  engineering: {
    skills: [
      { group: B("Languages", "Langages"), items: ["[Python]", "[C]", "[Java]"] },
      { group: B("Data & tools", "Données & outils"), items: ["[Git]", "[Linux]"] },
      { group: B("Soft skills", "Savoir-être"), items: [B("[Teamwork]", "[Travail en équipe]"), B("[Adaptability]", "[Adaptabilité]")] }
    ],
    projects: [
      { title: B("[Project title]", "[Titre du projet]"), type: B("School project", "Projet scolaire"), period: "[2026]",
        text: B("[Situation, task and action: what you built and how.]", "[Situation, tâche et action : ce que tu as construit et comment.]"),
        result: B("[Result, with numbers]", "[Résultat, avec des chiffres]"),
        learned: B("[What you learned]", "[Ce que tu as appris]"),
        tools: ["[Python]", "[C]"], link: "", linkLabel: B("View project", "Voir le projet"), image: "" },
      { title: B("[Personal project]", "[Projet personnel]"), type: B("Personal project", "Projet personnel"), period: "[2025]",
        text: B("[...]", "[...]"), result: "", learned: "", tools: ["[...]"],
        link: "https://github.com/ChenPaaland/[repo]", linkLabel: B("View on GitHub", "Voir sur GitHub"), image: "" }
    ]
  },
  mobility: {
    languages: [ { name: B("English", "Anglais"), level: "[C1]" }, { name: B("German", "Allemand"), level: "[B1]" } ],
    experiences: [ { title: B("[PCE / LV2 / trip]", "[PCE / LV2 / voyage]"), period: "[...]", text: B("[What you did and learned]", "[Ce que tu as fait et appris]") } ],
    text: [ B("[Your mobility goal: when, where, why.]", "[Ton objectif de mobilité : quand, où, pourquoi.]") ]
  },
  engagement: [
    { title: B("[Association / volunteering]", "[Association / bénévolat]"), text: [B("[Your role and impact.]", "[Ton rôle et ton impact.]")] },
    { title: B("[Sustainability action]", "[Action développement durable]"), text: [B("[...]", "[...]")] }
  ],
  activities: [
    { category: B("[Sport]", "[Sport]"), items: [ { title: B("[Activity]", "[Activité]"), text: B("[Level, results, what it teaches you]", "[Niveau, résultats, ce que ça t'apprend]") } ] }
  ],
  career: {
    cv: { en: "assets/cv/cv-en.pdf", fr: "assets/cv/cv-fr.pdf" },
    experiences: [
      { title: B("[Internship / PEP]", "[Stage / PEP]"), org: "[Company, City]", period: "[Jun–Jul 2026]", logo: "",
        text: B("[Situation, task, action, result.]", "[Situation, tâche, action, résultat.]"),
        bullets: [B("[Key action with a number]", "[Action clé chiffrée]")], tools: ["[Tool]"] }
    ],
    roleModels: [
      { name: "[Role model 1]", job: B("[Job, company]", "[Poste, entreprise]"), photo: "",
        points: [B("[Path]", "[Parcours]"), B("[What you take from it]", "[Ce que tu en retiens]")] },
      { name: "[Role model 2]", job: "", photo: "", points: [] },
      { name: "[Role model 3]", job: "", photo: "", points: [] }
    ],
    mobilityProjects: [
      { title: B("[Project 1]", "[Projet 1]"), place: "[Country / university or company]", roleModel: "[Role model 1]", text: B("[Why it is aligned]", "[Pourquoi c'est aligné]") },
      { title: B("[Project 2]", "[Projet 2]"), place: "[...]", roleModel: "[Role model 2]", text: "" },
      { title: B("[Project 3]", "[Projet 3]"), place: "[...]", roleModel: "[Role model 3]", text: "" }
    ],
    video: "https://www.youtube.com/embed/[VIDEO_ID]"   // vidéo YouTube "non répertoriée", lien "embed"
  },
  contact: { email: "[your.email@example.com]", phone: "[+33 6 00 00 00 00]", linkedin: "https://www.linkedin.com/in/[your-profile]/" }
};
/* ===================== FIN DES DONNÉES ===================== */
