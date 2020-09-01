import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    registerList: [{
      name: "Pepito",
      password: "adminadmin",
      distrito: "Callao",
      phone: "999999999",
      email: "pepito@uni.pe",
    }, ]
  },
  mutations: {},
  actions: {},
  modules: {}
})
