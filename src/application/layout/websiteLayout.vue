<template>
    <Header />
    <div class="content">
        <slot></slot>
    </div>
    <Footer />
</template>

<script setup>
import Header from '@/components/websiteHeader.vue'
import Footer from '@/components/websiteFooter.vue'
</script>

<style scoped>
.content {
    min-height: 55vh; 
}
</style>