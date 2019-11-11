import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Home from '@/components/home.vue'
import Routines from '@/components/Routines/Routines.vue'
import Shelf from '@/components/Shelf/Shelf.vue'
import InARushRoutine from '@/components/Routines/In a Rush Routine.vue'
import NewRoutine from '@/components/Routines/NewRoutine.vue'
import NewProduct from '@/components/Shelf/New Product.vue'


Vue.use(VueRouter)

const routes = [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/routines',
      name: 'Routines',
      component: Routines
    },
    {
      path: '/shelf',
      name: 'Shelf',
      component: Shelf
    },
    {
      path: '/inarushroutine',
      name: 'In a Rush Routine',
      component: InARushRoutine
    },
        {
      path: '/newroutine',
      name: 'New Routine',
      component: NewRoutine
    },
    {
      path: '/newproduct',
      name: 'New Product',
      component: NewProduct
    },
]

const router = new VueRouter({
  routes
})

export default router
