<template>
  <button class="toggler_" @click="activateNav" :class="{ active_: active }">
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<script lang="ts">
export default {
  data() {
    return {
      active: false,
    };
  },
  methods: {
    activateNav() {
      this.active = !this.active;

      document.body.classList.toggle("activate_nav");
    },
  },
};
</script>

<style lang="scss" scoped>
.toggler_ {
  position: relative;
  display: none;
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  margin-inline-start: 1.5em;
  outline: none;

  @media only screen and (max-width: 767px) {
    display: block;
  }

  span {
    position: relative;
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background: var(--body-color);
    transition: all 0.3s ease;
    transform-origin: center;

    &:nth-child(2) {
      margin: 5px 0;
    }
  }

  &.active_ {
    span {
      &:nth-child(2) {
        opacity: 0;
      }

      &:nth-child(1) {
        transform: translateY(9px) rotate(45deg);
      }

      &:nth-child(3) {
        transform: translateY(-9px) rotate(-45deg);
      }
    }
  }
}
</style>