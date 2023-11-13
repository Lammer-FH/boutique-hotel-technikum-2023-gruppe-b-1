<template>
    <div class="extras-list-container">
        <RoomExtrasListIcon v-for="extra of extrasList" :key="extra" :extra="extra" />
    </div>
</template>

<script>
import RoomExtrasListIcon from './RoomExtrasListIcon.vue';
export default {
    components: {
        RoomExtrasListIcon
    },
    props: {
        extras: {
            type: Array,
            required: true,
        },
    },
    computed: {
        extrasList() {
            // mappe die extras von der Struktur {"extraName": 1} auf ein array mit den verfügbaren extras
            return this.extras.filter((extra) => Object.values(extra)[0] === 1).map((extra) => Object.keys(extra)[0]);
        },
    }
}
</script>

<style scoped>
.extras-list-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
}
</style>
