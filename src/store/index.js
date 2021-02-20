import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    conf: {
      and_over_65: '1956-01-01', under_65: '1956-01-02',
    },
    birth: '',
    syotoku: {
      eigyo: 0,
      nogyo: 0,
      fudosan: 0,
      risi: 0,
      haito:0,
      kyuyo: 0,
      nenkin: 0,
      sonota: 0,
      sozyotan: 0,
      sozyotyo: 0,
      itizi: 0,
    }
  },
  getters: {
    getUnder65: state => {
      return state.under_65;
    },
    getBirth: state => {
      return state.birth;
    },
  },
  mutations: {
    setBirth(state, birth) {
      state.birth = birth;
    }
  },
  actions: {
    readBirth({ commit }, birth) {
      commit('setBirth', birth);
    }
  }
});