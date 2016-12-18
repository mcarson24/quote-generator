<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <quote></quote>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Quote from './components/Quote'

export default {
  name: 'app',
  components: {
    Hello, Quote
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
