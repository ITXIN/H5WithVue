import { ref, onMounted } from "vue";
export function useMessage() {
  const message = ref("Hello World!");
  onMounted(() => {
    console.log("🚀 ~ useMessage ~ message:", message);
    console.log("mounted");
  });
  return { message };
}
