<template>
    <h1 style="text-align: center; padding-top: 1rem;">Buchungs-Bestätigung {{ $route.params.id }}</h1>
    <div class="confirmation-container">
        <BButton class="no-print" @click="print()">
            <IconPrint /> Drucken
        </BButton>
        <div class="responsive-flex card">
            <Room :room="booking.room" preview />
            <ul class="form-list">
                <li v-for="(value, key) in bookingFormWithoutBreakfast" class="form-list-element">
                    <span>{{ key }}</span>
                    <span>{{ value }}</span>
                </li>
                <li v-if="this.booking.form?.checked?.includes('breakfast')">
                    <ExtrasIconBreakfast /> Inklusive Frühstück
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { useRoomStore } from '../stores/useRoomStore';
import Room from '../components/Room.vue';
import IconPrint from '../components/icons/IconPrint.vue'
import ExtrasIconBreakfast from '../components/icons/ExtrasIconBreakfast.vue';
import { BCard } from 'bootstrap-vue-next';
export default {
    components: {
        IconPrint,
        Room,
        ExtrasIconBreakfast,
        BCard
    },
    setup() {
        const roomStore = useRoomStore()
        return {
            roomStore
        }
    },
    data() {
        return {
            booking: this.roomStore.booking
        }
    },
    computed: {
        bookingFormWithoutBreakfast() {
            return Object.entries(this.booking.form).reduce((acc, [key, value]) => {
                if (key !== 'checked') {
                    acc[key] = value
                }
                return acc
            }, {})
        }
    },
    methods: {
        print() {
            window.print()
        }
    }
}
</script>

<style scoped>
.confirmation-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 1rem;
}

.responsive-flex {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 1rem;
}

@media (max-width: 768px) {
    .responsive-flex {
        flex-direction: column;
    }
}

.form-list {
    padding: 1rem;

    >li {
        &:last-child {
            border-bottom: none;
        }
    }

}

.form-list-element {
    padding: 0.5rem;
    border-bottom: 1px solid var(--primary);
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;


    >span:first-child {
        color: gray;
        text-transform: uppercase;
    }

    >span:last-child {
        font-weight: bold;
    }


}
</style>
