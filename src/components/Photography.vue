<template>
  <div class="photography">
  <nav-menu></nav-menu>
  <div id="grid">
    <h1><a>Photography</a></h1>
    <img id = "imager" v-for="(pic, index) in imageItems" :src="getPic(index)" class ='slide-in'/>
  </div>
  </div>
</template>

<script>
  import NavMenu from '@/components/NavMenu'
  export default {
    name: 'Photography',
    data () {
      return {
        msg: 'lets do some photography',
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
    methods: {
      getPic: function (index) {
        return '../../static/18_website_export/' + this.imageItems[index] + '.jpg'
      }
    },
    components: { NavMenu }
  }
</script>

<style>

  #imager {
    width: 40%;
    height:auto;
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
    font-family:'Helvetica';
    text-align: center;
  }
</style>
