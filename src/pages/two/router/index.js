import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/hello'
import World from '../components/world'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/two',
      redirect: '/two/hello'
    },
    {
      path: '/two/hello',
      component: Hello
    },
    {
      path: '/two/world',
      component: World
    }
  ]
})

export default router
