import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: [resolve(__dirname, "script.js")],
            formats: ["es"],
            name: "[name]",
            fileName: "[name]",
        },
        outDir: "public/build",
        emptyOutDir: false,
    },
});
