/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { // 60-30-10 Color Rule
        // TODO: Review Colors & Naming Convention
        // Goal: Naming Convention to allow for same pattern with 
        //  varying color schemes for if we want to switch later
        'primary': '#131B23', //Rich Black
        'secondary': '#E9F1F7', // Alice Blue
        'accent': '#77BCE4' //Maya Blue
        // https://coolors.co/77bce4-e7dfc6-e9f1f7-131b23-816c61
      }
    },
  },
  plugins: [],
}

