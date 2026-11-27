import { Link } from "react-router-dom";
import { studio } from "../../data/studio";

export function Footer() {
  return (
    <footer className="border-t border-studio-line">
      <div className="mx-auto grid max-w-content gap-10 px-5 py-12 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-display text-3xl">{studio.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-studio-muted">{studio.tagline} {studio.description}</p>
        </div>
        <div>
          <p className="eyebrow mb-4">Kontakt</p>
          <p className="text-sm leading-7 text-studio-muted">{studio.address.map((line) => <span className="block" key={line}>{line}</span>)}</p>
          <a className="mt-2 block text-sm underline underline-offset-4" href={`mailto:${studio.email}`}>{studio.email}</a>
        </div>
        <div>
          <p className="eyebrow mb-4">Informationen</p>
          <div className="flex flex-col items-start gap-3 text-sm text-studio-muted">
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutz">Datenschutz</Link>
            <a href={studio.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
          </div>
        </div>
      </div>
      <div className="border-t border-studio-line px-5 py-5 text-center text-xs text-studio-muted">© {new Date().getFullYear()} {studio.name}</div>
    </footer>
  );
}
