import { useContent } from "../content";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { tinaField } from "tinacms/dist/react";
import { ButtonLink } from "../components/ui/ButtonLink";
import { SectionHeading } from "../components/ui/SectionHeading";

export function Home() {
  const { home: copy, studio, courses } = useContent();
  return (
    <main>
      <section className="relative min-h-[680px] overflow-hidden bg-[#d8d2c7]">
        <img
          src={copy.heroImage.src}
          alt={copy.heroImage.alt}
          data-tina-field={tinaField(copy.heroImage, "src") || undefined}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative mx-auto flex min-h-[680px] max-w-content items-end px-5 pb-16 pt-28 text-white md:items-center md:px-8 md:py-24">
          <div className="max-w-3xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em]">{copy.welcome} {studio.name}</p>
            <h1
              data-tina-field={tinaField(copy, "title") || undefined}
              className="whitespace-pre-line font-display text-5xl leading-[1.04] tracking-tight md:text-7xl"
            >
              {copy.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/85 md:text-lg">{studio.description}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink to="/stundenplan" reloadDocument>
                {copy.coursesButton} <ArrowRight size={16} />
              </ButtonLink>
              <Link to="/studio" className="inline-flex items-center rounded-full border border-white/70 px-6 py-3 text-sm font-medium transition hover:bg-white/15">
                {copy.studioButton}
              </Link>
            </div>
          </div>
          <ArrowDownRight className="absolute bottom-8 right-8 hidden md:block" size={34} strokeWidth={1} />
        </div>
      </section>

      <section className="section-shell grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="eyebrow mb-4">{copy.introEyebrow}</p>
          <h2 className="display-title">{copy.introTitle}</h2>
        </div>
        <div>
          <p className="body-copy">{copy.introDescription}</p>
          <Link to="/studio" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold">{copy.aboutLink} <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="bg-white/45">
        <div className="section-shell">
          <SectionHeading eyebrow={copy.coursesEyebrow} title={copy.coursesTitle} description={copy.coursesDescription} />
          <div className="grid gap-4 md:grid-cols-3">
            {courses.map((style, index) => (
              <article key={style.title} className="card p-7">
                <p className="eyebrow mb-8">0{index + 1} / {style.level}</p>
                <h3 className="font-display text-2xl">{style.title}</h3>
                <p className="mt-4 text-sm leading-7 text-studio-muted">{style.description}</p>
                <Link to="/yoga" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold">{copy.courseLink} <ArrowRight size={15} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid overflow-hidden rounded-3xl bg-[#ded8ce] md:grid-cols-2">
          <div className="p-8 md:p-14">
            <p className="eyebrow mb-4">{copy.bookingEyebrow}</p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">{copy.bookingTitle}</h2>
            <p className="mt-5 max-w-md leading-7 text-studio-muted">{copy.bookingDescription}</p>
            <div className="mt-8"><ButtonLink to="/stundenplan" reloadDocument >{copy.bookingButton} <ArrowRight size={16} /></ButtonLink></div>
          </div>
          <img src={copy.bookingImage.src} alt={copy.bookingImage.alt} className="h-72 w-full object-cover md:h-full" />
        </div>
      </section>
    </main>
  );
}
