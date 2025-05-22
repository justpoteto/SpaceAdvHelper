<script setup>
useSeoMeta({
  title: 'SpaceAdv Helper',
  ogTitle: 'SpaceAdv Helper',
  description: 'SpaceAdv Helper — фанатский проект, созданный сообществом игроков Space Adventure. Сайт помогает считать заработок и расходы в игре.',
  ogDescription: 'SpaceAdv Helper — фанатский проект, созданный сообществом игроков Space Adventure. Сайт помогает считать заработок и расходы в игре.',
})
</script>

<template>
  <div class="navButtonsBar">
    <NavButton to="lvlcalculator">{{ $t("home.lvlcalculator") }}</NavButton>
    <NavButton to="datecalculator">{{ $t("home.datecalculator") }}</NavButton>
    <NavButton to="moneycalculator">{{ $t("home.moneycalculator") }}</NavButton>
    <NavButton to="bountycalculator">{{ $t("home.bountycalculator") }}</NavButton>
    <NavButton to="lvlproperty">{{ $t("home.lvlproperty") }}</NavButton>
    <NavButton to="earnperhour">{{ $t("home.earnperhour") }}</NavButton>
    <NavButton to="about">{{ $t("home.about") }}</NavButton>
  </div>

</template>

<style scoped>
.navButtonsBar {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  max-width: 300px;
}
</style>