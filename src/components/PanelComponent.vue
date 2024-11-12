<script setup>

</script>

<template>
    <div class="login-panel">
        <h2 class="panel-header">
            <slot name="panel-header"></slot>
        </h2>
        <div class="panel-body">
            <slot name="panel-body"></slot>
        </div>
        <div class="panel-footer">
            <slot name="panel-footer"></slot>
        </div>
    </div>
</template>

<style scoped>
.login-panel {
    margin: 5% 0;
    width: 400px;
    min-height: 30vh; 
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    display: block;
    border-radius: 10px;
}

.login-panel > * {
    padding: 20px;
}

.panel-header {
    border-bottom: 1px solid #f3f3f3;
    font-size: 25px;
}

.panel-footer {
    border-top: 1px solid #f3f3f3;
    font-size: 16px;
}
</style>