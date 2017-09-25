<template>
  <div>
    <Post :postSlug="$route.params.slug"></Post>
  </div>
</template>

<script>
import Post from '@/components/Post'

export default {
  name: 'Single',
  components: {
    Post
  }
}
</script>