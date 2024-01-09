import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        dark: '#111827',
        background: '#ffffff',
        primary: '#2668df',
        secondary: '#eed28b',
        accent: '#88e656',
        facebook: '#4267B2',
        linkedin: '#0072b1',
        outlook: '#0072C6',
      },
    },
  },
  plugins: [],
};
export default config;
