<template>
  <main class="stream_main_window">
    <main-header :showNav="true"></main-header>
    <main-banner></main-banner>
  </main>
</template>

<script lang="ts">
import mainHeader from "../components/header.vue";
import MainBanner from "../components/mainBanner.vue";

export default {
  components: {
    mainHeader,
    MainBanner,
  },
};
</script>

<style lang="scss" scoped>
.stream_main_window {
  position: relative;
  display: block;
  width: 100%;
  min-height: 100vh;
}
</style>