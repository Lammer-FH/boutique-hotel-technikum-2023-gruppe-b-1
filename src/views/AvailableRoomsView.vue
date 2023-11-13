<template>
    <div class="base-container">
        <h1>Available rooms</h1>
        <RoomGrid />
    </div>
</template>

<script>
import RoomGrid from "../components/RoomGrid.vue"

export default {
    components: {
        RoomGrid,
    },
}
</script>

<style scoped>
.base-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 2rem 0;
}
</style>
