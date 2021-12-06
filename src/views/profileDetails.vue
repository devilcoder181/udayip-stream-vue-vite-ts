<template>

    <main class="common_inner_main">
        <main-header :showNav="true"></main-header>
        <inner-banner
            :registerImage="bannerImage"
        ></inner-banner>
        <section class="settings_wrapper">
            <div class="container">
                <div class="profile_icon">
                    <div class="p_details">
                        <file-upload
                            :image="userImage"
                        >
                        </file-upload>
                    </div>
                </div>
                <div class="section_title center_ column_">
                    <h1>Welcome {{username}}</h1>
                    <p>Please make your changes on below fields.</p>
                </div>

                <div class="regsiter_wrapper">
                     <inputField
                    name="Full Name"
                    v-model="userDetails.name"
                    inputType="text"
                    inputFor="fullname"
                    :isValid="false"
                    validationMessage=""
                    ></inputField>

                    <inputField
                    ref="register"
                    name="Username"
                    v-model="userDetails.username"
                    inputType="text"
                    inputFor="username"
                    :isValid="false"
                    validationMessage=""
                    ></inputField>

                    <inputField
                    ref="register"
                    name="Email"
                    v-model="userDetails.email"
                    inputType="email"
                    inputFor="email"
                    :isValid="false"
                    validationMessage=""
                    ></inputField>

                    <inputField
                    ref="register"
                    name="Phone"
                    v-model="userDetails.phone"
                    inputType="number"
                    inputFor="phone"
                    :isValid="false"
                    validationMessage=""
                    ></inputField>

                    <inputField
                    ref="register"
                    name="Password"
                    v-model="userDetails.password"
                    inputType="password"
                    inputFor="password"
                    :isValid="false"
                    validationMessage=""
                    ></inputField>

                    <inputField
                    ref="register"
                    name="Confirm Password"
                    v-model="userDetails.cpassword"
                    inputType="password"
                    inputFor="password"
                    :isValid="false"
                    validationMessage=""
                    ></inputField>

                    <div class="type_field">
                    <div class="btn_group">
                        <button class="btn_"> 
                        <span>Update Settings</span>
                        </button>

                        <router-link to="/" class="btn_ white_">
                        <span>Logout</span>
                        </router-link>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

</template>

<script lang="ts">
    import bannerImage from "../assets/images/login_banner.jpg";
    import mainHeader from "../components/header.vue";
    import innerBanner from "../components/banner/innerBanner.vue";
    import userImage from "../assets/images/user-image-new.png";
    import fileUpload from '../components/form/fileUploader.vue';
    import inputField from '../components/form/uInput.vue';


    export default {
        data() {
            return {
                bannerImage,
                userImage,
                username: 'Alan Sha Salim',
                userDetails: {
                    name: '',
                    username: '',
                    email: '',
                    phone: null,
                    password: '',
                    cpassword: ''
                }
            }
        },
        components: {
            mainHeader,
            innerBanner,
            fileUpload,
            inputField
        }
    }
</script>

<style lang="scss" scoped>
    .settings_wrapper{
        position: relative;
        display: block;
        width: 100%;
        height: auto;
        padding-bottom: 5vw;

        .profile_icon{
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 3;
            margin-bottom: -2.5vw;

            .p_details{
                position: relative;
                display: block;
                width: 10vw;
                height: auto;
                border-radius: 50%;
                overflow: hidden;
                transform: translateY(-50%);
            }
        }
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