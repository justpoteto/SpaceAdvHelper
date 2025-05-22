export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  css: ["@/assets/main.css"],

  modules: ["@nuxtjs/i18n"],

  runtimeConfig: {
    public: {
      coinRubCourse: "108",
      gemsRubCourse: "3",
    },
  },

  i18n: {
    defaultLocale: "ru",
    strategy: "no_prefix",
    langDir: "locales",
    lazy: false,
    locales: [
      { code: "en", file: "en.json", name: "English" },
      { code: "ru", file: "ru.json", name: "Русский" },
      { code: "uz", file: "uz.json", name: "Oʻzbekcha" },
    ],
  },
});
