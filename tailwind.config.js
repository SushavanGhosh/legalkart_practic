/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "15px",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1120px",
          xl: "1120px",
        },
      },
      backgroundColor: {
        "common-page": "#f9f7ff",
      },
      minHeight: {
        "common-page": "550px",
      },
      boxShadow: {
        "common-shadow": "0 6px 11px 1px #0000000d",
      },
    },
  },
  plugins: [],
};
