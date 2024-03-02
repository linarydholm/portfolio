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
      keyframes: {
        // bounce: {
        //   '0%, 100%': { transform: 'scale(1, 1)' },
        //   '50%': { transform: 'scale(0.5)' },
        // },
        // opacity: {
        //   '0%': { opacity: '0' },
        //   '100%': { opacity: '100' },
        // },
        test: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(-30%)' },
        },
      },
      animation: {
        test: 'test 1s ease-in-out',
      },
      colors: {
        dark: 'var(--color-dark)',
        light: 'var(--color-light)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      // example from tailwind:
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
    plugins: [],
  },
};

export default config;
