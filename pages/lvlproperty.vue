<script setup>
const { t, locale } = useI18n()
import { computed, ref } from 'vue';

const options = ref([]);
for (let i = 2; i <= 15; i++) {
    options.value.push([`${i} ${t('lvl')}`, i]);
}

const currentLevel = ref(null);

const isButtonDisabled = computed(() => !currentLevel.value);
const isResultTextShow = ref(false);
const isResultShow = ref(false);
const resultText = ref("");

const resultMining = ref(0);
const resultLuggage = ref(0);
const resultTank = ref(0);
const resultShield = ref(0);


const levels = [
    { level: 2, mining: "0.02", luggage: "48", tank: "5400", shield: "2" },
    { level: 3, mining: "0.03", luggage: "72", tank: "7200", shield: "3" },
    { level: 4, mining: "0.04", luggage: "96", tank: "9000", shield: "4" },
    { level: 5, mining: "0.05", luggage: "120", tank: "10800", shield: "5" },
    { level: 6, mining: "0.06", luggage: "144", tank: "14400", shield: "6" },
    { level: 7, mining: "0.07", luggage: "168", tank: "18000", shield: "7" },
    { level: 8, mining: "0.08", luggage: "192", tank: "21600", shield: "8" },
    { level: 9, mining: "0.09", luggage: "216", tank: "28800", shield: "9" },
    { level: 10, mining: "0.10", luggage: "240", tank: "36000", shield: "10" },
    { level: 11, mining: "0.11", luggage: "264", tank: "43200", shield: "11" },
    { level: 12, mining: "0.12", luggage: "288", tank: "54000", shield: "12" },
    { level: 13, mining: "0.13", luggage: "312", tank: "64800", shield: "13" },
    { level: 14, mining: "0.14", luggage: "336", tank: "72000", shield: "14" },
    { level: 15, mining: "0.15", luggage: "360", tank: "86400", shield: "15" },
];

function calculate() {
    if (isButtonDisabled.value) return;
    isResultTextShow.value = true;

    isResultShow.value = true;
    resultText.value = t('lvlproperty.result', { lvl: currentLevel.value });

    const cost = levels.find((lvl) => lvl.level == currentLevel.value);
    if (cost) {
        resultMining.value = cost.mining
        resultLuggage.value = cost.luggage
        resultTank.value = cost.tank
        resultShield.value = cost.shield
    }
}
</script>

<template>
    <div class="input-container">


        <label>{{ $t('lvlproperty.required_lvl') }}
            <div class="select-wrapper">
                <select v-model="currentLevel" class="level-select">
                    <option v-for="(option, index) in options" :key="index" :value="option[1]">
                        {{ option[0] }}
                    </option>
                </select>
            </div>
        </label>

        <button :disabled="isButtonDisabled" class="active-yellow-button" @click="calculate">
            {{ $t('calculate') }}
        </button>

        <p class="gems-text" style="margin:0;padding:0;">&copy; SpaceAdv Helper</p>

        <div>
            <p class="default-text" v-show="isResultTextShow">{{ resultText }}</p>
            <div v-show="isResultShow" class="result">
                <div class="result-block">
                    <div class="icon">
                        <img class="icon" src="/boosts/coin.png">
                    </div>
                    <div class="property">
                        <p class="gems-text">{{ resultMining }} {{ $t('lvlproperty.miningValue') }}</p>
                        <p class="default-text">{{ $t('lvlproperty.miningName') }}</p>
                    </div>
                </div>
                <div class="result-block">
                    <div class="icon">
                        <img class="icon" src="/boosts/coin.png">
                    </div>
                    <div class="property">
                        <p class="yellow-text">{{ resultLuggage }} {{ $t('lvlproperty.luggageValue') }}</p>
                        <p class="default-text">{{ $t('lvlproperty.luggageName') }}</p>
                    </div>
                </div>
                <div class="result-block">
                    <div class="icon">
                        <img class="icon" src="/boosts/fuel.png">
                    </div>
                    <div class="property">
                        <p class="yellow-text">{{ resultTank / 60 }} {{ $t('lvlproperty.tankValue') }}</p>
                        <p class="default-text">{{ $t('lvlproperty.tankName') }}</p>
                    </div>
                </div>
                <div class="result-block">
                    <div class="icon">
                        <img class="icon" src="/boosts/shield.png">
                    </div>
                    <div class="property">
                        <p class="yellow-text">{{ resultShield }} {{ $t('lvlproperty.shieldValue') }}</p>
                        <p class="default-text">{{ $t('lvlproperty.shieldName') }}</p>
                    </div>
                </div>
            </div>
        </div>


        <div class="info">
            <h1 class="default-text">{{ $t('lvlproperty.title') }}</h1>
            <p class="default-text">{{ $t('lvlproperty.description_1') }}</p>
            <p class="default-text">{{ $t('lvlproperty.description_2') }}</p>
        </div>
    </div>
</template>

<style scoped>
.result {
    gap: 10px;
    display: flex;
    flex-direction: column;
}

.result-block {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
}

.result-block p {
    margin: 0;
}

.result-block .property {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    margin-left: 5px;
}

.mini-text {
    font-size: 25px;
}

.icon {
    width: 45px;
    height: 45px;
    border-radius: 50%;
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
