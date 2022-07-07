/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 *
 */
let baseUrl = 'http://localhost:8000/api'
let serviceUrl = ''
let routerMode = 'hash'
let baseImgPath
let apiUrl = ''

if (process.env.NODE_ENV === 'development') { // 开发环境
  routerMode = 'hash'
  baseUrl = '/api'
  serviceUrl = ''
  apiUrl = '/api'
  baseImgPath = ''
} else { // 线上地址
  routerMode = 'history'
  baseUrl = '/platform' // nginx配置协调
  serviceUrl = ''
  apiUrl = '/api'
  baseImgPath = '/platform'
}

export {
  baseUrl,
  serviceUrl,
  routerMode,
  apiUrl,
  baseImgPath
}
