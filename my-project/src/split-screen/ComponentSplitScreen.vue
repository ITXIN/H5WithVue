<template>
  <div >
    <span>split screen</span>
    <component-content v-for="item in itemArr" :key="item.code" :item="item"></component-content>
  </div>
</template>


<script>
import ComponentContent from '../components/ComponentContent.vue'
export default {
  components: { ComponentContent },
  name: 'ComponentSplitScreen',
  data:function (){
    return {
      itemArr:[
        {
          name:'one',
          code:'one',

        },
        {
          name:'two',
          code:'two',

        },
        {
          name:'three',
          code:'three',

        },
      ]
    }
  },
  mounted(){
    console.log('=======split screen');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
