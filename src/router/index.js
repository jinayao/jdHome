import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [{
  path: '/',
  redirect: {
    name: 'home'
  }
},
{
  name: 'index',
  path: '/index',
  component: () => import('@/views/index.vue'),
  children: [{
    path: '',
    redirect: {
      name: 'home'
    }
  }, {
    name: 'home',
    path: 'home',
    component: () => import('@/views/Home.vue')
  }]
},
{
  name: 'login',
  path: '/login',
  component: () => import('@/views/Login.vue')
}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('token')
  if (to.path === '/login') {
    if (token) {
      router.push({
        name: 'home'
      })
    }
    next()
  } else {
    if (!token) {
      router.push({
        name: 'login'
      })
    }

    next()
  }
})

export default router
