<template>
    <div class="light-container">
      <div :class="['red-light', { 'light-on': isOn, 'light-off': !isOn }]"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  
  const isOn = ref(false) // Initial state: off
  let intervalId = null // Store interval ID for cleanup
  
  // Function to toggle light state
  function toggleLight() {
    isOn.value = !isOn.value
  }
  
  // Set up the interval to toggle the light automatically
  onMounted(() => {
    intervalId = setInterval(toggleLight, 1000) // Toggles every second
  })
  
  // Clean up the interval when the component is destroyed
  onBeforeUnmount(() => {
    clearInterval(intervalId)
  })
  </script>
  
  <style scoped>
  .light-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .red-light {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: red;
    box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
  }
  
  .light-on {
    background-color: #ff4d4d; /* Bright red for "on" state */
    box-shadow: 0 0 20px rgba(255, 0, 0, 1);
  }
  
  .light-off {
    background-color: white; /* Dim red for "off" state */
    box-shadow: none;
  }
  </style>
  