import { ref } from "vue";

export const isVisible = ref(true);

export function closePreloader() {
    isVisible.value = false;
}

export function openPreloader() {
    isVisible.value = true;
}
