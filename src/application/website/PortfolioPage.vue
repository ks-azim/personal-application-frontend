<script setup>
import TitleOne from '@/components/title/TitleOne.vue'
import BreadcumbOne from '@/components/breadcumb/BreadcumbOne.vue'
import { ref } from 'vue';

const breadcumb = ref([
    {
        page: 'Home',
        link: '/'
    },
    {
        page: 'Portfolio',
    },
])
</script>

<template>
    <BreadcumbOne :pageName="'Portfolio'" :breadcumb="breadcumb" />
    <section class="container master-title">
        <TitleOne 
            :title="'Check My Works !'" 
            :titleSize="'50px'"
            :titleFontStyle="'italic'"
        />
    </section>
    <section  class="container">
        <div class="category">
            <h1>Graphics</h1>
            <router-link to="/" class="all">Show All</router-link>
        </div>
        <div class="works">
            <div class="work">
                <div class="photo">
                    <img src="@/assets/category/graphics.jpeg" alt="">
                </div>
                <div class="work-title">Banner</div>
            </div>
            <div class="work">
                <div class="photo">
                    <img src="@/assets/category/website.jpeg" alt="">
                </div>
                <div class="work-title">Banner</div>
            </div>
            <div class="work">
                <div class="photo">
                    <img src="@/assets/category/content.jpeg" alt="">
                </div>
                <div class="work-title">Banner</div>
            </div>
            <div class="work">
                <div class="photo">
                    <img src="@/assets/portfolio/graphics/gr-1.jpeg" alt="">
                </div>
                <div class="work-title">Banner</div>
            </div>
            <div class="work">
                <div class="photo">
                    <img src="@/assets/portfolio/graphics/gr-2.jpeg" alt="">
                </div>
                <div class="work-title">Banner</div>
            </div>
            <div class="work">
                <div class="photo">
                    <img src="@/assets/portfolio/graphics/gr-3.jpeg" alt="">
                </div>
                <div class="work-title">Banner</div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.category {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.category h1 {
    font-size: 1.5em;
}

.category .all {
    color: #007bff;
    text-decoration: underline;
    font-size: 0.9em;
    cursor: pointer;
}

.works {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin: 20px 0 50px 0;
}

.work {
    width: 100%;
    border: 1px solid gray;
    border-radius: 10px;
    padding: 15px;
    box-sizing: border-box;
}

.work > .photo {
    display: flex;
    justify-content: center
}

.work > .photo > img {
    max-width: 100%;
    height: auto;
}

.work-title {
    text-align: center;
    font-weight: bold;
    font-style: italic;
    margin-top: 5px;
}

.master-title {
    margin-top: 30px;
}

@media (max-width: 768px) {
    .works {
        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 480px) {
    .works {
        grid-template-columns: 1fr;
    }
}
</style>