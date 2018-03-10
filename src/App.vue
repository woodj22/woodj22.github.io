<template>
  <div id="app">
    <div id="main">
      <img id="portrait" :src=defaultImageSource @mouseover ="mouseOver" @mouseleave= "mouseLeave">
      <nav id="iconlinks">
        <a href="https://github.com/woodj22"> <icon name="github" scale="4">
        </icon></a>
        <a href="https://www.linkedin.com/in/joe-wood-3237876b/"> <icon name="linkedin" scale="4">
        </icon></a>
      </nav>
      <transition name="fade" mode="out-in">
        <h1 v-if="show">Joe Wood</h1>
      </transition>
      <button class="astext" v-on:click ="showPdf"><h2><a>CV</a></h2></button>
    </div>

    <div id="grid">
      <h1><a>Photography</a></h1>
          <img id = "imager" v-for="(pic, index) in imageItems" :src="getPic(index)"/>
      </div>
  </div>

</template>
<script>
  import 'vue-awesome/icons/github'
  import 'vue-awesome/icons/linkedin'

  export default {
    name: 'app',
    data () {
      return {
        myName: 'Joe Wood',
        show: false,
        counter: 0,
        cvView: false,
        showModal: false,
        defaultImageSource: './static/Joe_Ok.jpg',
        imageSource: './static/Joe_Ok.jpg',
        secondImageSource: './static/Joe_funny.jpg',
        imageItems: [
          'website_ex-1',
          'website_ex-2',
          'website_ex-3',
          'website_ex-4',
          'website_ex-5',
          'website_ex-6',
          'website_ex-7',
          'website_ex-8',
          'website_ex-9',
          'website_ex-10',
          'website_ex-11',
          'website_ex-12'
        ]
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
      showPdf: function () {
        window.open('./static/JoeWoodCV2017.pdf')
      },
      mouseOver: function () {
        this.defaultImageSource = this.secondImageSource
      },
      mouseLeave: function () {
        this.defaultImageSource = this.imageSource
      },
      getPic: function (index) {
        return './static/18_website_export/' + this.imageItems[index] + '.jpg'
      }
    }
  }
</script>

<style>

#main {
  display: block;
  margin-left: auto;
  margin-top: 5em; /*set to a negative number 1/2 of your height*/
  top : 50%;
  margin-right: auto;
  width: 40%;
  font-family: 'Helvetica';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#grid {
  display: block;
  margin-left: auto;
  margin-top: 1em; /*set to a negative number 1/2 of your height*/
  margin-right: auto;
  font-family: 'Helvetica';
  text-align: center;



}
#imager {
  width: 40%;
  height:auto;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
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
  border-radius:50%;
  background-size: cover;
  background-position: top center;
  width: 200px;
  height: 200px;
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

h2 {
  font-weight: 700;
  font-size: 15px;
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

#iconlinks a {
    color: #41abff;
  padding-top: 20px;
    padding-right: 20px;
    padding-left: 20px;
}
p {
    color: rgba(17, 60, 88, 0.36);
}

</style>
