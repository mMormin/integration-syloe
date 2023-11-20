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
        grey: '#8f8f8f',
      },

      borderRadius: {
        custom: '0 0 0 6rem',
      },
      padding: {
        custom: '8.5rem 3.5rem 2rem 3.5rem',
      },
      inset: {
        custom: '-9.5rem',
      },
    },
  },
};
