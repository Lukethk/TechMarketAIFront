/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 30px 80px rgba(14, 36, 84, 0.18)",
      },
      colors: {
        ink: {
          950: "#081120",
        },
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 20% 20%, rgba(90, 139, 255, 0.22), transparent 0 23%), radial-gradient(circle at 80% 18%, rgba(120, 179, 255, 0.18), transparent 0 18%), linear-gradient(135deg, #eef5ff 0%, #f8fbff 48%, #edf3ff 100%)",
      },
    },
  },
  plugins: [],
};
