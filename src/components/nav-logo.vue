<template>
  <div class="nav_logo">
    <a href="#" class="nav_link" :title="title">
      <img :src="logo" :alt="title" />
    </a>
  </div>
</template>

<script lang="ts">
import logo from "../assets/images/logo.svg";
export default {
  data() {
    return {
      title: "Udayip Stream",
      logo: logo,
    };
  },
};
</script>

<style lang="scss" scoped>
.nav_logo {
  position: relative;
  display: block;
  height: auto;
  width: 15vw;
  z-index: 3;

  @media only screen and (max-width: 767px) {
    width: 40vw;
  }

  .nav_link {
    position: relative;
    display: block;
    width: 100%;
    height: auto;

    img {
      position: relative;
      display: block;
      width: 100%;
      height: auto;
    }
  }
}
</style>