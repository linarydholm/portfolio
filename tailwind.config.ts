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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
