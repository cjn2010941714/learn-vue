<template>
  <div id="app">
    <h2>-----------------App Modules内容-------------------</h2>
    <h2>{{$store.state.moduleA.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.getFullName}}</h2>
    <h2>{{$store.getters.getFullName2}}</h2>
    <h2>-----------------App内容-------------------</h2>
    <h2>{{msg}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>
    <button @click="updateStudent">修改info信息</button>
    <h2>-----------------App内容: info-------------------</h2
    <h2>{{$store.state.info}}</h2>
    <h2>-----------------App内容: getter-------------------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more18Students}}</h2>
    <h2>{{$store.getters.more18StudentsLength}}</h2>
    <h2>{{$store.getters.moreAgeStudents(20)}}</h2>
    <h2>-----------------HelloVuex内容-------------------</h2>
    <hello-vuex/>
  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";
  import {INCREMENT, DECREMENT, INCREMENTCOUNT,UPDATESTUDENT} from './store/mutations-types'
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
        this.$store.commit(INCREMENT)
      },
      sub() {
        this.$store.commit(DECREMENT)
      },
      addCount(count) {
        // payload: 负载
        // 1.普通提交方式
        // this.$store.commit('incrementCount',count)
        // 2。特殊提交方式
        this.$store.commit({
          type: INCREMENTCOUNT,
          count
        })
      },
      addStudent() {
        const student = {
          id: 114,
          name: 'xiaobai',
          age: 25
        }
        this.$store.commit('addStudent',student);
      },
      updateStudent() {
        // this.$store.dispatch('aUpdateInfo','我是参数')
        this.$store.dispatch('aUpdateInfo','我是参数')
      },
      updateName() {
        this.$store.commit({type: 'updateName', name: 'bbb'})
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
