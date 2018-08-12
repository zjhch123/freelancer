<template>
  <div class="u-message-item">
    <img src="@/assets/msgbox.png" class="img">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.u-message-item {
  display: flex;
  align-items: center;
  width: 6.5rem;
  margin: auto;
  padding: .2rem 0;
  .img {
    width: .51rem;
    height: .44rem;
    display: block;
  }
  .content {
    padding-left: .22rem;
    font-size: .24rem;
    color: #7b7b7b;
  }
}
</style>

