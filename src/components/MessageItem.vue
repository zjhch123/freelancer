<template>
  <div @click="read(message.id)" class="u-message-item" :class="message.isRead === 0 ? 'unread' : ''">
    <img src="@/assets/msgbox.png" class="img">
    <div class="content">
      {{message.content}}
    </div>
  </div>
</template>
<script>
import { readMessage } from '../api'
export default {
  props: ['message'],
  methods: {
    async read(id) {
      await readMessage(id)
      this.message.isRead = 1
    }
  }
}
</script>
<style lang="scss" scoped>
.u-message-item {
  display: flex;
  align-items: center;
  width: 6.5rem;
  margin: auto;
  padding: .2rem 0;
  position: relative;
  &.unread:before {
    content: '';
    color: white;
    background-color: red;
    width: .2rem;
    height: .2rem;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    top: 50%;
    margin-top: -.1rem;
    left: -.35rem;
  }
  .img {
    width: .51rem;
    height: .44rem;
    display: block;
  }
  .content {
    padding-left: .22rem;
    font-size: .24rem;
    color: #7b7b7b;
    position: relative;
  }
}
</style>

