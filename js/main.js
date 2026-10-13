(function () {
  const D = window.DATA, $ = (id) => document.getElementById(id);
  const el = (tag, attrs = {}, kids = []) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) if (v !== "" && v != null) n.setAttribute(k, v);
    [].concat(kids).forEach((c) => c != null && c !== "" && n.append(c));
    return n;
  };
  const link = (href, text) => href ? el("a", { href, target: "_blank", rel: "noopener" }, text) : null;
  const tags = (arr) => el("ul", { class: "tags" }, (arr || []).map((t) => el("li", {}, t)));
  const field = (label, val) => val ? el("p", {}, [el("strong", {}, label + " "), val]) : null;

  const card = (title, meta, body, img) => el("article", { class: "card" }, [
    img ? el("img", { src: img, alt: "", loading: "lazy" }) : null,
    el("h4", {}, title), meta ? el("p", { class: "muted" }, meta) : null, ...body
  ]);
  const simple = (o) => card(o.title, [o.period, o.place].filter(Boolean).join(" – "),
    [o.text ? el("p", {}, o.text) : null, o.link ? el("p", {}, link(o.link, "Learn more")) : null]);
  const fill = (id, items, fn) => $(id).replaceChildren(...items.map(fn));

  const p = D.profile;
  document.title = p.name + " – Engineering Portfolio";
  $("brand").textContent = p.name; $("name").textContent = p.name;
  $("role").textContent = p.title; $("pitch").textContent = p.pitch;
  $("photo").src = p.photo; $("foot").textContent = "© " + new Date().getFullYear() + " " + p.name;
  $("links").replaceChildren(...[link(p.linkedin, "LinkedIn"), link(p.github, "GitHub"),
    link(D.career.cv.en, "CV (EN)"), link(D.career.cv.fr, "CV (FR)")].filter(Boolean));
  $("interests").replaceChildren(...p.interests.map((t) => el("li", {}, t)));

  $("course-intro").textContent = D.course.intro;
  fill("course-projects", D.course.projects, (x) => card(x.title, [x.type, x.period].filter(Boolean).join(" – "), [
    field("Context:", x.context), field("Role:", x.role), field("Result:", x.result),
    field("Learned:", x.learned), tags(x.tools), x.link ? el("p", {}, link(x.link, "View project")) : null
  ], x.image));

  fill("mob-exp", D.mobility.experiences, simple);
  fill("mob-plans", D.mobility.plans, simple);
  fill("civic-items", D.civic, simple);
  fill("sport-items", D.sport, simple);
  fill("career-exp", D.career.experiences, simple);

  const c = D.career;
  $("cv-links").replaceChildren(link(c.cv.en, "Download CV (EN)"), link(c.cv.fr, "Download CV (FR)"));
  $("cv-preview").src = c.cv.en;
  $("li-links").replaceChildren(link(c.linkedin.en, "LinkedIn (EN)"), link(c.linkedin.fr, "LinkedIn (FR)"));
  $("video").src = c.video;
  fill("role-models", c.roleModels, (r) => card(r.name, r.job,
    [field("Path:", r.path), tags(r.skills), field("Takeaway:", r.takeaway)]));
  fill("career-mobility", c.mobilityProjects, (m) => card(m.title, m.place,
    [field("Aligned with:", m.roleModel), m.text ? el("p", {}, m.text) : null]));
})();
