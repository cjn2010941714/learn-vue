<template>
  <div>
    <h2>我是profile组件标题</h2>
    <p>我是profile组件内容</p>
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    created() {
      console.log('Profile created')
    },
    destroyed() {
      console.log('Profile destroyed')
    }
  }
</script>

<style scoped>

</style>
