import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'

//Goods
import Sale from '@/views/Sale/Sale'
//Detail
import Detail from '@/views/Sale/Detail'
//Warehouse
import Warehouse from '@/views/Warehouse/Warehouse'
import warehousein from '@/views/Warehouse/warehousein'
//My
import Finance from '@/views/Finance/Finance'
//My
import me from '@/views/me/me'
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
      path: '/Sale',
      name: 'Sale',
      component: Sale
    },
    {
      path: '/Warehouse',
      name: 'Warehouse',
      component: Warehouse
    },
    {
      path: '/warehousein',
      name: 'warehousein',
      component: warehousein
    },
    {
      path: '/Finance',
      name: 'Finance',
      component: Finance
    },
    {
      path: '/me',
      name: 'me',
      component: me
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
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
