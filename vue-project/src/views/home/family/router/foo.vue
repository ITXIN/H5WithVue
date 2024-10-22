<template>
    <div>
        <h1>Foo</h1>
    </div>
</template>
<script>
export default {
    name: 'Foo',
    methods: {},
    activated() {
        console.log('🚀 Foo~ activated ~ activated:');
    },
    deactivated() {
        console.log('🚀 Foo~ deactivated ~ deactivated:');
    },
    beforeRouteEnter(to, from, next) {
        console.log('🚀 Foo~ beforeRouteEnter ~ to, from, next:', to, from, next);

        next();
    },
};
</script>
<style></style>
