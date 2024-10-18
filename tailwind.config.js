/** @type {import('tailwindcss').Config} */
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import defaultTheme from "tailwindcss/defaultTheme"; // Use ES module import
import colors from "tailwindcss/colors"; // Use ES module import

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",  // Add dark mode setting
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        gray: {
          default: '#D0D0D0',
          200: '#9A9A9A'
        },
        darkblue: {
          default: '#0F172A',
        }
      },
      // Include any other extensions you might have from defaultTheme or colors
      // Example:
      // fontFamily: {
      //   sans: ['Inter', ...defaultTheme.fontFamily.sans],
      // },
    },  // Keep the existing extend structure
  },
  plugins: [
    // Include the custom plugin to add color variables
    addVariablesForColors,
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g., var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}
