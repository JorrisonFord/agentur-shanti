import { cp, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { defineConfig, type Connect } from "vite";
import react from "@vitejs/plugin-react";
import type content from "./content/de.json";

function escapeHtml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

const adminFolder = new URL("./.tina-admin/admin/", import.meta.url);

const redirectAdmin: Connect.NextHandleFunction = (request, response, next) => {
  const location = request.url?.replace(/^\/admin\/?(\?|$)/, "/admin/index.html$1");
  if (location && location !== request.url) {
    response.writeHead(302, { Location: location }).end();
    return;
  }
  next();
};

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    {
      name: "site-content",
      async transformIndexHtml(html) {
        const source = await readFile(new URL("./content/de.json", import.meta.url), "utf8");
        const { seo } = JSON.parse(source) as typeof content;

        return html
          .replace("__SITE_TITLE__", () => escapeHtml(seo.title))
          .replace("__SITE_DESCRIPTION__", () => escapeHtml(seo.description));
      },
    },
    mode === "cms" && {
      name: "tina-admin",
      configureServer(server) {
        server.middlewares.use(redirectAdmin);
        server.middlewares.use((request, response, next) => {
          const path = request.url?.split("?")[0];
          if (path !== "/admin/index.html") return next();

          void readFile(new URL("index.html", adminFolder)).then(
            (html) => response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" }).end(html),
            next,
          );
        });
      },
      configurePreviewServer(server) {
        server.middlewares.use(redirectAdmin);
      },
      async writeBundle({ dir }) {
        const output = resolve(dir ?? "dist", "admin");
        await cp(new URL("index.html", adminFolder), resolve(output, "index.html"));
        await cp(new URL("assets/", adminFolder), resolve(output, "assets"), { recursive: true });
      },
    },
  ],
}));
