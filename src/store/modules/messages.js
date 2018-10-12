import Vue from 'vue';
import Vuex from 'vuex';
import { firebaseAction } from 'vuexfire';

import { messagesRef } from '@/utils/db.refs';

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    messages: [],
  },
  mutations: {
    addMessage(store, message) {
      messagesRef.push(message);
    },
  },
  getters: {
    messages: state => state.messages,
  },
  actions: {
    initMessagesRef({ dispatch }) {
      dispatch('setRef', { name: 'messages', ref: messagesRef });
    },
    setRef: firebaseAction(({ bindFirebaseRef }, { name, ref }) => {
      bindFirebaseRef(name, ref);
    }),
  },
};
