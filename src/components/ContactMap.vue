<template>
    <div class="map-container">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10629.214354686621!2d16.3773241!3d48.2392831!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d064f6ed971cf%3A0x99fec738bbb12f9d!2sTechnikum%20Wien!5e0!3m2!1sde!2sat!4v1697903573291!5m2!1sde!2sat"
            style="" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</template>


<style scoped>
.map-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    >iframe {
        border: 1px solid black;
        width: 20rem;
        max-width: 100%;
        aspect-ratio: 1/1;
        height: auto;
    }
}
</style>
