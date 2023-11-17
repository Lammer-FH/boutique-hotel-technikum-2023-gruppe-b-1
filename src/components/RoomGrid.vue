<template>
    <RoomFilter @filter="onFilterChange" />
    <BPagination v-model="currentPage" pills :total-rows="getRoomsFromFilter(this.filter).length" :per-page="perPage" />
    <div class="room-grid">
        <Room v-for="room in paginatedRooms" :key="room.id" :room="room" />
    </div>
</template>

<script>
import Room from '../components/Room.vue';
import RoomFilter from './RoomFilter.vue';
import { useRoomStore } from "../stores/useRoomStore.js"
export default {
    components: {
        Room,
        RoomFilter
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
            perPage: 5,
            filter: {}
        }
    },
    methods: {
        onFilterChange(filter) {
            this.filter = filter
        },
        getRoomsFromFilter(filter) {
            if (!filter) return this.rooms
            return this.roomStore.rooms.filter(room => {
                if (filter.priceMin && room.pricePerNight < filter.priceMin) {
                    return false
                }
                if (filter.priceMax && room.pricePerNight > filter.priceMax) {
                    return false
                }
                if (filter.beds && room.beds < filter.beds) {
                    return false
                }
                return true
            })
        },
    },
    computed: {
        paginatedRooms() {
            const filteredRooms = this.getRoomsFromFilter(this.filter)
            return filteredRooms?.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage)
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
