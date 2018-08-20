<template>
  <div @click="this.handleClick" class="u-searchBar">
    <input type="text" 
           class="u-input" 
           placeholder="姓名、职业、专业、作品等" 
           v-model="inputValue" 
           :readonly="readonly"
           @click="this.handleClickInput"/>
    <a href="javascript:;" class="u-btn" @click="this.handleSearch">搜索</a>
  </div>
</template>
<script>
export default {
  data: () => ({
    inputValue: ''
  }),
  created() {
    this.inputValue = this.defaultValue
  },
  methods: {
    handleClick() {
      this.onClick()
    },
    handleSearch() {
      if (!this.readonly) {
        this.onSearch(this.inputValue)
      }
    },
    handleClickInput(e) {
      if (this.readonly) {
        e.preventDefault()
      }
    }
  },
  props: {
    defaultValue: {
      type: String
    },
    onClick: {
      type: Function,
      default: () => {
      }
    },
    onSearch: {
      type: Function,
      default: () => {}
    },
    readonly: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
.u-searchBar {
  position: relative;
  width: 6rem;
  margin: auto;
  [readonly="readonly"] {
      pointer-events: none;
    }
  .u-input {
    width: 6rem;
    height: .5rem;
    line-height: .5rem;
    padding-left: .2rem;
    box-sizing: border-box;
    border-radius: 0;
    font-size: .2rem;
  }
  .u-btn {
    position: absolute;
    right: 0;
    top: 0;
    width: 1rem;
    height: .5rem;
    line-height: .5rem;
    text-align: center;
    background-color: #a8c6da;
    color: white;
    font-size: .2rem;
  }
}
</style>