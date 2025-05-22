<script setup>
const config = useRuntimeConfig()

const money = ref(0);
const ruble = ref(0)

const updateMoney = (event) => {
    const value = Math.round(event.target.value / config.public.coinRubCourse * 100) / 100;
    ruble.value = value;
};

const updateRuble = (event) => {
    const value = Math.round(event.target.value * config.public.coinRubCourse * 100) / 100;
    money.value = value;
};
useSeoMeta({
    title: 'Калькулятор монет — SpaceAdv Helper',
    ogTitle: 'SpaceAdv Helper',
    description: 'Калькулятор монет Space Adventure с переводом в рубли и обратно.',
    ogDescription: 'Калькулятор монет Space Adventure с переводом в рубли и обратно.',
})
</script>

<template>
    <div class="input-container">
        <div class="input-field">
            <img src="/coin_1.png" alt="">
            <div class="styled-input">
                <input type="number" id="money" v-model="money" @input="updateMoney">
            </div>
        </div>

        <br>

        <div class="input-field">
            <img src="/ruble.png" alt="">
            <div class="styled-input">
                <input type="number" id="ruble" v-model="ruble" @input="updateRuble">
            </div>
        </div>

        <div class="info">
            <h1 class="default-text">{{ $t('moneycalculator.title') }}</h1>
            <p class="default-text">{{ $t('moneycalculator.description_1') }}</p>
            <p class="default-text">{{ $t('moneycalculator.description_2') }}</p>
        </div>
    </div>
</template>

<style scoped>
.input-field {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
}

.input-field img {
    max-height: 35px;
    width: auto;
    border-radius: 20%;
}

.styled-input {
    margin-top: 5px;
}
</style>
