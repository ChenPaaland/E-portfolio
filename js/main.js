(function () {
  const D = window.DATA, $ = (id) => document.getElementById(id);
  const UI = {
    en: { skip: "Skip to content", welcome: "Welcome", course: "Engineering course", mobility: "International mobility",
      civic: "Sustainability & civic engagement", sport: "Sport & activities", career: "Career development",
      interests: "Interests", context: "Context", role: "Role", result: "Result", learned: "What I learned",
      experiences: "Experiences", plans: "Potential projects", internships: "Internships & PEP", careerProject: "Career project",
      cvs: "CVs", cvEn: "CV (English)", cvFr: "CV (French)", linkedin: "LinkedIn", video: "Elevator pitch",
      videoNote: "2–3 minutes, in English: present, brief past, future.", roleModels: "Role models",
      mobAligned: "Mobility projects aligned with my role models", path: "Path", takeaway: "What I take from it",
      aligned: "Aligned with", view: "View project", more: "Learn more", portrait: "Portrait of " },
    fr: { skip: "Aller au contenu", welcome: "Accueil", course: "Parcours ingénieur", mobility: "Mobilité internationale",
      civic: "Développement durable & engagement citoyen", sport: "Sport & activités", career: "Développement de carrière",
      interests: "Centres d'intérêt", context: "Contexte", role: "Rôle", result: "Résultat", learned: "Ce que j'ai appris",
      experiences: "Expériences", plans: "Projets envisagés", internships: "Stages & PEP", careerProject: "Projet de carrière",
      cvs: "CV", cvEn: "CV (anglais)", cvFr: "CV (français)", linkedin: "LinkedIn", video: "Elevator pitch",
      videoNote: "2–3 minutes, en anglais : présent, passé très bref, futur.", roleModels: "Modèles de référence",
      mobAligned: "Projets de mobilité alignés avec mes modèles", path: "Parcours", takeaway: "Ce que j'en retiens",
      aligned: "Aligné avec", view: "Voir le projet", more: "En savoir plus", portrait: "Portrait de " }
  };
  let lang = "en";
  try { lang = localStorage.getItem("lang") || (navigator.language || "en").slice(0, 2); } catch (e) { lang = (navigator.language || "en").slice(0, 2); }
  if (lang !== "fr") lang = "en";

  const t = (v) => v && typeof v === "object" && !Array.isArray(v) ? (v[lang] ?? v.en ?? "") : (v ?? "");
  const u = (k) => UI[lang][k];
  const el = (tag, attrs = {}, kids = []) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) if (v !== "" && v != null) n.setAttribute(k, v);
    [].concat(kids).forEach((c) => c != null && c !== "" && n.append(c));
    return n;
  };
  const link = (href, text) => href ? el("a", { href, target: "_blank", rel: "noopener" }, text) : null;
  const tags = (arr) => (arr && arr.length) ? el("ul", { class: "tags" }, arr.map((x) => el("li", {}, t(x)))) : null;
  const facts = (rows) => { rows = rows.filter((r) => t(r[1])); return rows.length ? el("dl", { class: "facts" }, rows.flatMap(([k, v]) => [el("dt", {}, k), el("dd", {}, t(v))])) : null; };
  const entry = (meta, title, body) => el("article", { class: "entry" }, [el("p", { class: "meta" }, meta), el("div", {}, [el("h3", {}, title), ...body])]);
  const simple = (o) => entry([t(o.period), t(o.place)].filter(Boolean).join(" – "), t(o.title),
    [o.text ? el("p", {}, t(o.text)) : null, o.link ? el("p", {}, link(o.link, u("more"))) : null]);
  const fill = (id, items, fn) => $(id).replaceChildren(...items.map(fn));
  const panel = (title, meta, body) => el("article", { class: "panel" }, [el("h5", {}, title), meta ? el("p", { class: "muted" }, meta) : null, ...body]);

  function render() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((n) => (n.textContent = u(n.dataset.i18n)));
    document.querySelectorAll(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    const p = D.profile, c = D.career;
    document.title = p.name + " – Portfolio";
    $("brand").textContent = p.name; $("name").textContent = p.name;
    $("role").textContent = t(p.title); $("pitch").textContent = t(p.pitch);
    $("foot").textContent = "© " + new Date().getFullYear() + " " + p.name;

    const img = el("img", { id: "photo", src: p.photo, alt: u("portrait") + p.name, width: 176, height: 208 });
    img.onerror = () => $("photo-wrap").replaceChildren(el("div", { class: "avatar", "aria-hidden": "true" }, p.name.split(" ").map((w) => w[0]).join("")));
    $("photo-wrap").replaceChildren(img);
    const social = () => [link(p.linkedin, "LinkedIn"), link(p.github, "GitHub")].filter(Boolean);
    $("side-links").replaceChildren(...social());
    $("links").replaceChildren(...social(), link(c.cv.en, u("cvEn")), link(c.cv.fr, u("cvFr")));
    $("interests").replaceChildren(...p.interests.map((x) => el("li", {}, t(x))));

    $("course-intro").textContent = t(D.course.intro);
    fill("course-projects", D.course.projects, (x) => entry([t(x.type), t(x.period)].filter(Boolean).join(" – "), t(x.title), [
      el("figure", {}, x.image ? el("img", { src: x.image, alt: "", loading: "lazy" }) : null),
      facts([[u("context"), x.context], [u("role"), x.role], [u("result"), x.result], [u("learned"), x.learned]]),
      tags(x.tools), x.link ? el("p", {}, link(x.link, u("view"))) : null]));
    fill("mob-exp", D.mobility.experiences, simple); fill("mob-plans", D.mobility.plans, simple);
    fill("civic-items", D.civic, simple); fill("sport-items", D.sport, simple); fill("career-exp", c.experiences, simple);

    const cv = lang === "fr" ? c.cv.fr : c.cv.en;
    $("cv-links").replaceChildren(link(c.cv.en, u("cvEn")), link(c.cv.fr, u("cvFr")));
    $("cv-preview").src = cv;
    $("li-links").replaceChildren(link(c.linkedin.en, "LinkedIn (EN)"), link(c.linkedin.fr, "LinkedIn (FR)"));
    $("video-wrap").hidden = c.video.includes("[");
    if (!$("video-wrap").hidden) $("video").src = c.video;
    fill("role-models", c.roleModels, (r) => panel(r.name, t(r.job), [facts([[u("path"), r.path], [u("takeaway"), r.takeaway]]), tags(r.skills)]));
    fill("career-mobility", c.mobilityProjects, (m) => panel(t(m.title), m.place, [facts([[u("aligned"), m.roleModel]]), m.text ? el("p", {}, t(m.text)) : null]));
  }

  document.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => {
    lang = b.dataset.lang; try { localStorage.setItem("lang", lang); } catch (e) {} render();
  }));
  render();

  const links = [...document.querySelectorAll("#nav a")];
  const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting &&
    links.forEach((a) => a.setAttribute("aria-current", String(a.hash === "#" + e.target.id)))), { rootMargin: "-30% 0px -60% 0px" });
  document.querySelectorAll("main section").forEach((s) => io.observe(s));
})();
