/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bg1':"url('/bg1.jpg')",
        'bg2':"url('/screen.png')",
        'bg3':"url('/banner3.png')",
        
      }
    },
  },
  plugins: [],
}
