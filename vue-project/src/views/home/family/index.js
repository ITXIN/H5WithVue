import Vue from 'vue';
import App from './index.vue';
import '@static/css/home/home.css';
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
});
