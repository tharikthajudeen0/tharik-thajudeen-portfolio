/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#002244',
        'nav-custom-blue': '#13274F',
        'custom-light-Blue' : '#90c2e7',
        'custom-gray': '#C0C0C0',
        'custom-green': '#99BC85',
        'custom-light-green': '#E1F0DA',
        'light-blue': '#1d3557',
      },
    },
  },
  plugins: [],
}

