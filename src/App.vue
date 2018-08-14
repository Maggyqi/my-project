<template>
<div id="container">
  <img alt="Vue logo" src="./assets/logo.png">
  <Hello-world msg="welcome to vue.js"></Hello-world>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      content: ''
    }
  }
}
</script>

<style>
#container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  overflow: hidden;
  padding-left: 500px;
}
li {
  list-style: none;
  float: left;
  width: 100px;
  text-align: center;
  margin-right: 100px;
  background-color: orangered;
}
</style>
