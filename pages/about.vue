<template>
    <main>
        <h1 class="gems-text">{{ $t('about.title') }}</h1>

        <p class="default-text">{{ $t('about.p1') }}</p>
        <p class="default-text">{{ $t('about.p2') }}</p>
    </main>
</template>

<style scoped>
h1 {
    font-size: 20px;
}

main {
    display: flex;
    flex-direction: column;
}
</style>