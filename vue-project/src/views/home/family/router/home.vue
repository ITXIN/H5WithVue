<template>
    <div class="body-bg">
        <!-- 插槽 -->
        <h1>Home页面</h1>
        <h1>jsBridgeMethod</h1>
        <button @click="jsBridgeMethod">jsBridgeMethod</button>

        <div>{{ testAssign.name }}||{{ testAssign.age }}</div>
        <div @click="changeAssign">change</div>

        <TestHandleDOM :dataObj="dataList"></TestHandleDOM>

        <VHCenter></VHCenter>

        <h1>BFC</h1>
        <BFCTest></BFCTest>

        <h1>css 画三角形</h1>
        <div class="triangle"></div>

        <h1>用户输入显示区XSS DOM 攻击</h1>
        <div id="userInput"></div>
        <input type="text" id="textInput" placeholder="输入内容..." />
        <button @click="displayText">显示</button>

        <h1>测试实现0.5p的线条</h1>
        <div class="half-px-line-container">
            <div class="half-px-line"></div>
        </div>
        <div class="half-pixel-line"></div>
        <svg width="100%" height="1px">
            <line x1="0" y1="0" x2="100%" y2="0" stroke="#000" stroke-width="0.5" />
        </svg>

        <h1>测试图片懒加载</h1>
        <div>
            <!-- <img v-lazy="imageUrl" :key="1" /> -->
            <img :src="imageUrl" />
        </div>

        <h1>测试修改数组元素</h1>
        <div v-for="item in dataArr" :key="item.name">
            {{ item.name }}
        </div>
        <button @click="changeArrItem">修改数组元素</button>

        <h1>测试prove inject</h1>
        <hello-world></hello-world>

        <h1>测试全局方法</h1>
        <button @click="testGlobalMethod">testGlobalMethod测试</button>

        <h1>插槽测试</h1>
        <SlotDemo>
            <template v-slot:header="slotData">
                <div>header 你哈{{ slotData.data.msg }}</div>
            </template>
            <div>Home content</div>
            <template v-slot:footer>
                <div>footer 到达你领导</div>
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
        <h1>测试图片懒加载</h1>
        <div>
            <!-- <img v-lazy="imageUrl" /> -->
        </div>
    </div>
</template>
<script>
import SlotDemo from '@src/components/SlotDemo.vue';
import { mapActions, mapState } from 'vuex';
import HelloWorld from '../components/HelloWorld.vue';
import BFCTest from '../components/BFCTest.vue';
import VHCenter from '../components/VHCenter.vue';
import TestHandleDOM from '../components/TestHandleDOM.vue';
import { jsBridgeMethod } from '@src/utils/jsBridge';
export default {
    name: 'Home',
    data() {
        return {
            show: true,
            comName: null, // 动态加载,
            dataArr: [
                {
                    name: 'test',
                    age: 18,
                },
                {
                    name: 'test2',
                    age: 18,
                },
                {
                    name: 'test3',
                    age: 18,
                },
                {
                    name: 'test4',
                    age: 18,
                },
            ],
            imageUrl:
                'http://gips3.baidu.com/it/u=2814132893,2583173656&fm=3042&app=3042&f=JPEG&wm=1,huayi,0,0,13,9&wmo=0,0&w=480&h=640',
            dataList: { name: 'default' },
            testAssign: {
                name: 'testAssign',
            },
        };
    },
    provide() {
        return {
            // 父组件监听子组件生命周期
            notifyParent: this.handleNotifyParent,
        };
    },
    components: {
        SlotDemo,
        HelloWorld,
        BFCTest,
        VHCenter,
        TestHandleDOM,
    },
    created() {
        // console.log('==============create');
        // const obj = [];
        // Object.defineProperty(obj, 'name', {
        //     value: 'Bob',
        //     writable: true, // 如果需要修改name的值
        //     enumerable: true, // 如果需要在for...in循环中枚举
        //     configurable: true, // 如果需要删除或重新配置这个属性
        // });
        // console.log('🚀 ~ created ~ obj:', obj);
    },
    mounted() {
        // 动态加载
        this.$nextTick(() => {
            this.lazyLoadUnFirstBundle();
        });
        this.noDebugger();
        console.log('======mounted', jsBridgeMethod);
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
        changeAssign() {
            // 动态给data添加新属性
            // 方法1.
            // this.testAssign = Object.assign({}, this.testAssign, { name: 'change', age: 18 });
            // 方法2.
            // this.$set(this.testAssign, 'name', 'change');
            // this.$set(this.testAssign, 'age', 18);
            // 方法3.
            this.$forceUpdate();
        },
        displayText() {
            const text = document.getElementById('textInput').value;
            document.getElementById('userInput').innerHTML = text;
        },
        changeArrItem() {
            this.dataArr[0] = { name: 'change', age: 100 };
            console.log('🚀 ~ changeArrItem ~ dataArr:', this.dataArr);
        },
        handleNotifyParent(hook) {
            console.log('🚀 ~ handleNotifyParent ~ this.$route:', hook);
        },
        testGlobalMethod() {
            this.$myGlobalMethod({ key: '这是home 页面触发的全局方法' });
        },
        noDebugger() {
            // 1. 屏蔽右键菜单
            // document.oncontextmenu = function (e) {
            //     return true;
            // };
            //
            (() => {
                function ban() {
                    if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
                        document.body.innerHTML = '检测到非法调试，请关闭后重新刷新重试';
                    }
                    // 2. 无限debugger 方式阻止调试
                    // setInterval(() => {
                    //     console.log('debugger');
                    //     // debugger;
                    // }, 50);
                    // 3. 检测是否打开了调试工具
                    // setInterval(() => {
                    //     if (typeof console.clear !== 'undefined') {
                    //         console.log('🚀 ~ setInterval ~ console.clear:', console.clear);
                    //         location.reload();
                    //     }
                    // }, 1000);
                }
                try {
                    ban();
                } catch (error) {
                    console.log('🚀 ~ noDebugger ~ error:', error);
                }
            })();
        },
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
            // window.WebJSBridge.showMessage1('param', res => {
            //     console.log('recieve callback', res);
            // });
            // console.log('🚀 ~ jsBridgeMethod ~ window.WebJSBridge:', window.WebJSBridge);
            // window?.WebJSBridge?.call?.('showMessage1', 'param', function (res) {
            //     console.log('recieve callback res:', res);
            // });
            // window.webkit.messageHandlers.showMessage2.postMessage(['两个参数One', '两个参数Two']);
            window.WebJSBridge.call('showMessage2', 'param', function (res) {
                console.log('recieve showMessage2 callback', res);
            });
            // window.WebJSBridge?.call('jsbridgeMethod', 'param', function (res) {
            //     console.log('recieve callback');
            //     console.log(res);
            // });
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
    watch: {
        dataList: {
            handler(newVal, oldVal) {
                console.log('watch dataList', newVal, oldVal);
            },
            deep: true,
        },
    },
    // 在SSR中，activated钩子实际上不会被调用
    activated() {
        console.log('🚀 Home~ activated ~ activated:');
    },
    deactivated() {
        console.log('🚀 Home~ deactivated ~ deactivated:');
    },
    beforeRouteEnter(to, from, next) {
        console.log('🚀 Home~ beforeRouteEnter ~ to, from, next:', to, from, next);

        // 注意：在守卫中访问组件实例需要使用 next 的 vm 参数
        next(vm => {
            // 通过 vm 访问组件实例
            console.log('即将进入的路由是：', to);
            // 例如，从服务器获取数据
            // vm.fetchData();
        });
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
.half-pixel-line {
    height: 1px;
    background-color: yellow;
    transform: scaleY(0.5);
    transform-origin: top;
}

.half-px-line {
    position: relative;
    height: 1px;
    background-color: black;
    transform: scaleY(0.5);
    transform-origin: 0 0;
}

/* 容器需要适应缩放 */
.half-px-line-container {
    overflow: hidden;
    height: 1px; /* 与线条原始高度相同 */
    margin-bottom: 15px;
}

.triangle {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid blue;
}
</style>
