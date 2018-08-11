<template>
  <div class="u-simple-row" :class="className">
    <p class="key">{{name}}</p>
    <p class="value"><slot></slot></p>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.u-simple-row {
  display: flex;
  color: #7b7b7b;
  font-size: .24rem;
  margin: .2rem auto;
  .key {
    text-align: right;
    flex: 0 0 2rem;
    font-weight: bolder;
  }
  .value {
    padding-left: .1rem;
    text-align: left;
    flex: 1;
  }
}
</style>
