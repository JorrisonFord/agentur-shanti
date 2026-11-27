import { yogaStyles } from "../data/yogaStyles";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ButtonLink } from "../components/ui/ButtonLink";

export function Yoga() {
  return (
    <main className="section-shell">
      <p className="eyebrow mb-4">Yoga bei uns</p>
      <h1 className="display-title max-w-3xl">Bewegung, Atem und Achtsamkeit.</h1>
      <p className="body-copy mt-6">Lerne unsere Kursformate kennen und finde heraus, welche Praxis dich anspricht.</p>
      <div className="mt-16">
        <SectionHeading eyebrow="Kursformate" title="Eine Praxis, viele Wege." />
        <div className="grid gap-5 md:grid-cols-3">
          {yogaStyles.map((style) => (
            <article key={style.title} className="card p-7">
              <span className="eyebrow">{style.level}</span>
              <h2 className="mt-5 font-display text-3xl">{style.title}</h2>
              <p className="mt-4 text-sm leading-7 text-studio-muted">{style.description}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-16 rounded-3xl bg-[#ded8ce] p-8 md:p-12">
        <h2 className="font-display text-3xl md:text-4xl">Du bist dir noch nicht sicher?</h2>
        <p className="mt-4 max-w-xl leading-7 text-studio-muted">Melde dich bei uns oder probiere einen Kurs aus. Wir helfen dir gerne, den passenden Einstieg zu finden.</p>
        <div className="mt-7"><ButtonLink to="/stundenplan">Kurs finden</ButtonLink></div>
      </div>
    </main>
  );
}
