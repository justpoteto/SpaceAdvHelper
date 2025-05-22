<script setup>
const config = useRuntimeConfig()

const money = ref(0);
const ruble = ref(0)

const updateMoney = (event) => {
    const value = Math.round(event.target.value * config.public.gemsRubCourse * 100) / 100;
    ruble.value = value;
};

const updateRuble = (event) => {
    const value = Math.round(event.target.value / config.public.gemsRubCourse * 100) / 100;
    money.value = value;
};

useSeoMeta({
    title: 'Калькулятор баунти — SpaceAdv Helper',
    ogTitle: 'SpaceAdv Helper',
    description: 'Калькулятор баунти с переводом в рубли и обратно.',
    ogDescription: 'Калькулятор баунти с переводом в рубли и обратно.',
})
</script>

<template>
    <div class="input-container">
        <div class="input-field">
            <img src="/donate.png" alt="">
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

            <h1 class="default-text">{{ $t('bountycalculator.title') }}</h1>
            <p class="default-text">{{ $t('bountycalculator.description_1') }}</p>
            <p class="default-text">{{ $t('bountycalculator.description_2') }}</p>
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
