<template>
  <div class="photography">
    <nav-menu></nav-menu>
    <div id="grid">
      <h1><a>Photography</a></h1>
      <custom-image v-for="(imageItem, infoString) in imageItems"
                    :imagePath="createImageFilePath(imageItem)"
                    :info="createInfoString(imageItem)"
                    v-bind:key="imageItem.id">
      </custom-image>
    </div>
  </div>
</template>

<script>
  import NavMenu from '@/components/NavMenu'
  import CustomImage from '@/components/CustomImage'
  export default {
    name: 'Photography',
    data () {
      return {
        msg: 'lets do some photography',
        imageItems: [
          ['website_ex-1', '2011: A Man dances around a fire at the tuition fees protests. London, UK'],
          ['website_ex-2', '2011: A police maneuver forces a protester to scramble to safety at the tuition fees protest. London Uk'],
          ['website_ex-3', '2016: Paolo on a street. Kyoto, Japan'],
          ['website_ex-4', '2016: Sam teaching Eddy how to swim. deserted coastline, Japan'],
          ['website_ex-5', '2016: Nick in a buddhist burial ground. Mount Kōya, Japan'],
          ['website_ex-6', '2016: Eddy stretching his legs after a long drive. Osaka, Japan'],
          ['website_ex-7', '2017: One world trade centre. New York, USA'],
          ['website_ex-8', '2017: Some tall building. New York, USA'],
          ['website_ex-9', '2017: A clock on new years day. Berlin, Germany'],
          ['website_ex-10', '2017: Memorial to the Murdered Jews of Europe. Berlin, Germany'],
          ['website_ex-11', '2017: Awake Eddy. Glastonbury, UK'],
          ['website_ex-12', '2017: Early morning sunrise at the stone circle. Glastonbury, UK']
        ]
      }
    },
    methods: {
      createImageFilePath: function (imageItem) {
        return '../../static/18_website_export/' + imageItem[0] + '.jpg'
      },
      createInfoString: function (imageItem) {
        return imageItem[1]
      }
    },
    components: {NavMenu, CustomImage}
  }
</script>

<style>

  #imager {
    width: 40%;
    height: auto;
    padding-bottom: 5px;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 5px;
  }

  #grid {
    display: block;
    margin-left: auto;
    margin-top: 1em; /*set to a negative number 1/2 of your height*/
    margin-right: auto;
    font-family: 'Helvetica';
    text-align: center;
  }
</style>
