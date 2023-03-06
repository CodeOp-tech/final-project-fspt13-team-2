/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",],
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      daisyui: {
        styled: true,
        themes: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "dark",
      },
      colors: {
        'blue': '#88e8e6',
        'pink': '#c15a6b',
        'gray-dark': '#313c44',
        'green': '#345353',
        'gray-light': '#617a87',
        'dark-blue':'#69a8a8'
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }  
      },
    },
    plugins: [
      require("daisyui")
    ],

    "tailwindCSS.includeLanguages": { plaintext: "javascript" },
  }
