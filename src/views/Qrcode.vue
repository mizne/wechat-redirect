<template>
  <div class="qrcode-container">
    {{prompt}}
  </div>
</template>
<script>
import { objFrom } from '@/util/index'
import * as axios from 'axios'

export default {
  name: 'Qrcode',
  data() {
    return {
      prompt: ''
    }
  },
  created() {
    this.prompt = '正在获取位置...'
    const obj = objFrom(decodeURIComponent(location.search))

    axios
      .get(
        `https://sales.xiaovbao.cn/api/test/admin/QRCodeUrl?scene=${obj.scene}&merchant=${obj.merchant}`
      )
      .then(resp => {
        try {
          const redirectUrl = resp.data.result
          window.location.href = redirectUrl.url
        } catch (e) {
          this.prompt = '获取位置失败'
        }
      })
      .catch(err => {
        console.error(err)
        this.prompt = '获取位置失败'
      })
  }
}
</script>
<style scoped>
.qrcode-container {
  text-align: center;
  margin-top: 20px;
}
</style>






