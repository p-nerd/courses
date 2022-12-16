/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{jsx,tsx}"],
    theme: {
        extend: {
            spacing: {
                120: "36rem",
            },
        },
    },
    plugins: [],
};
