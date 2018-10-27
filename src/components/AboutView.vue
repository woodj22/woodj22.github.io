<template>
  <div class="home">
    <div id="main">
      <rotating-anim></rotating-anim>
      <!--<img id="portrait" :src=defaultImageSource @mouseover="mouseOver" @mouseleave="mouseLeave">-->
      <name-strap job ="Software Engineer"></name-strap>
    </div>
    <nav-menu></nav-menu>
    <h1 id="section-title"><a>About</a></h1>

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
  import RotatingAnim from '@/components/rotating-anim'

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
    components: {NavMenu, NameStrap, RotatingAnim}
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

</style>
