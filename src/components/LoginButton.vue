<template>
    <button class="login-button">
        <span>{{ isLoggedIn ? 'logout' : 'login' }}</span>
    </button>
</template>

<script>
import { useUserStore } from '../stores/useUserStore';


export default {
    setup() {
        const userStore = useUserStore();

        return {
            userStore
        }
    },
    data() {
        return {
        }
    },
    computed: {
        isLoggedIn() {
            return this.userStore.isLoggedIn;
        }
    },
}
</script>

<style lang="scss" scoped>
.login-button {
    background-color: white;
    color: var(--primary);
    border: 1px solid var(--primary);
    border-radius: var(--rounded-sm);
    padding: 0.5rem 1rem;
    font-size: 1rem;
    text-transform: capitalize;
}
</style>
