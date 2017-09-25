// https://router.vuejs.org/en/api/router-link.html

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Blog from '@/pages/Blog'
import Single from '@/pages/Single'
import Page from '@/pages/Page'

Vue.use(Router)

export default new Router({
  mode: 'history', // this is important — https://router.vuejs.org/en/essentials/history-mode.html
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/blog/:slug',
      name: 'Single',
      component: Single
    },
    {
      path: '/:slug',
      name: 'Page',
      component: Page
    },
  ]
})
