import Vue from 'vue';
// import Vuex from 'vuex';
import Vuex from 'vuex';
import App from './index.vue';
import Router from 'vue-router';
import '@static/css/home/home.css';
import homeStore from '@src/vuex/home';

Vue.config.productionTip = false;
Vue.config.devtools = true;

// 路由动态加载
const home = () => import('./router/home.vue').then(m => m.default);
const foo = () => import('./router/foo.vue').then(m => m.default);
const bar = () => import('./router/bar.vue').then(m => m.default);
const HOME = 'home';
const FOO = 'foo';
const BAR = 'bar';
Vue.use(Router);
const router = new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            component: App,
            children: [
                {
                    path: HOME,
                    component: home,
                    name: HOME,
                    meta: {
                        keepAlive: true,
                    },
                },
                {
                    path: FOO,
                    component: foo,
                    name: FOO,
                    meta: {
                        keepAlive: true,
                    },
                },
                {
                    path: BAR,
                    component: bar,
                    name: BAR,
                    meta: {
                        keepAlive: true,
                    },
                },
                {
                    path: '*',
                    redirect: '/home',
                },
            ],
        },
    ],
});

// 引入store
const store = new Vuex.Store({
    modules: {
        homeStore,
    },
});

const app = new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>',
    render: h => h('router-view'),
});
console.log('===app', app);
