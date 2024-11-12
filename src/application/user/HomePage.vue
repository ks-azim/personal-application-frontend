<script setup>
import PostComponent from '@/components/post/PostComponent'
</script>

<template>
    <div class="master-body">
        <div id="top"></div>
        <!-- <p class="no-activity">No activity found yet.</p> -->
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <a href="#top" class="no-activity">No more post is there ... Go Up?</a>
    </div>
</template>

<style scoped>
.master-body {
    padding: 20px;
    box-sizing: border-box;
    height: 84vh;
    overflow: auto;
    scroll-behavior: smooth;
}

.no-activity {
    font-size: 14px;
    text-align: center;
}

/* Scroll */

/* Apply this to the element you want to style */
.master-body::-webkit-scrollbar {
  width: 6px;
}

.master-body::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 10px;
}

.master-body::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}
</style>