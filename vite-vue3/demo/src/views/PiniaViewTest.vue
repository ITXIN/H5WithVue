<template>
  <div>
    <div>store count:{{ counter.count }}</div>
    <div>store doubleCount:{{ counter.doubleCount }}</div>
    <button @click="counter.increment">increment</button>
  </div>
</template>

<script setup>
import { useCounterStore } from "../store/pinia";

// 命名是那个storeID
const counter = useCounterStore();
console.log("🚀 ~ store:", counter);
</script>

<style></style>
