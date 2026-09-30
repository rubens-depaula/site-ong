import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import { resolve } from "node:path";

export default defineConfig({
    plugins: [
        createHtmlPlugin({
            minify: true
        })
    ],

    build: {
        outDir: "dist",
        emptyOutDir: true,
        minify: "esbuild",
        cssMinify: true,

        rollupOptions: {
            input: {
                index: resolve(
                    process.cwd(),
                    "html/index.html"
                ),

                projetos: resolve(
                    process.cwd(),
                    "html/projetos.html"
                ),

                cadastro: resolve(
                    process.cwd(),
                    "html/cadastro.html"
                )
            }
        }
    }
});