<template>
  <div class="g-message">
    <main>
      <SubTitle>&nbsp;</SubTitle>
      <div class="u-item" v-for="msg in messages" :key="msg.id">
        <MessageItem :message="msg"/>
      </div>
    </main>
  </div>
</template>
<script>
import SubTitle from '@/components/SubTitle'
import MessageItem from '@/components/MessageItem'
import { getMessages } from '../api'
export default {
  data() {
    return {
      page: 1,
      totalPage: 1,
      messages: [],
    }
  },
  mounted() {
    this.getData(this.page)
  },
  methods: {
    async getData(page) {
      this.page = page
      const result = await getMessages(this.page)
      if (result.code !== 200) {
        return
      }
      this.messages = result.content.list
      this.totalPage = result.content.totalPage
    }
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
