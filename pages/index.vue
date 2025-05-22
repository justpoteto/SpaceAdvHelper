<script setup>
useSeoMeta({
    title: 'SpaceAdv Helper',
    ogTitle: 'SpaceAdv Helper',
    description: 'Точка входа в SpaceAdv Helper',
    ogDescription: 'Точка входа в SpaceAdv Helper',
})
</script>

<template>
    <div class="main">
        <div class="app__start-spaceship">
            <img src="/ui/spaceship.png">
        </div>

        <div class="app__start-first_name">
            <div class="app__start-first_name_img" data-firstname="s"><img src="/ui/S.png"></div>
            <div class="app__start-first_name_img" data-firstname="p"><img src="/ui/P.png"></div>
            <div class="app__start-first_name_img" data-firstname="a"><img src="/ui/A.png"></div>
            <div class="app__start-first_name_img" data-firstname="c"><img src="/ui/C.png"></div>
            <div class="app__start-first_name_img" data-firstname="e"><img src="/ui/E.png"></div>
        </div>

        <div class="app__start-second_name"><img src="/ui/adventure.png" alt=""></div>

        <RouterLink to="/home">
            <button class="active-yellow-button">{{ $t('start') }}</button>
        </RouterLink>
    </div>
</template>

<style lang="css" scoped>
footer {
    position: fixed;
    bottom: 0;
    left: 0;
    font-size: 10px;
}

button {
    margin-top: 15px;
}

@keyframes animation-second_name {
    0% {
        transform: scale(1) translateY(0)
    }

    3% {
        transform: scale(.9) translateY(0)
    }

    7% {
        transform: scale(1.05) translateY(-10px)
    }

    10% {
        transform: scale(1.1) translateY(-2px)
    }

    14% {
        transform: scale(.93) translateY(6px)
    }

    18%,
    to {
        transform: scale(1) translateY(0)
    }
}

.app__start-second_name {
    animation: animation-second_name 5s ease-out infinite;
    margin-top: 15px;
    position: relative;
    width: 60%;
    z-index: 2
}

.app__start-second_name img {
    width: 100%
}

.app__start-first_name {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 45px;
    position: relative;
    width: 80%
}

.app__start-first_name_img {
    height: 80px;
    position: relative;
    width: 80px
}

.app__start-first_name:before {
    background: #4166d4;
    border-radius: 50%;
    box-shadow: 0 0 50px 40px #4166d4;
    content: "";
    display: block;
    height: 100px;
    opacity: .3;
    position: absolute;
    top: 20px;
    width: 100%;
    z-index: 1
}

.app__start-first_name_img img {
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-name: animation-first_name;
    animation-timing-function: linear;
    height: 100%;
    position: relative;
    width: 100%;
    z-index: 1
}

.app__start-spaceship {
    animation: animation-spaceship 5s linear infinite;
    position: relative;
    width: 40%
}

.app__start-spaceship img {
    position: relative;
    width: 100%;
    z-index: 2
}

.app__start-spaceship:before {
    background: #51bddb;
    box-shadow: 0 0 45px 15px #51bddb;
    left: 6%;
    top: 47%;
    width: 85%
}

.app__start-spaceship:after,
.app__start-spaceship:before {
    border-radius: 50%;
    content: "";
    display: block;
    height: 10px;
    position: absolute;
    transform: rotate(-15deg);
    z-index: 1
}

.app__start-spaceship:after {
    background: #ff391e;
    bottom: 30%;
    box-shadow: 0 0 20px 20px #ff391e;
    right: 30%;
    width: 35%
}

@keyframes animation-spaceship {
    0% {
        transform: rotate(4deg) translateY(3px)
    }

    50% {
        transform: rotate(-5deg) translateY(-20px)
    }

    to {
        transform: rotate(4deg) translateY(3px)
    }
}

.main {
    display: flex;
    align-items: center;
    align-content: center;
    flex-direction: column;
    margin: auto;
    z-index: 5;
}
</style>