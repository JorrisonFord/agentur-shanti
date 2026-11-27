import { EversportsWidget } from "../components/booking/EversportsWidget";

export function Schedule() {
  return (
    <main>
      <section className="section-shell pb-10">
        <p className="eyebrow mb-4">Kurse & Buchung</p>
        <h1 className="display-title max-w-3xl">Dein Platz auf der Matte wartet.</h1>
        <p className="body-copy mt-6">Hier findest du alle aktuellen Kurse und kannst deinen Platz direkt buchen.</p>
      </section>
      <section className="mx-auto max-w-content px-5 pb-20 md:px-8">
        <EversportsWidget />
        <p className="mt-5 text-xs leading-6 text-studio-muted">Die Buchung und Verwaltung deiner Teilnahme erfolgt über Eversports. Bitte beachte die dort hinterlegten Stornierungsbedingungen.</p>
      </section>
    </main>
  );
}
