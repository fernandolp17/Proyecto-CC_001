import Vue from 'vue'
import Vuex from 'vuex'

import { crimes } from '../constantes/crime_events';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    registerList: [{
      name: "Pepito",
      password: "adminadmin",
      distrito: "Callao",
      phone: "999999999",
      email: "pepito@uni.pe",
    }, ],
    stored_crimes :  crimes,
  },
  mutations: {
    addEvent (state, newEvent) {
      // mutate state
      state.stored_crimes.push(newEvent);
    }
  },
  actions: {},
  modules: {}
})
