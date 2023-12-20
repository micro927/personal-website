import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      light: '#eef6e5',
      background: {
        50: '#f4f9ec',
        100: '#e8f2d9',
        200: '#d2e6b3',
        300: '#bbd98c',
        400: '#a5cc66',
        500: '#090c04',
        600: '#729933',
        700: '#557326',
        800: '#394d19',
        900: '#1c260d',
        950: '#0e1306',
      },
      primary: {
        50: '#f4fbe9',
        100: '#e9f8d3',
        200: '#d3f1a7',
        300: '#beea7b',
        400: '#a8e250',
        500: '#bfea80',
        600: '#75af1d',
        700: '#588415',
        800: '#3a580e',
        900: '#1d2c07',
        950: '#0f1604',
      },
      secondary: {
        50: '#ecf6f8',
        100: '#d9edf2',
        200: '#b3dae5',
        300: '#8dc8d8',
        400: '#67b5cb',
        500: '#2a697a',
        600: '#348298',
        700: '#276272',
        800: '#1a414c',
        900: '#0d2126',
        950: '#071013',
      },
      accent: {
        50: '#eceef8',
        100: '#d9dcf2',
        200: '#b3bae5',
        300: '#8d97d8',
        400: '#6774cb',
        500: '#4f5ec2',
        600: '#344198',
        700: '#273172',
        800: '#1a214c',
        900: '#0d1026',
        950: '#070813',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
