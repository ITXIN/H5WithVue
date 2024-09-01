<template>
    <component :key="item.code" v-if="currentView" :is="currentView.currentView" :code="item.code" :dataSource="item" />
</template>

<script>
const ComponentOne = () => import(/* webpackChunkName: "component-one" */ './ComponentOne.vue').then(m => m.default);
const ComponentTwo = () => import(/* webpackChunkName: "component-two" */ './ComponentTwo.vue').then(m => m.default);
const ComponentThree = () =>
    import(/* webpackChunkName: "component-three" */ './ComponentThree.vue').then(m => m.default);

export default {
    name: 'ComponentContent',
    props: {
        item: {
            type: Object,
            default: () => ({}),
        },
    },
    data: function () {
        return {
            componentList: [
                {
                    name: 'one',
                    code: 'one',
                    currentView: 'ComponentOne',
                },
                {
                    name: 'two',
                    code: 'two',
                    currentView: 'ComponentTwo',
                },
                {
                    name: 'three',
                    code: 'three',
                    currentView: 'ComponentThree',
                },
            ],
        };
    },
    components: {
        ComponentOne,
        ComponentTwo,
        ComponentThree,
    },
    computed: {
        currentView() {
            const curr = this.componentList.find(com => this.item.code === com.code);
            return curr;
        },
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
