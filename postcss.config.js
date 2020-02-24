const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

module.exports = {
    plugins: [
        tailwindcss,
        autoprefixer({
            add: true,
            grid: true
        }),
        ...process.env.NODE_ENV === 'production'
            ? [] // Production related plugin in the future
            : [],
    ],
};
