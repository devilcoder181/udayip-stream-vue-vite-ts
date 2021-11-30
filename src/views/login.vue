<template>
  <main class="login_d_wrapper">
    <div class="login_inner">
      <div class="image_wrapper">
        <picture>
          <source :src="loginImage" type="images/jpeg" />
          <img :src="loginImage" alt="Udayip Stream Login" />
        </picture>

        <div class="content_">
          <h1>Not a Member ? Join For Free</h1>
          <p>Everything is free and use it wisely.</p>
          <div class="btn_group center_ margin_">
            <router-link to="/register" class="btn_">
              <span>Register Now</span>
            </router-link>
          </div>
        </div>
      </div>

      <div class="login_form">
        <div class="content_">
          <nav-logo></nav-logo>
          <div class="form_">
            <div class="type_field">
              <label for="username">Username</label>
              <input type="text" name="username" />
            </div>

            <div class="type_field">
              <label for="password">Password</label>
              <input type="password" name="password" />
            </div>

            <div class="btn_group">
              <button class="btn_">
                <span>Login</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import loginImage from "../assets/images/login_banner.jpg";
import navLogo from "../components/nav-logo.vue";
export default {
  data() {
    return {
      loginImage,
    };
  },
  components: {
    navLogo,
  },
};
</script>

<style lang="scss" scoped>
.login_d_wrapper {
  position: relative;
  display: block;
  width: 100%;
  height: 100vh;

  .login_inner {
    position: relative;
    display: grid;
    grid-template-columns: 0.7fr 0.3fr;
    height: 100%;

    .image_wrapper {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      overflow: hidden;

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
        align-content: center;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        z-index: 5;

        h1 {
          position: relative;
          display: block;
          margin: 0;
          line-height: 1.75;
          font-size: var(--lg-text-4);
        }

        p {
          position: relative;
          display: block;
          margin: 0;
          font-size: var(--md-text-3);
        }
      }
    }

    .login_form {
      position: relative;
      display: flex;
      align-content: flex-start;
      justify-content: center;
      flex-direction: column;
      padding: 4vw;

      .content_ {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;

        .form_ {
          position: relative;
          margin-top: 2.5vw;
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 1.5em;
          width: 100%;
        }
      }
    }
  }
}
</style>