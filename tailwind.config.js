/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3dUnclicked': 'inset -1px -2px 3px #181b20b7',
        '3dClicked': 'inset 1px 1px 3px #181b20b7',
      },
    },
  },
  plugins: [],
}