import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App);

// 使用 Pinia
const pinia = createPinia();
app.use(pinia);

// 使用 Vue Router
app.use(router);

app.mount('#app');
