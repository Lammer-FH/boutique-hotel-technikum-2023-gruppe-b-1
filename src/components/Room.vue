<template>
    <BCard align="center" class="room-fixed-width">
        <div class="room-container">
            <div class="image-container">
                <img class="room-image" src="https://i.pinimg.com/originals/fb/5d/d3/fb5dd32bfe1e5dba7c3300d20d903ac1.jpg"
                    alt="Bild des Zimmers" />
            </div>
            <h2>{{ room.roomsName }}</h2>
            <RoomExtrasList :extras="room?.extras" />
            <BButton variant="primary" @click="preSelectRoom(room.id)">Buchen</BButton>
        </div>
    </BCard>
</template>

<script>
import { BCard, BButton } from 'bootstrap-vue-next';
import RoomExtrasList from './RoomExtrasList.vue';
import { useRoomStore } from '../stores/useRoomStore';
export default {
    components: {
        BCard,
        BButton,
        RoomExtrasList
    },
    setup() {
        const roomStore = useRoomStore();
        return {
            preSelectRoom: roomStore.preSelectRoom,
        }
    },
    props: {
        room: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style scoped>
.image-container {
    overflow: hidden;
    max-width: 20rem;
    aspect-ratio: 3/2;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--rounded-sm);
    border: 1px solid var(--primary);
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
}

.room-image {
    max-width: 100%;
    height: auto;
}

.room-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
}

.room-fixed-width {
    width: 22rem;
}
</style>
