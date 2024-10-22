<template>
    <div class="hello">
        <h1>About</h1>
        <p>
            For a guide and recipes on how to configure / customize this project,<br />
            check out the
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
        </p>
    </div>
</template>

<script>
export default {
    name: 'About',
    props: {
        msg: String,
    },
    activated() {
        console.log('=======About activated');
    },
    deactivated() {
        console.log('=======About deactivated');
    },
    beforeRouteEnter(to, from, next) {
        console.log('🚀 About~ beforeRouteEnter ~ to, from, next:', to, from, next);

        next();
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
