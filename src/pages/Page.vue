<template>
  <div v-if="page">
    <h1 v-if="page.title">
      {{ page.title.rendered }}
    </h1>
    <div v-if="page.content" v-html="page.content.rendered"></div>

    <div v-if="page.acf !== false">
      {{ page.acf.services }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Page',
    data () {
      return {
        slug: this.$route.params.slug,
      }
    },
    mounted () {
      this.setPageSlug()
      this.loaded ? this.setTitle() : ''
    },
    computed: {
      ...mapGetters({
        page: 'singlePage',
        loaded: 'loadState',
      })
    },
    methods: {
      setPageSlug: function() {
        this.$store.commit( 'set_slug', this.slug )
      },
      setTitle: function() {
        this.pageTitle = this.page.title.rendered
        this.$store.commit( 'set_page_title', this.pageTitle )
      },
    },
}
</script>