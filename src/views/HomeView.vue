<template>
  <div>
    <div class="carousel-container">
      <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab"
        img-width="1000" img-height="700" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd">

        <b-carousel-slide caption="Traditionell" text="Boutique Hotel Technikum"
          img-src="../../public/images/carousel01.webp" style="text-shadow: 4px 4px 8px black;"></b-carousel-slide>

        <b-carousel-slide caption="Entspannend" text="Boutique Hotel Technikum"
          img-src="../../public/images/carousel02.webp"></b-carousel-slide>

        <b-carousel-slide caption="Modern" text="Boutique Hotel Technikum"
          img-src="../../public/images/carousel03.webp"></b-carousel-slide>

        <b-carousel-slide caption="Freundlich" text="Boutique Hotel Technikum"
          img-src="../../public/images/carousel04.webp"></b-carousel-slide>

      </b-carousel>
    </div>


    <div class="home-text">
      <p>
      <h1 class="centered-heading">Herzlich Willkommen!</h1>
      </p>

      <p class="text-justify" style="margin-bottom: 10px;">Das familiengeführte Boutique Hotel Technikum hat eine reiche
        Geschichte, die bis ins Jahr 1935 zurückreicht, und ist eines der traditionsreichsten Hotels in der malerischen
        Stadt Wien. Mit seiner einzigartigen Lage im Herzen des 20. Wiener Gemeindebezirks bietet es seinen Gästen die
        Möglichkeit, das authentische Wiener Lebensgefühl hautnah zu erleben.</p>

      <p class="text-justify" style="margin-bottom: 20px;">Unsere Philosophie ist es, Tradition und Moderne miteinander zu
        verbinden. Dies spiegelt sich nicht nur in unserem Service und unserem stilvollen Ambiente wider, sondern auch in
        unserem modernen Wellnessbereich, der inmitten der geschichtsträchtigen Umgebung eine Ruheoase darstellt. Nach
        einem aufregenden Tag in der österreichischen Bundeshauptstadt können Sie hier Ihre Sinne verwöhnen lassen und
        neue Energie tanken. Unsere Wellness-Oase ist ein Ort der Entspannung, an dem Sie den Stress des Alltags hinter
        sich lassen und in eine Welt des Wohlbefindens eintauchen können.</p>

      <p class="text-justify" style="margin-bottom: 20px;">Unsere Zimmer und luxuriösen Suiten bieten eine harmonische
        Verschmelzung von modernem Flair und klassischem Komfort. Jede Unterkunft ist individuell gestaltet und mit viel
        Liebe zum Detail eingerichtet, um unseren Gästen höchsten Komfort und Gemütlichkeit zu bieten. Die Aussicht aus
        den Fenstern ist oft atemberaubend und verleiht Ihrem Aufenthalt ein unvergleichliches Flair.</p>

      <p class="text-justify" style="margin-bottom: 20px;">Darüber hinaus legen wir großen Wert auf persönlichen Service
        und Gastfreundschaft. Unsere herzlichen und engagierten Mitarbeiter stehen Ihnen jederzeit zur Verfügung, um
        sicherzustellen, dass Ihr Aufenthalt im Hotel Technikum zu einem unvergesslichen Erlebnis wird.</p>

      <p class="text-justify" style="margin-bottom: 20px;">Entdecken Sie die Geschichte und Moderne, die sich im Hotel
        Technikum vereinen, und erleben Sie die einzigartige Mischung aus Wiener Charme und zeitgemäßem Luxus. Wir freuen
        uns darauf, Sie in unserem traditionsreichen Haus willkommen zu heißen und Ihnen einen unvergesslichen Aufenthalt
        in Wien zu bieten.</p>
    </div>

    <b-button class="fab" @click="handleFabClick">Jetzt buchen!</b-button>

  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue-next';

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
.carousel-container {
  padding: 30px;
  width: 75%;
  margin: 0 auto;
}

.centered-heading {
  text-align: center;
  margin: 0 auto;
}

.home-text {
  padding-right: 300px;
  padding-left: 300px;
  padding-bottom: 300px;
}

.text-justify {
  text-align: justify;
}

.fab {
  font-family: 'Papyrus', sans-serif;
  position: fixed;
  bottom: 50px;
  left: 50px;
  background-color: #B45F04;
  color: #fff;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  font-size: 24px;
  text-align: center;
  padding: 0 20px;
  line-height: 40px;
  cursor: pointer;
  box-shadow: 2px 6px 8px rgba(0, 0, 0, 0.4);
}

.fab:hover {
  background-color: yellow;
  color: black;
}
</style>
