<template>
    <div class="hello">
        <h1>Home</h1>
        {{ msg?
        <p></p>
        :'' }}
        <p>
            For a guide and recipes on how to configure / customize this project,<br />
            check out the
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
        </p>
    </div>
</template>

<script>
export default {
    name: 'Home',
    props: {
        msg: String,
    },
    activated() {
        console.log('=======home activated');
    },
    deactivated() {
        console.log('=======home deactivated');
    },
    beforeRouteEnter(to, from, next) {
        console.log('🚀 Home~ beforeRouteEnter ~ to, from, next:', to, from, next);

        next();
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
