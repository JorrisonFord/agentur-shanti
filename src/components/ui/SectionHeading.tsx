type Props = { eyebrow?: string; title: string; description?: string; centered?: boolean };

export function SectionHeading({ eyebrow, title, description, centered = false }: Props) {
  return (
    <div className={centered ? "mx-auto mb-10 max-w-2xl text-center md:mb-14" : "mb-10 max-w-2xl md:mb-14"}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="font-display text-3xl leading-tight tracking-tight md:text-5xl">{title}</h2>
      {description && <p className="mt-5 leading-7 text-studio-muted">{description}</p>}
    </div>
  );
}
