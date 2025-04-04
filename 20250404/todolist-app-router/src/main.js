// Entry point : 애플리케이션의 진입점
import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia(); // ✅ 함수 호출로 인스턴스 생성

app.use(router);
app.use(pinia); // ✅ 이렇게 등록해야 store 사용 가능

app.mount('#app');
