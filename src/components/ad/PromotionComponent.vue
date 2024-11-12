<template>
    <div class="promotion">
        <div>
            <img src="@/assets/ad/ad-1.jpg" alt="Advertisement">
        </div>
    </div>
</template>

<style scoped>
.promotion {
    width: 100%;
    height: 42vh; /* Use viewport height to control the height responsively */
    border-bottom: 1px solid #ebebeb;
    padding: 20px;
    box-sizing: border-box; /* Ensures padding does not add extra width */
}

.promotion > div {
    height: 100%; /* Makes the inner div occupy full height of .promotion */
    border-radius: 5px;
    overflow: hidden; /* This helps keep the content inside if it's larger than its container */
    cursor: pointer;
}

.promotion > div > img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures the image scales to fill the container without distortion */
    border-radius: 5px;
}
</style>
