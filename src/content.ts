import { createContext, useContext } from "react";
import content from "../content/de.json";

type Course = { title: string; level: string; description: string };
type Offer = { name: string; detail: string; price: string };
type Teacher = { name: string; bio: string; portrait?: { src: string; alt: string } | null };
type OptionalText = string | null;

export type ContentFile = Omit<typeof content, "courses" | "teachers" | "offers" | "studio" | "contact" | "pricing" | "legal"> & {
  courses?: Course[] | null;
  teachers?: Teacher[] | null;
  offers?: Offer[] | null;
  studio: Omit<typeof content.studio, "address"> & { address?: string[] | null };
  contact: Omit<typeof content.contact, "directions"> & { directions?: OptionalText };
  pricing: Omit<typeof content.pricing, "priceNote"> & { priceNote?: OptionalText };
  legal: Omit<typeof content.legal, "notice" | "review"> & { notice?: OptionalText; review?: OptionalText };
};

export function normalizeContent(site: ContentFile) {
  return {
    ...site,
    courses: site.courses ?? [],
    teachers: site.teachers ?? [],
    offers: site.offers ?? [],
    studio: { ...site.studio, address: site.studio.address ?? [] },
  };
}

export const ContentContext = createContext(normalizeContent(content));

export function useContent() {
  return useContext(ContentContext);
}
