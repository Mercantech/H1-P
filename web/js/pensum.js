/** H1 pensum — 10 uger · 50 hverdage. Kilde: Notion H1-kalender (synk med H-Emner/data.js). */

export const meta = {
  short: "H1",
  title: "Hovedforløb 1",
  uger: 10,
  dage: 50,
  tema: "SQL · C# · Banko · OOP · Blazor · Niche Markedsplads",
  notion:
    "https://app.notion.com/p/mercantec/H1-2025Q2-1cfdab5ca23780578fcefba0bf442775",
  repo: "https://github.com/Mercantech/H1",
  site: "https://h1.mercantec.tech",
  lup: "https://lup.dk/#/h1",
  maalpinde: "https://maalpinde.mercantec.tech",
};

/** Moduler elever møder på tværs af ugerne. */
export const moduler = [
  {
    id: "sql",
    navn: "SQL & database",
    uger: [1, 2],
    beskrivelse:
      "Relationelle databaser, design, Postgres og SQL i projektet Niche Markedsplads.",
    link: "https://h1.mercantec.tech",
  },
  {
    id: "csharp",
    navn: "C# grundlag",
    uger: [2, 3],
    beskrivelse:
      "Variabler, kontrolstrukturer, metoder og grundlæggende programmering i Visual Studio.",
    link: "https://h1.mercantec.tech",
  },
  {
    id: "banko",
    navn: "Banko-projekt",
    uger: [4],
    beskrivelse: "Samlet C#-projekt med ekstra teori og fremlæggelse.",
    link: "https://h1.mercantec.tech",
  },
  {
    id: "oop",
    navn: "OOP",
    uger: [5],
    beskrivelse: "Klasser, objekter, arv og objektorienterede principper.",
    link: "https://h1.mercantec.tech",
  },
  {
    id: "blazor",
    navn: "Blazor & frontend",
    uger: [6],
    beskrivelse:
      "Komponenter, databinding, routing og kobling til database i Blazor.",
    link: "https://h1.mercantec.tech",
  },
  {
    id: "markedsplads",
    navn: "Niche Markedsplads",
    uger: [5, 6, 7, 8, 9, 10],
    beskrivelse:
      "SCRUM, sprint reviews, projektaflevering og afsluttende eksamen.",
    link: "https://h1.mercantec.tech",
  },
];

function day(weekDay, title, emner = [], kind = "teaching") {
  return { weekDay, title, emner, kind };
}

export const weeks = [
  {
    nr: 1,
    title: "SQL",
    modul: "sql",
    days: [
      day(1, "Introduktion SQL + Khan", ["SQL", "Databaser", "Khan Academy"]),
      day(2, "Khan + Murder mystery", ["SQL", "Khan Academy", "Murder mystery"]),
      day(3, "Design jeres database", ["Gruppearbejde", "Niche", "Database-design"]),
      day(4, "Projektarbejde", ["SQL", "Projekt"], "project"),
      day(5, "Projektarbejde", ["SQL", "Projekt"], "project"),
    ],
  },
  {
    nr: 2,
    title: "SQL og C# opstart",
    modul: "sql",
    days: [
      day(1, "Projektarbejde", ["SQL", "Projekt"], "project"),
      day(2, "Lav jeres database med Postgres", ["SQL", "Postgres", "Opgave"]),
      day(3, "Lav jeres database", ["SQL", "Postgres"], "project"),
      day(4, "Færdiggør SQL-opgave", ["SQL", "Aflevering"], "project"),
      day(5, "Introduktion og C# opstart", ["C#", "Visual Studio"]),
    ],
  },
  {
    nr: 3,
    title: "Introduktion til C#",
    modul: "csharp",
    days: [
      day(1, "C# med Mathias", ["C#"]),
      day(2, "C# med Henrik", ["C#"]),
      day(3, "C# med Henrik", ["C#"]),
      day(4, "C# med Henrik", ["C#"]),
      day(5, "Introduktion til Banko-projekt", ["Banko", "C# projekt"]),
    ],
  },
  {
    nr: 4,
    title: "Banko",
    modul: "banko",
    days: [
      day(1, "Banko + ekstra teori", ["Banko", "C#"], "project"),
      day(2, "Banko + ekstra teori", ["Banko", "C#"], "project"),
      day(3, "Banko-opgave", ["Banko"], "project"),
      day(4, "Banko-opgave", ["Banko"], "project"),
      day(5, "Banko fremlæggelse + ekstra teori", ["Banko", "Fremlæggelse"], "presentation"),
    ],
  },
  {
    nr: 5,
    title: "OOP og projekt-launch",
    modul: "oop",
    days: [
      day(1, "Introduktion og opstart af OOP", ["OOP", "Klasser", "Objekter"]),
      day(2, "OOP med Christoffer", ["OOP"]),
      day(3, "OOP med Christoffer", ["OOP"]),
      day(4, "Projekt-launch & idéstorm", ["Markedsplads", "C2C", "Idéstorm"]),
      day(5, "Fortsættelse af projekt + præsentation", ["Markedsplads", "Præsentation"], "presentation"),
    ],
  },
  {
    nr: 6,
    title: "Blazor og markedsplads",
    modul: "blazor",
    days: [
      day(1, "Introduktion til Blazor", ["Blazor"]),
      day(2, "Blazor med Kasper", ["Blazor", "Opgaver"]),
      day(3, "Blazor + projektarbejde", ["Blazor", "UML", "SCRUM", "Markedsplads"]),
      day(4, "Blazor og Postgres", ["Blazor", "Postgres", "Database service"]),
      day(5, "Afslutning Blazor + sprint review", ["Blazor", "Sprint review", "Retrospektiv"], "presentation"),
    ],
  },
  {
    nr: 7,
    title: "Projektarbejde",
    modul: "markedsplads",
    days: [
      day(1, "Projektarbejde", ["Markedsplads", "Book møde med Kasper"], "project"),
      day(2, "Projektarbejde", ["Markedsplads"], "project"),
      day(3, "Projektarbejde + sprint review", ["Markedsplads", "Sprint review"], "project"),
      day(4, "Projektarbejde", ["Markedsplads"], "project"),
      day(5, "Projektarbejde", ["Markedsplads"], "project"),
    ],
  },
  {
    nr: 8,
    title: "Projektarbejde",
    modul: "markedsplads",
    days: [
      day(1, "Projektarbejde", ["Markedsplads"], "project"),
      day(2, "Projektarbejde", ["Markedsplads"], "project"),
      day(3, "Projektarbejde", ["Markedsplads"], "project"),
      day(4, "Projektarbejde", ["Markedsplads"], "project"),
      day(5, "Projektarbejde + sprint review", ["Markedsplads", "Sprint review"], "project"),
    ],
  },
  {
    nr: 9,
    title: "Projekt og aflevering",
    modul: "markedsplads",
    days: [
      day(1, "Projektarbejde", ["Markedsplads"], "project"),
      day(2, "Projektarbejde", ["Markedsplads"], "project"),
      day(3, "Projektarbejde", ["Markedsplads"], "project"),
      day(4, "Projektarbejde + mesterdag", ["Markedsplads", "Mesterdag"], "project"),
      day(5, "Projekt-aflevering", ["Markedsplads", "Aflevering"], "project"),
    ],
  },
  {
    nr: 10,
    title: "Eksamen",
    modul: "markedsplads",
    days: [
      day(1, "Eksamensforberedelse", ["Markedsplads", "Forberedelse"], "project"),
      day(2, "Eksamen", ["Eksamen", "Markedsplads"], "presentation"),
      day(3, "—", [], ""),
      day(4, "—", [], ""),
      day(5, "—", [], ""),
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
      return "Planlægges";
  }
}

export const weeksEnriched = enrichWeeks(weeks);
