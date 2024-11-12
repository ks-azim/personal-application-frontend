<script setup>
import { defineProps } from 'vue'

defineProps({
    headline: String
})
</script>

<template>
    <div class="news-headline">
        {{ headline }}
    </div>
</template>

<style scoped>
.news-headline {
    cursor: pointer;
    transition: 0.3s ease-in-out;
}

.news-headline:hover {
    /* font-weight: bold; */
    padding-left: 2px;
}
</style>