<template>
    <b-container class="card-container py-3">
        <b-card-group>
            <b-card border-variant="secondary" align="center">
                <img src="../../images/restaurant.webp" alt="Bild unseres Restaurants" />
                <h4 class="mb-1">Unser Restaurant</h4>
                <b-card-text>
                    In unserem prämierten Restaurant können Sie den Tag gemütlich bei einem Dinner ausklingen lassen.
                    Die Küche ist regional und saisonal, vegetarische und vegane Optionen sind selbstverständlich
                    verfügbar. Ob á la Carte oder 5-Gänge-Menü mit Weinbegleitung: hier kommt jede und jeder auf seine
                    Kosten.
                    Die Einrichtung ist exquisit und geschmackvoll, das Personal exzellent ausgebildet. Lassen Sie sich
                    verwöhnen vom eleganten Ambiente, von erlesenen Speisen und von der großen Auswahl an
                    außergewöhnlichen Getränken.
                </b-card-text>
            </b-card>

            <b-card border-variant="secondary" align="center">
                <img src="../../images/wellness02.webp" alt="Bild unseres Wellnessbereich" />
                <h4 class="mb-1">Unser Wellnessbereich</h4>
                <b-card-text>
                    Der Wellnessbereich unseres Hotels ist ein moderner und luxuriöser Rückzugsort, der Ihnen
                    ultimative
                    Entspannung und Erholung bietet. Dieser idyllische Ort wurde mit viel Liebe zum Detail
                    gestaltet, um
                    eine Ruheoase zu schaffen, in der Sie dem Alltagsstress entfliehen können.

                    Unsere Einrichtung ist geprägt von zeitgemäßem Design und hochwertigen Materialien, die ein
                    Gefühl
                    von Eleganz und Luxus vermitteln. Große, bodentiefe Fenster ermöglichen einen atemberaubenden
                    Ausblick auf Stadt, während Sie sich in einer entspannten Atmosphäre verwöhnen lassen. Unser
                    geschultes Personal steht Ihnen zur Seite, um sicherzustellen, dass Ihr Aufenthalt zu einem
                    unvergesslichen Erlebnis wird.
                </b-card-text>
            </b-card>
        </b-card-group>
        <b-row class="py-3">
            <b-card border-variant="secondary" align="center" class="full-size-card px-0">
                <img src="../../images/wellness.webp" alt="Bild unseres Wellnessbereich" />
                <h4 class="mb-1">Unser Wellnessbereich</h4>
                <b-card-text>
                    Genießen Sie die modernen Annehmlichkeiten, die Ihnen zur Verfügung stehen, darunter Whirlpools,
                    Dampfbäder und ein Fitnesscenter, das mit den neuesten Geräten ausgestattet ist. Das helle und
                    luftige Ambiente unseres Wellnessbereichs trägt dazu bei, dass Sie sich vom ersten Moment an
                    wohlfühlen und den Stress des Alltags hinter sich lassen können.
                    Wir laden Sie ein, in unsere luxuriöse Wellnessoase einzutauchen, in der Entspannung und Erholung an
                    erster Stelle stehen. Gönnen Sie sich eine Auszeit und erleben Sie die Ruhe und Gelassenheit, die
                    unser Wellnessbereich bietet. Wir freuen uns darauf, Sie bei uns begrüßen zu dürfen.
                </b-card-text>
            </b-card>
        </b-row>
    </b-container>
</template>

<script>
import { BAlert, BButton, BCard } from 'bootstrap-vue-next'

export default {
    components: {
        BAlert,
        BButton,
        BCard
    },
    setup() {


        return {}
    }
}
</script>

<style scoped>
img {
    max-width: 100%;
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: var(--rounded-sm);
    border: 1px solid var(--primary);
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
    margin-bottom: 0.5rem;
}
</style>
