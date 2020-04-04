import Vue from  'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";
import a from "./modules/moduleA";
// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const moduleA = a

const state = {
  counter: 100,
  students: [
    {id: 110, name: 'Sky', age: 18},
    {id: 111, name: 'xiaoming', age: 19},
    {id: 112, name: 'xiaohong', age: 17},
    {id: 113, name: 'xiaowang', age: 20}
  ],
  info: {id: 110, name: 'Sky', age: 18}
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    moduleA
  }
});

// 3.导出对象
export default store


// 4.对象解构
const obj = {
  name: 'Sky',
  age: 18,
  height: 1.88
}

const {name, age, height} = obj
console.log(name,age,height)
