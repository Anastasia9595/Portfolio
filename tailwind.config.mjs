/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "background-color-left": "#eeaeca",
        "background-color-right": "#94bbe9",
      },
    },
  },
  plugins: [],
};
