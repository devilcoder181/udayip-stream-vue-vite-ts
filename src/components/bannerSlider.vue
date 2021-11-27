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
          <div class="item_">
            <img :src="item.img" :alt="item.id" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import poster1 from "../assets/images/poster/poster_1.jpg";
import poster2 from "../assets/images/poster/poster_2.jpg";
import poster3 from "../assets/images/poster/poster_3.jpg";
import poster4 from "../assets/images/poster/poster_4.jpg";
import poster5 from "../assets/images/poster/poster_5.jpg";
import poster6 from "../assets/images/poster/poster_6.jpg";
import poster7 from "../assets/images/poster/poster_7.jpg";
import poster8 from "../assets/images/poster/poster_8.jpg";
import poster9 from "../assets/images/poster/poster_9.jpg";
import poster10 from "../assets/images/poster/poster_10.jpg";

export default {
  data() {
    return {
      movieList: [
        { id: 1, img: poster1 },
        { id: 2, img: poster2 },
        { id: 3, img: poster3 },
        { id: 4, img: poster4 },
        { id: 5, img: poster5 },
        { id: 6, img: poster6 },
        { id: 7, img: poster7 },
        { id: 8, img: poster8 },
        { id: 9, img: poster9 },
        { id: 10, img: poster10 },
        { id: 11, img: poster1 },
        { id: 12, img: poster3 },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper): void => {
      console.log(swiper);
    };
    const onSlideChange = (): void => {
      console.log("slide change");
    };
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