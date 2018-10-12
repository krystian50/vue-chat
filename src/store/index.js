import Vue from 'vue';
import Vuex from 'vuex';
import { firebaseMutations } from 'vuexfire';

Vue.use(Vuex);

export default new Vuex.Store({
  mutations: {
    // we need firebase-mutations to insert data from Firebase DB
    ...firebaseMutations,
  },
  modules: {
    // ADD your modules in here
  },
});
