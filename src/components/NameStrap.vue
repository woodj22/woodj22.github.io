<template>
  <div class="name-strap">

    <transition name="fade" mode="out-in">
      <h1 v-if="show">Joe Wood</h1>
    </transition>
    <h2>{{job}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'NameStrap',
    props: ['job', 'withTransition'],
    data () {
      return {
        show: false
      }
    },
    mounted: function () {
      this.show = true
    },
  }

</script>
<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 5s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0
  }
</style>
