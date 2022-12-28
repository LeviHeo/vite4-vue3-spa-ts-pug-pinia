import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    /* VitePWA({
			includeAssets: [
				'favicon-16x16.png',
				'favicon-32x32.png',
				'favicon.ico',
				'robots.txt',
				'apple-touch-icon.png',
			],
			manifest: {
				name: 'test name',
				short_name: 'test short name',
				description: 'test description',
				theme_color: '#076AE0',
				icons: [
					{
						src: 'pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: 'pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
					{
						src: 'pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable',
					},
				],
			},
		}), */
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    manifest:false,
    chunkSizeWarningLimit:500,
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',

        assetFileNames: ({name}) => {
			if (/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? '')){
				return 'assets/images/[name]-[hash][extname]';
			}

			if (/\.(woff|woff2)$/.test(name ?? '')) {
				return 'assets/fonts/[name]-[hash][extname]';
			}

			if (/\.css$/.test(name ?? '')) {
				return 'assets/css/[name]-[hash][extname]';
			}
          // default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return 'assets/[name]-[hash][extname]';
        },
      },
    }
  }
})
