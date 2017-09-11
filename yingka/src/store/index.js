import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  loading: true,
  isMenu: true
};
const mutations = {
  isLoading(state, data) {
    state.loading = data;
  },
  isMenu(state, data) {
    state.isMenu = data;
  }
};
const actions = {
};
const getters = {
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
