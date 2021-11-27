<template>
  <div class="page_nav_wrapper">
    <nav>
      <ul>
        <li v-for="(nav, index) in navItem" :key="index">
          <a :href="nav.link" :title="nav.name">{{ nav.name }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      navItem: [
        { name: "Home", link: "#" },
        { name: "My List", link: "#" },
        { name: "Latest", link: "#" },
        { name: "Up Coming", link: "#" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
nav {
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  margin-inline-end: 1.5em;

  ul {
    position: relative;
    display: flex;
    align-content: center;
    justify-content: flex-end;
    margin: 0 -0.75em;

    li {
      position: relative;
      display: block;
      margin: 0 0.75em;

      a {
        position: relative;
        display: block;
        color: var(--body-color);
        transition: color 0.3s ease;
        font-weight: 600;
        text-transform: uppercase;

        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
}

.page_nav_wrapper {
  position: relative;
  display: block;
  width: auto;
  transition: all 0.5s ease;

  @media only screen and (max-width: 767px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    opacity: 0;
    pointer-events: none;
  }
}
@media only screen and (max-width: 767px) {
  body.activate_nav {
    .page_nav_wrapper {
      opacity: 1;
      pointer-events: auto;
      padding: 0 15vw;
      background: var(--secondary-color);
      nav {
        height: 100%;
        ul {
          flex-direction: column;
          height: 100%;
          align-items: flex-start;
          justify-content: center;

          li {
            margin: 0.5em 0;
            a {
              font-size: 7.5vw;
            }
          }
        }
      }
    }
  }
}
</style>