<script setup>
import CardOne from '@/components/card/CardOne.vue'
import TitleOne from '@/components/title/TitleOne.vue'
import QuoteOne from '@/components/quote/QuoteOne.vue'

import Input from '@/components/form/InputComponent.vue';
import Select from '@/components/form/SelectComponent.vue';
import TextareaComponent from '@/components/form/TextareaComponent.vue'
import ButtonMedium from '@/components/button/ButtonMedium.vue'

const category = [
    {
        photo: require('@/assets/category/graphics.jpeg'),
        link: '/portfolio'
    },
    {
        photo: require('@/assets/category/website.jpeg'),
        link: '/portfolio'
    },
    {
        photo: require('@/assets/category/content.jpeg'),
        link: '/portfolio'
    }
]

const serviceList = [
    {
        id: 1,
        value: 'Graphics',
    },
    {
        id: 2,
        value: 'Website'
    },
    {
        id: 3,
        value: 'Digital Marketing'
    }
]
</script>

<template>
    <section class="container banner">
        <img src="@/assets/banner/img-1.png" alt="">
        <div class="banner-content">
            <h1>Some Random Text</h1>
            <h4>Some random text goes here</h4>
            <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit odit 
                praesentium facere dignissimos eveniet laborum cumque saepe laudantium, 
                inventore quam modi quod iste optio exercitationem nemo officia? Corporis, voluptate.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
            <a href="#contact" class="banner-btn">Let's Work</a>
        </div>
    </section>
    <section class="container about">
        <div>
            <TitleOne 
            :title="'Some Words About Me'" 
            :color="'#ababab'" 
            :align="'center'" 
            :titleSize="'40px'"
            />
            <div class="about-content">
                <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit odit praesentium facere dignissimos eveniet laborum cumque saepe laudantium, inventore quam modi quod iste optio exercitationem nemo officia? Corporis, voluptate.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. <strong>Hic suscipit odit praesentium facere dignissimos eveniet laborum cumque saepe laudantium, inventore quam modi quod iste optio exercitationem nemo officia? Corporis, voluptate.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit odit praesentium facere dignissimos eveniet laborum cumque saepe laudantium, inventore quam modi quod iste optio exercitationem nemo officia? Corporis, voluptate.
                    Lorem,</strong> ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit odit praesentium facere dignissimos eveniet laborum cumque saepe laudantium, inventore quam modi quod iste optio exercitationem nemo officia? Corporis, voluptate.
                </div>
                <img src="@/assets/about/mr-default.png" alt="">
            </div>
        </div>
    </section>
    <section class="container category">
        <TitleOne 
        :title="'Check Our Works'" 
        :color="'white'" 
        :align="'start'" 
        :titleSize="'40px'"
        />
        <div>
            <CardOne v-for="data in category" :key="data" :data="data" />
        </div>
    </section>
    <!-- <section class="container">
        Portfolios
    </section> -->
    <section class="container testimonial">
        <!-- <TitleOne :title="'Our Clients Words'" :color="'#3d3d3d'" :align="'center'" /> -->
        <QuoteOne :text="'Skyler is top notch. He is always saying that things from the private sector CAN work for School PR. He’s willing to try anything for the industry.'" />
        <QuoteOne :text="'Skyler is top notch. He is always saying that things from the private sector CAN work for School PR. He’s willing to try anything for the industry.'" />
        <QuoteOne :text="'Skyler is top notch. He is always saying that things from the private sector CAN work for School PR. He’s willing to try anything for the industry.'" />
        <QuoteOne :text="'Skyler is top notch. He is always saying that things from the private sector CAN work for School PR. He’s willing to try anything for the industry.'" />
    </section>
    <section class="container contact" id="contact">
        <div>
            <TitleOne 
            :title="'Lets Talk !'" 
            :subTitle="'Feel free to ask us anything. Usually we response within 24 hours.'" 
            :titleSize="'40px'"
            />
            <Input :type="'text'" :label="'Name'" :placeholder="'Your Full Name'" :required="true" />
            <Input :type="'text'" :label="'Phone'" :placeholder="'Your Phone Number'" :required="true" />
            <Input :type="'text'" :label="'Email'" :placeholder="'Your Email Here'" :required="true" />
            <Select :label="'About'" :placeholder="'Choose a Service'" :required="true" :list="serviceList" />
            <TextareaComponent :label="'Message'" :placeholder="'Write your Message here ..'" :required="true" />
            <ButtonMedium :label="'Submit'" :backgroundColor="'#008000'" :color="'white'" />
        </div>
    </section>
</template>

<style scoped>
.banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
}

.banner > img {
    width: 50%;
}

.banner-content {
    display: grid;
    gap: 15px;
}

.banner-content > h1 {
    font-size: 50px;
    /* color: #0096e1; */
    color: #cdb8a1;
}

.banner-content > h4 {
    background-color: lightgray;
    padding: 5px 20px;
    font-size: 30px;
    color: #a13131;
    margin-left: 40px;
}

.banner-content > div {
    font-size: 18px;
    color: #6b6b6b;
}

/* .banner-btn {
    text-decoration: none;
    color: white;
    background-color: black;
    padding: 15px 20px;
    width: 150px;
    text-align: center;
    transition: background-color 0.4s ease, color 0.4s ease, border-color 0.4s ease;
}

.banner-btn:hover {
    background-color: gray;
    color: red;
} */

.banner-btn {
    position: relative;
    text-decoration: none;
    color: white;
    background-color: black;
    padding: 15px 20px;
    width: 150px;
    text-align: center;
    overflow: hidden;
    transition: color 0.2s ease;
}

.banner-btn::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 100%;
  background-color: #25323f;
  transition: width 0.2s ease;
  z-index: -1;
}

.banner-btn:hover::before {
  width: 100%; /* Fills the button background from bottom to top */
}

.banner-btn:hover {
  color: white; /* Change text color for contrast */
}

.banner-btn {
  position: relative;
  z-index: 1; /* Keeps text above the animated background */
}

.about > div {
  padding: 20px;
  background-color: #f0f0f0;
  color: #333;
  font-size: 16px;
  border-style: solid;
  border-width: 5px 10px 15px 20px; /* top, right, bottom, left */
  border-color: #007bff;
  padding: 30px;
}

.about > div > .about-content {
    display: flex;
    gap: 20px;
}

.about > div > .about-content > img {
    width: 30%;
    border-radius: 10px;
}

.about > div > h1 {
    font-size: 40px;
    color: #3d3d3d;
}

.about > div > div {
    margin-top: 20px;
    font-size: 21px;
}

.category {
    margin: 5% 0;
    background-color: black;
    padding-top: 5%;
    padding-bottom: 5%;
}

.category > h1 {
    font-size: 35px;
    text-align: center;
    margin-bottom: 30px;
    color: #e7e7e7;
}

.category > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
}

.testimonial {
    
}

.testimonial > div:last-child {
    border-left: 1px solid gray;
}

.contact {
    height: 700px;
    background-image: url('@/assets/default/contact.jpg');
    background-size: cover;
    display: flex;
    justify-content: end;
    align-items: center;
}

.contact > div {
    width: 45%;
}

@media (max-width: 768px) {
    .banner {
        display: grid;
        gap: 20px;
    }

    .banner > * {
        justify-self: center;
    }

    .banner > img {
        width: 80%;
    }

    .about {
        margin-top: 50px;
    }

    .about > div > .about-content > * {
        justify-self: center;
        text-align: center;
    }

    .about > div > .about-content > img {
        width: 90%;
    }

    .category > div {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .category {
        padding-top: 10%;
        padding-bottom: 10%;
    }
}

@media (max-width: 480px) {
    .banner {
        display: grid;
        gap: 20px;
    }

    .banner > * {
        justify-self: center;
    }

    .banner > img {
        width: 80%;
    }

    .about {
        margin-top: 50px;
    }

    .about > div > .about-content {
        display: grid;
    }

    .about > div > .about-content > * {
        justify-self: center;
        text-align: center;
    }

    .about > div > .about-content > img {
        width: 90%;
    }

    .category > div {
        display: grid;
        grid-template-columns: 1fr;
    }

    .category {
        padding-top: 10%;
        padding-bottom: 10%;
    }

    .contact {
        height: 700px;
        display: flex;
        justify-content: end;
        align-items: center;
    }

    .contact > div {
        width: 100%;
    }
}
</style>