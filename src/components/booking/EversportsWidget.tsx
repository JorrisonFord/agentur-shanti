type Props = { title?: string; description?: string };

/**
 * Eversports integration placeholder.
 * Replace the data attribute / loader with the exact embed snippet supplied
 * by the studio's Eversports Manager. Do not guess the widget API.
 */
export function EversportsWidget({
  title = "Aktueller Stundenplan",
  description = "Wähle deinen Kurs und buche deinen Platz direkt über Eversports."
}: Props) {
  const widgetId = import.meta.env.VITE_EVERSPORTS_WIDGET_ID;

  return (
    <section className="card p-5 md:p-8" aria-labelledby="booking-widget-title">
      <div className="mb-6">
        <h2 id="booking-widget-title" className="font-display text-2xl md:text-3xl">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-studio-muted">{description}</p>
      </div>

      {widgetId ? (
        <div className="eversports-widget min-h-96" data-eversports-widget-id={widgetId}>
          {/* Eversports widget should render here once its official loader and embed markup are configured. */}
        </div>
      ) : (
        <div className="flex min-h-72 flex-col items-center justify-center rounded-xl border border-dashed border-studio-line bg-studio-paper p-6 text-center">
          <p className="font-medium">Eversports-Kalender wird hier eingebunden</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-studio-muted">
            Hinterlege deine Widget-ID in der Datei <code>.env</code> und ergänze den offiziellen Embed-Code aus deinem Eversports-Manager.
          </p>
          <span className="mt-4 rounded-full bg-white px-4 py-2 text-xs text-studio-muted">Widget noch nicht konfiguriert</span>
        </div>
      )}
    </section>
  );
}
