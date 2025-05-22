<script setup>
import { closePreloader } from '~/usePreloader';
import { NuxtPage } from '#components';

const route = useRoute()

onMounted(() => {
  setTimeout(() => {
    closePreloader();
  }, 2000);
});

import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, setLocale } = useI18n()

const isDropdownOpen = ref(false)
const currentLang = ref('ru')
const availableLangs = ['ru', 'en', 'uz']

onMounted(() => {
  const savedLang = localStorage.getItem('app-lang')
  if (savedLang && availableLangs.includes(savedLang)) {
    locale.value = savedLang
    currentLang.value = savedLang
    setLocale(savedLang)
  } else {
    currentLang.value = locale.value
    setLocale(locale.value)
  }
})

function toggleLanguageDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value
}

function changeLanguage(lang) {
  locale.value = lang
  currentLang.value = lang
  localStorage.setItem('app-lang', lang)
  setLocale(lang)
  isDropdownOpen.value = false
}

</script>

<template>
  <Shadows />
  <Loading />

  <div class="language-switcher">
    <div class="language__dropdown" @click="toggleLanguageDropdown">
      <div class="language__dropdown-btn">
        <img :src="`https://space-adventure.online/img/flag/${currentLang}.png`" class="language__btn-icon" alt="Flag">
        <div class="language__btn-text">{{ currentLang.toUpperCase() }}</div>
      </div>
      <div v-if="isDropdownOpen" class="language__dropdown-panel">
        <div v-for="lang in availableLangs" :key="lang" class="language__option" @click.stop="changeLanguage(lang)">
          <img :src="`https://space-adventure.online/img/flag/${lang}.png`" alt="Flag">
          <span>{{ lang.toUpperCase() }}</span>
        </div>
      </div>
    </div>
  </div>

  <h1 class="header" v-if="route.path !== '/'">
    <RouterLink style="text-decoration: none;" to="/home">SpaceAdv Helper</RouterLink>
    <span>{{ $t('description') }}</span>
  </h1>
  <div class="container">
    <slot />
  </div>

</template>

<style>
.language-switcher {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 1000;
}

.language__dropdown {
  position: relative;
  cursor: pointer;
}

.language__dropdown-btn {
  display: flex;
  align-items: center;
  background: #29163f;
  padding: 6px 10px;
  border-radius: 14px;
  position: relative;
  z-index: 1;
}

/* Gradient border */
.language__dropdown-btn::before {
  content: "";
  position: absolute;
  top: -3px;
  left: -3px;
  width: calc(100% + 6px);
  height: calc(100% + 6px);
  background: #29163f;
  border-radius: 14px;
  z-index: -1;
}


.language__btn-icon {
  width: 20px;
  height: 20px;
  margin-right: 6px;
}

.language__btn-text {
  color: white;
  font-size: 14px;
}

.language__dropdown-panel {
  position: absolute;
  top: 40px;
  right: 0;
  background: #29163f;
  border-radius: 14px;
  padding: 6px;
  z-index: 10;
}

.language__dropdown-panel::before {
  content: "";
  position: absolute;
  top: -3px;
  left: -3px;
  width: calc(100% + 6px);
  height: calc(100% + 6px);
  background: #29163f;
  border-radius: 14px;
  z-index: -1;
  border: 1px solid aqua;
}


.language__option {
  display: flex;
  align-items: center;
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 10px;
}

.language__option:hover {
  background-color: #3a1f5c;
}

.language__option img {
  width: 20px;
  height: 20px;
  margin-right: 6px;
}

.language__option span {
  color: white;
  font-size: 14px;
}


.ad {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}

@keyframes textAnimation {
  0% {
    color: #fcc755;
    text-shadow: 3px 2px 0 #c5781c;
  }

  50% {
    color: #fc5fff;
    text-shadow: 3px 2px 0 #800a82;
  }

  100% {
    color: #e1e1e1fc;
    text-shadow: 3px 2px 0 #7f7e7efc;
  }
}

.header a {
  animation: textAnimation 1s infinite;
}

.header {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 36px;
}

@keyframes spanAnimation {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.01);
  }

  100% {
    transform: scale(1);
  }
}

.header span {
  color: white;
  font-size: 11px;
  animation: spanAnimation 800ms infinite;
}

.container {
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  max-width: 20vw;
}

@media (max-width: 1400px) {
  .container {
    max-width: 30vw;
  }
}

@media (max-width: 900px) {
  .container {
    max-width: 40vw;
  }
}

@media (max-width: 600px) {
  .container {
    max-width: 80vw;
  }
}

@media (max-width: 335px) {
  .container {
    max-width: 90vw;
  }
}
</style>
