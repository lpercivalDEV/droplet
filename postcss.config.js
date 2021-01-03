const tailwindcss = require("tailwindcss");

module.exports = {
  important: false,
  plugins: [tailwindcss("./tailwind.js"), require("autoprefixer")],
};
