<template>
  <div class="home">
    <div id="main">
      <img id="portrait" :src=defaultImageSource @mouseover="mouseOver" @mouseleave="mouseLeave">
      <name-strap job ="Software Engineer"></name-strap>
    </div>
    <nav-menu></nav-menu>
    <h1><a>About</a></h1>

    <div id="about-text">
      <p>
        I work full time in the BBC's internal software engineering team. I mostly work with PHP Laravel projects
        but I am doing more and more serverless event driven architecture in AWS. <br>
        <br>
        <br>
        In my spare time I take pictures and build Alexa skills.
      </p>
    </div>

  </div>

</template>
<script>
  import 'vue-awesome/icons/github'
  import 'vue-awesome/icons/linkedin'
  import NavMenu from '@/components/NavMenu'
  import NameStrap from '@/components/NameStrap'

  export default {
    name: 'Home',
    data () {
      return {
        myName: 'Joe Wood',
        counter: 0,
        cvView: false,
        defaultImageSource: './static/Joe_Ok.jpg',
        imageSource: './static/Joe_Ok.jpg',
        secondImageSource: './static/Joe_funny.jpg'
      }
    },
    methods: {
      mouseOver: function () {
        this.defaultImageSource = this.secondImageSource
      },
      mouseLeave: function () {
        this.defaultImageSource = this.imageSource
      }
    },
    components: {NavMenu, NameStrap}
  }
</script>
<style>
  #main {
    display: block;
    margin-left: auto;
    margin-top: 10%; /*set to a negative number 1/2 of your height*/
    top: 50%;
    margin-right: auto;
    width: 40%;
    font-family: 'Helvetica';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  header {
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    background-color: #35495E;
    color: #ffffff;
  }

  #portrait {
    object-fit: cover;
    border-radius: 50%;
    background-size: cover;
    background-position: top center;
    width: 200px;
    height: 200px;
  }

  #about-text {
    width: 40%;
    display: inline-block;
  }

  p {
    color: rgb(17, 60, 88);
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


</style>
