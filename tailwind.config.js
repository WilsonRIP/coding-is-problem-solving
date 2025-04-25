/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      // Colors are defined as CSS variables in globals.css
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
      },
    },
  },
  plugins: [],
}

export default config
