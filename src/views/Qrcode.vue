<template>
  <div class="qrcode-container">
    正在获取位置...
  </div>
</template>
<script>
import { objFrom } from '@/util/index'
import * as axios from 'axios'

export default {
  name: 'Qrcode',
  created() {
    const obj = objFrom(decodeURIComponent(location.search))

    console.log(obj)

  }
}
</script>
<style scoped>
.qrcode-container {
  text-align: center;
  margin-top: 20px;
}
</style>






