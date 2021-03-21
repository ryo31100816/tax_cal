import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    conf: { //令和2年分
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
    getSyotoku: state => type => {
      return state.syotoku[type];
    },
  },
  mutations: {
    setBirth(state, birth) {
      state.birth = birth;
    },
    setSyotoku(state, { type, value }) {
      state.syotoku[type] = value;
    }
  },
  actions: {
    readBirth({ commit }, birth) {
      commit('setBirth', birth);
    },
    readSyotoku({ commit }, { type, value }) {
      commit('setSyotoku', { type: type, value: value });
    }
  }
});