// import { createSSRApp } from "vue";

// export function createApp() {
//   return createSSRApp({
//     data: () => ({
//       count: 10,
//     }),
//     template: `<div @click=count++>{{ count }}</div>`,
//     mounted() {
//       console.log("🚀 ~ mounted ~ c:", c);
//     },
//   });
// }
// import component from "./component.vue";
import { createSSRApp } from "vue";

export function createApp() {
  return createSSRApp({
    data: () => ({ count: 11 }),
    template: `<h1 @click="count++">{{ count }}</h1>`,
  });
  // return createSSRApp(component);
}
