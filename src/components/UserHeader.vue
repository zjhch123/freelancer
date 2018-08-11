<template>
  <div class="m-userheader">
    <img :src="src" class="u-header" :style="{width: `${width}rem`, height: `${width}rem`}"/>
  </div>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.u-header {
  display: block;
  border-radius: 50%;
}
</style>
