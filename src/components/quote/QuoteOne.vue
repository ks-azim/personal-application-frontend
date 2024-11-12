<script setup>
import { defineProps } from 'vue'

defineProps({
    text: String
})
</script>

<template>
    <div class="quote">
        <blockquote class="styled-quote">
        <p>{{ text }}</p>
        </blockquote>
        <div class="client">
            <span class="name">K.S. Azim,</span>
            <span class="designation">Software Developer</span>
        </div>
    </div>
</template>
  
<style scoped>
.quote {
    background-color: #f9f9f9;
    padding-top: 10px;
    padding-bottom: 10px; 
    margin-bottom: 20px;
}
  .styled-quote {
    text-align: center;
    position: relative;
    font-style: italic;
    font-size: 20px;
    color: #555;
    margin: 20px;
    padding: 20px;
    border-left: 4px solid #007bff;
  }
  
  /* Artistic opening quotation mark */
  .styled-quote::before {
    content: "“";
    position: absolute;
    top: -10px;
    left: -20px;
    font-size: 80px;
    color: #007bff;
    font-family: Georgia, serif;
    opacity: 0.2;
    transform: rotate(-10deg);
  }
  
  /* Artistic closing quotation mark */
  .styled-quote::after {
    content: "”";
    position: absolute;
    bottom: -10px;
    right: -20px;
    font-size: 80px;
    color: #007bff;
    font-family: Georgia, serif;
    opacity: 0.2;
    transform: rotate(10deg);
  }

  .client {
    display: flex;
    gap: 5px;
    justify-content: center;
  }

  .name {
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    font-style: italic;
  }

  .designation {
    font-size: 14px;
  }
</style>
  