module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      primary: {
        dark: "#F57D00",
        base: "#FF9800",
        light: "#FFCD80",
        lighter: "#FFF3F0",
      },
      secondary: {
        dark: "#1E3340",
        base: "#2F4858",
        light: "#A8BFCF",
        lighter: "#E5F0FB",
      },
      tertiary: {
        purpleNavy: "#4A5783",
        frenchLilac: "#8E5B9A",
        mysticPink: "#D6568B",
        bitterSweet: "#FF675B",
      },
      neutrals: {
        black: "#282928",
        base800: "#4A4B4A",
        base700: "#696A69",
        base600: "#7E7E7E",
        base500: "#A8A9A8",
        base400: "#C5C7C5",
        base300: "#E7E9E7",
        base200: "#F1F2F1",
        base100: "#F6F7F6",
        gray50: "#FAFCFA",
        white: "#ffffff",
      },
      support: {
        success: "#2FB83E",
        successLight: "#C5E9C6",
        error: "#E03333",
        errorLinght: "#FDCCD1",
        warning: "#DFCA10",
        gray400: "#F4F4BE",
      },
    },
    extend: {},
  },
  variants: {
    extend: {
      fill: ["hover", "group-hover"],
      stroke: ["hover", "group-hover"],
    },
  },
  plugins: [],
};
