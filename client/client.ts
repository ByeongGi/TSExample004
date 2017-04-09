import * as Vue from 'vue';
import App from './application/app.vue';
import Header from './application/header.vue';
import Footer from './application/footer.vue';
import router from "./router";
import store from "./store";


// 전역적으로 커스터 태크를 등록하는 방법
Vue.component('app-header', Header );
Vue.component('app-footer', Footer );
Vue.component('app', App);

const app: Vue = new Vue({
    store,
    router
}).$mount('#app');
