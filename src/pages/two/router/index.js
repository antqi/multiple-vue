import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/hello'
import World from '../components/world'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Hello
    },
    {
      path: '/hello',
      component: Hello
    },
    {
      path: '/world',
      component: World
    }
  ]
})

export default router
