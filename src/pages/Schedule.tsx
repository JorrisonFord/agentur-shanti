import { useContent } from "../content";
import { EversportsWidget } from "../components/booking/EversportsWidget";

export function Schedule() {
  const { schedule: copy } = useContent();
  return (
    <main>
      <section className="section-shell pb-10">
        <p className="eyebrow mb-4">{copy.eyebrow}</p>
        <h1 className="display-title max-w-3xl">{copy.title}</h1>
        <p className="body-copy mt-6">{copy.description}</p>
      </section>
      <section className="mx-auto max-w-content px-5 pb-20 md:px-8">
        <EversportsWidget />
        <p className="mt-5 text-xs leading-6 text-studio-muted">{copy.bookingNote}</p>
      </section>
    </main>
  );
}
