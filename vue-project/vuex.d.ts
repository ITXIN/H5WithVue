/* eslint-disable */
// 解决Vue 无法找到模块“vuex”的声明文件。“//node_modules/vuex/dist/vuex.mjs”隐式拥有 "any" 类型；https://github.com/vuejs/vuex/issues/2213#issuecomment-1592267216
declare module 'vuex' {
    export * from 'vuex/types/index.d.ts';
    export * from 'vuex/types/helpers.d.ts';
    export * from 'vuex/types/logger.d.ts';
    export * from 'vuex/types/vue.d.ts';
}
