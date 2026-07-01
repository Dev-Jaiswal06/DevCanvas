import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['**/*.{png,ico,svg}'],
      manifest: {
        name: 'DevCanvas - Learn to Code',
        short_name: 'DevCanvas',
        description: 'Master HTML, CSS, JavaScript, and React with interactive lessons, coding playground, and projects.',
        theme_color: '#070B1A',
        background_color: '#070B1A',
        display: 'standalone',
        orientation: 'portrait-primary',
        start_url: '/',
        icons: [
          { src: '/pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: '/pwa-512x512.png', sizes: '512x512', type: 'image/png' },
          { src: '/pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
        categories: ['education', 'programming', 'development'],
        screenshots: [],
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 6000000,
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json}'],
        runtimeCaching: [
          {
            urlPattern: /^https?:\/\/.*\.(png|jpg|jpeg|svg|gif|webp)/,
            handler: 'CacheFirst',
            options: { cacheName: 'images-cache', expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 30 } },
          },
        ],
      },
    }),
  ],
})