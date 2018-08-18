<template>
  <div class="m-userheader">
    <img :src="src || require('../assets/demo_person.png')" class="u-header" :style="{width: `${width}rem`, height: `${width}rem`}"/>
  </div>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      default: require('../assets/demo_person.png')
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
