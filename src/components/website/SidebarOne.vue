<script setup>

</script>

<template>
    <div class="sidebar-one">
        <router-link to="/home"><div :class="($route.name === 'homePage') ? 'active' : ''"><font-awesome-icon :icon="['fa', 'home']" />  Home</div></router-link>
        <router-link to="/home"><div :class="($route.name === 'postPage') ? 'active' : ''"><font-awesome-icon :icon="['fa', 'copy']" /> Post</div></router-link>
        <router-link to="/home"><div :class="($route.name === 'groupPage') ? 'active' : ''"><font-awesome-icon :icon="['fa', 'users']" /> Association</div></router-link>
        <router-link to="/home"><div :class="($route.name === 'suitPage') ? 'active' : ''"><font-awesome-icon :icon="['fa', 'gavel']" /> Suit</div></router-link>
        <router-link to="/home"><div :class="($route.name === 'questionPage') ? 'active' : ''"><font-awesome-icon :icon="['fa', 'question']" /> Question</div></router-link>
        <router-link to="/home"><div :class="($route.name === 'questionPage') ? 'active' : ''"><font-awesome-icon :icon="['fa', 'question']" /> Program/Invitation</div></router-link>
        <router-link to="/home"><div :class="($route.name === 'questionPage') ? 'active' : ''"><font-awesome-icon :icon="['fa', 'question']" /> Client Pool</div></router-link>
        <router-link to="/home"><div :class="($route.name === 'questionPage') ? 'active' : ''"><font-awesome-icon :icon="['fa', 'question']" /> Get a Lawyer</div></router-link>
    </div>
</template>

<style scoped>
.sidebar-one {
    padding: 20px;
    overflow: auto;
    border-right: 1px solid #ebebeb;
    display: block !important;
}

.sidebar-one > * > div {
    border-radius: 5px;
    padding: 10px 20px;
    display: flex;
    gap: 10px;
}

.sidebar-one > * {
    text-decoration: none;
    color: black;
}

.sidebar-one > * > div:hover {
    background-color: #ebebeb;
}

.active {
    background-color: #ebebeb;
}
</style>