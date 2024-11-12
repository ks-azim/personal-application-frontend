<template>
    <Header />
    <div class="content">
        <SidebarOne />
        <div class="main-body">
            <slot></slot>
        </div>
        <SidebarTwo />
    </div>
    <Footer />
</template>

<script setup>
import Header from '@/components/websiteHeader.vue'
import Footer from '@/components/websiteFooter.vue'
import SidebarOne from '@/components/website/SidebarOne.vue'
import SidebarTwo from '@/components/website/SidebarTwo.vue'
</script>

<style scoped>
.content {
    min-height: 84vh; 
    display: grid;
    grid-template-columns: 20% 60% 20%;
}
</style>