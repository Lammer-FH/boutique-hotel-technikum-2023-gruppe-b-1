<template>
    <div class="room-grid">
        <Room v-for="room in paginatedRooms" :key="room.id" :room="room" />
    </div>
    <BPagination v-model="currentPage" pills :total-rows="roomStore.rooms.length" :per-page="perPage" first-text="First"
        prev-text="Prev" next-text="Next" last-text="Last" />
</template>

<script>
import Room from '../components/Room.vue';
import { useRoomStore } from "../stores/useRoomStore.js"
export default {
    components: {
        Room,
    },
    setup() {
        const roomStore = useRoomStore()
        return {
            roomStore
        }
    },
    mounted() {
        this.roomStore.initRooms()
    },
    data() {
        return {
            currentPage: 1,
            perPage: 5
        }
    },
    computed: {
        paginatedRooms() {
            return this.roomStore.rooms.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage)
        }
    },
}
</script>

<style scoped>
.room-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 1rem;

    gap: 0.5rem;
    padding: 0.5rem;
}

@media (max-width: 1200px) {
    .room-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
