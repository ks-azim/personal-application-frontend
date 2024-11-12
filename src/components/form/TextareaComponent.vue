<script setup>
import { defineProps } from 'vue';

defineProps({
    label: String,
    placeholder: String,
    type: String,
    required: Boolean
})
</script>

<template>
    <div class="textarea-wrapper">
        <label for="">
            {{ label }} 
            <span v-if="required==true" class="danger">*</span>
        </label>
        <textarea :placeholder="placeholder"></textarea>
    </div>
</template>

<style scoped>
.textarea-wrapper {
    display: grid;
    gap: 10px;
    margin-bottom: 10px;
}

label {
    font-size: 14px;
}

textarea {
    padding: 10px 20px;
    border: 1px solid gray;
    outline: none;
    border-radius: 5px;
    background-color: #f5f5f5;
    font-family: 'Roboto', sans-serif;
}
</style>