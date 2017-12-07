<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <h1 v-if="show">Joe Wood</h1>
    </transition>
    <button class="astext" v-on:click = "showPdf"><a>CV</a></button>
    <pdf src="./static/JoeWoodCV2017.pdf"></pdf>

    <p><a href=".html">Photography</a></p>
    <div id="iconlinks">
      <a href="https://github.com/woodj22"> <icon name="github" scale="4">
      </icon></a>
      <a href="https://www.linkedin.com/in/joe-wood-3237876b/"> <icon name="linkedin" scale="4">
      </icon></a>
    </div>
  </div>

</template>
<script>
  import 'vue-awesome/icons/github'
  import 'vue-awesome/icons/linkedin'
  import pdf from 'vue-pdf'

  import image from './assets/logo.png'
//  import p from './JoeWoodCV2017.pdf'

  export default {
    name: 'app',
    data () {
      return {
        myName: 'Joe Wood',
        show: false,
        counter: 0,
        cvView: false,
        showModal: false,
        image: image,
        pdfer: './static/JoeWoodCV2017.pdf'
      }
    },
    mounted: function () {
      this.show = true
    },
    methods: {
      showPdf: function () {
        window.open(pdf)
      }
    },
    components: {
      pdf
    }
  }
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Helvetica';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
   position: absolute;
   width: 320px;
   text-align: center;
   top: 50%;
   left: 50%;
   margin-left: -10em;
   margin-top: -9em;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}


h1 {
    font-weight: 700;
    font-size: 30px;
    letter-spacing: 9px;
    text-transform: uppercase;
    margin-bottom: 40px;
    left: 4px;
}

.astext {
    background:none;
    border:none;
    color: rgba(17, 60, 88, 0.44);
    text-decoration: none;
    padding-bottom: 10px;
    padding-top: 10px;
}
#cvObject {
    display: None;
}


.fade-enter-active, .fade-leave-active {
    transition: opacity 5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
}

a {
    color: rgba(17, 60, 88, 0.44);
    text-decoration: none;
    padding-bottom: 10px;
    padding-top: 10px;
}

#iconlinks {
    padding-top: 20px;
}
#iconlinks a {
    color: #41abff;
    padding-right: 20px;
    padding-left: 20px;
}
p {
    color: rgba(17, 60, 88, 0.36);

}

</style>
