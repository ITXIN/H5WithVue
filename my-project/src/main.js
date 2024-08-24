import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import Router from 'vue-router';
import homeStore from './vuex/home';

// 动态加载
const home = () => import('./router/Home.vue').then(m => m.default);
const about = () => import('./router/About.vue').then(m => m.default);
const HOME = 'home';
const ABOUT = 'about';
Vue.use(Router);
const router = new Router({
    // mode:'history',
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
                    path: ABOUT,
                    component: about,
                    name: ABOUT,
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

Vue.use(Vuex);
Vue.config.productionTip = false;
const store = new Vuex.Store({
    modules: {
        homeStore,
    },
});
window.onhashchange = event => {
    console.log('====onhashchange oldURL', event.oldURL);
    console.log('====onhashchange newURL', event.newURL);
    let hash = location.hash.slice(1);
    console.log('====onhashchange hash', hash);
};
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>',
    render: h => h('router-view'),
});
// .$mount('#app')
