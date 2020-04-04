import {DECREMENT, INCREMENT, INCREMENTCOUNT, UPDATEINFO} from "./mutations-types";

export default  {
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
}
