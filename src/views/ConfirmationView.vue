<template>
    <h1 style="text-align: center;">Buchungs-Bestätigung {{ $route.params.id }}</h1>
    <div class="confirmation-container">
        <BButton class=" no-print" @click="print()">
            <IconPrint /> Drucken
        </BButton>
        <Room :room="booking.room" preview />
        <ul class="form-list card">
            <li v-for="(value, key) in printableForm" class="form-list-element">
                <span>{{ key }}</span>
                <span>{{ value }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import { useRoomStore } from '../stores/useRoomStore';
import Room from '../components/Room.vue';
import IconPrint from '../components/icons/IconPrint.vue'
export default {
    components: {
        IconPrint,
        Room
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
        printableForm() {
            // all elements but change the key checked to include and join the values in the array
            const niceObj = {}
            Object.entries(this.booking.form).map(([key, value]) => {
                if (Array.isArray(value)) {
                    niceObj[key] = value.join(', ')
                    return
                }
                niceObj[key] = value
            })
            return niceObj
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
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 1rem;
}

@media (max-width: 768px) {
    .confirmation-container {
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
