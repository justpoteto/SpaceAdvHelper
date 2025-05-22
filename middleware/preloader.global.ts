import { openPreloader, closePreloader } from "~/usePreloader";

export default defineNuxtRouteMiddleware(async () => {
    openPreloader();
    await new Promise(resolve => setTimeout(resolve, 500));
    closePreloader();
  });
  