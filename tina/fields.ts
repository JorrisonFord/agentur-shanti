import type { TinaField } from "tinacms";

function text(name: string, label: string, multiline = false, required = true): TinaField {
  return {
    type: "string",
    name,
    label,
    required,
    ...(multiline && { ui: { component: "textarea" } }),
  };
}

function group(name: string, label: string, fields: TinaField[]): TinaField {
  return { type: "object", name, label, required: true, fields };
}

function entries(name: string, label: string, titleKey: string, fields: TinaField[]): TinaField {
  return {
    type: "object",
    name,
    label,
    list: true,
    openFormOnCreate: true,
    fields,
    ui: {
      itemProps: (item) => ({ label: item?.[titleKey] || "Neuer Eintrag" }),
    },
  };
}

function pageIntro() {
  return [
    text("eyebrow", "Dachzeile"),
    text("title", "Überschrift"),
    text("description", "Einleitung", true),
  ];
}

function image(name: string, label: string, required = true): TinaField {
  return {
    type: "object",
    name,
    label,
    required,
    fields: [
      { type: "image", name: "src", label: "Bilddatei", required: true },
      text("alt", "Alternativtext"),
    ],
  };
}

function legalPage(name: string, label: string) {
  return group(name, label, [
    text("title", "Überschrift"),
    text("body", "Text", true),
  ]);
}

export const fields: TinaField[] = [
  group("home", "Startseite", [
    text("welcome", "Begrüßung vor dem Studionamen"),
    text("title", "Hauptüberschrift", true),
    image("heroImage", "Titelbild"),
    text("coursesButton", "Button zum Stundenplan"),
    text("studioButton", "Button zum Studio"),
    text("introEyebrow", "Einleitung · Dachzeile"),
    text("introTitle", "Einleitung · Überschrift"),
    text("introDescription", "Einleitung · Text", true),
    text("aboutLink", "Einleitung · Link zum Studio"),
    text("coursesEyebrow", "Kurse · Dachzeile"),
    text("coursesTitle", "Kurse · Überschrift"),
    text("coursesDescription", "Kurse · Text", true),
    text("courseLink", "Kurse · Link zur Yoga-Seite"),
    text("bookingEyebrow", "Buchung · Dachzeile"),
    text("bookingTitle", "Buchung · Überschrift"),
    text("bookingDescription", "Buchung · Text", true),
    text("bookingButton", "Buchung · Button zum Stundenplan"),
    image("bookingImage", "Buchung · Bild"),
  ]),
  group("schedule", "Stundenplan", [
    ...pageIntro(),
    text("bookingNote", "Buchungshinweis", true),
  ]),
  group("yoga", "Yoga-Seite", [
    ...pageIntro(),
    text("coursesEyebrow", "Kurse · Dachzeile"),
    text("coursesTitle", "Kurse · Überschrift"),
    text("helpTitle", "Einstieg · Überschrift"),
    text("helpDescription", "Einstieg · Text", true),
    text("bookingButton", "Button zum Stundenplan"),
  ]),
  group("studioPage", "Studio-Seite", [
    ...pageIntro(),
    image("image", "Studiofoto"),
    text("approachEyebrow", "Unsere Haltung · Dachzeile"),
    text("approachTitle", "Unsere Haltung · Überschrift"),
    text("approachDescription", "Unsere Haltung · Text", true),
    text("teamTitle", "Team · Überschrift"),
    text("contactButton", "Button zur Kontaktseite"),
  ]),
  group("pricing", "Preisseite", [
    ...pageIntro(),
    text("offersTitle", "Überschrift der Angebote"),
    text("priceNote", "Hinweis unter den Preisen", false, false),
    text("bookingButton", "Button zum Stundenplan"),
  ]),
  group("contact", "Kontaktseite", [
    ...pageIntro(),
    text("emailLabel", "Beschriftung E-Mail"),
    text("phoneLabel", "Beschriftung Telefon"),
    text("studioLabel", "Beschriftung Adresse"),
    text("directions", "Anfahrtshinweis", true, false),
  ]),
  group("legal", "Rechtliches", [
    text("eyebrow", "Gemeinsame Dachzeile"),
    legalPage("impressum", "Impressum"),
    legalPage("datenschutz", "Datenschutz"),
    text("notice", "Platzhalterhinweis", false, false),
    text("review", "Prüfhinweis", true, false),
  ]),
  entries("courses", "Kursformate", "title", [
    text("title", "Name"),
    text("level", "Niveau"),
    text("description", "Beschreibung", true),
  ]),
  entries("teachers", "Lehrpersonen", "name", [
    text("name", "Name"),
    text("bio", "Über die Lehrperson", true),
    image("portrait", "Porträt", false),
  ]),
  entries("offers", "Preisangebote", "name", [
    text("name", "Name"),
    text("detail", "Beschreibung", true),
    text("price", "Preis"),
  ]),
  group("studio", "Studiodaten", [
    text("name", "Studioname"),
    text("tagline", "Leitsatz"),
    text("description", "Kurzbeschreibung für Startseite und Footer", true),
    text("email", "E-Mail-Adresse"),
    text("phone", "Telefonnummer"),
    { type: "string", name: "address", label: "Adresszeilen", list: true },
    text("instagram", "Instagram-URL"),
  ]),
  group("navigation", "Navigation", [
    text("yoga", "Link zur Yoga-Seite"),
    text("studio", "Link zur Studio-Seite"),
    text("pricing", "Link zur Preisseite"),
    text("contact", "Link zur Kontaktseite"),
    text("scheduleButton", "Stundenplan-Button"),
    text("mobileScheduleButton", "Mobiler Stundenplan-Button"),
    text("desktopLabel", "Screenreader-Label der Hauptnavigation"),
    text("mobileLabel", "Screenreader-Label der mobilen Navigation"),
    text("openMenu", "Screenreader-Label zum Öffnen"),
    text("closeMenu", "Screenreader-Label zum Schließen"),
  ]),
  group("footer", "Footer", [
    text("contactLabel", "Überschrift Kontakt"),
    text("informationLabel", "Überschrift Informationen"),
    text("imprintLink", "Link zum Impressum"),
    text("privacyLink", "Link zum Datenschutz"),
    text("instagramLink", "Link zu Instagram"),
  ]),
  group("seo", "Suchmaschinen und Browsertitel", [
    text("title", "Browser- und Seitentitel"),
    text("description", "Meta-Beschreibung", true),
  ]),
  group("notFound", "404-Seite", [text("title", "Überschrift")]),
];
