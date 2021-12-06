<template>
  <main class="register_d_wrapper">
    <main-header :showNav="false"></main-header>
    <inner-banner
      :registerImage="img"
      :pageTitle="'Create Account'"
    ></inner-banner>
    <div class="container">
      <div class="regsiter_wrapper">
        
        <inputField
          name="Full Name"
          v-model="register.name"
          inputType="text"
          inputFor="fullname"
          :isValid="false"
          validationMessage=""
        ></inputField>

        <inputField
          ref="register"
          name="Username"
          v-model="register.username"
          inputType="text"
          inputFor="username"
          :isValid="false"
          validationMessage=""
        ></inputField>

        <fileUpload label="Upload Picture"></fileUpload>

        <inputField
          ref="register"
          name="Email"
          v-model="register.email"
          inputType="email"
          inputFor="email"
          :isValid="false"
          validationMessage=""
        ></inputField>

        <inputField
          ref="register"
          name="Phone"
          v-model="register.phone"
          inputType="number"
          inputFor="phone"
          :isValid="false"
          validationMessage=""
        ></inputField>

        <inputField
          ref="register"
          name="Password"
          v-model="register.password"
          inputType="password"
          inputFor="password"
          :isValid="false"
          validationMessage=""
        ></inputField>

        <inputField
          ref="register"
          name="Confirm Password"
          v-model="register.cpassword"
          inputType="password"
          inputFor="password"
          :isValid="false"
          validationMessage=""
        ></inputField>

        <div class="type_field">
          <div class="btn_group">
            <button class="btn_" @click="createAccount"> 
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
import inputField from '../components/form/uInput.vue';
import fileUpload from '../components/form/fileUploader.vue';

export default {
  components: {
    mainHeader,
    innerBanner,
    inputField,
    fileUpload
  },
  data() {
    return {
      img: loginImage,
      register: {
        name: '',
        username: '',
        email: '',
        phone: null,
        password: '',
        cpassword: ''
      }
    };
  },
  methods: {
    createAccount() {
      console.log(this.register)
    }
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
  grid-template-columns: 1fr 1fr 0.5fr;
  grid-gap: 3vw;
  width: 100%;
  height: auto;
  padding-top: 2.5vw;

  .input_uploader{
    grid-row: span 4;
  }
}
</style>