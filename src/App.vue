<template>
  <div id="app">
    <!-- your messages in here -->
    <form @submit.prevent="onAddMessage()">
      <input v-model="newMessage">
      <button>Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    newMessage: '',
  }),
  computed: {
    // Add your state data to computed
  },
  methods: {
    onAddMessage() {
      if (this.newMessage.trim()) {
        // ADD data to firebase
        this.newMessage = '';
      }
    },
  },
};
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
