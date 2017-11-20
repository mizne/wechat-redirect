import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Wechatpay from '@/views/Wechatpay'
import Qrcode from '@/views/Qrcode'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/wechatpay',
      name: 'Wechatpay',
      component: Wechatpay
    },
    {
      path: '/qrcode',
      name: 'Qrcode',
      component: Qrcode
    }
  ]
})
