<template>
  <div class="container">
    <div class="row align-items-center p-4 gap-2">
      <div class="col flex-column contact-container">
        <span>Boutique-Hotel Technikum Betriebsgesellschaft mbH</span>
        <span>Technikumstraße 18, A-1234 Wien</span>
        <span>Tel.: <a href="tel:+4301234567">+43 (0) 1 234 567</a></span>
        <span>E-Mail: <a href="mailto:contact@hotel-technikum.at">contact@hotel-technikum.at</a></span>
        <span>Web: <a href="https://boutique-hotel.helmuth-lammer.at">https://boutique-hotel.helmuth-lammer.at</a></span>
        <br />
        <span>Firmenbuchnummer: 123 456a</span>
        <span>UID-Nummer: ATU 39635908</span>

        <br />
        <BButton variant="primary" href="mailto:contact@hotel-technikum.at">Kontaktier uns!</BButton>
      </div>
      <div class="col flex-column map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10629.214354686621!2d16.3773241!3d48.2392831!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d064f6ed971cf%3A0x99fec738bbb12f9d!2sTechnikum%20Wien!5e0!3m2!1sde!2sat!4v1697903573291!5m2!1sde!2sat"
          style="" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue-next'
export default {
  name: 'ImpressumView',
  components: {
    BButton
  },
}
</script>

<style scoped>
.flex-column {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}

.contact-container {
  width: fit-content;
  height: 100%;

  >span {
    margin-bottom: 0.25rem;
  }
}

.map-container {
  width: 100%;
  height: 100%;

  >iframe {
    border: 1px solid black;
    height: 20rem;
    aspect-ratio: 1/1;
    width: auto;
  }
}
</style>
