
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'min-907': '907px',
        'max-908': '908px', // Define custom breakpoint
      },
    },
  },
  plugins: [],
}
