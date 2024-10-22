<template>
    <div>
        <h1>Bar</h1>
    </div>
</template>
<script>
export default {
    name: 'Bar',
    methods: {},
    activated() {
        console.log('🚀 Bar~ activated ~ activated:');
    },
    deactivated() {
        console.log('🚀 Bar~ deactivated ~ deactivated:');
    },
    beforeRouteEnter(to, from, next) {
        console.log('🚀 Bar~ beforeRouteEnter ~ to, from, next:', to, from, next);

        next();
    },
};
</script>
<style></style>
