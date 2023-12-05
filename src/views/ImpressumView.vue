<template>
  <div class="impressum-container p-4">
    <div class="contact-container">
      <ContactInfo />
      <br />
      <span>Firmenbuchnummer: 123 456a</span>
      <span>UID-Nummer: ATU 39635908</span>
      <br />
      <BButton variant="primary" href="mailto:contact@hotel-technikum.at">Kontaktier uns!</BButton>
    </div>
    <ContactMap />
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue-next'
import ContactMap from '../components/ContactMap.vue';
import ContactInfo from '../components/ContactInfo.vue';
export default {
  name: 'ImpressumView',
  components: {
    BButton,
    ContactMap,
    ContactInfo,
  },
}
</script>

<style scoped>
.impressum-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}

@media (max-width: 768px) {
  .impressum-container {
    flex-direction: column;
    justify-content: center;
  }
}


.flex-column {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 0.5rem;
}


.contact-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;


  >span {
    margin-bottom: 0.25rem;
  }
}
</style>
