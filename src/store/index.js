import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    newu: [],
    page: 1
  },

  mutations: {
    register(state, { payload }) {
      state.newu.push(payload);
    },
  },

  actions: {
    register({ commit }, payload) {
      commit("register", { payload });
    },
  },

  getters: {
    newu: state => state.newu
  }
});