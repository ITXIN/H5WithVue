import Vue from 'vue';
// import Vuex from 'vuex';
import Vuex from 'vuex';
import App from './index.vue';
import Router from 'vue-router';
// 自己写的简单路由
// import VueRouter from './router/custom_vue_router/index.js';
import '@static/css/home/home.css';
import homeStore from '@src/vuex/home';

Vue.config.productionTip = false;
Vue.config.devtools = true;
// TODO:捕获全局错误
Vue.config.errorHandler = (err, vm, info) => {
    console.log('🚀 ~ err, vm, info:', err, vm, info);
};
// 路由动态加载
const Home = () => import(/* webpackChunkName: "component-router-home" */ './router/Home.vue').then(m => m.default);
const Foo = () => import(/* webpackChunkName: "component-router-foo" */ './router/Foo.vue').then(m => m.default);
const Bar = () => import(/* webpackChunkName: "component-router-bar" */ './router/Bar.vue').then(m => m.default);
const NotFind = () => import('../../../components/NotFind.vue').then(m => m.default);
const HOME = 'home';
const FOO = 'foo';
const BAR = 'bar';
Vue.use(Router);
// Vue.use(VueRouter);
// const router = new VueRouter({
const router = new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            component: App,
            children: [
                {
                    path: HOME,
                    component: Home,
                    name: HOME,
                    meta: {
                        keepAlive: true,
                    },
                },
                {
                    path: FOO,
                    component: Foo,
                    name: FOO,
                    meta: {
                        keepAlive: true,
                    },
                },
                {
                    path: BAR,
                    component: Bar,
                    name: BAR,
                    meta: {
                        keepAlive: true,
                    },
                },
                // {
                // // 错误的路径重定向到home,如果打开注释外层的路由（{path: '*'，component: notFound,}）不起作用了
                //     path: '*',
                //     redirect: '/home',
                // },
            ],
        },
        {
            path: '*',
            component: NotFind,
        },
        {
            // 自己写的路由只能先支持最外成的路由
            path: '/notfind',
            name: 'notfind',
            component: NotFind,
        },
        {
            path: './user/:id',
            component: NotFind,
            beforeEnter: (to, from, next) => {
                console.log('🚀 ~ router.beforeEnter ~ to:', to);
                console.log('🚀 ~ router.beforeEnter ~ from:', from);
                next();
                const islogin = false;
                if (islogin) {
                    next('/foo');
                } else {
                    next();
                }
            },
        },
    ],
});
// 导航守卫：路由拦截器，权限判断，重定向等
router.beforeEach((to, from, next) => {
    console.log('🚀 ~ router.beforeEach ~ from:', from);
    console.log('🚀 ~ router.beforeEach ~ to:', to);
    setTimeout(() => {
        const isLogin = false;
        if (to.name === 'notfind' && !isLogin) {
            next({ name: HOME });
        } else {
            next();
        }
    }, 100);
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
