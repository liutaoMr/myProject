import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import inforCollecHome from './views/informationCollection/inforCollecHome'
import login from './views/login/login'
import demo from './views/text/demo'
import handle from './views/handle/handle'
import heightWeight from "./views/handle/heightWeight/heightWeight";
import TjRegistration from "./views/TjRegistration/TjRegistration";
import bloodPressure from "./views/handle/bloodPressure/bloodPressure"
import bSuper from "./views/handle/bSuper/bSuper"
import inforSummary from "./views/inforSummary/inforSummary"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect: "/home/inforCollecHome",
      title:'操作页面',
      children:[
        {
          path: 'inforCollecHome',
          name: 'inforCollecHome',
          component: inforCollecHome,
        },
        {
          name:'TjRegistration',
          path:'TjRegistration',
          component:TjRegistration,
        },
        {
          path:'handle',
          name:'handle',
          component:handle,
          redirect: "/home/handle/heightWeight",
          title:'操作页面',
          children:[
            {
              path: 'heightWeight',
              name: 'heightWeight',
              component:heightWeight
            },
            {
              path: 'bloodPressure',
              name: 'bloodPressure',
              component:bloodPressure
            },
            {
              path: 'bSuper',
              name: 'bSuper',
              component:bSuper
            },

          ]
        },
        {
          path:'inforSummary',
          name:'inforSummary',
          component:inforSummary,
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
  ]
})
