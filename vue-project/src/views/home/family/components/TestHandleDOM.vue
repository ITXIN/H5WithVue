<template>
    <div>
        <h1>DOM 操作</h1>

        <!-- <div id="dom">name： {{ dataObj?.name }}</div> -->
        <button @click="displayText">显示文本{{ dataObj.name }}</button>
    </div>
</template>

<script>
export default {
    name: 'TestHandleDOM',
    props: {
        dataObj: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {};
    },
    mounted() {
        console.log('🚀 ~ mounted1 ~ this.dataObj:', this.dataObj.name);

        // console.log('🚀 ~ mounted2 ~ this.dataObj:', this.props.dataObj);
        // // 1. 获取dom
        // const dom = document.querySelector('#dom');
        // // 2. 添加事件
        // dom.addEventListener('click', function () {
        //     console.log('click');
        // });
        // // 3. 移除事件
        // dom.removeEventListener('click', function () {
        //     console.log('click');
        // });
        // const div1 = document.createElement('div');
        // const text1 = document.createTextNode('hello');
        // div1.appendChild(text1);
        // const fragment = document.createDocumentFragment();
        // const dataAtt = document.createAttribute('custom');
        // document.querySelector();
    },
    method: {
        displayText() {
            this.props.dataObj.name = 'change';
            console.log('🚀 ~ displayText ~ this.porps.dataObj:', this.props.dataObj);
        },
    },
};
</script>
