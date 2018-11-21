import api from 'src/api'

const state = {
  theme: {}
}

const getters = {
  getTheme: state => state.theme
}

const mutations = {
  THEME_DTAILE: (state, theme) => {
    state.theme = theme
  }
}

const actions = {
  getTheme({ state, commit }, id) {
    return api.get('/getProductAll').then((response) => {
      console.log("store",response)
      commit('THEME_DTAILE', response)
    }).catch((error) => {
      console.log(error)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
