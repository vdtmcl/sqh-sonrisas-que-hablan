/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ri: {
          red: "#FF5F66",
          blue: "#174EFF",
          ink: "#0B0D12",
          graphite: "#3B3E46",
          mist: "#F5F6F8"
        }
      },
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
        serif: ["Lora", "Georgia", "serif"]
      },
      boxShadow: {
        editorial: "0 24px 80px rgba(11, 13, 18, 0.12)"
      }
    }
  },
  plugins: []
};
