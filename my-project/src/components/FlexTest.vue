<template>
    <div class="parent"></div>
</template>

<script>
export default {
    name: 'ComponentContent',
    props: {
        item: {
            type: Object,
            default: () => ({}),
        },
    },
    data: function () {
        return {};
    },
    components: {},
    computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.parent {
    /* display: flex; */
    width: '100%';
    height: 200px;
    background: red;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px;
}
</style>
