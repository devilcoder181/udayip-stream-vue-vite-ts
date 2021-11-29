<template>
  <div class="banner_slider_wrapper">
    <div class="section_title">
      <h2>Recommended Movies</h2>
    </div>

    <div class="recommended_movies_swiper">
      <swiper
        :slides-per-view="8"
        :space-between="20"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(item, index) in movieList" :key="index">
          <div class="item_" @click="changeTitle(item.id)">
            <img :src="item.thumb" :alt="item.name" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

export default {
  beforeCreate() {
    this.$store.dispatch("initDefaultPost", 0);
  },
  data() {
    return {
      movieList: this.$store.getters.setRecomendedPost,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    changeTitle(el): void {
      this.$store.dispatch("changeMainPost", el);
    },
  },
  setup() {
    const onSwiper = (swiper): void => {};
    const onSlideChange = (): void => {};
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>

<style lang="scss">
.banner_slider_wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 9;
  padding-left: 6.25%;

  .swiper {
    overflow: initial;
  }

  .recommended_movies_swiper {
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    width: 100%;

    .item_ {
      position: relative;
      display: block;
      width: 100%;
      height: 0;
      padding-top: 125%;
      overflow: hidden;
      border-radius: 0.5em;
      background-color: var(--secondary-color);
      transition: all 0.3s ease;
      transform-box: bottom;
      cursor: pointer;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-position: top;
        object-fit: cover;
      }

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>