<template>
  <div class="home">
    <div id="main">
      <img id="portrait" :src=defaultImageSource @mouseover="mouseOver" @mouseleave="mouseLeave">
      <!--<nav id="iconlinks">-->
      <!--<a href="https://github.com/woodj22"> <icon name="github" scale="4">-->
      <!--</icon></a>-->
      <!--<a href="https://www.linkedin.com/in/joe-wood-3237876b/"> <icon name="linkedin" scale="4">-->
      <!--</icon></a>-->
      <!--</nav>-->

      <transition name="fade" mode="out-in">
        <h1 v-if="show">Joe Wood</h1>
      </transition>
      <h2>Software Engineer</h2>
      <!--<p id="intro-text">-->
        <!--I have no clue what I am doing.-->
      <!--</p>-->
    </div>
    <nav-menu></nav-menu>
  </div>

</template>
<script>
  import 'vue-awesome/icons/github'
  import 'vue-awesome/icons/linkedin'
  import NavMenu from '@/components/NavMenu'

  export default {
    name: 'Home',
    data () {
      return {
        myName: 'Joe Wood',
        show: false,
        counter: 0,
        cvView: false,
        defaultImageSource: './static/Joe_Ok.jpg',
        imageSource: './static/Joe_Ok.jpg',
        secondImageSource: './static/Joe_funny.jpg'
      }
    },
    mounted: function () {
      this.show = true
    },
    computed: {
      imageControl: function () {
        return this.imageItems
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
    components: { NavMenu }
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
  p {
    color: rgb(17, 60, 88);
    /*opacity: 100;*/
  }

  h2 {
    font-size: 15px;
    letter-spacing: 9px;
    text-transform: uppercase;
    margin-bottom: 10px;
    left: 4px;
  }


  .fade-enter-active, .fade-leave-active {
    transition: opacity 5s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0
  }
</style>
