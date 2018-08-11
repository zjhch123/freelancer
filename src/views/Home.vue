<template>
  <div class="g-home">
    <div class="m-banner">
      <Banner 
        :width="7.5"
        :height="5.28"
        :imagePath="require('../assets/home-banner.png')">
        <div class="m-logo">
          <p class="u-tlt">FREELANCER</p>
          <p class="u-sub">-中传电影创作人平台-</p>
        </div>
        <div class="u-search">
          <SearchBar 
            :readonly="true"
            :onClick="this.searchBarClick" />
        </div>
      </Banner>
    </div>
    <main class="m-list">
      <SubTitle>优秀推荐</SubTitle>
      <div class="u-person" v-for="(tempPerson, index) in tempPersons" :key="index">
        <SimpleInfo 
          :person="tempPerson"/>
      </div>
    </main>
    <div class="m-banner">
      <Banner 
        :width="7.5"
        :height="4.38"
        :imagePath="require('../assets/home-banner2.png')" />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import SearchBar from '@/components/SearchBar.vue'
import SimpleInfo from '@/components/SimpleInfo.vue'
import SubTitle from '@/components/SubTitle.vue'
export default {
  name: 'home',
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
    Banner, SearchBar, SimpleInfo, SubTitle
  },
  methods: {
    searchBarClick() {
      this.$router.push({ name: 'search' })
    },
  }
}
</script>
<style lang="scss" scoped>
.g-home {
  position: relative;
  .m-banner {
    position: relative;
    .m-logo {
      color: white;
      text-align: left;
      margin-top: 1.5rem;
      margin-left: .8rem;
      .u-tlt {
        font-size: .62rem;
        display: table;
      }
      .u-sub {
        display: table;
        font-size: .2rem;
      }
    }
    .u-search {
      margin-top: 1.54rem;
    }
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

