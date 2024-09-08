// {
//             // 自己写的路由只能先支持最外成的路由
//             path: '/notFound',
//             name: 'notFound',
//             component: NotFound,
//         },

let Vue = null;

class HistoryRoute {
    constructor() {
        // 当前路由
        this.current = null;
    }
}

class VueRouter {
    constructor(options) {
        this.mode = options.mode || 'hash';
        this.routes = options.routes || [];
        this.routeMap = this.createMap(this.routes);
        this.history = new HistoryRoute();
        this.init();
    }

    init() {
        if (this.mode === 'hash') {
            if (!location.hash) {
                location.hash = '/';
            }
            window.addEventListener('load', () => {
                // 初始化时，设置当前路由
                this.history.current = window.location.hash.slice(1);
            });
            window.addEventListener('hashchange', () => {
                // 监听hash的变化
                this.history.current = window.location.hash.slice(1);
            });
        } else {
            if (!location.pathname) {
                location.pathname = '/';
            }
            window.addEventListener('load', () => {
                // 初始化时，设置当前路由
                this.history.current = window.location.pathname;
            });
            window.addEventListener('popstate', () => {
                // 监听hash的变化
                this.history.current = window.location.pathname;
            });
        }
    }

    createMap(routes) {
        return routes.reduce((acc, cur) => {
            acc[cur.path] = cur.component;
            return acc;
        }, {});
    }
}

VueRouter.install = function (v) {
    Vue = v;

    Vue.mixin({
        beforeCreate() {
            console.log('beforeCreate', this.$options.router, this.$options.router);

            // 根实例
            if (this.$options.router && this.$options.router) {
                // 根节点
                this._root = this;
                this._router = this.$options.router;
                // 创建响应式对象
                Vue.util.defineReactive(this, 'vueroute', this._router.history);
            } else {
                // 非根节点
                this._root = this.$parent && this.$parent._root;
            }
        },
    });

    // 注册组件
    Vue.component('router-link', {
        props: {
            to: String,
        },
        render(h) {
            const mode = this._self._root._router.mode;
            const to = mode === 'hash' ? `#${this.to}` : this.to;
            // this.$slots.default 是指children
            return h('a', { attrs: { href: to } }, this.$slots.default);
        },
    });
    Vue.component('router-view', {
        // 根据当前路由，渲染对应的组件
        render(h) {
            const current = this._self._root._router.history.current;
            const routeMap = this._self._root._router.routeMap;
            return h(routeMap[current]);
        },
    });
};

export default VueRouter;
