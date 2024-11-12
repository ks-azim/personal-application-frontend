<script setup>
import { defineProps } from 'vue'

defineProps({
    title: String,
    color: String,
    align: String,
    subTitle: String,
    titleSize: String,
    subTitleSize: String,
    titleFontStyle: String
})
</script>

<template>
<div class="title">
    <h1 :style="{color: color, textAlign: align, fontSize: titleSize, fontStyle: titleFontStyle}">{{ title }}</h1>
    <p v-if="subTitle">{{ subTitle }}</p>
</div>
</template>

<style scoped>
.title {
    margin-bottom: 30px;
}

.title > h1 {
    margin-bottom: 15px;
}

.title > p {
    font-size: 18px;
    font-style: italic;
}
</style>