<template>
    <BCard align="center" class="room-fixed-width">
        <div class="room-container">
            <div class="image-container">
                <img class="room-image" src="https://i.pinimg.com/originals/fb/5d/d3/fb5dd32bfe1e5dba7c3300d20d903ac1.jpg"
                    alt="Bild des Zimmers" />
            </div>
            <h2>{{ room.roomsName }}</h2>
            <RoomExtrasList :extras="room?.extras" />
            <div class="room-info-container">
                <span>{{ room.pricePerNight }}€/Nacht</span>
                <span>{{ room.beds }} Bett(en)</span>
            </div>
            <div class="footer">
                <BButton variant="primary" v-if="!$props.preview" @click="router.push({
                    name: 'reservation',
                    params: { id: room.id }
                })">Buchen</BButton>
            </div>

        </div>
    </BCard>
</template>

<script>
import { BCard, BButton } from 'bootstrap-vue-next';
import RoomExtrasList from './RoomExtrasList.vue';
import { useRouter } from 'vue-router';
export default {
    components: {
        BCard,
        BButton,
        RoomExtrasList
    },
    setup() {
        const router = useRouter();
        return {
            router
        }
    },
    props: {
        room: {
            type: Object,
            required: true,
        },
        preview: {
            type: Boolean,
            required: false,

        }
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
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
}

.room-fixed-width {
    width: 22rem;
}

@media (max-width: 768px) {
    .image-container {
        max-width: 80%;
    }

    .room-fixed-width {
        width: 100%;
    }
}


.footer {
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
}

.room-info-container {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

.room-info-container>span {
    background-color: rgba(var(--primary-values), 0.2);
    padding: 0.5rem;
    border-radius: var(--rounded-sm);
}
</style>
