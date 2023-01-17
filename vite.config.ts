import path from "path";
import * as url from "url";
import { defineConfig } from "vite";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
    build: {
        sourcemap: true,
        minify: true,
        lib: {
            formats: ["es", "cjs"],
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "dickster",
            fileName: (format) => {
                switch (format) {
                    case "cjs":
                        return `dickster.cjs`;
                    case "es":
                        return `dickster.js`;
                }
                throw Error("konstigt modulformat");
            },
        },
    },
});
