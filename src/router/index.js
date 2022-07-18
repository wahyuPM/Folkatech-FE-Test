import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LoginLayout from '../views/layouts/LoginLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login&register',
    component: LoginLayout,
    children: [
      {
        path: '/',
        name: 'login',
        component: () => import('../views/login/LoginPage.vue'),
        meta: {
          title: "Login"
        }
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('../views/register/RegisterPage.vue'),
        meta: {
          title: "Register"
        }
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
