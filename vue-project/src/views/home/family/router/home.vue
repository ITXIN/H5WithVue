<template>
    <div class="body-bg">
        <!-- 插槽 -->
        <h1>Home页面</h1>

        <h1>插槽测试</h1>
        <SlotDemo>
            <template v-slot:header="slotData">
                <div>header 你哈{{ slotData.data.msg }}</div>
            </template>
            <template v-slot:footer>
                <div>footer 你领导</div>
            </template>
        </SlotDemo>

        <!-- homeStore测试 -->
        <h1>homeStore测试</h1>
        <div class="body-content">{{ JSON.stringify(homeData) }}</div>
        <button @click="getHomeList">getHomeList</button>

        <!-- transition 测试 -->
        <h1>transition 测试</h1>
        <div id="demo">Demo</div>
        <transition name="fade">
            <div v-show="show">Hello</div>
        </transition>
        <button @click="show = !show">toggle</button>

        <!-- 动态加载 -->
        <h1>动态加载</h1>
        <template v-if="true">
            <component :is="comName" />
        </template>
    </div>
</template>
<script>
import SlotDemo from '@src/components/SlotDemo.vue';
import { mapActions, mapState } from 'vuex';

export default {
    data() {
        return {
            show: true,
            comName: null, // 动态加载
        };
    },
    components: {
        SlotDemo,
    },
    created() {
        // console.log('==============create');
        // const obj = {
        //     name: 'John',
        //     sayHello: () => {
        //         console.log(`Hello, my name is ${this.name}`);
        //     },
        //     sayHelloNormal: function () {
        //         console.log(`Hello, my name is ${this.name}`);
        //     },
        // };
        // // 显式绑定 this
        // obj.sayHello.call(this);
        // obj.sayHello(); // 输出 "Hello, my name is John"
        // obj.sayHelloNormal(); // 输出 "Hello, my name is John"
    },
    mounted() {
        // 动态加载
        this.$nextTick(() => {
            this.lazyLoadUnFirstBundle();
        });
    },
    computed: {
        // 引入store
        ...mapState(['homeStore']),
        homeData() {
            return this.homeStore?.homeListData || {};
        },
    },
    methods: {
        // 引入store
        ...mapActions(['getHomeListData']),
        getHomeList() {
            // homeStore
            console.log('getHomeList');
            this.getHomeListData({}).finally(() => {
                console.log('getHomeList', this.homeStore?.homeListData);
            });
        },
        transitionTest() {
            const dom = document?.querySelector('#demo');
            dom?.addEventListener('transitionstart', () => {
                console.log('🚀 ~ dom.addEventListener ~ transitionStart:');
            });
            dom?.addEventListener('transitionend', () => {
                console.log('🚀 ~ dom.addEventListener ~ transitionEnd:');
                dom.parentElement.removeChild(dom);
            });
        },
        // JSBridge 测试
        jsBridgeMethod() {
            window.WebJSBridge.showMessage1('param', res => {
                console.log('recieve callback', res);
            });
            window?.WebJSBridge?.call?.('showMessage1', 'param', function (res) {
                console.log('recieve callback');
                console.log(res);
            });
            window.webkit.messageHandlers.showMessage2.postMessage(['两个参数One', '两个参数Two']);
            window.WebJSBridge.call('showMessage2', 'param', function (res) {
                console.log('recieve callback');
                console.log(res);
            });
            window.WebJSBridge?.call('jsbridgeMethod', 'param', function (res) {
                console.log('recieve callback');
                console.log(res);
            });
        },
        lazyLoadUnFirstBundle() {
            // 懒加载
            this.comName = () =>
                import(
                    /* webpackChunkName: "component-split-screen" */ '../../split-screen/component_split_screen.vue'
                ).then(m => m.default);

            console.log('=======comname', this.comName);
        },
    },
};
</script>
<style scoped>
#demo {
    width: 100px;
    height: 100px;
    background: yellow;
    transition: all 1s ease;
}
#demo:hover {
    transform: translateX(100px);
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
