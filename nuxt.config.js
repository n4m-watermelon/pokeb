
require("dotenv").config();
export default {
  ssr: false,
  head: {
    title: 'Test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    script: [
      {
        src: 'https://code.iconify.design/1/1.0.7/iconify.min.js'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap' }
     
    ]
  },
  css: [
    "@/assets/css/app.css"
  ],
  plugins: [
    "@/plugins/repositories.js",
    "@/plugins/elementui.js"
  ],

  components: true,
  buildModules: [
   
    '@nuxtjs/tailwindcss',
  
    "@nuxtjs/dotenv"
  ],
  modules: [
    "@nuxtjs/axios",
  ],
  build: {
  },
  axios: {
    baseURL: process.env.API_BASE_URL,
    common: {
      Accept: 'text/plain, */*'
    },
    // proxyHeaders: false,
    credentials: false,
    proxy: true,
  },

  proxy: {
    '/api': { target: process.env.API_BASE_URL, pathRewrite: {'^/api': ''} }
  },
}
