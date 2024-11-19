/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'serif',]
      },
      backgroundImage: {
        serviceBanner: "url('/src/assets/slider=-1.avif')",
        mentor: "url('/src/assets/mentoring.jpeg')",
        consultation: "url('/src/assets/consultation.jpeg')",
        explore: "url('/src/assets/explore.avif')",
        realization: "url('/src/assets/realization.jpg')"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

