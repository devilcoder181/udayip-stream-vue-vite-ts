<template>
  <div class="user_profile">
    <a href="#" class="profile_" title="Settings">
      <img :src="userImage" :alt="name" />
    </a>
  </div>
</template>

<script lang="ts">
import userImage from "../assets/images/user-image-new.png";
export default {
  data() {
    return {
      name: "Alan Sha Salim",
      userImage,
    };
  },
};
</script>

<style lang="scss" scoped>
.user_profile {
  position: relative;
  display: block;
  width: 2.75vw;
  height: 2.75vw;
  border-radius: 50%;
  overflow: hidden;

  @media only screen and (max-width: 767px) {
    width: 10vw;
    height: 10vw;
  }

  .profile_ {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--primary-color);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    img {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }

    &:hover {
      &:after {
        opacity: 0.5;
      }
    }
  }
}
</style>