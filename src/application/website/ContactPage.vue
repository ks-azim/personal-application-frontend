<script setup>
import TitleOne from '@/components/title/TitleOne.vue'
import BreadcumbOne from '@/components/breadcumb/BreadcumbOne.vue'

import Input from '@/components/form/InputComponent.vue';
import Select from '@/components/form/SelectComponent.vue';
import TextareaComponent from '@/components/form/TextareaComponent.vue'
import ButtonMedium from '@/components/button/ButtonMedium.vue'

import { ref } from 'vue'

const breadcumb = ref([
    {
        page: 'Home',
        link: '/'
    },
    {
        page: 'Contact Us'
    },
])
</script>

<template>
    <BreadcumbOne :pageName="'Contact Us'" :breadcumb="breadcumb" />
    <section class="container master-title">
        <TitleOne 
            :title="'Contact Me'" 
            :titleSize="'50px'"
            :titleFontStyle="'italic'"
            :align="'center'"
        />
    </section>
    <section  class="container contact">
        <div class="container">
            <div class="address">
                <h1 class="name">Jahir Rayhan</h1>
                <p class="designation">Senior Ghraphics Designer at Freelancer.com</p>
                <div class="phone">
                    <span>017 *********</span>
                    <font-awesome-icon :icon="['fas', 'phone']" /> 
                </div>
                <div class="email">
                    <span>test@gmail.com</span>
                    <font-awesome-icon :icon="['fas', 'envelope']" /> 
                </div>
                <div class="location">
                    <span>Uttara, Dhaka.</span>
                    <font-awesome-icon :icon="['fas', 'location']" /> 
                </div>
            </div>

            <div class="socials">
                <h1>Follow me</h1>
                <hr>
                <div class="platforms">
                    <font-awesome-icon :icon="['fab', 'facebook']" /> 
                    <font-awesome-icon :icon="['fab', 'twitter']" /> 
                    <font-awesome-icon :icon="['fab', 'instagram']" /> 
                </div>
            </div>

            <div class="marketplace">
                <h1>Find me at Marketplaces</h1>
                <hr>
                <div class="places">
                    <img src="@/assets/logo/fiver.png" alt="">
                    <img src="@/assets/logo/freelancer.png" alt="">
                </div>
            </div>
        </div>
        <div class="contact-form">
            <section class="container">
                <div>
                    <TitleOne 
                    :title="'Lets Talk !'" 
                    :subTitle="'Feel free to ask us anything. Usually we response within 24 hours.'" 
                    :titleSize="'30px'"
                    />
                    <Input :type="'text'" :label="'Name'" :placeholder="'Your Full Name'" :required="true" />
                    <Input :type="'text'" :label="'Phone'" :placeholder="'Your Phone Number'" :required="true" />
                    <Input :type="'text'" :label="'Email'" :placeholder="'Your Email Here'" :required="true" />
                    <Select :label="'About'" :placeholder="'Choose a Service'" :required="true" :list="serviceList" />
                    <TextareaComponent :label="'Message'" :placeholder="'Write your Message here ..'" :required="true" />
                    <ButtonMedium :label="'Submit'" :backgroundColor="'#008000'" :color="'white'" />
                </div>
            </section>
        </div>
    </section>
</template>

<style scoped>

.master-title {
    margin-top: 30px;
}

.contact {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 5%;
}

.contact > * {
    align-self: center;
}

.contact > *:last-child {
    border-left: 1px solid gray;
}

.address {
    
}

.address > * {
    font-size: 20px;
    display: flex;
    gap: 15px;
    justify-content: end;
}

.address > .name {
    font-size: 25px;
}

.address > .designation {
    font-size: 16px;
    display: flex;
}

.socials, .marketplace {
    margin-top: 50px;
}

.socials > *, .marketplace > * {
    display: flex;
    gap: 15px;
    justify-content: end;
}

.platforms > * {
    font-size: 25px;
    cursor: pointer;
    opacity: 0.8;
}

.platforms > *:hover, .places > *:hover {
    opacity: 1;
}

.places > * {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.8;
}

@media (max-width: 768px) {
    
}

@media (max-width: 480px) {
    .contact {
        grid-template-columns: 1fr;
        gap: 30px;
    }

    .contact > *:last-child {
        padding-top: 30px;
        border-left: none;
        border-top: 1px solid gray;
    }

    .socials > *, .marketplace > * {
        justify-content: center;
    }

    .address > * {
        justify-content: center;
    }

    .address > .designation {
        text-align: center;
    }
}
</style>