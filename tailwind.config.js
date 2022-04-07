const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{md,astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      display: defaultTheme.fontFamily.sans,
      body: defaultTheme.fontFamily.mono,
    },
    extend: {
      spacing: {
        half: "50%",
      },
      maxWidth: {
        container: "var(--container-width)",
      },
      colors: ({ colors }) => ({
        "brand-light-blue": "var(--light-blue)",
        "brand-link-blue": "var(--link-blue)",
        "brand-old-purple": "var(--old-purple)",
        "brand-purple": "var(--purple)",
        "brand-dark-purple": "var(--dark-purple)",
        "brand-dark-red": "var(--dark-red)",
        "brand-dark-red-analogous": "var(--dark-red-analogous)",
        "brand-dark-yellow": "var(--dark-yellow)",
        "brand-dark-yellow-analogous": "var(--dark-yellow-analogous)",
        "brand-dark-green": "var(--dark-green)",
        "brand-dark-green-analogous": "var(--dark-green-analogous)",
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
