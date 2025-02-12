/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bg':"url('/images/bg1.jpg')",
        'profilePic1':"url('images/VicPasseport1.png')",
        'profilePic2':"url('images/VicPasseport2.png')"

        
      }
    },
  },
  plugins: [],
}
