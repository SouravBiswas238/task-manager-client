/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#371B58",
          secondary: "#5B4B8A",
          accent: "#7858A6",
          neutral: "#2C3639",
          "base-100": "#ffffff",
        },
      },
    ],
  },


  plugins: [require("daisyui")],
}
