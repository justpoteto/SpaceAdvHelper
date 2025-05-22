<script setup>
const { t, locale } = useI18n()
const config = useRuntimeConfig()

const options = ref([]);
for (let i = 2; i <= 15; i++) {
    options.value.push([`${i} ${t('lvl')}`, i]);
}

const currentLevel = ref(null);

const isButtonDisabled = computed(() => !currentLevel.value);
const isResultTextShow = ref(false);
const isResultShow = ref(false);

const resultHour = ref(0);
const resultDay = ref(0);
const resultWeek = ref(0);

const resultHourRuble = ref(0);
const resultDayRuble = ref(0);
const resultWeekRuble = ref(0);

function calculate() {
    if (isButtonDisabled.value) return;
    isResultTextShow.value = true;
    isResultShow.value = true;

    resultHour.value = Math.round(currentLevel.value / 100 * 60 * 60);
    resultDay.value = Math.round(currentLevel.value / 100 * 60 * 60 * 24);
    resultWeek.value = Math.round(currentLevel.value / 100 * 60 * 60 * 24 * 7);

    resultHourRuble.value = Math.round(resultHour.value / config.public.coinRubCourse);
    resultDayRuble.value = Math.round(resultDay.value / config.public.coinRubCourse);
    resultWeekRuble.value = Math.round(resultWeek.value / config.public.coinRubCourse);

}

useSeoMeta({
    title: 'Заработок в час — SpaceAdv Helper',
    ogTitle: 'SpaceAdv Helper',
    description: 'Примерный заработок в час.',
    ogDescription: 'Примерный заработок в час.',
})
</script>

<template>
    <div class="input-container">

        <label>{{ $t('earnperhour.your_lvl') }}
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
            <p class="default-text" v-show="isResultTextShow">{{ $t('earnperhour.result') }}</p>
            <div v-show="isResultShow" class="currencies">
                <div class="curr">
                    <p class="result mini-text default-text"><span class="yellow-text">{{ resultHour }}</span> <img
                            src="/coin_1.png" class="icon"> (<span class="default-text">{{ resultHourRuble }}</span>
                        <img src="/ruble.png" class="icon">)
                    </p>
                    <p class="result mini-text default-text">{{ $t('earnperhour.per_hour') }}</p>
                </div>
                <div class="curr">
                    <p class="result mini-text default-text"><span class="yellow-text">{{ resultDay }}</span> <img
                            src="/coin_1.png" class="icon"> (<span class="default-text">{{ resultDayRuble }}</span> <img
                            src="/ruble.png" class="icon">) </p>
                    <p class="result mini-text default-text">{{ $t('earnperhour.per_day') }}</p>
                </div>
                <div class="curr">
                    <p class="result mini-text default-text"><span class="yellow-text">{{ resultWeek }}</span> <img
                            src="/coin_1.png" class="icon"> (<span class="default-text">{{ resultWeekRuble }}</span>
                        <img src="/ruble.png" class="icon">)
                    </p>
                    <p class="result mini-text default-text">{{ $t('earnperhour.per_week') }}</p>
                </div>
            </div>
        </div>


        <div class="info">
            <h1 class="default-text">{{ $t('earnperhour.title') }}</h1>
            <p class="default-text">{{ $t('earnperhour.description') }}
            </p>
        </div>
    </div>
</template>

<style scoped>
.mini-text {
    font-size: 22px;
}

.icon {
    width: 19px;
    height: 19px;
    border-radius: 50%;
}

.result {
    gap: 3px;
    display: flex;
    align-items: center;
    margin: 0;
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