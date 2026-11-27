import { ButtonLink } from "../components/ui/ButtonLink";
import { SectionHeading } from "../components/ui/SectionHeading";

const options = [
  { name: "Probestunde", detail: "Für deinen ersten Besuch", price: "XX €" },
  { name: "Einzelkarte", detail: "Eine Stunde ganz flexibel", price: "XX €" },
  { name: "5er-Karte", detail: "Fünf Einheiten nach deinem Rhythmus", price: "XX €" }
];

export function Pricing() {
  return (
    <main className="section-shell">
      <p className="eyebrow mb-4">Preise & Karten</p>
      <h1 className="display-title max-w-3xl">Finde das passende Format für dich.</h1>
      <p className="body-copy mt-6">Hier findest du eine Übersicht unserer Buchungsoptionen. Die konkreten Preise und Konditionen kannst du später ergänzen.</p>
      <div className="mt-14">
        <SectionHeading title="Deine Möglichkeiten" />
        <div className="grid gap-4 md:grid-cols-3">
          {options.map((option) => (
            <article key={option.name} className="card p-7">
              <h2 className="font-display text-2xl">{option.name}</h2>
              <p className="mt-3 min-h-12 text-sm text-studio-muted">{option.detail}</p>
              <p className="mt-8 font-display text-4xl">{option.price}</p>
              <p className="mt-2 text-xs text-studio-muted">Preis bitte ergänzen</p>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-12"><ButtonLink to="/stundenplan">Jetzt Kurs buchen</ButtonLink></div>
    </main>
  );
}
