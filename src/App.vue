<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  html {
    background-color: #0c1116;

  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ffffff;
    margin-top: 60px;
    background-color: #0c1116;
  }

  header {
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    /*background-color: #35495E;*/
    color: #ffffff;
  }

  p {
    /*color: rgb(17, 60, 88);*/
    font-size: 15px;
    letter-spacing: 2px;
  }

  h2 {
    font-size: 15px;
    letter-spacing: 9px;
    text-transform: uppercase;
    margin-bottom: 10px;
    left: 4px;
  }

  #section-title {
    padding-bottom: 20px;
  }

</style>
