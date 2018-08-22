<template>
  <div class="u-flag">
    <p class="tlt">欢迎您，中传电影创作人。</p>
    <p class="sub">在 <router-link :to="{name: 'edit'}">"主页编辑"</router-link> 里填写您的资料，核审通过后即可加入创作人库。</p>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
@keyframes fadeIn {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
.u-flag {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: white;
  background-color: rgba(0,0,0,.8);
  z-index: 10;
  padding: .2rem .2rem;
  animation: fadeIn .6s;
  animation-fill-mode: both;
  .tlt {
    font-size: .3rem;
  }
  .sub {
    font-size: .24rem;
    a {
      color: white;
      text-decoration: underline;
    }
  }
}
</style>
