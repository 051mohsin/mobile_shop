import Vue from 'vue'
import Router from 'vue-router'
import Home from '../veiws/Home.vue'

import Brands from '../veiws/Brands.vue'
import Contact from '../veiws/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
 
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
   
    {
      path: '/brand',
      name: 'brands',
      component: Brands
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },

  ]
})

