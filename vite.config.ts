import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import StylelintPlugin from 'vite-plugin-stylelint';

export default ({ mode }: { mode: string }) => {
    return defineConfig({
        // 设置启动域名、端口、是否自动打开链接等配置信息，可选
        server: {
            host: 'localhost',
            port: 8000,
            open: true
        },
        plugins: [vue(), eslintPlugin(), StylelintPlugin({ fix: true })],
        build: {
            minify: 'terser',
            terserOptions: {
                compress: {
                    drop_console: true,
                    drop_debugger: true
                }
            },
            sourcemap: mode !== 'production',
            cssTarget: 'chrome61'
        }
    });
};
