<script setup>
defineProps({
    splash: {
        type: String,
        default: "",
        required: false,
    },
    to: {
        type: String,
        required: true,
    }
})
</script>

<template>
    <RouterLink class="navButton" :to="to">
        <slot />
        <span class="splashLabel gems-style" v-if="splash != ''">{{ splash }}</span>
    </RouterLink>
</template>

<style scoped>
.splashLabel {
    position: absolute;
    top: -6px;
    right: -5px;
    background-color: red;
    color: white;
    font-size: 13px;
    font-weight: bold;
    padding: 4px;
    border-radius: 5px;
    text-transform: uppercase;
}

.navButton {
    position: relative;
    display: inline-block;
    padding: 10px 15px;

    text-align: center;
    padding: 14px 20px;
    background: url("/btn-xl-yellow.png");
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: #fe5302;
    text-shadow: 2px 1px 0 #ad4a1b;
    text-decoration: none;
    font-size: 20px;
    width: 100%;
}
</style>