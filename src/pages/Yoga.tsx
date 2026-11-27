import { useContent } from "../content";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ButtonLink } from "../components/ui/ButtonLink";

export function Yoga() {
  const { yoga: copy, courses } = useContent();
  return (
    <main className="section-shell">
      <p className="eyebrow mb-4">{copy.eyebrow}</p>
      <h1 className="display-title max-w-3xl">{copy.title}</h1>
      <p className="body-copy mt-6">{copy.description}</p>
      <div className="mt-16">
        <SectionHeading eyebrow={copy.coursesEyebrow} title={copy.coursesTitle} />
        <div className="grid gap-5 md:grid-cols-3">
          {courses.map((style) => (
            <article key={style.title} className="card p-7">
              <span className="eyebrow">{style.level}</span>
              <h2 className="mt-5 font-display text-3xl">{style.title}</h2>
              <p className="mt-4 text-sm leading-7 text-studio-muted">{style.description}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-16 rounded-3xl bg-[#ded8ce] p-8 md:p-12">
        <h2 className="font-display text-3xl md:text-4xl">{copy.helpTitle}</h2>
        <p className="mt-4 max-w-xl leading-7 text-studio-muted">{copy.helpDescription}</p>
        <div className="mt-7"><ButtonLink to="/stundenplan">{copy.bookingButton}</ButtonLink></div>
      </div>
    </main>
  );
}
