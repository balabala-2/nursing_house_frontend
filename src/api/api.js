export default [{
    name: 'test', //测试
    url: '/test',
    method: 'get'
  },
  {
    name: 'login', //登录
    url: '/login',
    method: 'post'
  },
  {
    name: 'register', //注册
    url: '/register',
    method: 'post'
  },
  {
    name: 'login_send_auth_code', //发送验证码
    url: '/login_send_auth_code',
    method: 'post'
  },
  {
    name: 'register_send_auth_code', //发送验证码
    url: '/register_send_auth_code',
    method: 'post'
  },

  {
    name: 'update_manager_password',
    url:'/update_manager_password',
    method: 'post'
  },
  {
    name: 'update_manager_info',
    url:'/update_manager_info',
    method: 'post'
  },

  //TODO
  {
    name: 'get_manager_info',
    url:'/get_manager_info',
    method: 'get'
    
  },

  {
    name: 'elderly_info', //初始化管理界面
    url: '/elderly_info',
    method: 'post'
  },
  {
    name: 'manager_info', //初始化管理界面
    url: '/manager_info',
    method: 'post'
  },
  {
    name: 'add_elderly_info', //初始化管理界面
    url: '/add_elderly_info',
    method: 'post'
  },

  {
    name: 'del_elderly_info', //初始化管理界面
    url: '/del_elderly_info',
    method: 'post'
  },
  {
    name: 'update_elderly_info', //初始化管理界面
    url: '/update_elderly_info',
    method: 'post'
  },
  {
    name: 'volunteer_info', //初始化管理界面
    url: '/volunteer_info',
    method: 'post'
  },
  {
    name: 'add_volunteer_info', //初始化管理界面
    url: '/add_volunteer_info',
    method: 'post'
  },
  {
    name: 'del_volunteer_info', //初始化管理界面
    url: '/del_volunteer_info',
    method: 'post'
  },
  {
    name: 'update_volunteer_info', //初始化管理界面
    url: '/update_volunteer_info',
    method: 'post'
  },



  {
    name: 'staff_info', //初始化管理界面
    url: '/staff_info',
    method: 'post'
  },
  {
    name: 'add_staff_info', //初始化管理界面
    url: '/add_staff_info',
    method: 'post'
  },
  {
    name: 'del_staff_info', //初始化管理界面
    url: '/del_staff_info',
    method: 'post'
  },
  {
    name: 'update_staff_info', //初始化管理界面
    url: '/update_staff_info',
    method: 'post'
  },
  {
    type: 'url',
    name: 'avatar', //初始化管理界面
    url: '/avatar'
  },

  {
    name: 'get_elderly_ages',
    url:'/get_elderly_ages',
    method: 'get',
  },
  {
    name: 'get_guardian_relation',
    url:'/get_guardian_relation',
    method: 'get',
  },
  {
    name: 'get_volunteer_entry_resignation',
    url:'/get_volunteer_entry_resignation',
    method: 'get',
  },
  {
    name: 'get_staff_entry_resignation',
    url:'/get_staff_entry_resignation',
    method: 'get',
  },
  {
    name: 'desk_audio',
    url:'/desk_audio',
    method: 'get'
  },
  {
    name: 'get_elder_emotion',
    url:'/get_elder_emotion',
    method: 'get',
  },
  {
    name: 'get_invade_event',
    url:'/get_invade_event',
    method: 'get',
  },
  {
    name: 'get_fall_event',
    url:'/get_fall_event',
    method: 'get',
  },
  {
    name: 'get_interactive_event',
    url:'/get_interactive_event',
    method: 'get',
  },
  {
    name: 'get_event_img',
    url:'/get_event_img',
    method: 'post',
  },
  {
    name: 'get_elderly_names',
    url:'/get_elderly_names',
    method: 'get',
  },
  {
    name: 'get_single_elderly_emotion',
    url:'/get_single_elderly_emotion',
    method: 'get',
  },
];
