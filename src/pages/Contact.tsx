import { Mail, MapPin, Phone } from "lucide-react";
import { studio } from "../data/studio";

export function Contact() {
  return (
    <main className="section-shell">
      <p className="eyebrow mb-4">Kontakt & Anfahrt</p>
      <h1 className="display-title max-w-3xl">Wir freuen uns, von dir zu hören.</h1>
      <p className="body-copy mt-6">Du hast eine Frage zu unseren Kursen oder möchtest das Studio kennenlernen? Schreib uns gerne.</p>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        <div className="card p-7"><Mail className="mb-6" /><p className="eyebrow">E-Mail</p><a className="mt-3 block break-all underline underline-offset-4" href={`mailto:${studio.email}`}>{studio.email}</a></div>
        <div className="card p-7"><Phone className="mb-6" /><p className="eyebrow">Telefon</p><a className="mt-3 block" href={`tel:${studio.phone}`}>{studio.phone}</a></div>
        <div className="card p-7"><MapPin className="mb-6" /><p className="eyebrow">Studio</p><p className="mt-3 leading-7">{studio.address.map((line) => <span className="block" key={line}>{line}</span>)}</p></div>
      </div>
      <div className="mt-10 rounded-2xl border border-dashed border-studio-line p-8 text-sm leading-7 text-studio-muted">
        Karten- oder Anfahrtsintegration hier ergänzen. Vor Veröffentlichung bitte Adresse, Kontaktdaten und ggf. Anfahrtsinformationen aktualisieren.
      </div>
    </main>
  );
}
