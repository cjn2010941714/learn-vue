// 配置路由
import VueRouter from "vue-router";
import Vue from 'vue';
/*import Home from "../components/Home";
import About from "../components/About";
import User from "../components/User";*/
const Home = () => import('../components/Home');
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const About = () => import('../components/About');
const User = () => import('../components/User');
const Profile = () => import('../components/Profile');
// 1.通过Vue.use(插件),安装插件
Vue.use(VueRouter)
// 2.创建VueRouter对象
const routes = [
  // 修改默认值
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
    beforeEach: (to,from,next) => {
      console.log('about beforeEach');
      next()
    }
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用户'
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    },
  }
]
const router = new VueRouter({
  routes,
  mode: 'history' // 使用history模式改变路径
})
// 前置钩子
router.beforeEach((to, from, next) => {
  // console.log('前置钩子')
  document.title = to.matched[0].meta.title
  next()
})

// 后置钩子
router.afterEach((to, from) => {
  // console.log('后置钩子')
})

// 3.将router对象传入Vue实例
export default router
