import { createStore }from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  auth: {
    token: null,
    userId: null
  },
  board: {
    lists: []
  }
}

export const store = createStore({
  getters,
  actions,
  mutations,
  state
})
