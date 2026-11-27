import { useEffect, useState, type ReactNode } from "react";
import { useTina } from "tinacms/dist/react";
import type { TinaField } from "tinacms";
import { fields } from "../tina/fields";
import site from "../content/de.json";
import { ContentContext, normalizeContent, type ContentFile } from "./content";

function selection(fields: TinaField[]): string {
  return fields.map((field) => {
    if (field.type === "object" && field.fields) {
      return `${field.name} { ${selection(field.fields)} }`;
    }
    return field.name;
  }).join(" ");
}

const query = `
  query SitePreview($relativePath: String!) {
    site(relativePath: $relativePath) { ${selection(fields)} }
  }
`;
const variables = { relativePath: "de.json" };

type PreviewData = { site: ContentFile };
// The admin supplies live GraphQL data after the iframe loads the published snapshot.
const publishedData: PreviewData = { site };

function LiveContent({ initialData, children }: { initialData: PreviewData; children: ReactNode }) {
  const { data } = useTina({ query, variables, data: initialData });
  const content = normalizeContent(data.site);

  useEffect(() => {
    document.title = content.seo.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", content.seo.description);
  }, [content.seo.title, content.seo.description]);

  return <ContentContext.Provider value={content}>{children}</ContentContext.Provider>;
}

export default function TinaPreview({ children }: { children: ReactNode }) {
  const [data, setData] = useState<PreviewData | undefined>(
    import.meta.env.DEV ? undefined : publishedData,
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!import.meta.env.DEV) return;

    const controller = new AbortController();
    async function load() {
      try {
        const response = await fetch("http://localhost:4001/graphql", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query, variables }),
          signal: controller.signal,
        });
        if (!response.ok) throw new Error(`Tina API: HTTP ${response.status}`);
        const result: { data?: PreviewData; errors?: unknown[] } = await response.json();
        if (result.errors?.length || !result.data?.site) throw new Error("Tina preview response");
        setData(result.data);
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error(error);
          setError(true);
        }
      }
    }

    void load();
    return () => controller.abort();
  }, []);

  if (error) return <p role="alert">Die Tina-Vorschau konnte nicht geladen werden. Prüfe, ob der lokale CMS-Server läuft.</p>;
  return data ? <LiveContent initialData={data}>{children}</LiveContent> : null;
}
