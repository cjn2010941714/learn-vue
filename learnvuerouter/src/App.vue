<template>
  <div id="app">
<!--    <button @click="homeClick">首页</button>-->
<!--    <button @click="aboutClick">关于</button>-->
<!--    <button @click="userClick">用户</button>-->
<!--    <button @click="profileClick">档案</button>-->
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>
    <router-link v-bind:to="/user/+userId" tag="button" replace>用户</router-link>
    <router-link :to="{path: '/profile',query: {name: 'Sky', age: 18}}" tag="button" replace>档案</router-link>
    <keep-alive exclude="Profile,User">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'lisi'
    }
  },
  methods: {
    homeClick() {
      this.$router.replace("/home");
      console.log('homeClick');
    },
    aboutClick() {
      this.$router.replace("/about");
      console.log('aboutClick');
    },
    userClick() {
      this.$router.replace('/user/'+ this.userId)
      console.log('userClick');
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'abc',
          age: 18
        }
      });
      console.log('profileClick');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .active{
    color: #f00;
  }
</style>
