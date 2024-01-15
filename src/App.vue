<template>
  <BToaster />

  <BNavbar toggleable="lg" variant="primary" v-b-color-mode="'dark'" class="no-print">
    <BNavbarBrand href="/">
      <img src="../images/logo.png" class="logo" alt="Website Logo" />
    </BNavbarBrand>
    <BNavbarToggle target="nav-collapse" />
    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav>
        <BNavItem href="/">Home</BNavItem>
        <BNavItem href="/about">About</BNavItem>
        <BNavItem href="/impressum">Impressum</BNavItem>
      </BNavbarNav>
    </BCollapse>
    <LoginButton @click="toggleLogin"></LoginButton>
    <BModal v-model="showLoginModal" title="User Login">
      <LoginModal @close-login="closeModal" />
    </BModal>
  </BNavbar>
  <RouterView></RouterView>
</template>

<script>
import { RouterView } from 'vue-router';
import { BNavbar, BNavbarBrand, BNavbarToggle, BCollapse, BNavbarNav, BNavItem, BModal } from 'bootstrap-vue-next'
import LoginButton from './components/LoginButton.vue';
import LoginModal from './components/LoginModal.vue';
import { useUserStore } from './stores/useUserStore';
export default {
  components: {
    BNavbar,
    BNavbarBrand,
    BNavbarToggle,
    BCollapse,
    BNavbarNav,
    BNavItem,
    BModal,
    LoginButton,
    LoginModal
  },
  setup() {
    const userStore = useUserStore();
    return {
      userStore
    }
  },
  data() {
    return {
      showLoginModal: false
    }
  },
  methods: {
    toggleLogin() {
      if (this.userStore.isLoggedIn) {
        this.userStore.logoutUser();
        return
      }
      this.showLoginModal = !this.showLoginModal;
    },
    closeModal() {
      this.showLoginModal = false;
    }
  }

}
</script>

<style scoped>
.logo {
  height: 70px;
  width: auto;
}
</style>
