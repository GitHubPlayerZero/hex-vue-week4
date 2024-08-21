import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/hex-vue3-week4/',
	plugins: [vue()],
	//在開發過程中啟用 sourcemap
	css: {
		devSourcemap: true,
	},
	server: {
		// 啟動 server 時預設自動開啟的頁面
		open: './index.html',
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
