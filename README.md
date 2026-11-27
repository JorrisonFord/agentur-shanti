# Agentur Shanti

Website für ein Yogastudio mit React, TypeScript, Vite, Tailwind CSS und React Router.
Für die Entwicklung und den Build empfehlen wir Node.js 24 LTS.

## Lokal starten

```bash
npm ci
npm run dev
```

Für den statischen Website-Build und dessen Vorschau:

```bash
npm run build
npm run preview
```

## Inhalte lokal bearbeiten

1. Starte `npm run dev:cms` und öffne [den lokalen Admin](http://localhost:5174/admin).
2. Klicke auf **Enter Edit Mode** und öffne **Startseite** im Formular **Website-Inhalte**.
3. Ändere die **Hauptüberschrift**. Die Vorschau zeigt die Änderung sofort an. **Save** schreibt sie in `content/de.json`.
4. Öffne für andere Seiten den zugehörigen Abschnitt im Formular und navigiere rechts zur passenden Seite. Auf der Startseite lassen sich die Hauptüberschrift und das Titelbild auch direkt in der Vorschau auswählen, wenn der Direktbearbeitungsmodus aktiv ist.

Die Website läuft dabei auf Port 5174, die lokale Tina-API auf Port 4001. Die CLI nutzt zusätzlich Port 9000 für die lokale Datenbank. Die lokale Bearbeitung schreibt ohne Login in den Arbeitsbaum und ist für die lokale Entwicklung vorgesehen.

### Inhaltsmodell

| Bereich | Bearbeitung |
| --- | --- |
| Seiten | Startseite, Stundenplan, Yoga, Studio, Preise, Kontakt und Rechtstexte |
| Kurse | Name, Niveau und Beschreibung der Kursformate auf Start- und Yoga-Seite |
| Lehrpersonen | Name, Biografie und optionales Porträt mit Alternativtext. Der Teambereich erscheint auf der Studio-Seite, sobald ein Profil vorhanden ist. |
| Angebote | Name, Beschreibung und Preis auf der Preis-Seite |
| Studio und Website | Kontaktdaten, Adresse, Instagram, Navigation, Footer und SEO |
| Medien | Bildfelder mit Alternativtext. Eigene Uploads liegen im Git-Repository unter `public/images/`. |

Die Inhalte liegen in [content/de.json](content/de.json), die Formularfelder in [tina/fields.ts](tina/fields.ts). Änderungen an kursbezogenen Texten und Preisangaben betreffen die Website. Der Stundenplan und die tatsächlichen Buchungen und Konditionen werden bei Eversports gepflegt. Der bestehende Loader und die Widget-ID stehen in `src/components/booking/EversportsWidget.tsx`.

Nach Schemaänderungen `npm run dev:cms` starten und die aktualisierte `tina/tina-lock.json` ins Repository übernehmen.

## TinaCloud für den Studiobetreiber einrichten

1. Einen TinaCloud-Projektzugang einrichten, die GitHub-Integration für dieses Repository freigeben und das Projekt mit dem Repository verbinden. Der zu bearbeitende Branch muss den aktuellen Inhalt, `tina/config.ts` und `tina/tina-lock.json` enthalten.
2. Im TinaCloud-Projekt unter **Site URL(s)** die Domain eintragen, unter der der Admin erreichbar sein soll. Für einen Test mit TinaCloud und lokalem Produktionsbuild zusätzlich `http://localhost:4173` zulassen. Die Medienbibliothek bei Bedarf im Projekt synchronisieren.
3. Den Studiobetreiber in TinaCloud hinzufügen und im Projekt unter **Collaborators** als **Editor** zuweisen. Damit kann er sich unter `/admin` anmelden und Inhalte bearbeiten.
4. Die Werte aus [.env.example](.env.example) als Build-Umgebungsvariablen setzen. Für einen lokalen Cloud-Test kann dafür eine ignorierte `.env` angelegt werden.

| Variable | Wert |
| --- | --- |
| `TINA_PUBLIC_CLIENT_ID` | Projekt-ID aus TinaCloud |
| `TINA_TOKEN` | Read-only-Token aus TinaCloud, nur für den Build |
| `TINA_PUBLIC_BRANCH` | Optionaler Git-Branch. Standard ist der von Vercel bereitgestellte Branch, falls verfügbar, sonst `main`. |

[Offizielle TinaCloud-Projekteinrichtung](https://tina.io/docs/tinacloud/dashboard/projects) · [Projektrollen](https://tina.io/docs/tinacloud/dashboard/users)

### Bereitstellung

```bash
npm run build:cms
npm run preview:cms
```

Der CMS-Build erzeugt die statische Website und den TinaCloud-Admin in `dist/`. Auf Vercel das Framework **Vite**, den Build-Befehl `npm run build:cms` und das Ausgabeverzeichnis `dist` einstellen. Ein anderer statischer Host kann dasselbe Verzeichnis ausliefern. Dort `/admin` auf `/admin/index.html` weiterleiten, vorhandene Dateien direkt ausliefern und Website-Routen wie `/studio` auf `/index.html` zurückfallen lassen. Admin und Vorschau sollten unter derselben Origin erreichbar sein.

Die bestehende Vercel-Analytics-Einbindung ist aktiv, wenn Vercel beim Build `VITE_VERCEL_ENV` bereitstellt.

TinaCloud schreibt gespeicherte Änderungen als Commit in GitHub. Richte beim gewählten Host automatische Builds nach Git-Pushes ein, damit Website-Besucher die neue veröffentlichte Version erhalten. Zum Testen nach der Einrichtung mit dem Editor-Konto einloggen, einen Text ändern und den resultierenden GitHub-Commit und das Deployment prüfen.

Bei einer späteren Repository-Übertragung die GitHub-Integration in TinaCloud und beim Host für den neuen Eigentümer freigeben. Danach Repository-Zuordnung, Branch, Site-URL und Build-Variablen prüfen und den vollständigen Login- und Speicherablauf erneut testen.

Die vorhandenen Rechtstexte und ein Teil der Studiodaten sind Platzhalter für die spätere Veröffentlichung.
