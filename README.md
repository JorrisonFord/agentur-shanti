# Yoga Studio – Vite / React

Responsives Grundgerüst für die Website eines einzelnen Yogastudios mit React, TypeScript, Tailwind CSS und React Router.

## Starten

```bash
npm install
cp .env.example .env
npm run dev
```

Produktionsbuild:

```bash
npm run build
npm run preview
```

## Eversports einrichten

1. Im Eversports Manager das passende Stundenplan-Widget konfigurieren.
2. Die Widget-ID in `.env` als `VITE_EVERSPORTS_WIDGET_ID` eintragen.
3. Das offizielle Loader-Skript und die von Eversports vorgegebenen Einbettungsattribute prüfen und in `index.html` bzw. `src/components/booking/EversportsWidget.tsx` übernehmen.

**Wichtig:** Die Eversports-Einbettung kann je nach Widget-Produkt und bereitgestelltem Embed-Code variieren. Dieses Projekt enthält einen klar markierten Integrationspunkt, aber keine erfundene Widget-ID oder unbestätigte API-Konfiguration. Verwende den Embed-Code aus deinem Eversports-Manager als verbindliche Quelle. Prüfe außerdem, ob das externe Skript erst nach entsprechender Einwilligung geladen werden muss.

## Inhalte anpassen

- Studio-Name, Navigation und Kontaktdaten: `src/data/studio.ts`
- Yoga-Stile: `src/data/yogaStyles.ts`
- Seiteninhalte: `src/pages/`
- Designfarben und Schriften: `src/index.css`
- Bilder: Platzhalter-URLs in den jeweiligen Komponenten durch eigene Bilder aus `public/images/` ersetzen.

## Seiten

- `/` Startseite
- `/stundenplan` Stundenplan und Eversports
- `/yoga` Yoga-Angebot
- `/studio` Studio-Vorstellung
- `/preise` Preise
- `/kontakt` Kontakt
- `/impressum` Impressum-Platzhalter
- `/datenschutz` Datenschutz-Platzhalter

Die Rechtstexte sind bewusst nur Platzhalter und müssen vor Veröffentlichung passend zum tatsächlichen Angebot erstellt bzw. geprüft werden.
