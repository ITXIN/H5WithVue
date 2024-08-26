<template>
    <div class="body-bg">
        <p class="body-content">我们是一家人</p>
        <p class="body-content">!!!!</p>
        <button @click="btnClick1">btnClick1</button>
        <button @click="btnClick2">btnClick2</button>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    created() {
        console.log('==============create');
    },
    computed: {},
    methods: {
        btnClick1() {
            // window.webkit.messageHandlers.showMessage1.postMessage("null");
            // console.log("========WebJSBridge", WebJSBridge);
            // window.WebJSBridge.showMessage1("param", (res) => {
            //   console.log("recieve callback", res);
            // });
            window?.WebJSBridge?.call?.('showMessage1', 'param', function (res) {
                console.log('recieve callback');
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
<style lang="scss" scoped></style>
