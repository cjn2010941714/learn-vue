<template>
  <div>
    <h2>我是cpn组件的标题</h2>
    <hp>我是cpn组件的内容</hp>
    <h2>{{name}}</h2>
  </div>
</template>

<script>
  export default {
    name: "Cpn",
    data() {
      return {
        name: 'abc'
      }
    }
  }
</script>

<style scoped>

</style>