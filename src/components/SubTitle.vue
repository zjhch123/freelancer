<template>
  <div>
    <p class="u-subtitle"><slot></slot></p>
  </div>
</template>
<script>
export default {
}
</script>
<style>
.u-subtitle {
  padding-left: .4rem;
  line-height: .7rem;
  text-align: left;
  font-size: .2rem;
  font-weight: bolder;
  border-bottom: 1px solid #c8c8c8;
}
</style>