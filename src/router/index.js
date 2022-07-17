import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
    path: '/logintest',
    name: 'logintest',
    component: () => import('@/components/Login/logintest.vue')
  },
  {
    path: '/',
    // name: 'home_page',
    component: () => import('@/components/Home_page/header_footer.vue'),
    children: [{
      path: "",
      redirect: "home_page"
    }, {
      path: '/home_page',
      name: 'home_page',
      component: () => import('@/components/Home_page/home_page.vue'),
    }, {
      path: '/advantage',
      name: 'advantage',
      component: () => import('@/components/Home_page/advantage.vue'),
    }, {
      path: '/about_us',
      name: 'about_us',
      component: () => import('@/components/Home_page/about_us.vue'),
    }]
  },
  {
    path: '/mainwindow',
    // name: 'MainWindow',
    component: () => import('@/components/Main_window/mainWindow.vue'),
    children: [{
        path: "",
        redirect: "statistics/elder_statistics"
      },
      {
        path: "/mainwindow/manage/elder_manage",
        name: "elder_manage",
        component: () => import('@/components/Main_window/center_window/manage/elder_manage.vue'),
      },
      {
        path: "/mainwindow/manage/vol_manage",
        name: "vol_manage",
        component: () => import('@/components/Main_window/center_window/manage/vol_manage.vue'),
      },
      {
        path: "/mainwindow/manage/person_manage",
        name: "person_manage",
        component: () => import('@/components/Main_window/center_window/manage/person_manage.vue'),
      },
      {
        path: "/mainwindow/monitor/courtyard_monitor",
        name: "monitor",
        component: () => import('@/components/Main_window/center_window/monitor/courtyard_monitor.vue'),
      },
      {
        path: "/mainwindow/monitor/corridor_monitor",
        name: "monitor",
        component: () => import('@/components/Main_window/center_window/monitor/corridor_monitor.vue'),
      },
      {
        path: "/mainwindow/monitor/room_monitor",
        name: "monitor",
        component: () => import('@/components/Main_window/center_window/monitor/room_monitor.vue'),
      },
      {
        path: "/mainwindow/monitor/desk_monitor",
        name: "monitor",
        component: () => import('@/components/Main_window/center_window/monitor/desk_monitor.vue'),
      },
      {
        path: "/mainwindow/statistics/vol_statistics",
        name: "vol_statistics",
        component: () => import('@/components/Main_window/center_window/statistics/vol_statistics.vue'),
      },
      {
        path: "/mainwindow/statistics/elder_statistics",
        name: "elder_statistics",
        component: () => import('@/components/Main_window/center_window/statistics/elder_statistics.vue'),
      },
      {
        path: "/mainwindow/statistics/person_statistics",
        name: "person_statistics",
        component: () => import('@/components/Main_window/center_window/statistics/person_statistics.vue'),
      },
      {
        path: "/mainwindow/event/invade_event",
        name: "invade_event",
        component: () => import('@/components/Main_window/center_window/event/invade_event.vue'),
      },
      {
        path: "/mainwindow/event/fall_event",
        name: "fall_event",
        component: () => import('@/components/Main_window/center_window/event/fall_event.vue'),
      },
      {
        path: "/mainwindow/event/emotion_event",
        name: "emotion_event",
        component: () => import('@/components/Main_window/center_window/event/emotion_event.vue'),
      },
      {
        path: "/mainwindow/event/interactive_event",
        name: "interactive_event",
        component: () => import('@/components/Main_window/center_window/event/interactive_event.vue'),
      },
      {
        path: "/mainwindow/manager/managerInfo",
        name: "managerInfo",
        component: () => import('@/components/Main_window/center_window/manager/managerInfo.vue'),
      },
      {
        path: "/mainwindow/detail/elder_detail",
        name: "elder_detail",
        component: () => import('@/components/Main_window/center_window/manage/detail/elder_detail.vue'),
      },
      {
        path: "/mainwindow/detail/person_detail",
        name: "person_detail",
        component: () => import('@/components/Main_window/center_window/manage/detail/person_detail.vue'),
      },
      {
        path: "/mainwindow/detail/vol_detail",
        name: "vol_detail",
        component: () => import('@/components/Main_window/center_window/manage/detail/vol_detail.vue'),
      },

    ]
  },
]

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// export default new Router({
//   routes:
// })
const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  console.log(localStorage.isLogin)
  console.log( localStorage.token)
  if (localStorage.isLogin) { //防止页面死循环
    next()
  } else {
    if (localStorage.token == "" || localStorage.token == null) {
      next({
        path: "/home_page"
      })
    } else {
      next()
    }
  }
})


export default router
