/** H1 pensum — 10 uger · 50 hverdage (man–fre). */

export const meta = {
  short: "H1",
  title: "Hovedforløb 1",
  uger: 10,
  dage: 50,
  tema: "C# · Banko · SQL · DAL · Blazor · Niche Markedsplads",
  notion:
    "https://app.notion.com/p/mercantec/H1-2025Q2-1cfdab5ca23780578fcefba0bf442775",
  repo: "https://github.com/Mercantech/H1",
  site: "https://h1.mercantec.tech",
  sqlh1: "https://sqlh1.mercantec.tech",
  lup: "https://lup.dk/#/h1",
  maalpinde: "https://maalpinde.mercantec.tech",
};

export const moduler = [
  {
    id: "csharp",
    navn: "Introduktion til C#",
    uger: [1],
    link: "https://h1.mercantec.tech",
    linkLabel: "H1-site",
  },
  {
    id: "banko",
    navn: "Banko",
    uger: [2],
    link: "https://h1.mercantec.tech",
    linkLabel: "H1-site",
  },
  {
    id: "sql",
    navn: "SQL",
    uger: [3],
    link: "https://sqlh1.mercantec.tech",
    linkLabel: "SQL-H1",
  },
  {
    id: "dal",
    navn: "C# + SQL · DAL",
    uger: [4],
    link: "https://h1.mercantec.tech",
    linkLabel: "H1-site",
  },
  {
    id: "blazor",
    navn: "Blazor",
    uger: [5],
    link: "https://h1.mercantec.tech",
    linkLabel: "H1-site",
  },
  {
    id: "markedsplads",
    navn: "Niche Markedsplads",
    uger: [6, 7, 8, 9, 10],
    link: "https://h1.mercantec.tech",
    linkLabel: "H1-site",
  },
];

function day(weekDay, title, emner = [], kind = "teaching") {
  return { weekDay, title, emner, kind };
}

export const weeks = [
  {
    nr: 1,
    title: "Introduktion til C#",
    modul: "csharp",
    fokus: "Syntax, god praksis og mini-projekter.",
    days: [
      day(1, "C# og Visual Studio", ["Setup", "Syntax"]),
      day(2, "Typer, variabler og flow", ["If/switch", "Løkker"]),
      day(3, "Metoder og struktur", ["Metoder", "Navngivning"]),
      day(4, "God praksis", ["Læsbar kode", "Fejlhåndtering"], "teaching"),
      day(5, "Mini-projekt", ["C#"], "project"),
    ],
  },
  {
    nr: 2,
    title: "Banko-opgaven",
    modul: "banko",
    fokus: "Samlet C#-projekt med fremlæggelse.",
    days: [
      day(1, "Kickoff Banko", ["Banko", "Krav"]),
      day(2, "Banko — udvikling", ["C#"], "project"),
      day(3, "Banko — udvikling", ["C#"], "project"),
      day(4, "Banko — aflevering", ["Banko"], "project"),
      day(5, "Fremlæggelse Banko", ["Banko"], "presentation"),
    ],
  },
  {
    nr: 3,
    title: "SQL",
    modul: "sql",
    fokus: "Teori og opgaver på SQL-H1 (egen Postgres-sandbox).",
    days: [
      day(1, "SQL-H1 — intro", ["sqlh1.mercantec.tech", "Moduler"]),
      day(2, "SELECT og filtrering", ["SQL-H1", "SELECT"]),
      day(3, "DML og tabeller", ["SQL-H1", "INSERT/UPDATE/DELETE"]),
      day(4, "Design og relationer", ["ER", "Nøgler"]),
      day(5, "SQL-opgaver", ["SQL-H1", "Sandbox"], "project"),
    ],
  },
  {
    nr: 4,
    title: "C# + SQL · DAL",
    modul: "dal",
    fokus: "Data Access Layer med ADO.NET eller Dapper.",
    days: [
      day(1, "Koble app og database", ["Connection string", "Postgres"]),
      day(2, "ADO.NET", ["SqlConnection", "SqlCommand"]),
      day(3, "Dapper", ["ORM-light", "Mapping"]),
      day(4, "DAL-lag i praksis", ["Repository", "Separation"]),
      day(5, "Mini-projekt DAL", ["C#", "SQL"], "project"),
    ],
  },
  {
    nr: 5,
    title: "Blazor",
    modul: "blazor",
    fokus: "Komponenter, databinding og UI mod jeres data.",
    days: [
      day(1, "Intro Blazor", ["Komponenter", "Routing"]),
      day(2, "Databinding", ["Events", "Forms"]),
      day(3, "Blazor + DAL", ["Services", "Injection"]),
      day(4, "UI og Bootstrap", ["Layout", "Komponenter"]),
      day(5, "Demo / review", ["Blazor"], "presentation"),
    ],
  },
  {
    nr: 6,
    title: "Markedsplads — opstart",
    modul: "markedsplads",
    fokus: "Idé, SCRUM og første sprint.",
    days: [
      day(1, "Projekt-launch", ["Niche", "SCRUM"], "teaching"),
      day(2, "Sprint 1", ["Markedsplads"], "project"),
      day(3, "Sprint 1", ["Markedsplads"], "project"),
      day(4, "Sprint 1", ["Markedsplads"], "project"),
      day(5, "Sprint review", ["Demo"], "presentation"),
    ],
  },
  {
    nr: 7,
    title: "Markedsplads — sprint 2",
    modul: "markedsplads",
    fokus: "Fullstack videre — API, data og UI.",
    days: [
      day(1, "Sprint 2", ["Markedsplads"], "project"),
      day(2, "Sprint 2", ["Markedsplads"], "project"),
      day(3, "Sprint 2", ["Markedsplads"], "project"),
      day(4, "Sprint 2", ["Markedsplads"], "project"),
      day(5, "Sprint review", ["Retrospektiv"], "presentation"),
    ],
  },
  {
    nr: 8,
    title: "Markedsplads — sprint 3",
    modul: "markedsplads",
    fokus: "Integration og kvalitet.",
    days: [
      day(1, "Sprint 3", ["Markedsplads"], "project"),
      day(2, "Sprint 3", ["Markedsplads"], "project"),
      day(3, "Sprint 3", ["Markedsplads"], "project"),
      day(4, "Sprint 3", ["Markedsplads"], "project"),
      day(5, "Sprint review", ["Markedsplads"], "presentation"),
    ],
  },
  {
    nr: 9,
    title: "Aflevering",
    modul: "markedsplads",
    fokus: "Færdiggørelse og aflevering.",
    days: [
      day(1, "Projekt", ["Markedsplads"], "project"),
      day(2, "Projekt", ["Markedsplads"], "project"),
      day(3, "Projekt", ["Markedsplads"], "project"),
      day(4, "Mesterdag / polish", ["Markedsplads"], "project"),
      day(5, "Aflevering", ["Markedsplads"], "project"),
    ],
  },
  {
    nr: 10,
    title: "Eksamen",
    modul: "markedsplads",
    fokus: "Forberedelse og overhøring.",
    days: [
      day(1, "Eksamensforberedelse", ["Markedsplads"], "project"),
      day(2, "Eksamen", ["Overhøring"], "presentation"),
      day(3, "", [], ""),
      day(4, "", [], ""),
      day(5, "", [], ""),
    ],
  },
];

const WEEKDAYS = ["Man", "Tir", "Ons", "Tor", "Fre"];

export function enrichWeeks(weekList) {
  let global = 0;
  return weekList.map((w) => ({
    ...w,
    days: w.days.map((d) => {
      global += 1;
      return {
        ...d,
        globalDay: global,
        weekday: WEEKDAYS[d.weekDay - 1],
        kindLabel: kindLabel(d.kind),
      };
    }),
  }));
}

export function kindLabel(kind) {
  switch (kind) {
    case "teaching":
      return "Undervisning";
    case "project":
      return "Projekt";
    case "presentation":
      return "Fremlæggelse";
    default:
      return "";
  }
}

export const weeksEnriched = enrichWeeks(weeks);
