// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#1D4ED8', // Blue
//         secondary: '#E5E7EB', // Green
//         tertiary: '#D1D5DB', // Gray
//         accent: '#D97706', // Amber
//         hover: '#2563EB', // Light Blue
//         textLight: '#6B7280', // Gray for less emphasized text
        
//       },
//       fontFamily: {
//         bangla: ["'Maateen Bangla'", 'sans-serif'], // Custom Bangla font
//       },
//     },
//   },
//   plugins: [],
// }
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // This includes all your React components
  ],
    theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Blue
        secondary: '#E5E7EB', // Green
        tertiary: '#D1D5DB', // Gray
        accent: '#FFC107', // Amber
        hover: '#2563EB', // Light Blue
        textLight: '#6B7280', // Gray for less emphasized text
        
      },
      fontFamily: {
        bangla: ["'Maateen Bangla'", 'sans-serif'], // Custom Bangla font
      },
    },
  },
  plugins: [],
}
