import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        neon: '0 0 5px theme("colors.purple.200"), 0 0 20px theme("colors.purple.700")',
      },
    },
  },
  plugins: [
    plugin(({ theme, addUtilities }) => {
      const neon = {};
      const colors = theme('colors');
      for (const color in colors) {
        const col = colors[color];
        if (typeof col === 'object') {
          const col1 = col['500'];
          const col2 = col['700'];
          neon[`.neon-${color}`] = {
            boxShadow: `0 0 5px ${col1}, 0 0 20px ${col2}`,
          };
        }
      }
      addUtilities(neon);
    }),
  ],
};
