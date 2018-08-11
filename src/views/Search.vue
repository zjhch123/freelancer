<template>
  <div class="g-search">
    <div class="m-searchBar">
      <SearchBar />
    </div>
    <main class="m-list">
      <p class="u-list-tlt">优秀推荐</p>
      <div class="u-person" v-for="(tempPerson, index) in tempPersons" :key="index">
        <SimpleInfo 
          :person="tempPerson"/>
      </div>
    </main>
  </div>
</template>
<script>
import SearchBar from '@/components/SearchBar'
import SimpleInfo from '@/components/SimpleInfo.vue'
export default {
  data() {
    return {
      tempPersons: [{
        header: require('../assets/demo_person.png'),
        name: '小助手',
        jobs: ['导演', '编剧'],
        desc: '中传2014级导演系（剪辑方向）',
        samples: ['《寻龙诀》', '《封神》']
      },{
        header: require('../assets/demo_person.png'),
        name: '小助手',
        jobs: ['导演', '编剧'],
        desc: '中传2014级导演系（剪辑方向）',
        samples: ['《寻龙诀》', '《封神》']
      },{
        header: require('../assets/demo_person.png'),
        name: '小助手',
        jobs: ['导演', '编剧'],
        desc: '中传2014级导演系（剪辑方向）',
        samples: ['《寻龙诀》', '《封神》']
      },{
        header: require('../assets/demo_person.png'),
        name: '小助手',
        jobs: ['导演', '编剧'],
        desc: '中传2014级导演系（剪辑方向）',
        samples: ['《寻龙诀》', '《封神》']
      },{
        header: require('../assets/demo_person.png'),
        name: '小助手',
        jobs: ['导演', '编剧'],
        desc: '中传2014级导演系（剪辑方向）',
        samples: ['《寻龙诀》', '《封神》']
      }]
    }
  },
  components: {
    SearchBar, SimpleInfo
  }
}
</script>
<style lang="scss" scoped>
.g-search {
  .m-searchBar {
    background: #dedede;
    padding: .3rem .7rem;
  }
  .m-list {
    min-height: 4rem;
    .u-list-tlt {
      padding-left: .4rem;
      line-height: .7rem;
      text-align: left;
      font-size: .2rem;
      font-weight: bolder;
      border-bottom: 1px solid #c8c8c8;
    }
    .u-person {
      border-bottom: 1px solid #c8c8c8;
    }
  }
}
</style>
