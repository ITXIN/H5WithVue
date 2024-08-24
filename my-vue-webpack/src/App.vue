<template>
  <div id="app">
    <button @click="btnClick1">btnClick1</button>
    <button @click="btnClick2">btnClick2</button>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" :isShow="isShow" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
// import { WebJSBridge } from "./utils/WebJSBridge.js";
export default {
  name: "App",
  data() {
    return {
      // isShow: false,
    };
  },
  components: {
    HelloWorld,
  },
  computed: {
    isShow() {
      let a = "";
      let b = "";
      const c = a && b;
      console.log("=========c", c);
      return c;
    },
  },
  mounted() {},
  methods: {
    btnClick1() {
      // window.webkit.messageHandlers.showMessage1.postMessage("null");
      // console.log("========WebJSBridge", WebJSBridge);
      // window.WebJSBridge.showMessage1("param", (res) => {
      //   console.log("recieve callback", res);
      // });
      window.WebJSBridge.call("showMessage1", "param", function (res) {
        console.log("recieve callback");
        console.log(res);
      });
    },
    btnClick2() {
      // window.webkit.messageHandlers.showMessage2.postMessage([
      //   "两个参数One",
      //   "两个参数Two",
      // ]);
      // window.WebJSBridge.call("showMessage2", "param", function (res) {
      //   console.log("recieve callback");
      //   console.log(res);
      // });
      // WebJSBridge.call("jsbridgeMethod", "param", function (res) {
      //   console.log("recieve callback");
      //   console.log(res);
      // });
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
</style>
