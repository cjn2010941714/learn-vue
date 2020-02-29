<template>
  <div id="app">
    <h2>-----------------App内容-------------------</h2>
    <h2>{{msg}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <h2>-----------------HelloVuex内容-------------------</h2>
    <hello-vuex/>
  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";
  export default {
    name: 'App',
    components: {
      HelloVuex
    },
    data() {
      return {
        msg: '我是App组件',
        counter: 0
      }
    },
    methods: {
      add() {
        this.$store.commit('increment')
      },
      sub() {
        this.$store.commit('decrement')
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
</style>
