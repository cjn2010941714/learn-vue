<template>
  <div>
    <h2>我是用户界面标题</h2>
    <p>我是用户界面内容，哈哈哈</p>
    <h2>{{userId}}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed: {
      userId() {
        return this.$route.params.userId
      }
    },
    methods: {
      btnClick() {
        // 所有的组件都继承Vue的原型
        console.log(this.$router)
        console.log(this.$route)
        console.log(this.name)
      }
    },
    created() {
      console.log('user create')
    },
    destroyed() {
      console.log('user destroyed')
    }
  }
</script>

<style scoped>

</style>
