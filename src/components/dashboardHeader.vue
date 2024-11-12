<template>
    <div class="header">
        <div class="container">
            <div class="logo">
                Gavel
            </div>
            <div class="navmenu">
                <router-link to="" class="menu-item">Who are we ?</router-link>
                <router-link to="" class="menu-item">Privacy & Policy</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header {
    height: 10vh;
    background-color: white;
    color: #717171;

    display: flex;
    align-items: center;

    border-bottom: 1px solid #ebebeb;
}

.header > * {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 25px;
}

.navmenu {
    display: flex;
    justify-content: end;
    gap: 20px;
}

.menu-item {
    text-decoration: none;
    color: #717171;
    font-size: 13px;
    transition: .3s ease-in-out;
}

.menu-item:hover {
    color: red;
}
</style>