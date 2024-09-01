import { defineStore } from "pinia";
// Pinia store
export const useCounterStore = defineStore("counter", {
  state: () => {
    return { count: 30 };
  },
  actions: {
    increment() {
      return this.count++;
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
});
