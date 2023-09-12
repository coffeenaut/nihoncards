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
      extend: {},
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
    ],
  }
  