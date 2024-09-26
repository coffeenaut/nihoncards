/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/components/**/*.vue',
      './src/router/**/*.js',
      './src/views/**/*.vue',
      './src/App.vue',
      './src/main.js',
      './index.html',
    ],
    theme: {
      fontFamily: {
        serif: ['Inter var', 'ui-sans-serif' ,'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji']
      },
      colors: {
        dark: {
          primary: "#227B94",
          secondary: "#FFDC7F",
          tertiary: "#16325B",
          accent: "#78B7D0",
        },
        light: {
          primary: "#16325B",
          secondary: "#227B94",
          tertiary: "#78B7D0",
          accent: "#FFDC7F",
          text: "#213547",
        }
        
      },
      extend: {},
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
    ],
  }
  