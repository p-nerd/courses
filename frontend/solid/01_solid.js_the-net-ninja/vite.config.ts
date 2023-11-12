import { defineConfig } from "vite";

import solid from "vite-plugin-solid";
import tsconfigPaths from "vite-tsconfig-paths";
import devtools from "solid-devtools/vite";

export default defineConfig({
    plugins: [
        solid(),
        tsconfigPaths(),
        devtools({
            autoname: true,
        }),
    ],
    server: {
        host: true,
        port: 3000,
        watch: {
            usePolling: true,
        },
    },
});
