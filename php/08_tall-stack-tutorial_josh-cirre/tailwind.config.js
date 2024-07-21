import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import wireuiPreset from "./vendor/wireui/wireui/tailwind.config.js";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",

    presets: [wireuiPreset],

    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./vendor/wireui/wireui/src/*.php",
        "./vendor/wireui/wireui/ts/**/*.ts",
        "./vendor/wireui/wireui/src/WireUi/**/*.php",
        "./vendor/wireui/wireui/src/Components/**/*.php",
    ],

    theme: {
        extend: {
            colors: {
                primary: colors.rose,
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
};
