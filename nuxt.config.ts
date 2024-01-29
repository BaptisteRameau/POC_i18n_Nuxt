// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: [
    "@invictus.codes/nuxt-vuetify",
    "@nuxtjs/i18n"
  ],
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "no_prefix",
    defaultLocale: "en-GB",
    locales: [
      {
        code: "en-GB",
        iso: "en-GB",
        name: "English",
        file: "en-GB.json",
        flag: "🇬🇧",
      },
      {
        code: "fr-FR",
        iso: "fr-FR",
        name: "Français",
        file: "fr-FR.json",
        flag: "🇫🇷",
      },
    ],
  },
})
