import { ButtonLink } from "../components/ui/ButtonLink";

export function Studio() {
  return (
    <main>
      <section className="section-shell">
        <p className="eyebrow mb-4">Das Studio</p>
        <h1 className="display-title max-w-3xl">Ein Ort zum Ankommen.</h1>
        <p className="body-copy mt-6">Wir glauben daran, dass Yoga mehr ist als die Zeit auf der Matte. Es ist eine Einladung, den eigenen Körper bewusster wahrzunehmen und im Alltag neue Balance zu finden.</p>
      </section>
      <section className="mx-auto grid max-w-content gap-10 px-5 pb-20 md:grid-cols-2 md:items-center md:px-8">
        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-[#ded8ce]">
          <img src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=1200&q=85" alt="Heller Yogaraum mit Matten" className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="eyebrow mb-4">Unsere Haltung</p>
          <h2 className="font-display text-3xl md:text-4xl">Yoga in deinem Tempo.</h2>
          <p className="mt-5 leading-8 text-studio-muted">Unser Studio soll ein offener und wertschätzender Ort sein. Hier geht es nicht um Perfektion, sondern um deine persönliche Erfahrung – unabhängig davon, wo du gerade stehst.</p>
        </div>
      </section>
      <div className="section-shell pt-0"><ButtonLink to="/kontakt" variant="secondary">Lerne uns kennen</ButtonLink></div>
    </main>
  );
}
