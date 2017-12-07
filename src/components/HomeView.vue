<template>

  <pdf src="./static/JoeWoodCV2017.pdf"></pdf>

</template>
<script>
  import pdf from 'vue-pdf'
  export default {
    show: 'hello',
    name: 'HomeView',
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

