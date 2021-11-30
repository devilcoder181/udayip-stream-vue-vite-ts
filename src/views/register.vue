<template>
  <main class="register_d_wrapper">
    <main-header :showNav="false"></main-header>
    <inner-banner
      :registerImage="img"
      :pageTitle="'Create Account'"
    ></inner-banner>
    <div class="container">
      <div class="regsiter_wrapper">
        <div class="type_field">
          <label for="fullname">Full Name</label>
          <input type="text" name="fullname" />
        </div>

        <div class="type_field">
          <label for="username">Username</label>
          <input type="text" name="username" />
        </div>

        <div class="type_field">
          <label for="email">Email</label>
          <input type="email" name="email" />
        </div>

        <div class="type_field">
          <label for="phone">Phone</label>
          <input type="number" name="phone" />
        </div>

        <div class="type_field">
          <label for="password">Password</label>
          <input type="password" name="password" />
        </div>

        <div class="type_field">
          <label for="cpassword">Confirm Password</label>
          <input type="password" name="cpassword" />
        </div>

        <div class="type_field">
          <div class="btn_group">
            <button class="btn_">
              <span>Create Account</span>
            </button>

            <router-link to="/login" class="btn_ white_">
              <span>Login</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template> 

<script lang="ts">
import mainHeader from "../components/header.vue";
import innerBanner from "../components/banner/innerBanner.vue";
import loginImage from "../assets/images/login_banner.jpg";

export default {
  components: {
    mainHeader,
    innerBanner,
  },
  data() {
    return {
      img: loginImage,
    };
  },
};
</script>

<style lang="scss" scoped>
.register_d_wrapper {
  position: relative;
  display: block;
  width: 100%;
  min-height: 100vh;
}

.regsiter_wrapper {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3vw;
  width: 100%;
  height: auto;
  padding-top: 2.5vw;
}
</style>