export default {
  state: {
    // modules中的state需要通过 $store.state.modules.name来调用
    name: 'aaa'
  },
  mutations: {
    // modules中的mutations,调用顺序先从store找，再到modules中找，不能与store中的mutations重名
    updateName(state, payload) {
      state.name = payload.name
    }
  },
  actions: {
    aUpdateName(context) {
      setTimeout(() => {
        console.log(context)
        context.commit({type: 'updateName', name: '王五'})
      },1000)
    }
  },
  getters: {
    // modules中的getters属性可以直接通过 $store.getters 来调用
    getFullName(state) {
      return state.name + '11111'
    },
    getFullName2(state,getter) {
      return getter.getFullName + '22222'
    }
  }
}
