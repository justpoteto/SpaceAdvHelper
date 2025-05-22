<script setup>
const { t, locale } = useI18n()
const config = useRuntimeConfig()

const options = ref([]);
for (let i = 2; i <= 15; i++) {
    options.value.push([`${i} ${t('lvl')}`, i]);
}

const currentLevel = ref(null);
const desiredLevel = ref(null);

const isButtonDisabled = computed(() => !currentLevel.value || !desiredLevel.value);
const isResultTextShow = ref(false);
const isResultShow = ref(false);
const resultText = ref("");

const resultCoins = ref(0);
const resultBounty = ref(0);
const resultRubles = ref(0);

const levelCosts = [
    { level: 2, coins: 590, bounty: 150 },
    { level: 3, coins: 2080, bounty: 220 },
    { level: 4, coins: 4750, bounty: 300 },
    { level: 5, coins: 10850, bounty: 330 },
    { level: 6, coins: 25150, bounty: 400 },
    { level: 7, coins: 44700, bounty: 510 },
    { level: 8, coins: 65000, bounty: 550 },
    { level: 9, coins: 107500, bounty: 565 },
    { level: 10, coins: 175000, bounty: 780 },
    { level: 11, coins: 258000, bounty: 900 },
    { level: 12, coins: 330000, bounty: 1020 },
    { level: 13, coins: 397000, bounty: 1090 },
    { level: 14, coins: 484000, bounty: 1150 },
    { level: 15, coins: 551000, bounty: 1190 },
];

function calculate() {
    if (isButtonDisabled.value) return;
    isResultTextShow.value = true;

    if (desiredLevel.value <= currentLevel.value) {
        resultText.value = t('lvlcalculator.result_error');
        isResultShow.value = false;
        return;
    }

    isResultShow.value = true;
    resultText.value = t('lvlcalculator.result', { lvl: desiredLevel.value });

    let coinsPrice = 0;
    let bountyPrice = 0;

    for (let level = currentLevel.value; level < desiredLevel.value; level++) {
        const cost = levelCosts.find((cost) => cost.level === level + 1);
        if (cost) {
            coinsPrice += cost.coins;
            bountyPrice += cost.bounty;
        }
    }

    resultBounty.value = bountyPrice;
    resultCoins.value = coinsPrice;
    resultRubles.value = Math.round(bountyPrice * config.public.gemsRubCourse);
}

useSeoMeta({
    title: 'Калькулятор уровней — SpaceAdv Helper',
    ogTitle: 'SpaceAdv Helper',
    description: 'Калькулятор уровней SpaceAdventure, посчитайте стоимость уровня в монетах, баунти, рублях.',
    ogDescription: 'Калькулятор уровней SpaceAdventure, посчитайте стоимость уровня в монетах, баунти, рублях.',
})
</script>

<template>
    <div class="input-container">
        <label>{{ $t('lvlcalculator.current_lvl') }}
            <div class="select-wrapper">
                <select v-model="currentLevel" class="level-select">
                    <option v-for="(option, index) in options" :key="index" :value="option[1]">
                        {{ option[0] }}
                    </option>
                </select>
            </div>
        </label>

        <label>{{ $t('lvlcalculator.desired_lvl') }}
            <div class="select-wrapper">
                <select v-model="desiredLevel" class="level-select">
                    <option v-for="(option, index) in options" :key="index" :value="option[1]">
                        {{ option[0] }}
                    </option>
                </select>
            </div>
        </label>

        <button :disabled="isButtonDisabled" class="active-yellow-button" @click="calculate">
            {{ $t('calculate') }}
        </button>

        <div>
            <p class="gems-text" style="margin:0;padding:0;">&copy; SpaceAdv Helper</p>
            <p class="default-text" v-show="isResultTextShow">{{ resultText }}</p>
            <div v-show="isResultShow" class="currencies">
                <p class="result default-text"><img src="/coin_1.png" class="icon"> <span
                        class="mini-text yellow-text">{{
                            resultCoins }}</span> {{ $t('lvlcalculator.money') }}, {{ $t('lvlcalculator.or') }}</p>
                <p class="result default-text"><img src="/donate.png" class="icon"> <span class="mini-text gems-text">{{
                    resultBounty }}</span> {{ $t('lvlcalculator.bounty') }}, {{ $t('lvlcalculator.or') }}</p>
                <p class="result default-text"><img src="/ruble.png" class="icon"> <span
                        class="mini-text yellow-text">{{
                            resultRubles }}</span> {{ $t('lvlcalculator.rubles') }}</p>
            </div>
        </div>


        <div class="info">
            <h1 class="default-text">{{ $t('lvlcalculator.title') }}</h1>
            <p class="default-text">{{ $t('lvlcalculator.description_1') }}</p>
            <p class="default-text">{{ $t('lvlcalculator.description_2') }}</p>
        </div>
    </div>
</template>

<style scoped>
.mini-text {
    font-size: 25px;
}

.icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.result {
    gap: 10px;
    display: flex;
    align-items: center;
}

button:active {
    transform: scale(.96) translateX(1px) translateY(3px)
}

.input-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.level-select {
    margin: 0;
    width: 100%;
    padding: 12px;
    font-size: 16px;
    background: #29163f;
    border: none;
    border-radius: 10% 14px 15% 18px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
    color: white;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.level-select:hover {
    background: #3a1f5c;
}

.level-select:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
}

.active-yellow-button {
    border: none;
    text-align: center;
    padding: 14px 20px;
    background: url("/btn-xl-yellow.png");
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: #fe5302;
    text-shadow: 2px 1px 0 #ad4a1b;
    text-decoration: none;
    font-size: 24px;
    width: 100%;
    cursor: pointer;
}

.active-yellow-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
</style>
