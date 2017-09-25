<template>
  <div v-if="post">
    <h1 v-if="post.title">
      {{ post.title.rendered }}
    </h1>
    <div v-html="post.content.rendered"></div>

    <div v-if="post.acf">
      <h2>ACF Fields</h2>
      <img :src="post.acf.image.sizes.thumbnail" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Post',
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
        post: 'singlePost',
        loaded: 'loadState'
      })
    },
    methods: {
      setPageSlug: function() {
        this.$store.commit( 'set_slug', this.slug )
      },
      setTitle: function() {
        this.pageTitle = this.post.title.rendered
        this.$store.commit( 'set_page_title', this.pageTitle )
      },
    }
}
</script>