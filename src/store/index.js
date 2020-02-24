import Vue from "vue";
import Vuex from "vuex";
import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const initialState = {
  transactions: [
    { id: 1, name: "Food", amount: -50 },
    { id: 2, name: "Gas", amount: -100 },
    { id: 3, name: "Income", amount: 5000 },
    { id: 4, name: "Dividends", amount: 100 },
    { id: 5, name: "Gym Membership", amount: -500 },
    { id: 6, name: "Dividends", amount: 110 },
  ]
};

export default new Vuex.Store({
  namespaced: true,
  state: initialState,
  mutations,
  actions,
  getters,
});
