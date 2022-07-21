import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from '../views/layouts/MainLayout.vue'
import LoginLayout from '../views/layouts/LoginLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Main',
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
    name: 'Home',
    meta: {
      breadcrumb: 'Home'
    },
    children: [
      {
        path: '/produk',
        name: 'Produk',
        component: () => import('../views/products/ProductsPage.vue'),
        meta: {
          title: "Produk",
          requiresAuth: true,
          breadcrumb: {
            label: 'Produk',
            parent: 'Main'
          }
        }
      },
      {
        path: '/detail/:product_slug/:id',
        name: 'Detail',
        component: () => import('../views/detail/DetailPage.vue'),
        meta: {
          title: "Detail",
          requiresAuth: true,
          breadcrumb() {
            const name = this.$route.params.name;

            return {
              label: name,
              parent: 'Produk'
            };
          }
        }
      }
    ],
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
      next('/produk')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
