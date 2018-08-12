<template>
  <div class="g-userIndex">
    <SubTitle>&nbsp;</SubTitle>
    <main>
      <div class="m-info">
        <SimpleRow name="常住城市：">北京 上海</SimpleRow>
        <SimpleRow name="院校毕业：">中传2014级导演系（剪辑方向）</SimpleRow>
        <SimpleRow name="主要职业：">导演 编剧</SimpleRow>
        <SimpleRow name="从事职业：">导演 编剧 剪辑师 演员 策划 设计师</SimpleRow>
      </div>
      <div class="m-info">
        <SimpleRow name="代表作品：">《寻龙诀》 《封神》</SimpleRow>
        <SimpleRow name="主要作品：">2014年《寻龙诀》导演<br>2020年《封神》导演</SimpleRow>
      </div>
    </main>
  </div>
</template>
<script>
import SubTitle from '@/components/SubTitle'
import SimpleRow from '@/components/SimpleRow'
export default {
  data() {
    return {
      person: {
        header: require('../../assets/demo_person.png'),
        name: '小助手',
        jobs: ['导演', '编剧'],
        desc: '中传2014级导演系（剪辑方向）',
        samples: ['《寻龙诀》', '《封神》']
      }
    }
  },
  components: {
    SimpleRow, SubTitle
  }
}
</script>
<style lang="scss" scoped>
.m-info {
  margin: auto;
  padding: .45rem .5rem;
  border-bottom: 1px solid #c8c8c8;
}
</style>
