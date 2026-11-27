
import { useEffect, useRef } from "react";

const SCRIPT_URL =
  "https://widget-static.eversports.io/loader.js";

export function EversportsWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${SCRIPT_URL}"]`
    );

    if (!script) {
      script = document.createElement("script");
      script.type = "module";
      script.src = SCRIPT_URL;
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      // Nur den Widget-Container leeren, nicht das globale Script entfernen.
      if (container) {
        container.replaceChildren();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-eversports-widget-id="774907fb-c23e-4d52-a476-49e89c272c2f"
      className="w-full min-h-[600px]"
    />
  );
}
