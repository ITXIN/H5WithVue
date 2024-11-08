<template>
    <div>
        <h1>Foo</h1>
        <h1>RequestAnimationFrame</h1>
        <RequestAnimationFrame></RequestAnimationFrame>
    </div>
</template>
<script>
import RequestAnimationFrame from '../components/RequestAnimationFrame.vue';
export default {
    name: 'Foo',
    components: {
        RequestAnimationFrame,
    },
    methods: {},
    activated() {
        console.log('🚀 Foo~ activated ~ activated:');
    },
    deactivated() {
        console.log('🚀 Foo~ deactivated ~ deactivated:');
    },
    beforeRouteEnter(to, from, next) {
        console.log('🚀 Foo~ beforeRouteEnter ~ to, from, next:', to, from);

        next();
    },
};
</script>
<style></style>
