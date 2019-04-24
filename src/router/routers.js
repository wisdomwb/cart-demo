export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue'),
  }, {
    path: '/register',
    name: 'register',
    meta: {
      title: 'Register - 注册',
      hideInMenu: true
    },
    component: () => import('@/view/register/register.vue'),
  }, {
    path: '/shop',
    name: 'shop',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/shop/shop.vue'),
  }
]
