import { createStore }from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export const store = createStore({
  getters,
  actions,
  mutations
})
