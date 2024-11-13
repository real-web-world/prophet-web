import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { resolve, extname } from 'path'
import { env } from 'process'
const commitID = env.COMMIT_ID
const version = commitID?.substring(0, 8)
const cdnPrefix = `https://k-static.buffge.com:40012/s/hh-lol-prophet/web/${version}`
// import { analyzer } from 'vite-bundle-analyzer'
// https://vitejs.dev/config/
export default defineConfig({
  experimental: {
    renderBuiltUrl(filename, { hostId, hostType, type }) {
      if (filename == "index.hmtl") {
        return { runtime: `window.__assetsPath(${JSON.stringify(filename)})` }
      }
      // if (type === 'public') {
      //   return 'https://www.domain.com/' + filename
      // } else if (extname(hostId) === '.js') {
      //   return { runtime: `window.__assetsPath(${JSON.stringify(filename)})` }
      // } else {
      return cdnPrefix + "/" + filename
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@api': resolve(__dirname, './src/services'),
      '@utils': resolve(__dirname, './src/utils'),
      '@assets': resolve(__dirname, './src/assets'),
      '@components': resolve(__dirname, './src/components'),
      '@pages': resolve(__dirname, './src/pages'),
      '@img': resolve(__dirname, './src/assets/images'),
      '@sass': resolve(__dirname, './src/assets/sass'),
      '@routes': resolve(__dirname, './src/routes'),
      '@locales': resolve(__dirname, './src/locales'),
    },
  },
  plugins: [react(),
  //  analyzer({}),
  VitePWA({
    injectRegister: 'inline',
    minify: true,
    registerType: 'autoUpdate',
    workbox: {
      globIgnores: ['**/staticwebapp.config.json'],
      globPatterns: ['**/*.{js,css,ico,png,svg,webp,jpg,html,json,webmanifest}'],
      skipWaiting: true,
      modifyURLPrefix: {
        "index.html": "/index.html",
        "": cdnPrefix + "/"
      }
    },
    manifest: {
      "name": "lol对局先知",
      "lang": "zh-CN",
      "short_name": "lol对局先知",
      "icons": [
        {
          "src": cdnPrefix + "/icon/pwa-192x192.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "any"
        },
        {
          "src": cdnPrefix + "/icon/pwa-512x512.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "any"
        },
        {
          "src": cdnPrefix + "/icon/pwa-maskable-192x192.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "maskable"
        },
        {
          "src": cdnPrefix + "/icon/pwa-maskable-512x512.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "maskable"
        }
      ],
      "start_url": "/",
      "display": "standalone",
      "background_color": "#FFFFFF",
      "theme_color": "#ffffff",
      "description": "lol对局先知"
    }
  })],
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
      additionalData: '@import "@sass/global/global.scss";',
      scss: {
        api: "modern"
      }
    },
  },
})
