<template>
  <div class="home">
    <h1>The "Home" component has been mounted.</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
      this.setPageTitle()
    },
    methods: {
      setPageTitle: function() {
        const vm = this

        vm.pageTitle = 'Vue.js Demo Site'
        vm.$store.commit( 'set_page_title', vm.pageTitle )
      }
    },
}
</script>
