<template>
  <div v-if="loaded === true">
    <ul v-if="posts.length">
      <li v-for="post of posts" :key="post">
        <h2>
          <router-link :to="$route.path + '/' + post.slug">
            {{post.title.rendered}}
          </router-link>
        </h2>
        <div v-html="post.content.rendered"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Posts',
    mounted() {
      this.setPageTitle()
    },
    computed: {
      ...mapGetters({
        posts: 'allPosts',
        loaded: 'loadState',
      })
    },
    methods: {
      setPageTitle: function() {
        const vm = this

        vm.pageTitle = vm.$route.name
        vm.$store.commit( 'set_page_title', vm.pageTitle )
      }
    },
}
</script>