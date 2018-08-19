<template>
  <div class="u-nologin">
    <p>请关注公众号并从公众号内进入电影人平台</p>
    <p>查看更多信息</p>
    <img :src="require('../assets/qrcode.jpg')" class="u-qr">
  </div>
</template>
<style lang="scss" scoped>
.u-nologin {
  font-size: .3rem;
  .u-qr {
    width: 3rem;
    margin-top: 1rem;
  }
}
</style>
