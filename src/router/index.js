import Vue from 'vue'
import Router from 'vue-router'

// 洋山频道
const YsChannel = () => import("@/page/ysChannel/YsChannel");
const YsChannelHome = () => import("@/page/ysChannel/YsChannelHome");
const YsChannelSituation = () => import("@/page/ysChannel/YsChannelSituation");
const YsChannelCallCenter = () => import("@/page/ysChannel/YsChannelCallCenter");
const YsChannelShouce = () => import("@/page/ysChannel/YsChannelShouce");
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    
  
    // 洋山频道
    {
      path: '/',
      name: 'YsChannel',
      component: YsChannel,
      meta: {
        title: '洋山频道'
      },
      children: [
        {
          path: '/ysChannelHome',
          name: 'YsChannelHome',
          component: YsChannelHome,
          meta: {
            title: '洋山频道-首页'
          }
        },
        {
          path: '/ysChannelSituation',
          name: 'YsChannelSituation',
          component: YsChannelSituation,
          meta: {
            title: '洋山频道-洋山实况'
        }
        },
        {
          path: '/ysChannelCallCenter',
            name: 'YsChannelCallCenter',
          component: YsChannelCallCenter,
          meta: {
          title: '洋山频道-呼叫中心'
        }
        },
        {
          path: '/ysChannelShouce',
            name: 'YsChannelShouce',
          component: YsChannelShouce,
          meta: {
          title: '洋山手册'
        }
        }


      ],
        redirect:'/ysChannelHome'//想要默认展示的子路由名字
    },

  ]
})
