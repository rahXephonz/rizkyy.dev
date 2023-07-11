/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Tight", "sans-serif"],
        grotesk: ['"Space Grotesk"', "sans-serif"],
      },

      screens: {
        "2xl": {max: "1535px"},
        // => @media (max-width: 1535px) { ... }

        xl: {max: "1280px"},
        // => @media (max-width: 1280px) { ... }

        lg: {max: "1114px"},
        // => @media (max-width: 1024px) { ... }

        md: {max: "912px"},
        // => @media (max-width: 912px) { ... }

        sm: {max: "820px"},
        // => @media (max-width: 820px) { ... }

        xsm: {max: "540px"},
        // => @media (max-width: 540px) { ... }

        mobile: {max: "428px"},
        // => @media (max-width: 428px) { ... }
      },
    },
  },

  // eslint-disable-next-line global-require
  plugins: [require("@tailwindcss/typography")],
};
