import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@api': resolve(__dirname, './src/services'),
      '@utils': resolve(__dirname, './src/utils'),
      '@assets': resolve(__dirname, './src/assets'),
      '@components': resolve(__dirname, './src/components'),
      '@pages': resolve(__dirname, './src/pages'),
      '@redux': resolve(__dirname, './src/redux'),
      '@img': resolve(__dirname, './src/assets/images'),
      '@sass': resolve(__dirname, './src/assets/sass'),
      '@routes': resolve(__dirname, './src/routes'),
      '@locales': resolve(__dirname, './src/locales'),
    },
  },
  plugins: [react(), createStyleImportPlugin({ resolves: [AntdResolve()] })],
  build: {
    outDir: 'build',
  },
  server: {
    port: 3301,
    open: false,
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
      scopeBehaviour: 'local',
      globalModulePaths: [/assets\/sass\/global\//],
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
})
