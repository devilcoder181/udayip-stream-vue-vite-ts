<template>
  <section class="section_banner">
    <picture>
      <source :src="registerImage" type="images/jpeg" />
      <img :src="registerImage" />
    </picture>

    <div class="content_">
      <div class="container">
        <div class="page_title" v-if="pageTitle != undefined">
          <h1>{{ pageTitle }}</h1>
          <router-link to="/login" class="link_">Back To Login</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  props: {
    registerImage: {
      type: String,
      required: true,
    },
    pageTitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.section_banner {
  position: relative;
  display: block;
  width: 100%;
  height: 35vh;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--secondary-color);
    opacity: 0.9;
    z-index: 3;
  }

  picture {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;

    img {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .content_ {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    z-index: 5;
  }

  .page_title {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1,
    h2 {
      position: relative;
      display: block;
      font-size: 2.5vw;
      margin-top: 0;
      color: var(--color-white);
    }

    .link_ {
      display: inline-block;
      color: var(--primary-color);
      font-weight: 600;
      font-size: var(--md-text);
      transition: all 0.3s ease;

      &:hover {
        color: var(--third-color);
      }
    }
  }
}
</style>