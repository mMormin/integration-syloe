/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: '#e077a7',
        purple: '#9351b1',
        darkpurple: '#271134',
        green: '#2c750c',
        darkgreen: '#1a3d04',
        blue: '#4161e9',
        darkblue: '#082343',
        lightgrey: '#e1e1e1',
        grey: '#a1a0a0',
        greyvariant: '#9fa4bd',
        lightblack: '#2f2f2f',
      },

      borderRadius: {
        custom: '0 0 0 6rem',
      },
      padding: {
        custom: '8.5rem 2.5rem 3rem 2.5rem',
      },
      inset: {
        custom: '-9.5rem',
        inherit: 'inherit',
      },
      right: {
        inherit: 'inherit',
      },
      height: {
        header: '8.5rem',
      },
      fontSize: {
        header: [
          '0.7rem',
          {
            lineHeight: '1rem',
            letterSpacing: '0.02em',
            fontWeight: 'bold',
          },
        ],
        xxs: [
          '0.7rem',
          {
            letterSpacing: '0.05em',
            lineHeight: '0.7rem',
          },
        ],
        date: [
          '0.75rem',
          {
            lineHeight: '1.7rem',
          },
        ],
      },
    },
  },
};
