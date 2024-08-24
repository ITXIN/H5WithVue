<template>
    <div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
        <!-- <ChildSlot> -->
        <!-- <template slot="header">
                <h1>这是头部</h1>
            </template>

            <template slot="footer">
                <h1>这是底部</h1>
            </template> -->
        <!-- </ChildSlot> -->

        <!-- <div class="box1"></div>
        <div class="box2"></div>
        <div class="parent">
            <div class="float-child">浮动元素</div>
        </div>
        <img class="img-class" src="./assets/logo.png" />
        <p class="p-class">我是超长的文字</p> -->
        <!--       
        <div id="demo">
            <button v-on:click="show = !show">Toggle</button>
            <transition name="fade">
                <p v-if="show">hello</p>
            </transition>
        </div> -->
        <!-- <FlexTest></FlexTest>
        <svg width="400" height="400">
            <circle cx="100" cy="100" r="50" fill="red">
                <animate attributeName="cx" from="100" to="300" dur="3s" repeatCount="indefinite" />
            </circle>
        </svg> -->

        <!-- <HelloWorld msg="Welcome to Your Vue.js App" />
        <canvas id="myCanvas" width="400" height="400"></canvas>
        <template v-if="true">
            <component :is="comName" />
        </template>
        <span>status{{ status }}</span>
        <span>{{ dataDetails }}</span> -->
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// 使用vuex
import { mapActions, mapState } from 'vuex';
// import FlexTest from './components/FlexTest.vue';
// import ChildSlot from './components/Slot.vue';
export default {
    name: 'App',
    data: function () {
        return {
            comName: null,
            show: true,
        };
    },
    components: {
        // HelloWorld,
        // FlexTest,
        // ChildSlot,
    },
    created() {
        // this.getRequest({ test: 'b' });
        // console.log('this1', this);
        // function test(params) {
        //     console.log('this2', this, params);
        //     var testfn = parm => {
        //         console.log('this3', this, parm);
        //     };
        //     testfn(params);
        // }

        // test('alfdlf');
        // let bar = { a: 1, b: 2, obj: { key: 'value' } };
        // let baz = { ...bar };
        // console.log(bar);
        // console.log(baz);
        // bar.a = 10;
        // bar.obj = {};
        // console.log(bar);
        // console.log(baz);
        let obj1 = {
            a: 1,
            b: {
                c: 2,
            },
        };

        let obj2 = { ...obj1 };
        obj1.a = 10;
        obj1.b.c = 3;

        console.log(obj1, obj2); // 3  因为是浅拷贝，修改 obj1 中引用类型的值会影响到 obj2
    },
    mounted() {
        // 动态加载
        // this.$nextTick(() => {
        //     this.lazyLoadUnFirstBundle();
        // });
        // let map = new Map();
        // map.set('key', 'value1');
        // map.set('key', 'value2');
        // console.log('====map', map.keys('key'));
        // var canvas = document.getElementById('myCanvas');
        // var ctx = canvas.getContext('2d');
        // ctx.fillStyle ='red';
        // ctx.fillRect(50, 50, 150, 100);
        // var data = [
        //     { value: 30, color: 'red' },
        //     { value: 50, color: 'green' },
        //     { value: 20, color: 'blue' },
        // ];
        // this.drawPieChart(data);
    },
    computed: {
        ...mapState(['homeStore']),
        dataDetails() {
            console.log('==========details', this.homeStore);
            return this.homeStore?.detailData || 'error';
        },
        status() {
            return this.homeStore?.status || 'error';
        },
    },
    methods: {
        ...mapActions(['getRequest']),
        drawPieChart(data) {
            var canvas = document.getElementById('myCanvas');
            var ctx = canvas?.getContext('2d');

            var total = data.reduce((sum, item) => sum + item.value, 0);
            var startAngle = 0;

            data.forEach(item => {
                var sliceAngle = (item.value / total) * 2 * Math.PI;

                ctx.beginPath();
                ctx.moveTo(canvas.width / 2, canvas.height / 2);
                ctx.arc(
                    canvas.width / 2,
                    canvas.height / 2,
                    Math.min(canvas.width / 2, canvas.height / 2),
                    startAngle,
                    startAngle + sliceAngle,
                );
                ctx.closePath();

                ctx.fillStyle = item.color;
                ctx.fill();

                startAngle += sliceAngle;
            });
        },
        lazyLoadUnFirstBundle() {
            this.comName = () =>
                import(/* webpackChunkName: "component-split-screen" */ './split-screen/ComponentSplitScreen.vue').then(
                    m => m.default,
                );

            console.log('=======comname', this.comName);
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.box1 {
    background: blue;
    margin-bottom: 10px;
    height: 100px;
}
.box2 {
    height: 100px;
    background: purple;
    margin-top: 10px;
    /* overflow: hidden; */
    /* 触发 BFC 防止外边距重叠 */
}
.parent {
    overflow: hidden; /* 触发 BFC 以包含浮动子元素 */
    background: red;
}
.float-child {
    float: left;
    width: 100px;
    height: 100px;
    background: yellow;
}
/* .parent {
    overflow: hidden;
}
.float {
    float: left;
} */
.img-class {
    float: left;
}
.p-class {
    overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 10.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
