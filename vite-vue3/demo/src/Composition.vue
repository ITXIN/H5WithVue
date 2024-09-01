<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Composition" /> -->
    <!-- <div>{{ msg }}</div> -->
    <!-- <button :disabled="false">{{ isButtonDisabled }}</button>
    <button @click="count++">count is: {{ count }}</button> -->
    <!-- <button @click="incream">count is: incream {{ state.count }}</button> -->

    <button @click.once="changePerson">
      changePerson {{ JSON.stringify(person) }}
    </button>
    <!-- <div>person{{ JSON.stringify(person) }}</div> -->
    <ul>
      <li v-for="(value, key, index) in myObject" :key="key">
        value:{{ value }},key:{{ key }},index:{{ index }};
      </li>
    </ul>
    <p>message:{{ message }}</p>
    <input v-model="message" placeholder="edit me" />
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>
    <div>Checked names: {{ checkedNames }}</div>

    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>

    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>

    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>
    <div>Picked: {{ picked }}</div>

    <input type="radio" id="one" value="One1" v-model="picked" />
    <label for="sdaf">One</label>

    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>

    <div>Selected: {{ selected }}</div>

    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
  </div>
</template>

<script setup>
import { ref, reactive, watch, nextTick } from "vue";
// import HelloWorld from "./components/HelloWorld.vue";

// export default defineComponent({
// setup() {
// const isButtonDisabled = reactive("d");

const selected = ref("A");
const picked = ref("");
const checkedNames = ref([]);
const checked = ref(false);
const message = ref("");
const person = ref({
  name: "ok",
  age: 10,
  height: 189,
  contacts: [
    {
      name: "John",
      phone: "111111111",
    },
    {
      name: "Jane",
      phone: "222222222",
    },
  ],
});
// let count = 110;
const obj = {
  name: "Composition",
  age: 10,
};
const reactiveObj = reactive(obj);
reactiveObj.name = "Composition new1";
const state = reactive({
  count: 0,
});
const myObject = reactive({
  title: "How to do lists in Vue",
  author: "Jane Doe",
  publishedAt: "2016-04-10",
});
watch(
  [() => reactiveObj.name, () => reactiveObj.age],
  ([name, age], [oldName, oldAge]) => {
    console.log("🚀 ~ watch ~ name:", name);
    console.log("🚀 ~ watch ~ age:", age);
    console.log("🚀 ~ watch ~ oldName:", oldName);
    console.log("🚀 ~ watch ~ oldAge:", oldAge);
  }
);

async function changePerson() {
  person.value.name = "change name";
  person.value.age++;
  person.value.height++;
  person.value.contacts[0].name = "change name cont";

  await nextTick();
  // 现在 DOM 已经更新了
}
function incream() {
  // count.value++;
  let { count } = state;
  count++;
  console.log("🚀 ~ incream ~ count:", count, state.count);
}
// console.log("🚀 ~  ~ count:", count);
// console.log("🚀 ~ setup ~ reactiveObj:", reactiveObj);
// const contactsAc = reactiveObj.contacts;
// console.log("🚀 ~ setup ~ contactsAc:", contactsAc);
// reactiveObj.age = 100;
// reactiveObj.name = "Composition new2";
// return {
//   msg: "Composition",
//   isButtonDisabled: true,
// };
//   },
// });
</script>
