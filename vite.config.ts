import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                // English Pages (Directly in root or subdirectories)
                main: resolve(__dirname, 'index.html'),
                company: resolve(__dirname, 'company/index.html'),
                systems: resolve(__dirname, 'systems/index.html'),
                innovation: resolve(__dirname, 'innovation/index.html'),
                contact: resolve(__dirname, 'contact/index.html'),

                // Spanish Pages (Inside the /es/ folder)
                es_main: resolve(__dirname, 'es/index.html'),
                es_company: resolve(__dirname, 'es/company/index.html'),
                es_systems: resolve(__dirname, 'es/systems/index.html'),
                es_innovation: resolve(__dirname, 'es/innovation/index.html'),
                es_contact: resolve(__dirname, 'es/contact/index.html'),
            },
        },
    },
    server: {
        open: true,
    },
});