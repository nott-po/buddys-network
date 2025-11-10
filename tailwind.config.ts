import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5D9AB8',
          light: '#7BB8D6',
          dark: '#4A8DAD',
        },
        secondary: {
          DEFAULT: '#A4C989',
          light: '#B5D39B',
          dark: '#8DB86E',
        },
        accent: {
          navy: '#2D3E50',
          teal: '#6CAAC8',
          lime: '#9BC98F',
        },
        neutral: {
          darkGray: '#2C3E50',
          gray: '#5A6C7D',
          lightGray: '#E8F3F5',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['5rem', { lineHeight: '1.1', fontWeight: '700' }], // 80px
        hero: ['4.5rem', { lineHeight: '1.1', fontWeight: '700' }], // 72px
        title: ['3.5rem', { lineHeight: '1.2', fontWeight: '700' }], // 56px
        heading: ['2.5rem', { lineHeight: '1.3', fontWeight: '700' }], // 40px
      },
      boxShadow: {
        soft: '0 10px 40px rgba(0, 0, 0, 0.08)',
        glass: '0 8px 32px rgba(93, 154, 184, 0.12)',
        glow: '0 0 30px rgba(164, 201, 137, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
