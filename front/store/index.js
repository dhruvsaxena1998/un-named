import Vuex from 'vuex'

const state = {
  id: 1,
  profile: undefined,
}

const createStore = () => {
  return new Vuex.Store({
    state,
    mutations: {},
    actions: {},
    getters: {},
  })
}

export default createStore
