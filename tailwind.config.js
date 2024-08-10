/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blueColor': 	'#96DED1',
        'greyish': '#808080',

      }
    },
  },
  plugins: [],
}

