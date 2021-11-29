<template>
  <section class="main_banner">
    <banner-wrapper></banner-wrapper>
    <banner-slider></banner-slider>
  </section>
</template>

<script lang="ts">
import bannerWrapper from "./bannerWrapper.vue";
import bannerSlider from "./bannerSlider.vue";
import bannerImage from "../assets/images/banner-image.jpg";
export default {
  components: {
    bannerWrapper,
    bannerSlider,
  },
  data() {
    return {
      mainMovie: {
        name: "The Hobbit An Unexpected Journey",
        image: bannerImage,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.main_banner {
  position: relative;
  display: block;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10%;
    background: rgb(21, 22, 28);
    background: linear-gradient(
      0deg,
      rgba(21, 22, 28, 1) 0%,
      rgba(21, 22, 28, 0) 100%
    );
    z-index: 10;
    pointer-events: none;
  }
}
</style>