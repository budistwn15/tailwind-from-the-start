/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
        'sans': ['Work Sans', 'sans-serif'],
    },
    extend: {
        container: {
            center: true,
            padding: '1rem'
        },
        colors:{
            'primary': '#FF6363',
        }
    },
  },
  plugins: [],
}
