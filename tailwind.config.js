/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Include all your source files for Tailwind purging
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), // Add Flowbite plugin here
  ],
};
