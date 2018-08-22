<template>
  <div class="g-message">
    <main>
      <SubTitle>&nbsp;</SubTitle>
      <div class="u-item" v-for="msg in messages" :key="msg.id" @click="showMessageDetail(msg)">
        <MessageItem :message="msg"/>
      </div>
    </main>
    <div class="u-msg-box" v-if="messageBox">
      <div class="u-msg">
        <div class="tlt">消息详情</div>
        <div class="content">{{showMessage.content}}</div>
        <a href="javascript:;" class="close" @click="messageBox = false">关闭</a>
      </div>
    </div>
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
      listenerFunc: null,
      messageBox: false,
      showMessage: {},
    }
  },
  mounted() {
    window.setNormalShare()
    this.listenerFunc = _.debounce(this.fetchNextPage, 200)
    this.getData(this.page)
    window.addEventListener('scroll', this.listenerFunc) // 滚到底部的懒加载
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.listenerFunc)
  },
  methods: {
    showMessageDetail(message) {
      this.messageBox = true
      this.showMessage = message
    },
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
  .u-msg-box {
    background: rgba(0,0,0,.8);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    .u-msg {
      position: absolute;
      left: 50%;
      top: 30%;
      transform: translate(-50%, -50%);
      width: 6rem;
      background: white;
      padding: .6rem .6rem;
      box-sizing: border-box;
      .tlt {
        font-size: .3rem;
        font-weight: bolder;
      }
      .content {
        text-align: left;
        font-size: .24rem;
        margin-top: .2rem;
      }
      .close {
        font-size: .2rem;
        color: white;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -1.1rem;
        display: inline-block;
        width: .8rem;
        height: .8rem;
        line-height: .8rem;
        text-align: center;
        border: 1px solid white;
        border-radius: 50%;
      }
    }
  }
}
</style>
