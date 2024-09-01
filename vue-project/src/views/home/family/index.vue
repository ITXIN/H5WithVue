<template>
    <div>
        <h1>路由容器</h1>
        <div class="footer">
            <div class="footer-content">
                <button
                    class="footer-item"
                    v-for="(item, index) in tabList"
                    :key="index"
                    @click="changeSelect(item, index)"
                >
                    {{ item.title }}
                </button>
            </div>
        </div>
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
const defaultTabData = [
    {
        title: '首页',
        value: 'home',
    },
    {
        title: 'Foo',
        value: 'foo',
    },
    {
        title: 'Bar',
        value: 'bar',
    },
];
export default {
    data() {
        return {
            // tabList: [],
            tabValue: '',
        };
    },
    components: {},
    created() {},
    mounted() {
        if (!this.$route.name) {
            this.$router.replace({
                name: 'home',
                params: {
                    from: this.$route.name,
                },
            });
        }
    },
    computed: {
        // 引入store
        ...mapState(['homeStore']),
        homeData() {
            return this.homeStore?.homeListData || {};
        },
        tabList() {
            return defaultTabData;
        },
    },
    watch: {
        '$route.name': {
            handler(tabName) {
                console.log('🚀 ~ handler ~ tabName:', tabName);
            },
            inmmediate: true,
        },
    },
    methods: {
        // 引入store
        ...mapActions(['getHomeListData']),
        setTabValue() {
            this.tabValue = this.$route.name || 'home';
        },
        // 切换Tab
        async changeSelect(val, index = 0) {
            console.log('=======changeSelect val', val);
            console.log('=======changeSelect checkAble', index);
            if (this.tabValue !== val.value) {
                this.tabValue = val.value;
                this.$router.replace({
                    name: val.value,
                    params: {
                        from: this.$route.name,
                    },
                });
            }
        },
        getHomeList() {
            // homeStore
            console.log('getHomeList');
            this.getHomeListData({}).finally(() => {
                console.log('getHomeList', this.homeStore?.homeListData);
            });
        },
        lazyLoadUnFirstBundle() {
            // 懒加载
            this.comName = () =>
                import(
                    /* webpackChunkName: "component-split-screen" */ '../split-screen/component_split_screen.vue'
                ).then(m => m.default);

            console.log('=======comname', this.comName);
        },
    },
};
</script>
<style scoped>
.footer {
    z-index: 40;
    width: 100%;
    height: 50px;
    position: relative;
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
}

.footer .footer-content {
    height: 100%;
    display: flex;
    flex: '1';
    width: 100%;
    position: relative;
}

.footer-item {
    background: yellow;
    width: 33%;
    /* position: relative; */
    /* display: flex; */
    /* flex: '1'; */
    /* align-items: center;
    justify-content: center;
    text-align: center; */
}
</style>
