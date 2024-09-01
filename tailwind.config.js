// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Add paths to all files where Tailwind classes are used
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        workSans: ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
