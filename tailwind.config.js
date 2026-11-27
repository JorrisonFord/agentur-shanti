/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        studio: {
          paper: "var(--color-paper)",
          ink: "var(--color-ink)",
          muted: "var(--color-muted)",
          accent: "var(--color-accent)",
          line: "var(--color-line)"
        }
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-body)"]
      },
      maxWidth: {
        content: "var(--content-width)"
      }
    }
  },
  plugins: []
};
