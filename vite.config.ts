import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import type { PluginOption } from 'vite';
// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()] as PluginOption[],
});
