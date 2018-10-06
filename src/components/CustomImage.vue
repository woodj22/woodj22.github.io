<template>
  <div id="custom-image">
    <div id="container">
      <div id="image-text">{{info}}</div>
      <img id="image" :src="imagePath" @mouseover="displayImageInformation" @mouseleave="removeImageInformation"/>

    </div>
  </div>
</template>
<script>
  export default {
    name: 'custom-image',
    props: ['imagePath', 'info'],
    data () {
      return {
        linkedInURL: 'https://www.linkedin.com/in/joe-wood-3237876b/'
      }
    },
    methods: {
      getPic: function (index) {
        return '../../static/18_website_export/' + this.imageItems[index] + '.jpg'
      },
      displayImageInformation: function () {
        const elem = document.getElementById('container')
        elem.style.backgroundColor = 'rgb(53, 73, 94)'

        const img = document.getElementById('image')
        img.style.opacity = 0.1

        const imgText = document.getElementById('image-text')
        imgText.style.opacity = 2
        console.log('hello world')
      },
      removeImageInformation: function () {
        const elem = document.getElementById('container')
        elem.style.opacity = 1

        const img = document.getElementById('image')
        img.style.opacity = 1

        const imgText = document.getElementById('image-text')
        imgText.style.opacity = 0
        console.log('hello world')
      }
    }
  }
</script>

<style>

  #container {
    display: inline-block;
    backgroundColor: rgb(53, 73, 94);
  }

  #image {
    width: 100%;
    max-width: 400px;
  }

  #image-text {
    font-family: 'Helvetica';
    color: rgb(255, 255, 255);

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    max-width: 400px;
  }

  #container-mouseover {
    background-color: rgb(255, 125, 115)
  }

</style>
