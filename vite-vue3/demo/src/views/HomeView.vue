<template>
  <div>
    <h1>Vue2 store</h1>
    <p>State.age:{{ $store.state.age }}</p>
    <p>State.getters.gettersAge:{{ $store.getters.gettersAge }}</p>
    <!-- <button @click="$store.state.age += 60">addAge</button> -->
    <button @click="$store.commit('addAge', 10)">addAge</button>

    <h1>Vue3 store</h1>
    <p>State.age:{{ store.state.age }}</p>
    <p>State.getters.gettersAge:{{ store.getters.gettersAge }}</p>
    <!-- <button @click="store.state.age += 10">addAge</button> -->
    <button @click="store.commit('addAge', 10)">addAge</button>
  </div>
</template>
<script setup>
import { useStore } from "../vuex/index";
const store = useStore();
console.log("🚀 ~ store:", store);
</script>
