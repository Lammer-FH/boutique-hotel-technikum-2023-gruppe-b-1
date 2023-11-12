<template>
  <div class="carousel-container">
    <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab" img-width="1200"
      img-height="800" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">

      <b-carousel-slide class="text-shadow" caption="Traditionell" text="Boutique Hotel Technikum"
        img-src="../../images/carousel01.webp"></b-carousel-slide>

      <b-carousel-slide class="text-shadow" caption="Entspannend" text="Boutique Hotel Technikum"
        img-src="../../images/carousel02.webp"></b-carousel-slide>

      <b-carousel-slide class="text-shadow" caption="Modern" text="Boutique Hotel Technikum"
        img-src="../../images/carousel03.webp"></b-carousel-slide>

      <b-carousel-slide class="text-shadow" caption="Freundlich" text="Boutique Hotel Technikum"
        img-src="../../images/carousel04.webp"></b-carousel-slide>

    </b-carousel>
  </div>

  <div class="home-text-container">
    <h1 class="centered-heading">Herzlich Willkommen!</h1>

    <p>Das familiengeführte Boutique Hotel Technikum hat eine reiche
      Geschichte, die bis ins Jahr 1935 zurückreicht, und ist eines der traditionsreichsten Hotels in der malerischen
      Stadt Wien. Mit seiner einzigartigen Lage im Herzen des 20. Wiener Gemeindebezirks bietet es seinen Gästen die
      Möglichkeit, das authentische Wiener Lebensgefühl hautnah zu erleben.</p>

    <p>Unsere Philosophie ist es, Tradition und Moderne miteinander zu
      verbinden. Dies spiegelt sich nicht nur in unserem Service und unserem stilvollen Ambiente wider, sondern auch in
      unserem modernen Wellnessbereich, der inmitten der geschichtsträchtigen Umgebung eine Ruheoase darstellt. Nach
      einem aufregenden Tag in der österreichischen Bundeshauptstadt können Sie hier Ihre Sinne verwöhnen lassen und
      neue Energie tanken. Unsere Wellness-Oase ist ein Ort der Entspannung, an dem Sie den Stress des Alltags hinter
      sich lassen und in eine Welt des Wohlbefindens eintauchen können.</p>

    <p>Unsere Zimmer und luxuriösen Suiten bieten eine harmonische
      Verschmelzung von modernem Flair und klassischem Komfort. Jede Unterkunft ist individuell gestaltet und mit viel
      Liebe zum Detail eingerichtet, um unseren Gästen höchsten Komfort und Gemütlichkeit zu bieten. Die Aussicht aus
      den Fenstern ist oft atemberaubend und verleiht Ihrem Aufenthalt ein unvergleichliches Flair.</p>

    <p>Darüber hinaus legen wir großen Wert auf persönlichen Service
      und Gastfreundschaft. Unsere herzlichen und engagierten Mitarbeiter stehen Ihnen jederzeit zur Verfügung, um
      sicherzustellen, dass Ihr Aufenthalt im Hotel Technikum zu einem unvergesslichen Erlebnis wird.</p>

    <p>Entdecken Sie die Geschichte und Moderne, die sich im Hotel
      Technikum vereinen, und erleben Sie die einzigartige Mischung aus Wiener Charme und zeitgemäßem Luxus. Wir freuen
      uns darauf, Sie in unserem traditionsreichen Haus willkommen zu heißen und Ihnen einen unvergesslichen Aufenthalt
      in Wien zu bieten.</p>
  </div>

  <b-button class="fab" @click="handleFabClick">Jetzt buchen!</b-button>
</template>

<script>
import { BButton, BAlert } from 'bootstrap-vue-next';

export default {
  components: {
    BButton,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    handleFabClick() {
      alert('Button wurde geklickt!');
    },
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>




<style scoped>
.text-shadow {
  text-shadow: 4px 4px 8px black;
}

.carousel-container {
  padding-top: 2rem;
  max-width: 75%;
  margin: 0 auto;
}

.centered-heading {
  text-align: center;
  margin: 0 auto;
}

.home-text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  gap: 1rem;

  >p {
    margin: 0 auto;
    max-width: 75%;
  }
}


.fab {
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  background-color: var(--primary);
  color: #fff;
  width: 10rem;
  height: 10rem;
  border-radius: 100%;
  font-size: 1.5rem;
  padding: 1.5rem;
  cursor: pointer;
  filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.25));
  transition: all 0.2s ease-in-out;

}

.fab:hover {
  background-color: var(--primary-hover);
  filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.7));
}
</style>
