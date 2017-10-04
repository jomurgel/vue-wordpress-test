<template>
    <div class="navigation navigation__main">
      <router-link v-for="item of menu" :key="item.object_slug" :to="{ path: '/' + item.object_slug }">
        {{ item.title }}
      </router-link>

        <transition name="page--transition" mode="out-in">
            <router-view :key="$route.params.slug"></router-view>
        </transition>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'navigation',
  data () {
    return {
      newMenu: []
    }
  },
  mounted() {
    this.getMenus()
  },
  methods: {
    ...mapActions([
      'getMenus'
    ]),
  },
  computed: {
     ...mapGetters({
        menu: 'primaryMenu',
     })
  }
}
</script>

<style lang="sass" scoped>
  @import '../assets/navigation';
</style>