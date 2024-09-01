import { inject, reactive } from "vue";
/**
 export default createStore({
  state: {
    age: 30,
  },
  getters: {
    gettersAge(state) {
      return state.age + 5;
    },
  },
  mutations: {
    addAge(state, data) {
      state.age += data;
    },
  },
});
*/

class Store {
  constructor(options) {
    // state 实现响应式是通过reactive实现
    this.state = reactive(options.state);

    // getters {属性：方法}=》{属性：值}
    // store.state.getters.gettersAge
    let getters = options.getters || {};
    this.getters = {};
    // Object.keys(getters) => ["gettersAge"];
    Object.keys(getters).forEach((key) => {
      Object.defineProperty(this.getters, key, {
        get: () => {
          // 如:gettersAge(state)
          return getters[key](this.state);
        },
      });
    });

    // mutations
    let mutations = options.mutations || {};
    this.mutations = {};
    Object.keys(mutations).forEach((key) => {
      // commit 触发
      this.mutations[key] = (data) => {
        // 如:addAge(state, data)
        mutations[key](this.state, data);
      };
    });
  }
  commit(key, data) {
    // 如:addAge(state, data)
    this.mutations[key](data);
  }
  install(app) {
    // 默认第一个参数是app实例
    console.log("🚀 ~ install", app);
    // vue2 挂载$store到全局
    app.config.globalProperties.$store = this;
    //Vue3 provied/inject
    app.provide("store", this);
  }
}

export function createStore(options = {}) {
  return new Store(options);
}

export function useStore() {
  // 让每一个使用的组件都可以获取到store实例
  return inject("store");
}
