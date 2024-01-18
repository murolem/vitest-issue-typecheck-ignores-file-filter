/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
    test: {
        typecheck: {
            include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)']
        }
    }
})