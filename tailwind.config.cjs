/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        playfair: ['"Playfair Display"', "sans-serif"],
      },

      screens: {
        "2xl": {max: "1535px"},
        // => @media (max-width: 1536px) { ... }

        xl: {max: "1280px"},
        // => @media (max-width: 1280px) { ... }

        lg: {max: "1114px"},
        // => @media (max-width: 1024px) { ... }

        md: {max: "912px"},
        // => @media (max-width: 912px) { ... }

        sm: {max: "820px"},
        // => @media (max-width: 820px) { ... }

        xsm: {max: "768px"},
        // => @media (max-width: 768px) { ... }

        mobile: {max: "540px"},
        // => @media (max-width: 428px) { ... }
      },
    },
  },

  // eslint-disable-next-line global-require
  plugins: [require("@tailwindcss/typography")],
};
