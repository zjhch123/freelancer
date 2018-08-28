<template>
  <div class="u-nologin">
    <p>1、请扫码关注公众号</p>
    <p>2、点击公众号菜单栏底部“蓝社区”进入此平台</p>
    <p>3、点击平台底部“我的-主页编辑”进行资料填写</p>
    <img :src="require('../assets/qrcode.png')" class="u-qr">
  </div>
</template>
<style lang="scss" scoped>
.u-nologin {
  font-size: .3rem;
  .u-qr {
    width: 5rem;
    margin-top: .8rem;
  }
}
</style>
