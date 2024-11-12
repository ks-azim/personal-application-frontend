<template>
    <div class="dropdown" ref="dropdownRef" @click="toggleDropdown">
      <slot></slot>
      <div v-if="isOpen" class="dropdown-menu">
        <button
          v-for="(item, index) in items"
          :key="index"
          @click="selectItem(item)"
          class="dropdown-item"
        >
          {{ item }}
        </button>
      </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted, onBeforeUnmount, defineProps } from 'vue'

const isOpen = ref(false)
const selectedItem = ref('Select an item')
const dropdownRef = ref(null)

defineProps({
    items: Array
})

function toggleDropdown() {
    isOpen.value = !isOpen.value
}

function selectItem(item) {
    selectedItem.value = item
    isOpen.value = false
}

// Close dropdown when clicking outside
function handleClickOutside(event) {
if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false
}
}

onMounted(() => {
document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
document.removeEventListener('click', handleClickOutside)
})
</script>

<style>
.dropdown {
    position: relative;
}

/* .dropdown-toggle {
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
} */

.dropdown-menu {
    position: absolute;
    top: 110%; /* Positions directly below toggle button */
    right: 50;
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 1px solid #ccc;
    /* width: 150px; */
    z-index: 99999;
}

.dropdown-item {
    padding: 8px 16px;
    border: none;
    background: none;
    cursor: pointer;
}

.dropdown-item:hover {
    background-color: #f1f1f1;
}
</style>
  