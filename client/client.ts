import * as Vue from 'vue';
import App from './application/app.vue';
import Header from './application/header.vue';
import Footer from './application/footer.vue';
import List  from './application/biz/list.vue';
// VueRouter 사용 명시 
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 1. Define route components.
// These can be imported from other files
const Foo = { template: '<div>foo</div>' }  
const Bar = { template: '<div>bar</div>' }

const routes = [  
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/list', component: List }
];

// SPA 개발시에 자체 Vue에서 제공하는 VueRouter 객체
const router: VueRouter = new VueRouter({
    routes
});


// 전역적으로 커스터 태크를 등록하는 방법
Vue.component('app-header', Header );
Vue.component('app-footer', Footer );
Vue.component('app', App);
 

const app: Vue = new Vue({
    router 
}).$mount('#app');
