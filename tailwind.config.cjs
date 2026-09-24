/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./index.html",
    "./chi-sono.html",
    "./consulenze-unity.html",
    "./eventi-gruppi.html",
    "./percorsi-reiki.html",
    "./contatti.html",
    "./assets/js/**/*.js",
    "./src/**/*.js",
  ],

  theme: {
    extend: {
      colors: {
        /* BRAND GOLD */
        primary: "#C9A15C",
        "primary-dark": "#A27C35",
        "primary-light": "#F4E2BF",
        "primary-tint": "#FFF8F1",

        /* WARM NEUTRALS (match CSS variables) */
        "warm-100": "#F7F3EB",
        "warm-200": "#F2E8DA",
        "warm-300": "#E3D7C3",
        "warm-500": "#9B8A77",
        "warm-600": "#7C6A57",
        "warm-700": "#2F2417",

        /* FEEDBACK */
        success: "#4BA27C",
        warning: "#D59B2C",
        error: "#C8615C",

        /* OPTIONAL NIGHT MODE */
        "night-bg": "#17141F",
        "night-surface": "#221E2B",
        "night-muted": "#6C6480",
        "night-text": "#F3ECFF",
      },

      fontFamily: {
        heading: ["Poppins", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },

      borderRadius: {
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "20px",
        pill: "999px",
        card: "1.5rem",
        xl: "0.75rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },

      boxShadow: {
        soft: "0 8px 24px rgba(38, 20, 21, 0.08)",
        subtle: "0 4px 12px rgba(38, 20, 21, 0.04)",
      },

      maxWidth: {
        content: "70rem",
      },

      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },

  // ⚠️ QUI il punto critico: deve essere un ARRAY, non un oggetto, non altro
  plugins: [],
};
