<template>
    <component :is="$route.meta.layout || 'div'">
        <router-view></router-view>
    </component>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  scroll-behavior: smooth;
}

body {
  margin: auto;
  scroll-behavior: smooth;
}

.container {
  padding: 0 10% 0;
}

.flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.align-center {
  align-items: center;
}

h1, h2, h3, h4, h5, h6, p {
  margin: 0;
}

p {
  /* font-family: 'Lato', sans-serif; */
  font-family: 'Roboto', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  /* font-family: Helvetica, Arial, sans-serif; */
  font-family: 'Merriweather', serif;
}

a {
  text-decoration: underline;
  color: #8383cb;
}

a:hover {
  color: darkblue;
}

.danger {
  color: red;
}

/* Scroll */

/* Apply this to the element you want to style */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}
</style>
