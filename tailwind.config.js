import flowbite from "flowbite-react/tailwind";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        "font-Arial": ["Arial"],
      },
      animation: {
        "loop-scroll": "loop-scroll 15s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-103%)" },
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
