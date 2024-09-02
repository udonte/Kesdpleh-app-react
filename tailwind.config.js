/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Your custom colors for light mode
        "deskit-blue-300": "#041438",
        "deskit-blue-600": "#172F51",
        "deskit-orange-600": "#E07101",
        "deskit-orange-700": "#FA8212",
        "deskit-gray-200": "#E8EAEE",
        "deskit-gray-400": "#A6ABC8",
        "deskit-gray-500": "#A6ABC833",
        "deskit-gray-600": "#959AB722",
        "deskit-red-500": "#DB0000",
        // dark mode
        "deskit-black-500": "#2A2B2D",
        "deskit-black-400": "#2D2E30",
        "deskit-black-300": "#2F3033",
        "deskit-black-200": "#2F3033",
        "deskit-black-150": "#343536",
        "deskit-black-100": "#4F545B",
        "deskit-black-50": " #A3A4A4",
      },
    },
  },
  plugins: [],
};
