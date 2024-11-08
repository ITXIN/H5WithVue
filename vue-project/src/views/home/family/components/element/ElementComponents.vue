<template>
    <div>
        <span>ElementComponents</span>
        <!-- <el-button @click="visible = true">Button</el-button>
        <el-dialog :visible="visible" title="Hello world">
            <p>Try Element</p>
        </el-dialog> -->
    </div>
</template>
<script>
export default {
    name: 'ElementComponents',
    components: {},
    data() {
        return {
            visible: false,
        };
    },
    computed: {}, // 监听器
    methods: {
        // visible() {
        //     console.log('visible');
        //     // this.visible = true;
        // },
    },
};
</script>
<style></style>
