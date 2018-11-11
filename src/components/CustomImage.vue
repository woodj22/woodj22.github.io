<template>
  <div id="custom-image">
    <div id="container">
      <img id="image" :src="imagePath" :alt="info"/>
      <h2 class="caption">{{info}}</h2>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'custom-image',
    props: ['imagePath', 'info']
  }
</script>

<style>

  #container {
    display: inline-block;
    width: 100%;
    max-width: 700px;
    position: relative;
  }

  #image {
    width: 100%;
    max-width: 800px;
  }

  .caption {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    font-weight: bold;
    line-height: 1.1em;
  }

  #container:hover .caption {
    font-family: 'Helvetica';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 400px;
    display: block;
  }

  #container:hover #image {
    opacity: 0.3;
  }

  #container-mouseover {
    background-color: rgb(255, 125, 115)
  }

</style>
