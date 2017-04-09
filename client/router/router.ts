import Vue from "vue";
import VueRouter from 'vue-router';
import {list}  from '../application';

    
Vue.use(VueRouter);

const Foo = { template: '<div>foo</div>' }  
const Bar = { template: '<div>bar</div>' }

const routes = [  
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/list', component: list }
];

// SPA 개발시에 자체 Vue에서 제공하는 VueRouter 객체
const router: VueRouter = new VueRouter({
    routes
});                   


export default router;