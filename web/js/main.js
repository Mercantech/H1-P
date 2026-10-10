import { meta, moduler, weeksEnriched } from "./pensum.js";

const els = {
  heroLede: document.getElementById("hero-lede"),
  heroStats: document.getElementById("hero-stats"),
  heroActions: document.getElementById("hero-actions"),
  modulGrid: document.getElementById("modul-grid"),
  modulFilter: document.getElementById("modul-filter"),
  weekList: document.getElementById("week-list"),
  linkNotion: document.getElementById("link-notion"),
};

let filterModul = "";

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

function renderHero() {
  els.heroLede.textContent = `${meta.tema}. Her samler vi moduler og dagsoversigt for hele forløbet.`;
  els.heroStats.innerHTML = `
    <div class="stat"><span class="stat-n">${meta.uger}</span><span class="stat-l">uger</span></div>
    <div class="stat"><span class="stat-n">${meta.dage}</span><span class="stat-l">skoledage</span></div>
    <div class="stat"><span class="stat-n">${moduler.length}</span><span class="stat-l">moduler</span></div>`;
  els.heroActions.innerHTML = `
    <a class="btn btn-primary" href="${escapeHtml(meta.site)}" target="_blank" rel="noopener">Åbn H1-site</a>
    <a class="btn btn-ghost" href="${escapeHtml(meta.repo)}" target="_blank" rel="noopener">GitHub</a>
    <a class="btn btn-ghost" href="${escapeHtml(meta.maalpinde)}" target="_blank" rel="noopener">Målpinde</a>`;
  if (els.linkNotion) els.linkNotion.href = meta.notion;
}

function ugeSpanLabel(uger) {
  if (uger.length === 1) return `Uge ${uger[0]}`;
  return `Uge ${uger[0]}–${uger[uger.length - 1]}`;
}

function renderModuler() {
  els.modulGrid.innerHTML = moduler
    .map(
      (m) => `
    <article class="modul-card modul-${escapeHtml(m.id)}" data-modul="${escapeHtml(m.id)}">
      <p class="modul-kicker">${escapeHtml(ugeSpanLabel(m.uger))}</p>
      <h3 class="modul-title">${escapeHtml(m.navn)}</h3>
      <p class="modul-desc">${escapeHtml(m.beskrivelse)}</p>
      <a class="modul-link" href="${escapeHtml(m.link)}" target="_blank" rel="noopener">Gå til materiale →</a>
      <button type="button" class="modul-jump" data-modul="${escapeHtml(m.id)}">Vis dage</button>
    </article>`
    )
    .join("");
}

function renderFilter() {
  const tabs = [
    { id: "", label: "Alle uger" },
    ...moduler.map((m) => ({ id: m.id, label: m.navn })),
  ];
  els.modulFilter.innerHTML = tabs
    .map(
      (t) => `
    <button type="button" class="filter-tab ${t.id === filterModul ? "is-active" : ""}" data-modul="${escapeHtml(t.id)}" role="tab" aria-selected="${t.id === filterModul ? "true" : "false"}">
      ${escapeHtml(t.label)}
    </button>`
    )
    .join("");
}

function weekMatchesFilter(week) {
  if (!filterModul) return true;
  return week.modul === filterModul || moduler.find((m) => m.id === filterModul)?.uger.includes(week.nr);
}

function renderWeeks() {
  const visible = weeksEnriched.filter(weekMatchesFilter);
  els.weekList.innerHTML = visible.length
    ? visible.map(renderWeek).join("")
    : `<p class="empty">Ingen uger for det valgte modul.</p>`;
}

function renderWeek(week) {
  const mod = moduler.find((m) => m.id === week.modul);
  return `
    <details class="week" id="uge-${week.nr}" open>
      <summary class="week-summary">
        <span class="week-nr">Uge ${week.nr}</span>
        <span class="week-title">${escapeHtml(week.title)}</span>
        ${mod ? `<span class="week-modul">${escapeHtml(mod.navn)}</span>` : ""}
      </summary>
      <ol class="day-list">
        ${week.days.map(renderDay).join("")}
      </ol>
    </details>`;
}

function renderDay(d) {
  const empty = !d.title || d.title === "—";
  return `
    <li class="day day-${escapeHtml(d.kind || "none")} ${empty ? "day-empty" : ""}">
      <div class="day-meta">
        <span class="day-global">Dag ${d.globalDay}</span>
        <span class="day-weekday">${escapeHtml(d.weekday)}</span>
        ${d.kind ? `<span class="day-kind">${escapeHtml(d.kindLabel)}</span>` : ""}
      </div>
      <p class="day-title">${empty ? "Ingen planlagt undervisning" : escapeHtml(d.title)}</p>
      ${
        d.emner?.length
          ? `<div class="day-tags">${d.emner.map((e) => `<span class="tag">${escapeHtml(e)}</span>`).join("")}</div>`
          : ""
      }
    </li>`;
}

function applyFilter(modulId) {
  filterModul = modulId || "";
  renderFilter();
  renderWeeks();
}

function bindEvents() {
  els.modulFilter.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-tab");
    if (!btn) return;
    applyFilter(btn.dataset.modul || "");
  });

  els.modulGrid.addEventListener("click", (e) => {
    const jump = e.target.closest(".modul-jump");
    if (!jump) return;
    const id = jump.dataset.modul;
    applyFilter(id);
    const firstWeek = moduler.find((m) => m.id === id)?.uger[0];
    if (firstWeek) {
      document.getElementById(`uge-${firstWeek}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

const THEME_KEY = "h1-pensum-theme";
const themeToggle = document.getElementById("theme-toggle");

const currentTheme = () =>
  document.documentElement.dataset.theme === "light" ? "light" : "dark";

const applyTheme = (theme) => {
  const next = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  document.documentElement.style.colorScheme = next;
  localStorage.setItem(THEME_KEY, next);
  if (themeToggle) {
    themeToggle.setAttribute(
      "aria-label",
      next === "dark" ? "Skift til lys tilstand" : "Skift til mørk tilstand"
    );
  }
};

applyTheme(currentTheme());
themeToggle?.addEventListener("click", () => {
  applyTheme(currentTheme() === "dark" ? "light" : "dark");
});

renderHero();
renderModuler();
renderFilter();
renderWeeks();
bindEvents();
