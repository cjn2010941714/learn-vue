<template>
  <div>
    <h3 class="title">{{msg}}</h3>
    <button @click="btnClick">按钮</button>
    <cpn/>
  </div>
</template>

<script>
  import Cpn from "./Cpn";
  export default {
    name: "app",
    components: {
      Cpn
    },
    data() {
      return {
        msg: 'hello webpack'
      }
    },
    methods: {
      btnClick() {
        console.log(123)
      }
    }
  }
</script>

<style scoped>
  .title{
    color: blue;
  }
</style>