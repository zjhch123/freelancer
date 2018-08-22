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
    <router-link class="link-item" to="/message">我的消息<span v-if="this.unreadCount !== 0" class="unread">{{this.unreadCount}}</span></router-link>
  </div>
</div>
</template>
<script>
import SubTitle from '@/components/SubTitle'
import { getUnreadMsgCount } from '../../api'
export default {
  data() {
    return {
      unreadCount: 0
    }
  },
  components: {
    SubTitle
  },
  mounted() {
    this.getUnreadMessageCount()
  },
  methods: {
    async getUnreadMessageCount() {
      const result = await getUnreadMsgCount()
      this.unreadCount = result.content
    }
  },
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
  position: relative;
}
.unread {
  color: white;
  background-color: red;
  width: .3rem;
  height: .3rem;
  font-size: .2rem;
  line-height: .3rem;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  top: .4rem;
}
</style>
