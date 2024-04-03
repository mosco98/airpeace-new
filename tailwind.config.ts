import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem"
        }
      },
      fontFamily: {
        fraunces: ["var(--font-fraunces)", ...fontFamily.sans]
      }
    }
  },
  plugins: []
};
export default config;
