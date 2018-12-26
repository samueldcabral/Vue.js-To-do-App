<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png">
    <todo msg="To-do App in Vue"/>
  </div>
</template>

<script>
import todo from './components/Todo.vue'

export default {
  name: 'app',
  components: {
    todo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  color: #51678a;
  /* color: #38465e; */
  margin-top: 20px;
  background-color: #FFF8F0;
  min-height: 95vh;
}

body {
  background-color: #1C3041;
}

</style>
