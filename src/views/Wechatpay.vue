<template>
  <div class="wechat-callback-container">
  </div>
</template>
<script>
import { objFrom } from '@/util/index'

export default {
  name: 'WechatCallback',
  created() {
    const obj = objFrom(decodeURIComponent(location.search))

    // 通过state参数 转发 到不同页面支付
    if (obj.state === 'deal') {
      window.location.href = `http://dealclient.xiaovbao.cn/wechatpay?code=${obj.code}`
      return
    }

    if (obj.state === 'eshop') {
      window.location.href = `http://eshop.xiaovbao.cn/wechatpay?code=${obj.code}`
      return
    }

    if (obj.state === 'sales') {
      window.location.href = `https://sales.xiaovbao.cn/wechatpay?code=${obj.code}`
      return
    }

    if (obj.state === 'salesProxy') {
      window.location.href = `https://salesProxy.xiaovbao.cn/wechatpay?code=${obj.code}`
      return
    }

    if (obj.state === 'openid') {
      window.location.href = `https://sales.xiaovbao.cn/fetch-openid?code=${obj.code}`
      return
    }

    if (obj.state === 'epay') {
      window.location.href = `https://sales.xiaovbao.cn/pay-success?code=${obj.code}`
      return
    }

    if (obj.state === 'hongbaojie') {
      window.location.href = `https://sales.xiaovbao.cn/hongbaojie?code=${obj.code}`
      return
    }

    if (obj.state === 'bindWechat') {
      window.location.href = `http://manager.xiaovbao.cn/bind-wechat?code=${obj.code}&state=bindWechat`
      return
    }

    if (obj.state === 'order') {
      window.location.href = `http://manager.xiaovbao.cn/bind-wechat?code=${obj.code}&state=order`
      return
    }
  }
}
</script>
<style scoped>

</style>






