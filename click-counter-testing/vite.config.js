import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({

 plugins: [react(),'prettier', 'eslint-plugin-prettier'],

 server: {

   open: true, // Opens the app in the browser automatically

   port: 3000,

    // Sets the port number for the development server

 },



 test: {

    globals: true,

   environment: 'jsdom',

   //  setupFiles: './src/tests/setup.js',

 },

})

