import { createStore } from "../vuex/index";
// Vuex store
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
