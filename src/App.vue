<template>
  <div id="app">
    <ul>
      <li v-for="message in messages" :key="message['.key']">
        {{ message.text }}
      </li>
    </ul>
    <form @submit.prevent="onAddMessage">
      <input v-model="newMessage">
      <button>Add</button>
    </form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapActions, mapGetters, mapMutations } = createNamespacedHelpers('messages');

export default {
  name: 'app',
  computed: {
    ...mapGetters(['messages', 'messagesRef']),
  },
  data: () => ({
    newMessage: ''
  }),
  methods: {
    ...mapActions(['initMessagesRef']),
    ...mapMutations(['addMessage']),
    onAddMessage() {
      if (this.newMessage.trim()) {
        this.addMessage({
          text: this.newMessage,
          rate: 0,
        })
        this.newMessage = ''
      }
    },
  },
  created() {
    this.initMessagesRef();
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
