import { defineConfig } from "vite";
const path = require('path')
import { resolve } from 'path'

export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, './src/index.html'),
        project: resolve(__dirname, './src/project.html'),
        member: resolve(__dirname, './src/member.html'),
        about: resolve(__dirname, './src/about.html'),
        link: resolve(__dirname, './src/link.html'),
      },
    },
  },
  server: {
    port: 8080
  }
})