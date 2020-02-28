import Vue from "vue";
import Vuex from "vuex";
import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const initialState = {
  transactions: []
};

export default new Vuex.Store({
  namespaced: true,
  state: initialState,
  mutations,
  actions,
  getters,
});
