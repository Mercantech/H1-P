# H1 Pensum

Landing page for **H1** — moduler og **50 skoledage** (10 uger × man–fre). Elever finder her oversigt over forløbet og links til H1-site, Notion og LUP.

| | |
|---|---|
| **Live (plan)** | https://h1-pensum.mercantec.tech |
| **H1-site** | https://h1.mercantec.tech |
| **Notion** | [H1-kalender](https://app.notion.com/p/mercantec/H1-2025Q2-1cfdab5ca23780578fcefba0bf442775) |
| **LUP** | https://lup.dk/#/h1 |

## Indhold

- **Moduler:** SQL, C#, Banko, OOP, Blazor, Niche Markedsplads
- **Dagsplan:** `web/js/pensum.js` (hold synk med H-Emner / Notion)

## Lokal udvikling

```bash
docker compose -f docker-compose.yml -f docker-compose.local.yml up --build
```

Åbn [http://localhost:3091](http://localhost:3091).

## Deploy (Dokploy)

```bash
docker compose up -d --build
```

Sæt `APP_HOST` i env (standard `h1-pensum.mercantec.tech`).

## Nyt repo

Mappen er tænkt som **eget git-repo** (kun `H1-Pensum/`). Opret fx `Mercantech/H1-Pensum` på GitHub og push:

```bash
git init
git add .
git commit -m "H1 pensum landing page med 50 dage."
git branch -M main
git remote add origin https://github.com/Mercantech/H1-P.git
git push -u origin main
```
