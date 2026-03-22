import type { Config } from 'tailwindcss';
 
const config: Config = {
  darkMode: 'class',         // ← ต้องเป็น 'class' เพื่อให้ next-themes ทำงานได้
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './providers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
 
export default config;
 