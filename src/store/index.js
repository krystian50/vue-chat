import Vue from 'vue';
import Vuex from 'vuex';
import { firebaseMutations } from 'vuexfire';

import messages from './modules/messages';

Vue.use(Vuex);

export default new Vuex.Store({
  mutations: {
    ...firebaseMutations,
  },
  modules: {
    messages,
  },
});
