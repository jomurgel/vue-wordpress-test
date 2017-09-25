<template>
  <div id="app">
    <Navigation></Navigation>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Navigation from '@/components/Navigation'

export default {
  name: 'app',
  components: {
    Navigation
  },
  mounted() {
    this.getAllPosts()
    this.getAllPages()
  },
  methods: {
    ...mapActions([
      'getAllPosts',
      'getAllPages',
    ]),
  },
  computed: {
     ...mapGetters({
        posts: 'allPosts',
        pages: 'allPages',
        loaded: 'loadState',
     })
  }
}
</script>

<style lang="sass" scoped>
  @import './assets/styles';
</style>
