export default {
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
}
