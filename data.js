// Everything you see on the site comes from this file. Edit here only.
// Leave a field as "" to hide it. Add an item by copying a {...} block.
window.DATA = {
  profile: {
    name: "[Your Name]",
    title: "Engineering student – [your specialty], ENSEEIHT (Toulouse INP-N7)",
    pitch: "[2–3 sentences: who you are, what you do best, what you are looking for.]",
    photo: "assets/img/photo.jpg",
    linkedin: "https://www.linkedin.com/in/[your-profile]",
    github: "https://github.com/ChenPaaland",
    interests: ["[Interest 1]", "[Interest 2]", "[Interest 3]"]
  },
  course: {
    intro: "[Short summary of your academic path: prépa/BUT, N7 track, key courses.]",
    projects: [
      { title: "[Project title]", period: "[2026]", type: "School project",
        context: "[Situation: where, when, why]", role: "[Your task and role]",
        tools: ["[Python]", "[C]"], result: "[Result, with numbers if possible]",
        learned: "[And beyond: what you learned]", link: "", image: "" },
      { title: "[Personal project]", period: "[2025]", type: "Personal project",
        context: "[...]", role: "[...]", tools: ["[...]"], result: "[...]",
        learned: "[...]", link: "https://github.com/ChenPaaland/[repo]", image: "" }
    ]
  },
  mobility: {
    experiences: [
      { title: "[PCE / LV2 / trip / exchange]", period: "[...]", text: "[What you did and learned]" }
    ],
    plans: [
      { title: "[Mobility project 1]", place: "[Country / company or university]", text: "[Why it fits you]" }
    ]
  },
  civic: [
    { title: "[Association / volunteering]", period: "[...]", text: "[Your role and impact]" }
  ],
  sport: [
    { title: "[Sport / activity]", period: "[...]", text: "[Level, results, what it teaches you]" }
  ],
  career: {
    experiences: [
      { title: "[Internship S6 / PEP]", period: "[...]", text: "[Situation, task, action, result]" }
    ],
    cv: { en: "assets/cv/cv-en.pdf", fr: "assets/cv/cv-fr.pdf" },
    linkedin: { en: "https://www.linkedin.com/in/[your-profile]/", fr: "https://fr.linkedin.com/in/[your-profile]" },
    video: "https://www.youtube.com/embed/[VIDEO_ID]",   // unlisted YouTube video, "embed" URL
    roleModels: [
      { name: "[Role model 1]", job: "[Job title, company]", path: "[Career path]",
        skills: ["[Skill]", "[Skill]"], takeaway: "[What you take from this profile]" },
      { name: "[Role model 2]", job: "", path: "", skills: [], takeaway: "" },
      { name: "[Role model 3]", job: "", path: "", skills: [], takeaway: "" }
    ],
    mobilityProjects: [
      { title: "[Project 1]", place: "[Country]", roleModel: "[Role model 1]", text: "[Why it is aligned]" },
      { title: "[Project 2]", place: "[Country]", roleModel: "[Role model 2]", text: "" },
      { title: "[Project 3]", place: "[Country]", roleModel: "[Role model 3]", text: "" }
    ]
  }
};
