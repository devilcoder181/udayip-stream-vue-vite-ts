import { createRouter, createWebHistory } from 'vue-router';

// Components
import home from '../src/views/home.vue';
import login from '../src/views/login.vue';
import reigster from '../src/views/register.vue';

export const router: any = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: home
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/register',
            component: reigster
        },
    ]
});