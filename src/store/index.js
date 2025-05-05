import { createStore } from 'vuex'

export default createStore({
  state: {
    listaPessoas: [],
  },
  getters: {
  },
  mutations: {
    adicionarPessoa(state, pessoa){
      state.listaPessoas.push(pessoa)
    },
    limparListaPessoas(state){
      state.listaPessoas = []
    }
  },
  actions: {
  },
  modules: {
  }
})
