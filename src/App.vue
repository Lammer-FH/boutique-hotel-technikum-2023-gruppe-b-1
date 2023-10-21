<template>
  <div>
    <BNavbar toggleable="lg" variant="primary" v-b-color-mode="'dark'">
      <BNavbarBrand href="#">NavBar</BNavbarBrand>
      <BNavbarToggle target="nav-collapse" />
      <BCollapse id="nav-collapse" is-nav>
        <BNavbarNav>
          <BNavItem href="/">Home</BNavItem>
          <BNavItem href="/about">About</BNavItem>
          <BNavItem href="/impressum">Impressum</BNavItem>
        </BNavbarNav>
        <!-- Right aligned nav items -->
      </BCollapse>
    </BNavbar>
    <RouterView></RouterView>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import { BNavbar, BNavbarBrand, BNavbarToggle, BCollapse, BNavbarNav, BNavItem } from 'bootstrap-vue-next'
export default {
  components: {
    BNavbar,
    BNavbarBrand,
    BNavbarToggle,
    BCollapse,
    BNavbarNav,
    BNavItem
  },
  setup() {
    return {}
  },
  data() {
    return {
    }
  }

}
</script>

<style scoped>
</style>
