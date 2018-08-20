<template>
<div class="g-banner" :style="{ width: `${width}rem`, height: `${height}rem` }">
  <img :src="imagePath" class="u-bg" :style="imageStyle">
  <img :src="imagePath" class="u-bg u-bg-repeat" v-if="repeat" :style="repeatStyle">
  <div class="m-inner">
    <slot></slot>
  </div>
</div>
</template>
<script>
export default {
  props: {
    'width': {
      type: Number
    },
    'height': {
      type: Number
    },
    'imagePath': {
      type: String,
      default: '',
    },
    'imageStyle': {
      type: Object
    },
    'repeatStyle': {
      type: Object
    },
    repeat: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
.g-banner {
  position: relative;
  overflow: hidden;
  .u-bg {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .m-inner {
    position: absolute;
    z-index: 3;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: .2rem;
  }
}
</style>