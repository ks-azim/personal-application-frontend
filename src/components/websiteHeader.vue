<script setup>

</script>

<template>
    <div class="header">
        <div class="container">
            <router-link to="/" class="logo">
                Jahir Rayhan
            </router-link>
            <div class="navmenu">
                <router-link to="/" class="menu-item">Home</router-link>
                <router-link to="/" class="menu-item">About</router-link>
                <router-link to="/portfolio" class="menu-item">Portfolio</router-link>
                <router-link to="/contact" class="menu-item">Contact</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header {
    height: 10vh;
    /* background-color: white; */
    background-color: rgb(255, 255, 255);
    color: #252525;

    display: flex;
    align-items: center;
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; */
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    /* border-bottom: 1px solid #ebebeb; */
}

.header > * {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 25px;
    cursor: pointer;
    text-decoration: none;
    color: #a13131;
    font-weight: bold;
}

.navmenu {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 20px;
}

.menu-item {
    text-decoration: none;
    color: #717171;
    font-size: 15px;
    transition: .3s ease-in-out;
    cursor: pointer;
}

.menu-item:hover {
    color: #a13131;
}

/* Responsive design */
@media (max-width: 768px) {
    .navmenu {
        display: none; /* Hide menu items on smaller screens */
    }

    .header .menu-toggle {
        display: inline-block;
        cursor: pointer;
        font-size: 20px;
        color: #252525;
    }
}
</style>