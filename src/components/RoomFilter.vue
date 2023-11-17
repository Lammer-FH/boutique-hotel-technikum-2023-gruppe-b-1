<template>
    <div class="filter-container">
        <label for="countBeds">Anzahl der Betten</label>
        <BFormSpinbutton id="countBeds" v-model="beds" min="1" max="6" />
        <label for="priceMin">Preis</label>
        <BFormInput type="number" id="priceMin" v-model="priceMin" />
        <label for="priceMax">-</label>
        <BFormInput type="number" id="priceMax" v-model="priceMax" />
    </div>
</template>

<script>
import { BFormSpinbutton, BFormInput } from 'bootstrap-vue-next';
export default {
    components: {
        BFormSpinbutton,
        BFormInput,
    },
    emits: ['filter'],
    data() {
        return {
            priceMin: 0,
            priceMax: 300,
            beds: 1,
        }
    },
    methods: {
        emitFilter() {
            this.$emit('filter', {
                priceMin: this.priceMin,
                priceMax: this.priceMax,
                beds: this.beds,
            })
        }
    },
    watch: {
        priceMin() {
            this.emitFilter()
        },
        priceMax() {
            this.emitFilter()
        },
        beds() {
            this.emitFilter()
        }
    }
}
</script>


<style scoped>
.filter-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    gap: 1rem;
    margin-bottom: 1rem;
    border: 2px solid var(--primary);
    background-color: rgba(var(--primary-values), 0.2);
    border-radius: var(--rounded-sm);
}

@media (max-width: 768px) {
    .filter-container {
        flex-direction: column;
    }
}

.flex-grow {
    flex-grow: 1;
}

.seperator {
    width: 2px;
    height: 2rem;
    background-color: var(--primary);
}
</style>
