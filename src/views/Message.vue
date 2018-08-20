<template>
  <div class="g-message">
    <main>
      <SubTitle>&nbsp;</SubTitle>
      <div class="u-item">
        <MessageItem>通知: 您的资料审核已通过，已在主页更新展示。</MessageItem>
      </div>
      <div class="u-item">
        <MessageItem>通知: 您的资料审核已通过，已在主页更新展示。</MessageItem>
      </div>
    </main>
  </div>
</template>
<script>
import SubTitle from '@/components/SubTitle'
import MessageItem from '@/components/MessageItem'
export default {
  data() {
    return {
    }
  },
  mounted() {
  },
  components: {
    SubTitle, MessageItem
  }
}
</script>
<style lang="scss" scoped>
.g-message {
  .u-item {
    border-bottom: 1px solid #c8c8c8;
  }
}
</style>
