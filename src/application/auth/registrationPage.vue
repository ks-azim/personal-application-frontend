<script setup>
import PanelComponent from '@/components/PanelComponent.vue';
import Input from '@/components/form/InputComponent.vue';
import Select from '@/components/form/SelectComponent.vue';
import ButtonMedium from '@/components/button/ButtonMedium.vue';

const registrationType = [
    {
        id: 1,
        value: 'User'
    },
    {
        id: 2,
        value: 'Lawyer'
    },
    {
        id: 3,
        value: 'Lawyer Assistant'
    },
    {
        id: 4,
        value: 'Law Firm'
    }
]

const genderList = [
    {
        id: 1,
        value: 'Male'
    },
    {
        id: 2,
        value: 'Female'
    },
]
</script>

<template>
    <div class="container flex justify-center">
        <PanelComponent>
            <template #panel-header>
                <font-awesome-icon :icon="['far', 'user']" /> Registration
            </template>
            <template #panel-body>
                <Input :type="'text'" :label="'Name'" :placeholder="'Your Full Name'" :required="true" />
                <Input :type="'text'" :label="'Phone'" :placeholder="'Your Phone Number'" :required="true" />
                <Select :label="'Profession'" :placeholder="'Register As'" :required="true" :list="registrationType" />
                <Select :label="'Gender'" :placeholder="'Your Gender'" :required="true" :list="genderList" />
                <Input :type="'text'" :label="'Email'" :placeholder="'Your Email Here'" :required="true" />
                <Input :type="'password'" :label="'Password'" :placeholder="'Type Password'" :required="true" />
                <Input :type="'password'" :label="'Confirm Password'" :placeholder="'Type Password Again'" :required="true" />
                <ButtonMedium :label="'Submit'" :backgroundColor="'#008000'" :color="'white'" />
            </template>
            <template #panel-footer>
                Have an account already ? Login <router-link to="/">Here</router-link>
            </template>
        </PanelComponent>
    </div>
</template>

<style scoped>

</style>