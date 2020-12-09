import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home/home'
import foo from '@/page/foo/foo'
import bar from '@/page/bar/bar'
import fooChild1 from '@/page/foo/fooChild/fooChild1'
import fooChild2 from '@/page/foo/fooChild/fooChild2'
import login from '@/page/login/login'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/foo',
      name: 'foo',
      component: foo,
      children: [  //这里就是二级路由的配置
        {
          path: '/fooChild1',
          name: 'fooChild1',
          component: fooChild1
        },
        {
          path: '/fooChild2',
          name: 'fooChild2',
          component: fooChild2
        }
      ]
    },
    {
      path: '/bar',
      name: 'bar',
      meta: {
        requireAuth: true
      },
      component: bar
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    console.log('登录，绑定',store.state);
    if (store.state.token.length > 0) {  // 通过store获取当前的token是否存在
      next();
    }else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
});

export default router;
