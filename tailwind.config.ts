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
        dark: 'rgb(var(--colors-dark))',
        'dark-bg': 'rgb(var(--colors-dark-bg))',
        light: 'rgb(var(--colors-light))',
        'light-bg': 'rgb(var(--colors-light-bg))',
        primary: 'rgb(var(--colors-primary))',
        secondary: 'rgb(var(--colors-secondary))',
        tertiary: 'rgba(var(--colors-tertiary), 1)',
        'tertiary-60': 'rgba(var(--colors-tertiary), 0.6)',
        'tertiary-20': 'rgba(var(--colors-tertiary), 0.2)',
        quaternary: 'rgb(var(--colors-quaternary))',
      },
      backgroundImage: {
        'bg-img-test': "url('/public//aiony-haust-3TLl_97HNJo-unsplash.jpg')",
      },
    },
    plugins: [],
  },
};

export default config;
