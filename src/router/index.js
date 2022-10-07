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
  component: () => import('@/views/Index.vue'),
  children: [{
    path: '',
    redirect: {
      name: 'home'
    }
  }, {
    name: 'home',
    path: 'home',
    component: () => import('@/views/Home.vue')
  }, {
    name: 'income',
    path: 'income',
    component: () => import('@/views/Income.vue')
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
  if (to.path === '/login' && token) {
    router.push({
      name: 'home'
    })
  } else if (to.path !== '/login' && !token) {
    router.push({
      name: 'login'
    })
  }
  next()
})

export default router
