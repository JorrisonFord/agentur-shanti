import { useContent } from "../content";
import { ButtonLink } from "../components/ui/ButtonLink";
import { SectionHeading } from "../components/ui/SectionHeading";

export function Pricing() {
  const { pricing: copy, offers } = useContent();
  return (
    <main className="section-shell">
      <p className="eyebrow mb-4">{copy.eyebrow}</p>
      <h1 className="display-title max-w-3xl">{copy.title}</h1>
      <p className="body-copy mt-6">{copy.description}</p>
      <div className="mt-14">
        <SectionHeading title={copy.offersTitle} />
        <div className="grid gap-4 md:grid-cols-3">
          {offers.map((option) => (
            <article key={option.name} className="card p-7">
              <h2 className="font-display text-2xl">{option.name}</h2>
              <p className="mt-3 min-h-12 text-sm text-studio-muted">{option.detail}</p>
              <p className="mt-8 font-display text-4xl">{option.price}</p>
              {copy.priceNote && <p className="mt-2 text-xs text-studio-muted">{copy.priceNote}</p>}
            </article>
          ))}
        </div>
      </div>
      <div className="mt-12"><ButtonLink to="/stundenplan">{copy.bookingButton}</ButtonLink></div>
    </main>
  );
}
