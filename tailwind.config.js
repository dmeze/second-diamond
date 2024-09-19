/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.border-gradient-pink': {
          border: '0.6px solid transparent',
          'border-image-source':
            'linear-gradient(90deg, #CF4B92 0%, #523CC7 100%)',
          'border-image-slice': '1',
        },
        '.border-gradient-gray': {
          border: '0.6px solid transparent',
          'border-image-source':
            'linear-gradient(93.97deg, rgba(255, 255, 255, 0.33) 0%, #FFFFFF 47.02%, rgba(255, 255, 255, 0.33) 94.87%)',
          'border-image-slice': '1',
        },
        'input[type="date"]::-webkit-calendar-picker-indicator': {
          display: 'none',
          '-webkit-appearance': 'none',
        },
        'input[type="date"]::-webkit-inner-spin-button': {
          display: 'none',
          '-webkit-appearance': 'none',
        },
        'input[type="date"]': {
          display: 'block',
          'min-width': '90%',
          '-webkit-appearance': 'textfield',
          '-moz-appearance': 'textfield',
          appearance: 'none',
        },
      })
    }),
  ],
}
