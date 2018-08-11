<template>
  <div class="g-search">
    <div class="m-searchBar">
      <SearchBar />
    </div>
    <main class="m-list">
      <SubTitle>中传电影创作人平台</SubTitle>
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
import SubTitle from '@/components/SubTitle.vue'
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
    SearchBar, SimpleInfo, SubTitle
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
    .u-person {
      border-bottom: 1px solid #c8c8c8;
    }
  }
}
</style>
