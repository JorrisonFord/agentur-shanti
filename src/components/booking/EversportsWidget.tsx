
import { useEffect, useRef } from "react";

const SCRIPT_URL =
  "https://widget-static.eversports.io/loader.js";

export function EversportsWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    const initializeWidget = () => {
      if (cancelled || !containerRef.current) return;

      // Bereits vorhandenes Eversports-Script entfernen
      document
        .querySelectorAll(`script[src="${SCRIPT_URL}"]`)
        .forEach((script) => script.remove());

      // Script erneut laden
      const script = document.createElement("script");
      script.type = "module";
      script.src = SCRIPT_URL;
      script.async = true;

      document.body.appendChild(script);
    };

    initializeWidget();

    return () => {
      cancelled = true;
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
