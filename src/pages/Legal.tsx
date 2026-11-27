type Props = { type: "impressum" | "datenschutz" };

export function Legal({ type }: Props) {
  const isImprint = type === "impressum";
  return (
    <main className="section-shell min-h-[60vh]">
      <p className="eyebrow mb-4">Rechtliches</p>
      <h1 className="display-title">{isImprint ? "Impressum" : "Datenschutzerklärung"}</h1>
      <div className="mt-10 max-w-3xl rounded-2xl border border-dashed border-studio-line p-6 text-sm leading-7 text-studio-muted">
        <strong className="text-studio-ink">Platzhalter – nicht veröffentlichen.</strong>
        <p className="mt-3">
          {isImprint
            ? "Hier müssen die vollständigen Anbieterangaben, Kontaktinformationen und ggf. Angaben zur Aufsichtsbehörde ergänzt werden."
            : "Hier müssen die tatsächlichen Datenverarbeitungen der Website, Hosting, Kontaktaufnahme, Eversports-Einbindung, Cookies und ggf. Analyse- oder Marketingdienste beschrieben werden."}
        </p>
        <p className="mt-3">Bitte vor Veröffentlichung rechtlich prüfen und an die tatsächlich eingesetzten Dienste anpassen.</p>
      </div>
    </main>
  );
}
