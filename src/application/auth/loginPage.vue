<script setup>
import PanelComponent from '@/components/PanelComponent.vue';
import Input from '@/components/form/InputComponent.vue';
import ButtonMedium from '@/components/button/ButtonMedium.vue';
</script>

<template>
    <div class="container flex justify-center">
        <PanelComponent>
            <template #panel-header>
                <font-awesome-icon :icon="['far', 'user']" /> Login
            </template>
            <template #panel-body>
                <Input :type="'text'" :label="'Email'" :placeholder="'Put Your Email Here'" :required="true" />
                <Input :type="'password'" :label="'Password'" :placeholder="'Put Your Password Here'" :required="true" />
                <ButtonMedium :label="'Login'" :backgroundColor="'#008000'" :color="'white'" />
            </template>
            <template #panel-footer>
                Forgot your password ? Reset <router-link to="/registration">Here</router-link>
            </template>
        </PanelComponent>
    </div>
</template>

<style scoped>

</style>