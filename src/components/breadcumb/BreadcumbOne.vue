<script setup>
import { defineProps } from 'vue'

defineProps({
    pageName: String,
    breadcumb: Array
})
</script>

<template>
<div class="breadcrumb-banner">
    <div class="overlay"></div>
    <div class="banner-content">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li v-for="data in breadcumb" :key="data">
                    <router-link v-if="data.link" :to="data.link">{{ data.page }}</router-link>
                    <a v-else href="#">{{ data.page }}</a>
                </li>
                <!-- <li><a href="#">Home</a></li> -->
            </ol>
        </nav>
        <h1>{{ pageName }}</h1>
    </div>
</div>

</template>

<style scoped>
/* Set the banner image and size */
.breadcrumb-banner {
    position: relative;
    background-image: url('@/assets/default/breadcumb.jpeg'); /* Replace with your image path */
    background-size: cover;
    background-position: center;
    height: 180px; /* Adjust height as needed */
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Overlay for dimming */
.breadcrumb-banner .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8); /* Adjust opacity as needed */
    z-index: 1;
}

/* Center the content and set z-index to ensure visibility */
.breadcrumb-banner .banner-content {
    position: relative;
    z-index: 2;
    color: #fff; /* White text for contrast */
    text-align: center;
}

/* Breadcrumb styling */
.breadcrumb-banner .breadcrumb {
    padding: 0;
    list-style: none;
    display: inline-flex;
    gap: 8px;
    font-size: 0.9em;
    color: #ddd;
    margin: 0 0 10px 0;
}

.breadcrumb-banner .breadcrumb li {
    display: inline;
}

.breadcrumb-banner .breadcrumb a {
    color: #ddd;
    text-decoration: none;
}

.breadcrumb-banner .breadcrumb li::after {
    content: ">";
    margin: 0 5px;
    color: #aaa;
}

.breadcrumb-banner .breadcrumb li:last-child::after {
    content: ""; /* Remove the last separator */
}

/* Style the page title */
.breadcrumb-banner .banner-content h1 {
    font-size: 2em; /* Adjust font size */
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 10px;
}
</style>
