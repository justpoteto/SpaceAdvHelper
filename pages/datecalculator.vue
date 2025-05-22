<script setup>
const { t } = useI18n()

const options = ref([]);
for (let i = 2; i <= 15; i++) {
    options.value.push([`${i} ${t('lvl')}`, i]);
}

const needMoney = ref(null);
const currentLevel = ref(null);

const isButtonDisabled = computed(() => !currentLevel.value || !needMoney.value);
const isResultTextShow = ref(false);
const isResultShow = ref(false);

const resultMoney = ref(0);
const resultHours = ref(0);
const resultLevel = ref(0);


function calculate() {
    if (isButtonDisabled.value) return;
    isResultTextShow.value = true;
    isResultShow.value = true;

    resultMoney.value = needMoney.value;
    resultLevel.value = currentLevel.value;

    const perHour = (currentLevel.value / 100) * 60 * 60;
    resultHours.value = Math.round(resultMoney.value / perHour * 100) / 100;
}

useSeoMeta({
    title: 'Калькулятор заработка — SpaceAdv Helper',
    ogTitle: 'SpaceAdv Helper',
    description: 'Калькулятор заработка в Space Adventure.',
    ogDescription: 'Калькулятор заработка в Space Adventure.',
})
</script>

<template>
    <div class="input-container">
        <label>{{ $t('datecalculator.current_lvl') }}
            <div class="select-wrapper">
                <select v-model="currentLevel" class="level-select">
                    <option v-for="(option, index) in options" :key="index" :value="option[1]">
                        {{ option[0] }}
                    </option>
                </select>
            </div>
        </label>


        <label>{{ $t('datecalculator.money_required') }}
            <div class="input-field">
                <div class="styled-input">
                    <input type="number" id="money" v-model="needMoney">
                </div>
            </div>
        </label>

        <button :disabled="isButtonDisabled" class="active-yellow-button" @click="calculate">
            {{ $t('calculate') }}
        </button>

        <p class="gems-text" style="margin:0;padding:0;">&copy; SpaceAdv Helper</p>

        <div>
            <div v-show="isResultShow" class="result">
                <div class="default-text">{{ $t('datecalculator.result_1') }} <span class="yellow-text">{{ resultMoney
                        }}</span> <img class="icon" src="/coin_1.png"></div>
                <div class="default-text">{{ $t('datecalculator.result_2', { lvl: currentLevel }) }}</div>
                <div class="default-text">{{ $t('datecalculator.result_3') }} <span class="yellow-text">{{ resultHours
                        }}
                        {{ $t('datecalculator.hours') }}</span></div>

            </div>
        </div>


        <div class="info">
            <h1 class="default-text">{{ $t('datecalculator.title') }}</h1>
            <p class="default-text">{{ $t('datecalculator.description') }}
            </p>
        </div>
    </div>
</template>

<style scoped>
span {
    margin: 3px;
}

.icon {
    margin: 3px;
    width: 19px;
    height: 19px;
    border-radius: 50%;
}

.result div {
    display: flex;
    align-items: center;
}

.result {
    padding: 10px;
    border-radius: 15px;
}


button:active {
    transform: scale(.96) translateX(1px) translateY(3px)
}

.input-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
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
