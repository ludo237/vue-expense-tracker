import Vue from "vue";
import Vuex from "vuex";
import UUIDv4 from 'uuid/v4';
import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const initialState = {
  transactions: [
    { id: UUIDv4(), name: "Food", amount: -50 },
    { id: UUIDv4(), name: "Gas", amount: -100 },
    { id: UUIDv4(), name: "Income", amount: 5000 },
    { id: UUIDv4(), name: "Dividends", amount: 100 },
    { id: UUIDv4(), name: "Gym Membership", amount: -500 },
    { id: UUIDv4(), name: "Dividends", amount: 110 },
  ]
};

export default new Vuex.Store({
  namespaced: true,
  state: initialState,
  mutations,
  actions,
  getters,
});
