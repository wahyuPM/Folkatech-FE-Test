import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from '../views/layouts/MainLayout.vue'
import LoginLayout from '../views/layouts/LoginLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: LoginLayout,
    children: [
      {
        path: '/',
        name: 'login',
        component: () => import('../views/login/LoginPage.vue'),
        meta: {
          title: "Login",
          hideForAuth: true,
        }
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('../views/register/RegisterPage.vue'),
        meta: {
          title: "Register",
          hideForAuth: true,
        }
      }
    ]
  },
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/HomePage.vue'),
        meta: {
          title: "Home",
          requiresAuth: true,
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//Auth Guard
router.beforeEach((to, from, next) => {
  const auth = JSON.parse(window.localStorage.getItem('auth'))
  if (to.meta.requiresAuth) {
    if (!auth) {
      next('/')
    } else {
      next()
    }
  } else if (to.meta.hideForAuth) {
    if (auth) {
      next('/home')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
