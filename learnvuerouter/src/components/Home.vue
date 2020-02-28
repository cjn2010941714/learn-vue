<template>
<div>
  <h2>我是home组件的标题</h2>
  <p>我是homne组件的内容</p>
  <router-link to="/home/news">新闻</router-link>
  <router-link to="/home/message">消息</router-link>
  <router-view></router-view>
</div>
</template>

<script>
  export default {
    name: "Home",
    // 这两个函数只有组件保持了状态使用了keep-alive时，才是有效的
    activated() {
      console.log('activated')
    },
    deactivated() {
      console.log('deactivated')
    }
    // activated() {
    //   this.$router.push(this.path)
    // },
    // beforeRouteLeave(to,from,next) {
    //   this.path = this.$.path
    // }
  }
</script>

<style scoped>

</style>
