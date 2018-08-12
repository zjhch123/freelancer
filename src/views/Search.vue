<template>
  <div class="g-search">
    <div class="m-searchBar">
      <SearchBar :defaultValue="this.inputValue"/>
    </div>
    <main class="m-list">
      <SubTitle>中传电影创作人平台</SubTitle>
      <div class="u-person" v-for="(tempPerson, index) in tempPersons" :key="index">
        <BlockRouter :to="`/user/${tempPerson.id}`">
          <SimpleInfo 
            :person="tempPerson"/>
        </BlockRouter>
      </div>
    </main>
  </div>
</template>
<script>
import SearchBar from '@/components/SearchBar'
import SimpleInfo from '@/components/SimpleInfo.vue'
import SubTitle from '@/components/SubTitle.vue'
import BlockRouter from '@/components/BlockRouter.vue'
export default {
  data() {
    return {
      inputValue: '',
      tempPersons: [{
        id: 123,
        header: require('../assets/demo_person.png'),
        name: '小助手',
        jobs: ['导演', '编剧'],
        desc: '中传2014级导演系（剪辑方向）',
        samples: ['《寻龙诀》', '《封神》']
      },{
        id: 123,
        header: require('../assets/demo_person.png'),
        name: '小助手',
        jobs: ['导演', '编剧'],
        desc: '中传2014级导演系（剪辑方向）',
        samples: ['《寻龙诀》', '《封神》']
      },{
        id: 123,
        header: require('../assets/demo_person.png'),
        name: '小助手',
        jobs: ['导演', '编剧'],
        desc: '中传2014级导演系（剪辑方向）',
        samples: ['《寻龙诀》', '《封神》']
      },{
        id: 123,
        header: require('../assets/demo_person.png'),
        name: '小助手',
        jobs: ['导演', '编剧'],
        desc: '中传2014级导演系（剪辑方向）',
        samples: ['《寻龙诀》', '《封神》']
      },{
        id: 123,
        header: require('../assets/demo_person.png'),
        name: '小助手',
        jobs: ['导演', '编剧'],
        desc: '中传2014级导演系（剪辑方向）',
        samples: ['《寻龙诀》', '《封神》']
      }]
    }
  },
  created() {
    this.inputValue = this.$route.query.q || ''
  },
  components: {
    SearchBar, SimpleInfo, SubTitle, BlockRouter
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
