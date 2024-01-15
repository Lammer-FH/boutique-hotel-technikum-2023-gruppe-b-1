<template>
    <div class="login-container">
        <b-form @submit.prevent="login">
            <b-form-group label="E-Mail" label-for="email">
                <b-form-input id="email" v-model="email" type="text" required></b-form-input>
            </b-form-group>
            <b-form-group label="Password" label-for="password">
                <b-form-input id="password" v-model="password" type="password" required></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary" :disabled="email.length == 0 || password.length == 0">Login</b-button>
        </b-form>
    </div>
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
            email: '',
            password: ''
        }
    },
    emits: ['closeLogin'],
    methods: {
        async login() {
            await this.userStore.loginUser(this.email, this.password);
            this.$emit('closeLogin');
        }
    }
}
</script>

<style lang="scss" scoped>
.login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}
</style>
