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
import _ from 'lodash'
export default {
  data() {
    return {
      page: 1,
      totalPage: 1,
      messages: [],
      listenerFunc: null
    }
  },
  mounted() {
    this.listenerFunc = _.debounce(this.fetchNextPage, 200)
    this.getData(this.page)
    window.addEventListener('scroll', this.listenerFunc) // 滚到底部的懒加载
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.listenerFunc)
  },
  methods: {
    async getData(page) {
      if (page > this.totalPage) {
        return
      }
      this.page = page
      const result = await getMessages(this.page)
      if (result.code !== 200) {
        return
      }
      result.content.list.forEach(item => {
        this.messages.push(item)
      })
      this.totalPage = result.content.totalPage
    },
    fetchNextPage() {
      const totalHeight = document.documentElement.offsetHeight
      const scrollHeight = window.scrollY
      const windowHeight = window.innerHeight

      if (windowHeight + scrollHeight > 0.8 * totalHeight) {
        this.getData(this.page + 1)
      }
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
