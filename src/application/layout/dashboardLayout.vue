<template>
    <div class="content">
        <DashboardSidebar />
        <div class="main-body">
            <Header />
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import Header from '@/components/dashboardHeader.vue'
import DashboardSidebar from '@/components/dashboard/DashboardSidebar.vue';
</script>

<style scoped>
.content {
    min-height: 100vh; 
    display: grid;
    grid-template-columns: 20vw 80vw;
}


</style>