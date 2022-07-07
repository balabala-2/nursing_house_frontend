import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
  path: '/logintest',
  name: 'logintest',
  component: () => import('@/components/Login/logintest.vue')
},
  // {
  //   path: '/',
  //   name: 'home_page',
  //   component: ()=>import('@/components/Home_page/home_page.vue')
  // },
{
  path: '/',
  name: 'MainWindow',
  component: () => import('@/components/Main_window/mainWindow.vue')
},
{
  path: '/mainwindow',
  name: 'MainWindow',
  component: () => import('@/components/Main_window/mainWindow.vue'),
  children: [{
    path: '',
    redirect: 'monitor'
  },
  {
    path: '/mainwindow/manage/elder_manage',
    name: 'elder_manage',
    component: () => import('@/components/Main_window/center_window/manage/elder_manage.vue')
  },
  {
    path: '/mainwindow/manage/vol_manage',
    name: 'vol_manage',
    component: () => import('@/components/Main_window/center_window/manage/vol_manage.vue')
  },
  {
    path: '/mainwindow/manage/person_manage',
    name: 'person_manage',
    component: () => import('@/components/Main_window/center_window/manage/person_manage.vue')
  },
  {
    path: '/mainwindow/monitor/monitor',
    name: 'monitor',
    component: () => import('@/components/Main_window/center_window/monitor/monitor.vue')
  },
  {
    path: '/mainwindow/statistics/vol_statistics',
    name: 'statistics',
    component: () => import('@/components/Main_window/center_window/statistics/vol_statistics.vue')
  },
  {
    path: '/mainwindow/statistics/elder_statistics',
    name: 'statistics',
    component: () => import('@/components/Main_window/center_window/statistics/elder_statistics.vue')
  },
  {
    path: '/mainwindow/statistics/person_statistics',
    name: 'statistics',
    component: () => import('@/components/Main_window/center_window/statistics/person_statistics.vue')
  },
  {
    path: '/mainwindow/event/event',
    name: 'event',
    component: () => import('@/components/Main_window/center_window/event/event.vue')
  },
  {
    path: '/mainwindow/manager/managerInfo',
    name: 'managerInfo',
    component: () => import('@/components/Main_window/center_window/manager/managerInfo.vue')
  },
  {
    path: '/mainwindow/detail/elder_detail',
    name: 'managerInfo',
    component: () => import('@/components/Main_window/center_window/manage/detail/elder_detail.vue')
  }
  ]
}
]
// export default new Router({
//   routes:
// })
const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router