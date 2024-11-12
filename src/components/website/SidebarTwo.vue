<script setup>
import PromotionComponent from '@/components/ad/PromotionComponent.vue'
import NewsComponent from '@/components/news/NewsComponent.vue';
</script>

<template>
    <div class="sidebar-two">
        <PromotionComponent />
        <NewsComponent />
    </div>
</template>

<style scoped>
.sidebar-two {
    height: 84vh;
    border-left: 1px solid #ebebeb;
}
</style>