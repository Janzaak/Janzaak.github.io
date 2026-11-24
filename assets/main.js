/* 页面渲染脚本：一般不需要修改，内容请编辑根目录的 data.js */
(function () {
  const S = window.SITE || {};
  const P = S.profile || {};
  const $ = (id) => document.getElementById(id);
  const has = (v) => v !== undefined && v !== null && v !== "";
  const list = (a) => (Array.isArray(a) ? a : []);

  // 只保留填写了链接的项
  const linkHTML = (links) =>
    Object.entries(links || {})
      .filter(([, url]) => has(url))
      .map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener">${label}</a>`)
      .join("");

  const section = (id, title, body) =>
    body ? `<section id="${id}"><h2>${title}</h2>${body}</section>` : "";

  /* ---------- 侧栏 ---------- */
  const initials = (P.name || "").split(/\s+/).map((w) => w[0]).join("").slice(0, 2);
  const avatar = has(P.avatar)
    ? `<img class="avatar" src="${P.avatar}" alt="${P.name}">`
    : `<div class="avatar" aria-hidden="true">${initials}</div>`;
  const role = [P.title, P.affiliation].filter(has).join("<br>");

  $("sidebar").innerHTML = `
    ${avatar}
    <h1 class="name">${P.name || ""}</h1>
    ${has(P.nameAlt) ? `<div class="name-alt">${P.nameAlt}</div>` : ""}
    ${role ? `<div class="role">${role}</div>` : ""}
    ${has(P.email) ? `<div class="email"><a href="mailto:${P.email}">${P.email}</a></div>` : ""}
    <div class="links">${linkHTML(P.links)}</div>
  `;
  if (has(P.name)) document.title = P.name;

  /* ---------- 内容 ---------- */
  const about =
    list(S.bio).map((p) => `<p>${p}</p>`).join("") +
    (list(S.interests).length
      ? `<div class="tags">${S.interests.map((t) => `<span class="tag">${t}</span>`).join("")}</div>`
      : "");

  const dated = (arr) =>
    list(arr).length
      ? `<ul class="dated">${arr.map((n) => `<li><span class="date">${n.date || ""}</span><span>${n.text}</span></li>`).join("")}</ul>`
      : "";

  const fmtAuthor = (a) => {
    const clean = a.replace(/[*†]+$/, "").trim();
    return clean === P.name ? `<span class="me">${a}</span>` : a;
  };

  const pubs = list(S.publications)
    .map((p) => {
      const cls = ["item", has(p.image) ? "" : "no-img", p.highlight ? "highlight" : ""].join(" ");
      const venue = [p.venue, p.year].filter(has).join(", ");
      return `<div class="${cls}">
        ${has(p.image) ? `<img class="thumb" src="${p.image}" alt="" loading="lazy">` : ""}
        <div>
          <div class="item-title">${p.title}</div>
          <div class="authors">${list(p.authors).map(fmtAuthor).join(", ")}</div>
          <div class="venue">${venue}${has(p.note) ? `<span class="note">${p.note}</span>` : ""}</div>
          <div class="item-links">${linkHTML(p.links)}</div>
        </div>
      </div>`;
    })
    .join("");

  const projects = list(S.projects)
    .map((p) => `<div class="item ${has(p.image) ? "" : "no-img"}">
        ${has(p.image) ? `<img class="thumb" src="${p.image}" alt="" loading="lazy">` : ""}
        <div>
          <div class="item-title">${p.title}${has(p.period) ? ` <span class="authors">· ${p.period}</span>` : ""}</div>
          ${has(p.description) ? `<div class="desc">${p.description}</div>` : ""}
          <div class="item-links">${linkHTML(p.links)}</div>
        </div>
      </div>`)
    .join("");

  const entries = (arr, k1, k2) =>
    list(arr)
      .map((e) => `<div class="entry">
          <div class="main"><b>${e[k1] || ""}</b>${has(e[k2]) ? `, ${e[k2]}` : ""}
            ${has(e.detail) ? `<div class="sub">${e.detail}</div>` : ""}</div>
          <div class="period">${e.period || ""}</div>
        </div>`)
      .join("");

  $("content").innerHTML = [
    section("about", "About", about),
    section("news", "News", dated(S.news)),
    section("publications", "Publications", pubs),
    section("projects", "Projects", projects),
    section("experience", "Research Experience", entries(S.experience, "org", "role")),
    section("education", "Education", entries(S.education, "school", "degree")),
    section("honors", "Honors & Awards", dated(S.honors)),
  ].join("");

  $("footer").innerHTML = S.footer || "";
})();
