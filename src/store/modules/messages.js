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
    removeMessage(store, key) {
      messagesRef.child(key).remove();
    },
    incrementMessageRate(store, key) {
      const rateRef = messagesRef.child(key).child('rate');

      rateRef.once('value', (snap) => {
        rateRef.set(snap.val() + 1);
      });
    },
  },
  getters: {
    messages: state => state.messages,
    numberOfMessages: state => state.messages && state.messages.length,
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
