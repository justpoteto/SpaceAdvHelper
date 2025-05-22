<template>
    <div class="shadows">
        <div id="shadow1">
            <img src="/shadow-4.png" alt="">
        </div>
        <div id="shadow2">
            <img src="/shadow-3.png" alt="">
        </div>
    </div>
</template>

<style scoped>
@keyframes animation-shadow-start_top {
    0% {
        transform: translate3d(-5%, -10%, 0);
    }

    50% {
        transform: translate3d(5%, -5%, 0);
    }

    to {
        transform: translate3d(-5%, -10%, 0);
    }
}

@keyframes animation-shadow-start_bot {
    0% {
        transform: translate3d(10%, 10%, 0);
    }

    50% {
        transform: translate3d(5%, 15%, 0);
    }

    to {
        transform: translate3d(10%, 10%, 0);
    }
}

.shadows {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -10;
    overflow: hidden;
}

#shadow1 {
    position: absolute;
    animation: animation-shadow-start_top 5s linear 2s infinite;
    right: 0;
    top: 10%;
    transform: translate3d(-5%, -10%, 0);
}

#shadow1 img {
    max-width: 100%;
    height: auto;
}

#shadow2 {
    position: absolute;
    animation: animation-shadow-start_bot 5s linear infinite;
    right: 0;
    bottom: 0;
    transform: translate3d(10%, 10%, 0);
}

#shadow2 img {
    max-width: 100%;
    height: auto;
}
</style>