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
        "loop-scroll": "loop-scroll 30s linear infinite",
        "loop-scroll-reverse": "loop-scroll-reverse 30s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-104%)" },
        },
        "loop-scroll-reverse": {
          from: { transform: "translateX(-104%)" },
          to: { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
