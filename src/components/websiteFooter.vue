<script setup>

</script>

<template>
    <div class="footer container flex justify-center align-center">
        <div class="about">
            <h1 class="name">Jahir Rayhan</h1>
            <p class="designation">Senior Graphics Designer at <a href="https://www.freelancer.com">Freelancer.com</a></p>
            <div class="contact">
                <div class="phone">
                    <font-awesome-icon :icon="['fas', 'phone']" /> 
                    <span>017 *********</span>
                </div>
                <div class="email">
                    <font-awesome-icon :icon="['fas', 'envelope']" /> 
                    <span>test@gmail.com</span>
                </div>
                <div class="address">
                    <font-awesome-icon :icon="['fas', 'location']" /> 
                    <span>Uttara, Dhaka.</span>
                </div>
            </div>
        </div>
        <div class="social">
            <h1 class="name">Follow Me !</h1>
            <p>Find Me at Socials Media Platforms and Marketplaces</p>
            <div>
                <router-link to=""><font-awesome-icon :icon="['fab', 'facebook']" /></router-link>
                <router-link to=""><font-awesome-icon :icon="['fab', 'twitter']" /></router-link>
                <router-link to=""><font-awesome-icon :icon="['fab', 'instagram']" /></router-link>
                <router-link to=""><font-awesome-icon :icon="['fab', 'upwork']" /></router-link>
            </div>
        </div>
        <div class="copyright">All rights reserved &copy; 2024</div>
    </div>
</template>

<style scoped>
.footer {
    min-height: 35vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
    'about social'
    'copyright copyright'
    ;
    background-color: #000000;
    color: #6d6d6d;
}

.copyright {
    height: 100%;
    color: gray;
    border-top: 1px solid #272727;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: copyright;
}

.about {
    grid-area: about;
    display: grid;
    gap: 10px;
}

.about > * {
    align-self: center;
}

.about > .name {
    color: white;
}

.contact {
    
}

.contact > * {
    display: flex;
    gap: 5px;
    margin-top: 5px;
}

.social {
    grid-area: social;
}

.social > * {
    justify-self: end;
}

.social > div {
    margin-top: 15px;
    display: flex;
    gap: 20px;
}

.social > div > * {
    color: #505050;
    font-size: 22px;
}

.social > div > *:hover {
    color: white;
    font-size: 22px;
}

p {
    font-size: 14px;
    letter-spacing: 1px;
}

a {
    text-decoration: none;
    color: #e7e7e7;
}

a:hover {
    color: white;
}

@media (max-width: 768px) {
    .footer {
        padding-top: 30px;
        grid-template-columns: 1fr;
        grid-template-areas:
            'about'
            'social'
            'copyright';
        text-align: center;
    }

    .social {
        border-top: 1px solid #272727;
        margin: 30px 20px;
        padding-top: 20px;
    }

    .social > * {
        justify-self: center;
    }

    .copyright {
        padding: 5px;
    }
    
}
</style>