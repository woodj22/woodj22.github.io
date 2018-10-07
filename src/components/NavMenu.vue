<template>
  <div id="nav-menu">


    <div class="nav-menu-piece">
      <router-link to="/">
        <h2>
          <a href="" @mouseover="changeButtonTextToBigger($event)" @mouseleave="changeButtonTextToSmaller($event)">About</a>
        </h2>
      </router-link>
    </div>

    <div class="nav-menu-piece">
      <router-link to="/photography">
        <h2>
          <a href="" @mouseover="changeButtonTextToBigger($event)" @mouseleave="changeButtonTextToSmaller($event)">Photography</a>
        </h2>
      </router-link>
    </div>

    <div class="nav-menu-piece">
      <button class="astext" v-on:click="openLinkInAnotherTab(linkedInURL)">
        <h2>
          <a @mouseover="changeButtonTextToBigger($event)" @mouseleave="changeButtonTextToSmaller($event)">LinkedIn</a>
        </h2>
      </button>
      </button>
    </div>

    <div class="nav-menu-piece">
      <button class="astext" v-on:click="openLinkInAnotherTab(githubURL)">
        <h2>
          <a @mouseover="changeButtonTextToBigger($event)"
             @mouseleave="changeButtonTextToSmaller($event)">Github</a>
        </h2>
      </button>
    </div>

    <div class="nav-menu-piece">
      <button class="astext" v-on:click="openLinkInAnotherTab(relativeCVPath)">
        <h2>
          <a @mouseover="changeButtonTextToBigger($event)"
             @mouseleave="changeButtonTextToSmaller($event)">CV</a>
        </h2>
      </button>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'nav-menu',
    data () {
      return {
        linkedInURL: 'https://www.linkedin.com/in/joe-wood-3237876b/',
        githubURL: 'https://github.com/woodj22',
        relativeCVPath: '../../static/JoeWoodCV2018.pdf'
      }
    },
    methods: {
      openLinkInAnotherTab: function (uri) {
        window.open(uri)
      },
      changeButtonTextToBigger: function (event) {
        const objectToChange = event.path[0]
        objectToChange.style.fontWeight = 700
      },
      changeButtonTextToSmaller: function (event) {
        const objectToChange = event.path[0]
        objectToChange.style.fontWeight = 500
      }
    }
  }
</script>
<style>

  h1 {
    font-weight: 700;
    font-size: 30px;
    letter-spacing: 9px;
    text-transform: uppercase;
    margin-bottom: 10px;
    left: 4px;
  }

  h2 {
    font-size: 15px;
    letter-spacing: 9px;
    text-transform: uppercase;
    margin-bottom: 10px;
    left: 4px;
  }

  a {
    font-weight: 500;
    color: rgba(17, 60, 88, 0.44);
    text-decoration: none;
    padding-bottom: 10px;
    padding-top: 10px;
  }

  .nav-menu-piece {
    padding: 10px;
    display: inline-block;
  }

  .astext {
    background: none;
    border: none;
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


</style>
