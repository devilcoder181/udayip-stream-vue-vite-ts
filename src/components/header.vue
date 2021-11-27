

<template>
  <header id="header">
    <div class="container">
      <div class="nav_container">
        <nav-logo></nav-logo>

        <div class="nav_placeholder">
          <nav-item></nav-item>
          <profile></profile>
          <toggler></toggler>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import navLogo from "./nav-logo.vue";
import navItem from "./nav.vue";
import profile from "./profile.vue";
import toggler from "./toggler.vue";
export default {
  components: {
    navLogo,
    navItem,
    profile,
    toggler,
  },
};
</script>

<style lang="scss" scoped>
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 8vh;
  padding: 0.75em 0;
  z-index: 99;
  @media only screen and (min-width: 768px) and (max-width: 1200px) and (orientation: portrait) {
    height: 8vh;
  }

  @media only screen and (max-width: 767px) {
    height: 70px;
  }

  .container {
    height: 100%;
  }

  .nav_container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }

  .nav_placeholder {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>

