/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "alice-blue": {
          50: "#f0f8ff",
          100: "#e0f0fe",
          200: "#bae2fd",
          300: "#7dcbfc",
          400: "#38b0f8",
          500: "#0e96e9",
          600: "#0277c7",
          700: "#035ea1",
          800: "#075185",
          900: "#0c436e",
        },
      },
    },
  },
  plugins: [],
};
