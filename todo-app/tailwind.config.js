/** @type {import('tailwindcss').Config} */
export default {
  //jit mode
  mode: "jit",
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],

	// affected files
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "520px": "520px"
      },
      spacing: {

      },
      colors: {
      }
    },
    plugins: [],
  }
}

