/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        "marine-blue": "hsl(213, 96%, 18%)",
        "marine-blue-hover": "hsl(213,72%,31%)",
        "purplish-blue": "hsl(243, 100%, 62%)",
        "purplish-blue-hover": "hsl(243, 100%, 77%)",
        "pastel-blue": "hsl(228, 100%, 84%)",
        "light-blue": " hsl(206, 94%, 87%)",
        "strawberry-red": "hsl(354, 84%, 57%)",
        "light-gray": "hsl(231, 11%, 63%)",
        magnolia: " hsl(217, 100%, 97%)",
        alabaster: "hsl(231, 100%, 99%)",
        white: "hsl(0, 0%, 100%)",
      },
      boxShadow: {
        primary: "0 25px 40px -20px rgba(0, 0, 0, 0.10);",
      },
      backgroundImage: {
        "sidebar-mobile": "url('/images/bg-sidebar-mobile.svg')",
        "sidebar-desktop": "url('/images/bg-sidebar-desktop.svg')",
      },
      gridTemplateColumns: {
        custom: "17.125rem minmax(0,1fr) 1fr",
      },
      screens: {
        sm: "360px",
        lg: "960px",
      },
    },
  },
  plugins: [],
};
