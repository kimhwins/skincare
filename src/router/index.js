import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Home from '@/components/home.vue'
import HomeB from '@/components/homeb.vue'
import Routines from '@/components/Routines/Routines.vue'
import Shelf from '@/components/Shelf/Shelf.vue'
import InARushRoutine from '@/components/Routines/In a Rush Routine.vue'
import NewRoutine from '@/components/Routines/NewRoutine.vue'
import NewProduct from '@/components/Shelf/NewProduct.vue'
import Product from '@/components/Shelf/Product.vue'
import Wishlist from '@/components/Shelf/Wishlist.vue'
import Discover from '@/components/Discover/Discover.vue'


Vue.use(VueRouter)

const routes = [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/b',
      name: 'HomeB',
      component: HomeB
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
    {
      path: '/discover',
      name: 'Discover',
      component: Discover
    },
    {
      path: '/glossierjellycleanser',
      name: 'Glossier Jelly Cleanser',
      component: Product
    },
    {
      path: '/wishlist',
      name: 'Wishlist',
      component: Wishlist
    },
]

const router = new VueRouter({
  routes
})

export default router
