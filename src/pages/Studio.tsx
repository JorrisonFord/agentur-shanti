import { useContent } from "../content";
import { ButtonLink } from "../components/ui/ButtonLink";

export function Studio() {
  const { studioPage: copy, teachers } = useContent();
  return (
    <main>
      <section className="section-shell">
        <p className="eyebrow mb-4">{copy.eyebrow}</p>
        <h1 className="display-title max-w-3xl">{copy.title}</h1>
        <p className="body-copy mt-6">{copy.description}</p>
      </section>
      <section className="mx-auto grid max-w-content gap-10 px-5 pb-20 md:grid-cols-2 md:items-center md:px-8">
        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-[#ded8ce]">
          <img src={copy.image.src} alt={copy.image.alt} className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="eyebrow mb-4">{copy.approachEyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl">{copy.approachTitle}</h2>
          <p className="mt-5 leading-8 text-studio-muted">{copy.approachDescription}</p>
        </div>
      </section>
      {teachers.length > 0 && (
        <section className="section-shell pt-0">
          <h2 className="mb-8 font-display text-3xl md:text-4xl">{copy.teamTitle}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {teachers.map((teacher, index) => (
              <article key={index} className="card overflow-hidden">
                {teacher.portrait && (
                  <img src={teacher.portrait.src} alt={teacher.portrait.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
                )}
                <div className="p-7">
                  <h3 className="font-display text-2xl">{teacher.name}</h3>
                  <p className="mt-4 whitespace-pre-line text-sm leading-7 text-studio-muted">{teacher.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
      <div className="section-shell pt-0"><ButtonLink to="/kontakt" variant="secondary">{copy.contactButton}</ButtonLink></div>
    </main>
  );
}
