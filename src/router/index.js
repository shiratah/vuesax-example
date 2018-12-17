import Vue from 'vue'
import Router from 'vue-router'
import Example from '@/components/Example'
import Top from '@/pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/example',
      name: 'Example',
      component: Example
    }
  ]
})
