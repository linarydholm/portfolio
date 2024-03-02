import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xxs: [
        '0.8em',
        {
          lineHeight: '1.5em',
          letterSpacing: '0.03em',
          fontWeight: '600',
        },
      ],
      xs: [
        '1em',
        {
          lineHeight: '1.5em',
          letterSpacing: '0.01em',
          fontWeight: '300',
        },
      ],
      s: [
        '1.1em',
        {
          lineHeight: '1.3em',
          letterSpacing: '0.01em',
          fontWeight: '500',
        },
      ],
      m: [
        '1.4em',
        {
          lineHeight: '1.3em',
          letterSpacing: '0.02em',
          fontWeight: '600',
        },
      ],
      l: [
        '1.7em',
        {
          lineHeight: '1.3em',
          letterSpacing: '0.02em',
          fontWeight: '600',
        },
      ],
    },
    extend: {
      colors: {
        default: {
          dark: 'var(--colors-default-dark)',
          light: 'var(--colors-default-light)',
        },
        primary: {
          DEFAULT: 'var(--colors-primary-default)',
          light: 'var(--colors-primary-light)',
          dark: 'var(--colors-primary-dark)',
        },
        secondary: {
          DEFAULT: 'var(--colors-secondary-default)',
          light: 'var(--colors-secondary-light)',
          dark: 'var(--colors-secondary-dark)',
        },
      },
    },
    plugins: [],
  },
};

export default config;
