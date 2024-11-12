<script setup>
import { defineProps } from 'vue'

defineProps({
    data: Object
})
</script>

<template>
    <div class="category-card">
      <img :src="data.photo" alt="Category Image" class="category-image" />
      <div class="details-overlay">
        <router-link :to="data.link" class="details-button">Details</router-link>
      </div>
    </div>
</template>

<style scoped>
.category-card {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
}

.category-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

/* Overlay container */
.details-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Thin, semi-transparent dark overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  opacity: 0;
  transition: height 0.3s ease, opacity 0.3s ease;
}

/* Button styling */
.details-button {
  text-decoration: none;
  padding: 8px 16px;
  background-color: rgba(0, 123, 255, 0.9); /* Thin, transparent background */
  color: white;
  font-weight: bold;
  font-size: 14px;
  border: 1px solid rgba(0, 123, 255); /* Semi-transparent border */
  border-radius: 4px;
  cursor: pointer;
}

.details-button:hover {
    background-color: rgb(0, 123, 255);
}

/* Hover effect on the product card */
.category-card:hover .category-image {
  transform: scale(1.05); /* Slightly zoom the image */
}

.category-card:hover .details-overlay {
  height: 40%; /* Reveal the overlay over the bottom part of the image */
  opacity: 1;
}
</style>
  