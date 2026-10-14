(function () {
  const D = window.DATA, $ = (id) => document.getElementById(id);
  const UI = {
    en: { skip: "Skip to content", hello: "Hello, I'm", welcome: "Home", engineering: "Engineering", mobility: "Mobility", engagement: "Engagement",
      activities: "Activities", career: "Career", contact: "Contact", other: "FR", otherLabel: "Version française",
      engineeringSub: "Projects and skills from my engineering course.", mobilitySub: "Languages and international aspirations.",
      engagementSub: "Sustainability, community and civic involvement.", activitiesSub: "Sport and passions outside engineering.",
      careerSub: "Professional documents, goals and sources of inspiration.", contactSub: "Get in touch for an internship, a project or a simple chat.",
      skills: "Skills", projects: "Projects", experiences: "Experiences", mobGoal: "Mobility project", cvEn: "Download CV (English)",
      cvFr: "Download CV (French)", linkedin: "My LinkedIn profile", pastExp: "Past experience", roleModels: "Role models",
      roleModelsSub: "Analysis of 3 inspiring profiles and 3 potential mobility projects.", mobProjects: "Potential mobility projects",
      aligned: "Aligned with", pitch: "Elevator pitch", pitchSub: "2–3 minutes in English: present, brief past, future.",
      result: "Result", learned: "What I learned", email: "Email", phone: "Phone", portrait: "Portrait of " },
    fr: { skip: "Aller au contenu", hello: "Bonjour, je suis", welcome: "Accueil", engineering: "Ingénierie", mobility: "Mobilité", engagement: "Engagement",
      activities: "Activités", career: "Carrière", contact: "Contact", other: "EN", otherLabel: "English version",
      engineeringSub: "Projets et compétences de mon cursus ingénieur.", mobilitySub: "Langues et aspirations à l'international.",
      engagementSub: "Développement durable, vie associative et citoyenne.", activitiesSub: "Sport et passions en dehors de l'ingénierie.",
      careerSub: "Documents professionnels, objectifs et sources d'inspiration.", contactSub: "Écris-moi pour un stage, un projet ou un simple échange.",
      skills: "Compétences", projects: "Projets", experiences: "Expériences", mobGoal: "Projet de mobilité", cvEn: "Télécharger le CV (anglais)",
      cvFr: "Télécharger le CV (français)", linkedin: "Mon profil LinkedIn", pastExp: "Expériences passées", roleModels: "Modèles inspirants",
      roleModelsSub: "Analyse de 3 profils inspirants et de 3 projets de mobilité potentiels.", mobProjects: "Projets de mobilité potentiels",
      aligned: "Aligné avec", pitch: "Elevator pitch", pitchSub: "2–3 minutes en anglais : présent, passé très bref, futur.",
      result: "Résultat", learned: "Ce que j'ai appris", email: "E-mail", phone: "Téléphone", portrait: "Portrait de " }
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
  const a = (href, text, cls) => !href ? null : el("a", /^(mailto|tel):/.test(href) ? { href, class: cls } : { href, class: cls, target: "_blank", rel: "noopener" }, text);
  const tags = (arr) => (arr && arr.length) ? el("ul", { class: "tags" }, arr.map((x) => el("li", {}, t(x)))) : null;
  const list = (arr) => (arr && arr.length) ? el("ul", { class: "bullets" }, arr.map((x) => el("li", {}, t(x)))) : null;
  const paras = (v) => v ? [].concat(v).map((x) => el("p", {}, t(x))) : [];
  const head = (k) => [el("h2", { class: "title" }, u(k)), el("p", { class: "sub" }, u(k + "Sub"))];
  const sub = (txt) => el("h3", { class: "h3" }, txt);
  const grid = (cls, kids) => el("div", { class: cls + " tg" }, kids);
  const card = (kids, cls = "card") => el("article", { class: cls }, kids);
  const item = (x) => el("article", { class: "item" }, [el("h4", {}, t(x.title)), ...paras(x.text)]);
  const body = (id, kids) => $(id).replaceChildren(...kids.flat().filter(Boolean));
  const initials = (s) => s.replace(/[\[\]]/g, "").split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

  function render() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((n) => (n.textContent = u(n.dataset.i18n)));
    const L = $("langbtn"); L.textContent = u("other"); L.setAttribute("aria-label", u("otherLabel"));
    const p = D.profile, c = D.career, e = D.engineering, m = D.mobility, k = D.contact;
    document.title = p.name + " – Portfolio";
    $("brand").textContent = p.name; $("hello").textContent = u("hello"); $("pitch").textContent = t(p.pitch);
    const [first, ...rest] = p.name.split(" ");
    $("name").replaceChildren(el("span", {}, first), el("span", {}, rest.join(" ")));
    $("highlights").replaceChildren(...p.highlights.map((h) => el("li", {}, t(h))));
    $("links").replaceChildren(a(c.cv[lang], u(lang === "fr" ? "cvFr" : "cvEn"), "btn solid"), a(p.linkedin, "LinkedIn", "btn"), a(p.github, "GitHub", "btn"));
    const img = el("img", { src: p.photo, alt: u("portrait") + p.name, class: "photo" });
    img.onerror = () => $("photo-wrap").replaceChildren(el("div", { class: "photo avatar", "aria-hidden": "true" }, initials(p.name)));
    $("photo-wrap").replaceChildren(img);
    $("foot").textContent = "© " + new Date().getFullYear() + " " + p.name;

    body("engineering-body", [head("engineering"), sub(u("skills")),
      grid("grid3", e.skills.map((s) => card([el("h4", {}, t(s.group)), tags(s.items)]))), sub(u("projects")),
      grid("stack", e.projects.map((x) => card([el("div", { class: "proj" }, [
        x.image ? el("img", { src: x.image, alt: "", class: "shot", loading: "lazy" }) : el("div", { class: "tilecap" }, [el("span", {}, t(x.period)), el("span", {}, t(x.type))]),
        el("div", { class: "pad" }, [el("p", { class: "meta" }, [t(x.type), t(x.period)].filter(Boolean).join(" · ")),
          el("h4", {}, t(x.title)), ...paras(x.text),
          x.result ? el("p", {}, [el("strong", {}, u("result") + ": "), t(x.result)]) : null,
          x.learned ? el("p", {}, [el("strong", {}, u("learned") + ": "), t(x.learned)]) : null,
          tags(x.tools), a(x.link, t(x.linkLabel), "btn")])])], "card projcard")))]);

    body("mobility-body", [head("mobility"),
      grid("langs", m.languages.map((l) => el("span", { class: "chip" }, [el("strong", {}, t(l.name)), " " + t(l.level)]))),
      sub(u("experiences")), ...m.experiences.map((x) => card([el("h4", {}, t(x.title)), el("p", { class: "meta" }, t(x.period)), ...paras(x.text)], "card xpcard")),
      sub(u("mobGoal")), grid("prose", paras(m.text))]);

    body("engagement-body", [head("engagement"), grid("grid2", D.engagement.map(item))]);
    body("activities-body", [head("activities"), ...D.activities.map((g) => [sub(t(g.category)), grid("grid2", g.items.map(item))])]);

    body("career-body", [head("career"),
      el("p", { class: "cta" }, [a(c.cv.en, u("cvEn"), "btn solid"), a(c.cv.fr, u("cvFr"), "btn sky"), a(p.linkedin, u("linkedin"), "btn")]),
      sub(u("pastExp")),
      ...c.experiences.map((x) => card([el("div", { class: "xp" }, [
        x.logo ? el("img", { src: x.logo, alt: "", class: "logo-img" }) : el("span", { class: "logo-img ph" }, initials(x.org || t(x.title))),
        el("div", {}, [el("div", { class: "xp-top" }, [el("h4", {}, t(x.title)), el("span", { class: "meta" }, t(x.period))]),
          el("p", { class: "org" }, t(x.org)), ...paras(x.text), list(x.bullets), tags(x.tools)])])], "card xpcard")),
      sub(u("roleModels")), el("p", { class: "sub tight" }, u("roleModelsSub")),
      grid("grid3", c.roleModels.map((r) => card([
        r.photo ? el("img", { src: r.photo, alt: r.name, class: "avatar-sm" }) : el("span", { class: "avatar-sm ph" }, initials(r.name)),
        el("h4", { class: "center" }, r.name), el("p", { class: "meta center" }, t(r.job)), list(r.points)]))),
      sub(u("mobProjects")),
      grid("grid3", c.mobilityProjects.map((x) => card([el("h4", {}, t(x.title)), el("p", { class: "meta" }, t(x.place)),
        x.roleModel ? el("p", {}, [el("strong", {}, u("aligned") + ": "), x.roleModel]) : null, ...paras(x.text)]))),
      c.video.includes("[") ? null : [sub(u("pitch")), el("p", { class: "sub tight" }, u("pitchSub")),
        el("div", { class: "video" }, el("iframe", { src: c.video, title: "Elevator pitch", allowfullscreen: "", loading: "lazy" }))]]);

    body("contact-body", [head("contact"), grid("grid3", [
      card([el("h4", {}, u("email")), el("p", {}, a("mailto:" + k.email, k.email))], "item"),
      card([el("h4", {}, u("phone")), el("p", {}, a("tel:" + k.phone.replace(/\s/g, ""), k.phone))], "item"),
      card([el("h4", {}, "LinkedIn"), el("p", {}, a(k.linkedin, u("linkedin")))], "item")])]);
  }

  $("langbtn").addEventListener("click", () => { lang = lang === "fr" ? "en" : "fr"; try { localStorage.setItem("lang", lang); } catch (e) {} render(); });
  render();
  const links = [...document.querySelectorAll("#nav a")];
  const io = new IntersectionObserver((es) => es.forEach((s) => s.isIntersecting &&
    links.forEach((l) => l.setAttribute("aria-current", String(l.hash === "#" + s.target.id)))), { rootMargin: "-40% 0px -55% 0px" });
  document.querySelectorAll("main section").forEach((s) => io.observe(s));
})();
