import { createApp } from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import router from './routers';

createApp(App)
.use(router)
.mount('#app');


