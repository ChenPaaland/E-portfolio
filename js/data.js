// Everything on the site comes from this file. Edit here only.
// B("English text", "Texte français") = text shown in the selected language.
// Leave "" to hide a field. Copy a { ... } block to add a project or activity.
const B = (en, fr) => ({ en, fr });

window.DATA = {
  profile: {
    name: "Thomas Casteran",
    title: B("Engineering student – [your specialty], ENSEEIHT (Toulouse INP-N7)",
             "Élève ingénieur – [ta spécialité], ENSEEIHT (Toulouse INP-N7)"),
    pitch: B("[2–3 sentences: who you are, what you do best, what you are looking for.]",
             "[2–3 phrases : qui tu es, ce que tu fais de mieux, ce que tu cherches.]"),
    photo: "assets/img/photo.jpg",
    linkedin: "https://www.linkedin.com/in/[your-profile]",
    github: "https://github.com/ChenPaaland",
    interests: [B("[Interest 1]", "[Centre d'intérêt 1]"), B("[Interest 2]", "[Centre d'intérêt 2]"), B("[Interest 3]", "[Centre d'intérêt 3]")]
  },
  course: {
    intro: B("[Short summary of your academic path.]", "[Résumé court de ton parcours.]"),
    projects: [
      { title: B("[Project title]", "[Titre du projet]"), type: B("School project", "Projet scolaire"), period: "[2026]",
        context: B("[Situation: where, when, why]", "[Situation : où, quand, pourquoi]"),
        role: B("[Your task and role]", "[Ta mission et ton rôle]"),
        result: B("[Result, with numbers]", "[Résultat, avec des chiffres]"),
        learned: B("[What you learned]", "[Ce que tu as appris]"),
        tools: ["[Python]", "[C]"], link: "", image: "" },
      { title: B("[Personal project]", "[Projet personnel]"), type: B("Personal project", "Projet personnel"), period: "[2025]",
        context: B("[...]", "[...]"), role: B("[...]", "[...]"), result: B("[...]", "[...]"), learned: B("[...]", "[...]"),
        tools: ["[...]"], link: "https://github.com/ChenPaaland/[repo]", image: "" }
    ]
  },
  mobility: {
    experiences: [ { title: B("[PCE / LV2 / trip]", "[PCE / LV2 / voyage]"), period: "[...]", place: "", text: B("[What you did and learned]", "[Ce que tu as fait et appris]"), link: "" } ],
    plans: [ { title: B("[Mobility project 1]", "[Projet de mobilité 1]"), period: "", place: "[Country]", text: B("[Why it fits you]", "[Pourquoi ça te correspond]"), link: "" } ]
  },
  civic: [ { title: B("[Association / volunteering]", "[Association / bénévolat]"), period: "[...]", place: "", text: B("[Your role and impact]", "[Ton rôle et ton impact]"), link: "" } ],
  sport: [ { title: B("[Sport / activity]", "[Sport / activité]"), period: "[...]", place: "", text: B("[Level, results]", "[Niveau, résultats]"), link: "" } ],
  career: {
    experiences: [ { title: B("[Internship S6 / PEP]", "[Stage S6 / PEP]"), period: "[...]", place: "", text: B("[Situation, task, action, result]", "[Situation, tâche, action, résultat]"), link: "" } ],
    cv: { en: "assets/cv/cv-en.pdf", fr: "assets/cv/cv-fr.pdf" },
    linkedin: { en: "https://www.linkedin.com/in/[your-profile]/", fr: "https://fr.linkedin.com/in/[your-profile]" },
    video: "https://www.youtube.com/embed/[VIDEO_ID]",  // unlisted YouTube video ("embed" link)
    roleModels: [
      { name: "[Role model 1]", job: B("[Job, company]", "[Poste, entreprise]"), path: B("[Career path]", "[Parcours]"),
        skills: ["[Skill]", "[Skill]"], takeaway: B("[What you take from it]", "[Ce que tu en retiens]") },
      { name: "[Role model 2]", job: "", path: "", skills: [], takeaway: "" },
      { name: "[Role model 3]", job: "", path: "", skills: [], takeaway: "" }
    ],
    mobilityProjects: [
      { title: B("[Project 1]", "[Projet 1]"), place: "[Country]", roleModel: "[Role model 1]", text: B("[Why it is aligned]", "[Pourquoi c'est aligné]") },
      { title: B("[Project 2]", "[Projet 2]"), place: "[Country]", roleModel: "[Role model 2]", text: "" },
      { title: B("[Project 3]", "[Projet 3]"), place: "[Country]", roleModel: "[Role model 3]", text: "" }
    ]
  }
};
