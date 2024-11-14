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
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './src/**/*.{html,js,jsx,ts,tsx}', // Include all your source files
//     './node_modules/flowbite/**/*.js',  // Add this line for Flowbite
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('flowbite/plugin'), // Ensure Flowbite plugin is added here
//   ],
// };
