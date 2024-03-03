/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  important: '#__next',
  theme: {
    /* Mantineと一致させる: https://mantine.dev/theming/responsive */
    screens: {
      xs: '576px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1400px',
    },
    animation: {
      'rotate-center': 'rotate-center 0.4s cubic-bezier(0.175, 0.885, 0.320, 1.275)  1 reverse forwards',
    },
    keyframes: {
      'rotate-center': {
        '0%': {
          transform: 'rotate(0)',
        },
        to: {
          transform: 'rotate(360deg)',
        },
      },
    },
  },
  plugins: [],
};
