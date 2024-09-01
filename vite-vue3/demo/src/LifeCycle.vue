<template>
  <div>
    lifecycle
    <p>
      ask a question:
      <input v-model="qustion" :disabled="loading" />
    </p>
    <p>Answer: {{ answer }}</p>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";

const qustion = ref("What is your name?");
const answer = ref("My name is Vue.");
const loading = ref(false);

watch(qustion, async (newQuestion, oldQuestion) => {
  if (newQuestion.includes("?")) {
    loading.value = true;
    answer.value = "Thinking...";
    try {
      const res = await fetch("https://yesno.wtf/api");
      answer.value = (await res.json()).answer;
    } catch (error) {
      answer.value = "An error occurred" + error;
    } finally {
      loading.value = false;
    }
  }
});

const todoId = ref(1);
const data = ref(null);

watch(
  todoId,
  async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
    );
    data.value = await response.json();
    console.log("🚀 ~ data.value:", data.value);
  },
  { immediate: true }
);

todoId.value = "老师说了";
console.log("🚀 ~ todoId:", todoId.value);
</script>
<style lang="scss" scoped></style>
