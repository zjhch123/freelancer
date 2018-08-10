<template>
  <div>
    <input type="text" placeholder="姓名、职业、专业、作品等" class="u-input" v-model="inputValue">
    <a href="javascript:;" class="u-btn" @click="this.handleClick">123</a>
  </div>
</template>
<script>
export default {
  data: () => ({
    inputValue: ''
  }),
  methods: {
    handleClick() {
      this.click(this.inputValue)
    }
  },
  props: {
    click: {
      type: Function,
      default: (val) => {
        console.log(val)
      }
    }
  }
}
</script>