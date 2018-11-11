<template>
  <div class="photography">
    <name-strap job="Photographer"></name-strap>
    <nav-menu></nav-menu>
    <transition name="fade" mode="out-in">
    </transition>
    <h1 id="section-title"><a>Photography</a></h1>
    <div id="grid">
      <custom-image v-for="imageItem in getImageManifest"
                    :imagePath="imageItem.path"
                    :info="imageItem.description"
                    v-bind:key="imageItem.id">
      </custom-image>
    </div>
  </div>
</template>

<script>
  import NavMenu from '@/components/NavMenu'
  import CustomImage from '@/components/CustomImage'
  import NameStrap from '@/components/NameStrap'
  import json from "../../static/18_website_export/manifest.json"

  export default {
    name: 'Photography',
    data() {
      return {
        msg: 'lets do some photography',
        imageManifest: json
      }
    },
    computed: {
      getImageManifest: function () {
        return this.imageManifest.files
      }
    },
    components: {NavMenu, CustomImage, NameStrap}
  }
</script>

<style>

  #grid {
    display: block;
    margin-left: auto;
    margin-top: 1em; /*set to a negative number 1/2 of your height*/
    margin-right: auto;
    text-align: center;
  }
</style>
