import Vue from  'vue'
import Vuex from 'vuex'
import {INCREMENT,DECREMENT,INCREMENTCOUNT,UPDATEINFO} from './mutations-types'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
  state: {
    counter: 100,
    students: [
      {id: 110, name: 'Sky', age: 18},
      {id: 111, name: 'xiaoming', age: 19},
      {id: 112, name: 'xiaohong', age: 17},
      {id: 113, name: 'xiaowang', age: 20}
    ],
    info: {id: 110, name: 'Sky', age: 18}
  },
  mutations: {
    // 方法
    [INCREMENT](state) {
      state.counter++
    },
    [DECREMENT](state) {
      state.counter--
    },
    [INCREMENTCOUNT](state,payload) {
      state.counter = state.counter + payload.count
    },
    addStudent(state,student) {
      state.students.push(student)
    },
    [UPDATEINFO](state) {
      state.info.name = 'ABC'
    }
  },
  actions: {
    aUpdateInfo(context,payload) {
      setTimeout(() => {
        console.log(payload);
        context.commit(UPDATEINFO);
      },1000)
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more18Students(state) {
      return state.students.filter(student => student.age >= 18)
    },
    more18StudentsLength(state,getters) {
      return getters.more18Students.length
    },
    moreAgeStudents(state) {
      return function (age) {
        return state.students.filter(s => s.age >= 20)
      }
    }
  },
  modules: {}
});

// 3.导出对象
export default store
