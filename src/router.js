import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'

//Goods
import Goods from '@/views/Goods/Goods'
//My
import Warehouse from '@/views/Warehouse/Warehouse'
//My
import Finance from '@/views/Finance/Finance'
//My
import My from '@/views/My/My'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },

    {
      path: '/Goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/Warehouse',
      name: 'Warehouse',
      component: Warehouse
    },
    {
      path: '/Finance',
      name: 'Finance',
      component: Finance
    },
    {
      path: '/My',
      name: 'My',
      component: My
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
