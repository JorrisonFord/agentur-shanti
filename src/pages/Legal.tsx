import { useContent } from "../content";
type Props = { type: "impressum" | "datenschutz" };

export function Legal({ type }: Props) {
  const { legal: copy } = useContent();
  const page = copy[type];
  return (
    <main className="section-shell min-h-[60vh]">
      <p className="eyebrow mb-4">{copy.eyebrow}</p>
      <h1 className="display-title">{page.title}</h1>
      <div className="mt-10 max-w-3xl rounded-2xl border border-dashed border-studio-line p-6 text-sm leading-7 text-studio-muted">
        {copy.notice && <strong className="text-studio-ink">{copy.notice}</strong>}
        <p className="mt-3 whitespace-pre-line">{page.body}</p>
        {copy.review && <p className="mt-3">{copy.review}</p>}
      </div>
    </main>
  );
}
