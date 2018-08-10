<template>
<div class="g-banner" :style="{ width: `${width}rem`, height: `${height}rem` }">
  <img :src="imagePath" class="u-bg">
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
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.g-banner {
  .u-bg {
    display: block;
    width: 100%;
    height: 100%;
  }
  .m-inner {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
    font-size: .2rem;
  }
}
</style>