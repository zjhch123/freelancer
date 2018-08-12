<template>
  <router-link :to="to" class="u-block-link" :class="className">
    <slot></slot>
  </router-link>
</template>
<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    },
    className: {
      type: String
    }
  }
}
</script>
<style lang="scss" scoped>
.u-block-link {
  display: block;
}
</style>

