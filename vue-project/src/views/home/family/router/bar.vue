<template>
    <div>
        <h1>Bar</h1>

        <ElementComponents></ElementComponents>
    </div>
</template>
<script>
import ElementComponents from '../components/element/ElementComponents.vue';
export default {
    name: 'Bar',
    methods: {},
    components: {
        ElementComponents,
    },
    activated() {
        console.log('🚀 Bar~ activated ~ activated:');
    },
    deactivated() {
        console.log('🚀 Bar~ deactivated ~ deactivated:');
    },
    beforeRouteEnter(to, from, next) {
        console.log('🚀 Bar~ beforeRouteEnter ~ to, from, next:', to, from);

        next();
    },
};
</script>
<style></style>
