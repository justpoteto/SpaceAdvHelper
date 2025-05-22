<script setup>
import { isVisible } from "@/usePreloader";
</script>


<template>
    <Transition name="preloader">
        <div v-if="isVisible" class="app__preloader">
            <div class="app__preloader-block">
                <div class="app__preloader-left"></div>
                <div class="app__preloader-planets animation-rotate"></div>
                <div class="app__preloader-right"></div>
            </div>
        </div>
    </Transition>
</template>



<style scoped>
.hidden {
    display: none;
}

.app__preloader {
    bottom: 0;
    height: 100vw;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 100vw;
    z-index: 25;
    overflow: hidden;
}

.app__preloader-block {
    height: 100%;
    position: relative;
    width: 100%;
}

.app__preloader-left {
    background-image: url(/ui/door-left.png);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    left: -5%;
    position: absolute;
    transition: .2s;
    width: 60%;
    z-index: 1;
}

.app__preloader-right {
    background-image: url(/ui/door-right.png);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    position: absolute;
    right: -10%;
    transition: .2s;
    width: 60%;
    z-index: 2;
}

.app__preloader-planets {
    background-image: url(/ui/planet-1.png);
    background-repeat: no-repeat;
    background-size: cover;
    bottom: 0;
    height: 150px;
    left: 0;
    margin: auto;
    position: absolute;
    right: -10px;
    top: 0;
    transition: .2s;
    width: 150px;
    z-index: 3;
}

.animation-rotate {
    animation: animation-rotate 35s linear infinite;
}

@keyframes animation-rotate {
    0% {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(1turn)
    }
}


.app__preloader {
    bottom: 0;
    height: 100vh;
    left: 0;
    margin: auto;
    position: fixed;
    right: 0;
    top: 0;
    width: 100vw;
    z-index: 25
}

.app__preloader-block {
    height: 100%;
    position: relative;
    width: 100%
}

.preloader-enter-active,
.preloader-leave-active {
    transition: .3s ease
}

.app__preloader-left {
    background-image: url(/ui/door-left.png);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    left: -5%;
    position: absolute;
    transition: .2s;
    width: 60%;
    z-index: 1
}

.preloader-enter-active .app__preloader-left,
.preloader-leave-active .app__preloader-left {
    left: -5%;
    transition: .3s ease
}

.preloader-enter-from .app__preloader-left,
.preloader-leave-to .app__preloader-left {
    left: -70%
}

.preloader-enter-to .app__preloader-left,
.preloader-leave-from .app__preloader-left {
    left: -5%
}

.app__preloader-right {
    background-image: url(/ui/door-right.png);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    position: absolute;
    right: -10%;
    transition: .2s;
    width: 60%;
    z-index: 2
}

.preloader-enter-active .app__preloader-right,
.preloader-leave-active .app__preloader-right {
    right: -10%;
    transition: .3s ease
}

.preloader-enter-from .app__preloader-right,
.preloader-leave-to .app__preloader-right {
    right: -70%
}

.preloader-enter-to .app__preloader-right,
.preloader-leave-from .app__preloader-right {
    right: -10%
}


.preloader-enter-active .app__preloader-planets,
.preloader-leave-active .app__preloader-planets {
    right: -10px;
    transition: .3s ease
}

.preloader-enter-from .app__preloader-planets,
.preloader-leave-to .app__preloader-planets {
    right: calc(-100% - 150px)
}

.preloader-enter-to .app__preloader-planets,
.preloader-leave-from .app__preloader-planets {
    right: -10px
}
</style>