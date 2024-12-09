/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "#F16718": "#F16718",
        "#FF9B62": "#FF9B62",
        "#162542": "#162542",
        "#7B8BAD": "#7B8BAD",
        "#E8EFF2": "#E8EFF2",
      },
      backgroundImage: {
        "phone-and-keyboard-mobile":
          "url('../assets/mobile/image-phone-and-keyboard.jpg')",
        "phone-and-keyboard-tablet":
          "url('../assets/tablet/image-phone-and-keyboard.jpg')",
        "phone-and-keyboard-desktop":
          'url("../assets/desktop/image-phone-and-keyboard.jpg")',
        "glass-and-keyboard-mobile":
          'url("../assets/mobile/image-glass-and-keyboard.jpg")',
        "glass-and-keyboard-tablet":
          'url("../assets/tablet/image-glass-and-keyboard.jpg")',
        "glass-and-keyboard-desktop":
          'url("../assets/desktop/image-glass-and-keyboard.jpg")',
        "keyboard-desktop": 'url("../assets/desktop/image-keyboard.jpg")',
        "keyboard-tablet": 'url("../assets/tablet/image-keyboard.jpg")',
        "keyboard-mobile": 'url("../assets/mobile/image-keyboard.jpg")',
      },
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
