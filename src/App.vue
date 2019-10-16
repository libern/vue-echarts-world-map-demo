<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--    <HelloWorld/>-->
    <ec></ec>
    <world></world>
    <testone></testone>
    <b-map name=""></b-map>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import bMap from './components/map'
  import ec from './components/echarts'
  import testone from './components/testone'
  import world from './components/world'

  export default {
    name: 'App',
    components: {
      // HelloWorld,
      bMap,
      testone,
      world,
      ec
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
