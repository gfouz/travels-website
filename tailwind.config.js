/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/theme');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/components/(button|date-picker|badge|navbar|card|dropdown|link|autocomplete|select|tooltip|spacer|input|modal).js',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [nextui()],
  /*plugins: [require("daisyui")],
  daisyui: {
    themes: ["forest",  "coffee"]
  }*/
};
