import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary_text: '#FFFFFF',
        secondary_text: '#FFFFFF80',
        highlight_text: '#e0204f',
      },
    },
    fontFamily: {
      spacegrotesk: ['spacegrotesk'],
      dmsans: ['dmsans'],
    },
  },
  plugins: [],
};
export default config;
