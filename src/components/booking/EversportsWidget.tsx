
import { useEffect } from "react";

export function EversportsWidget() {
  useEffect(() => {
    const scriptUrl =
      "https://widget-static.eversports.io/loader.js";

    // Script nicht mehrfach laden
    const existingScript = document.querySelector(
      `script[src="${scriptUrl}"]`
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = scriptUrl;
      script.async = true;
      script.defer = true;

      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      data-eversports-widget-id="774907fb-c23e-4d52-a476-49e89c272c2f"
      className="w-full min-h-[600px]"
    />
  );
}
