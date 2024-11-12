// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@nuxtjs/supabase",
    "@nuxt/image",
    "nuxt-calendly",
  ],
  supabase: {
    redirect: false,
  },
  runtimeConfig: {
    public: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY,
    },
  },
});