<template>
  <div class="CV">
    <h1>
      {{ msg }}
    </h1>

  </div>

</template>


<script>
  export default {
    name: 'CV',
    props: {
      initial: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        msg: 'This is my CV.',
        pdfURI: '../../static/JoeWoodCV2018.pdf'
      }
    },
    methods: {
      showPdf: function () {
        window.open('./static/JoeWoodCV2018.pdf')
      }
    }
  }
</script>
