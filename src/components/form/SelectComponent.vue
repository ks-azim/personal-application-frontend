<script setup>
import { defineProps } from 'vue';

defineProps({
    label: String,
    placeholder: String,
    list: Array,
    required: Boolean
})
</script>

<template>
    <div class="input-wrapper">
        <label for="">
            {{ label }} 
            <span v-if="required==true" class="danger">*</span>
        </label>
        <select>
            <option value="null">{{ placeholder }}</option>
            <option v-for="data in list" :key="data.id" :value="data.id">{{ data.value }}</option>
        </select>
    </div>
</template>

<style scoped>
.input-wrapper {
    display: grid;
    gap: 10px;
    margin-bottom: 10px;
}

label {
    font-size: 14px;
}

select {
    padding: 10px 20px;
    border: 1px solid gray;
    outline: none;
    border-radius: 5px;
    background-color: #f5f5f5;
}
</style>