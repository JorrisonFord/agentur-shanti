import { defineConfig } from "tinacms";
import { fields } from "./fields";

export default defineConfig({
  branch: process.env.TINA_PUBLIC_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.TINA_PUBLIC_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  telemetry: "disabled",
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: ".tina-admin",
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "images",
    },
  },
  schema: {
    collections: [
      {
        name: "site",
        label: "Website-Inhalte",
        path: "content",
        format: "json",
        match: { include: "de" },
        ui: {
          allowedActions: { create: false, delete: false },
          router: () => "/",
        },
        fields,
      },
    ],
  },
});
