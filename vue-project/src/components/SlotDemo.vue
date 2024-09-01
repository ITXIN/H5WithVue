<template>
    <div>
        <div class="header">
            <slot name="header" :data="slotData"></slot>
        </div>
        <div class="footer"><slot name="footer"></slot></div>
    </div>
</template>
<script>
export default {
    name: 'SlotDemo',
    data() {
        return {
            slotData: { msg: 'slot data you know' },
        };
    },
    created() {},
    computed: {},
    methods: {},
};
</script>
<style lang="scss" scoped></style>
