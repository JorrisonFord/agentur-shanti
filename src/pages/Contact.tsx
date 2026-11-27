import { useContent } from "../content";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  const { contact: copy, studio } = useContent();
  return (
    <main className="section-shell">
      <p className="eyebrow mb-4">{copy.eyebrow}</p>
      <h1 className="display-title max-w-3xl">{copy.title}</h1>
      <p className="body-copy mt-6">{copy.description}</p>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        <div className="card p-7"><Mail className="mb-6" /><p className="eyebrow">{copy.emailLabel}</p><a className="mt-3 block break-all underline underline-offset-4" href={`mailto:${studio.email}`}>{studio.email}</a></div>
        <div className="card p-7"><Phone className="mb-6" /><p className="eyebrow">{copy.phoneLabel}</p><a className="mt-3 block" href={`tel:${studio.phone}`}>{studio.phone}</a></div>
        <div className="card p-7"><MapPin className="mb-6" /><p className="eyebrow">{copy.studioLabel}</p><p className="mt-3 leading-7">{studio.address.map((line) => <span className="block" key={line}>{line}</span>)}</p></div>
      </div>
      {copy.directions && (
        <div className="mt-10 rounded-2xl border border-dashed border-studio-line p-8 text-sm leading-7 text-studio-muted">
          {copy.directions}
        </div>
      )}
    </main>
  );
}
