<template>
    <main class="register_d_wrapper">
        <main-header :showNav="false"></main-header>

        <div class="success_wrapper">
            <div class="container">
                <div class="content_">
                <div class="svg_">
                    <svg x="0px" y="0px" viewBox="0 0 382.25 382.11" style="enable-background:new 0 0 382.25 382.11;" xml:space="preserve">
                        <g>
                            <path d="M207.1,382.11c-10.43,0-20.87,0-31.3,0c-2.82-0.39-5.63-0.8-8.46-1.16c-40.83-5.23-76.91-21.38-106.29-50.07
                                C5.48,276.6-12.54,210.97,8.57,136.26C35.55,40.76,135.45-17.82,232.56,4.89c72.9,17.05,120.22,62.92,142.78,134.27
                                c3.83,12.11,5.47,24.67,6.91,37.25c0,10.19,0,20.37,0,30.56c-1.18,8.84-2.03,17.75-4.26,26.41
                                c-18.57,72.32-63.49,119.69-134.75,141.99C231.48,379.05,219.29,380.65,207.1,382.11z M354.45,191.1
                                c-0.04-89.96-72.89-162.76-162.91-162.79C101.33,28.28,28.45,101.1,28.45,191.3c-0.01,90.2,72.9,163.08,163.06,163.02
                                C281.61,354.25,354.5,281.24,354.45,191.1z"/>
                            <path d="M96.82,190.9c3.96-0.12,7.46,2.31,10.62,5.48c13.25,13.27,26.51,26.52,39.77,39.77c3.41,3.4,3.42,3.39,6.89-0.08
                                c40.3-40.3,80.6-80.58,120.87-120.9c4.18-4.18,8.72-6.93,14.92-5.41c9.92,2.43,14.05,14.08,7.78,22.15
                                c-0.99,1.27-2.15,2.4-3.29,3.54c-43.89,43.9-87.79,87.79-131.69,131.68c-8.56,8.56-15.74,8.56-24.31,0
                                c-17.04-17.02-34.06-34.06-51.11-51.08c-4-4-6.43-8.51-5.01-14.37C83.87,195.04,89.24,190.86,96.82,190.9z"/>
                        </g>
                    </svg>
                </div>

                <div class="section_title">
                    <h1>Registration Completed</h1>
                </div>
                <div class="text_">
                    <p>Your profile has been created successfully.</p>
                </div>
                <div class="btn_group center_">
                    <router-link to="/login" class="btn_"><span>Back To Login</span></router-link>
                </div>
            </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
    import mainHeader from "../components/header.vue";

    export default {
        components: {
            mainHeader
        }
    }
</script>

<style lang="scss" scoped>
    .success_wrapper{
        position: relative;
        display: block;
        width: 100%;
        height: auto;
        margin-top: 15vh;

        .content_{
            position: relative;
            display:flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            width: 100%;

            .svg_{
                position: relative;
                display: block;
                width: 20%;
                height: auto;
                svg{
                    position: relative;
                    display: block;
                    width: 100%;
                    height: auto;

                    path{
                        fill: var(--primary-color);
                    }
                }
            }

            .text_{
                position: relative;
                display: block;
                width: 100%;
                margin-bottom: 1em;
                p{
                    margin: 0;
                    display: block;
                    font-size: var(--md-text-2);
                }
            }
        }
    }
</style>