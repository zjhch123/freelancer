<template>
  <div class="g-home">
    <NewUserFlag v-if="userType === 1"/>
    <div class="m-banner">
      <Banner 
        :width="7.5"
        :height="5.28"
        :imagePath="require('../assets/home-banner.jpg')">
        <div class="m-logo">
          <p class="u-tlt">FREELANCER</p>
          <p class="u-sub">-中传电影创作人平台-</p>
        </div>
        <div class="u-search">
            <SearchBar 
              :onSearch="this.search" />
        </div>
      </Banner>
    </div>
    <main class="m-list">
      <SubTitle>优秀推荐</SubTitle>
      <div class="u-person" v-for="(person) in persons" :key="person.id">
        <BlockRouter :to="`/user/${person.id}`">
          <SimpleInfo 
            :person="person"/>
        </BlockRouter>
      </div>
    </main>
    <div class="m-banner">
      <Banner 
        :width="7.5"
        :height="4.38"
        :imagePath="require('../assets/home-banner2.png')">
        <div class="m-status">
          <div class="u-status">
            <p class="tlt">电影创作人</p>
            <p class="num">{{this.content}}</p>
          </div>
        </div>
      </Banner>
    </div>
  </div>
</template>
<script>
import Banner from '@/components/Banner.vue'
import SearchBar from '@/components/SearchBar.vue'
import SimpleInfo from '@/components/SimpleInfo.vue'
import NewUserFlag from '@/components/NewUserFlag.vue'
import SubTitle from '@/components/SubTitle.vue'
import BlockRouter from '@/components/BlockRouter.vue'
import { getHotUser, getUserCount, getUserType } from '../api/'
import Cookie from 'js-cookie'
export default {
  name: 'home',
  mounted() {
    window.setNormalShare()
    this.initHotUser()
    this.initCount()
    this.initUserType()
  },
  data() {
    return {
      persons: [],
      content: 0,
      userType: 0,
    }
  },
  created() {
    const openId = this.$router.history.current.query.openId
    window.openId = openId
    if (openId !== undefined) {
      Cookie.set('user_id', openId)
      setTimeout(() => {
        this.$router.push({
          name: 'home',
          query: ''
        })
      }, 0)
    }
  },
  components: {
    Banner, SearchBar, SimpleInfo, SubTitle, BlockRouter, NewUserFlag
  },
  methods: {
    async initHotUser() {
      const result = await getHotUser(3)
      if (result.code === 200) {
        const formatted = result.content.list.map(item => ({
          ...item,
          desc: `${item.school} ${item.grade} ${item.major}`
        }))
        this.persons = formatted
      } else {
        // TODO error handler
      }
    },
    async initCount() {
      const result = await getUserCount()
      if (result.code === 200) {
        this.content = result.content
      } else {
        // TODO error handler
      }
    },
    async initUserType() {
      const result = await getUserType()
      if (result.code === 200) {
        this.userType = result.content
      } else if (result.code === 401) {
        this.userType = 1
      }
    },
    search(val) {
      this.$router.push({ name: 'search', query: { q: val } })
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
    .u-user-link {
      display: block;
    }
    .u-person {
      border-bottom: 1px solid #c8c8c8;
    }
  }
  .m-status {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.6);
    .u-status {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 3rem;
      height: 3rem;
      display: block;
      border-radius: 50%;
      border: .07rem solid rgba(255, 255, 255, .17);
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      &:before {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        border-radius: 50%;
        border: .26rem solid rgba(255, 255, 255, .05);
        content: '';
      }
      .tlt { 
        font-size: .2rem;
        font-weight: bolder;
      }
      .num {
        font-size: .66rem;
        font-weight: bolder;
      }
    }
  }
}
</style>

