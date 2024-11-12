<script setup>
import TickerLight from '../animation/TickerLight.vue'
import NewsHeadline from './NewsHeadline.vue'
</script>

<template>
    <div class="news">
        <div class="headline">
            <h3>Latest News </h3>
            <TickerLight />
        </div>
        <NewsHeadline :headline="'7 Murder case is tried yesterday ...'" />
        <NewsHeadline :headline="'New Era of Judiciary began ...'" />
        <NewsHeadline :headline="'We can use this section for court case publish ...'" />
        <div>
            <router-link to="/">See more ..</router-link>
        </div>
    </div>
</template>

<style scoped>
.news {
    width: 100%;
    height: 42vh;
    padding: 0 20px;
    box-sizing: border-box;
    overflow: auto;
}

.news > * {
    padding: 20px 0;
}

.news > *:not(:last-child) {
    border-bottom: 1px solid #ebebeb;
}

.headline {
    display: flex;
    gap: 15px;
}

/* Scroll */

/* Apply this to the element you want to style */
.news::-webkit-scrollbar {
  width: 6px;
}

.news::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 10px;
}

.news::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

</style>