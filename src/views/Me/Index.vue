<template>
<div>
  <SubTitle>&nbsp;</SubTitle>
  <div>
    <router-link class="link-item" to="/me/profile">我的主页</router-link>
  </div>
  <div>
    <router-link class="link-item" to="/edit">主页编辑</router-link>
  </div>
  <div>
    <router-link class="link-item" to="/message">我的消息</router-link>
  </div>
  <div>
    <router-link class="link-item" to="/setting">通用设置</router-link>
  </div>
</div>
</template>
<script>
import SubTitle from '@/components/SubTitle'
export default {
  components: {
    SubTitle
  }
}
</script>

<style lang="scss" scoped>
.link-item {
  line-height: 1.47rem;
  height: 1.47rem;
  display: block;
  text-align: center;
  font-size: .24rem;
  color: #7b7b7b;
  border-bottom: 1px solid #c8c8c8;
}
</style>
