/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#e0f2fe", // light blue
          DEFAULT: "#3b82f6", // Tailwind blue-500
          dark: "#1e40af", // deep blue
        },
      },
    },
  },
  plugins: [],
};
