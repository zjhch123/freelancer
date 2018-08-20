<template>
<div>
  <Banner
    :imagePath="imagePath || require('../assets/demo_person2.png')"
    :width="7.5"
    :height="5.32"
    :repeat="true"
    :imageStyle="style"
    :repeatStyle="repeatStyle">
    <div class="m-user-banner">
      <slot></slot>
    </div>
  </Banner>
</div>
</template>
<script>
import Banner from '@/components/Banner'
export default {
  data() {
    return {
      style: {
        width: '7.8rem', 
        height: '7.8rem', 
        filter: 'blur(10px)'
      },
      repeatStyle: {
        width: '7.8rem', 
        height: '7.8rem', 
        'z-index': 1
      }
    }
  },
  props: {
    imagePath: {
      type: String,
      default: require('../assets/demo_person2.png')
    }
  },
  components: {
    Banner
  }
}
</script>
<style lang="scss" scoped>
.bg {
  position: absolute;
  width: 7.5rem;
  height: 7.5rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.m-user-banner {
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.3);
}
</style>
