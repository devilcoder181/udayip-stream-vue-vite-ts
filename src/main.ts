import { createApp } from 'vue';
import App from './App.vue';
import { router } from '../bin/routes';
import store from './store/index';

// Styles
import './assets/scss/main.scss';


const app = createApp(App);

app.use(store);
app.use(router);
app.mount('#app');