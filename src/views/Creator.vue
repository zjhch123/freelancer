<template>
  <div class="g-search">
    <div class="m-searchBar">
      <SearchBar 
        defaultValue=""
        :onSearch="this.onSearch"/>
    </div>
    <main class="m-list">
      <SubTitle>中传电影创作人平台</SubTitle>
      <div class="u-person" v-for="person in persons" :key="person.id">
        <BlockRouter :to="`/user/${person.id}`">
          <SimpleInfo 
            :person="person"/>
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
import { getRecommendUser } from '../api'
import _ from 'lodash'
export default {
  data() {
    return {
      inputValue: '',
      persons: [],
      totalPage: 1,
      page: 1,
      listenerFunc: 0,
    }
  },
  async mounted() {
    this.listenerFunc = _.debounce(this.fetchNextPage, 200)
    window.addEventListener('scroll', this.listenerFunc) // 滚到底部的懒加载

    await this.getData(this.page)
  },
  components: {
    SearchBar, SimpleInfo, SubTitle, BlockRouter
  },
  methods: {
    async onSearch(val) {
      this.persons = []
      this.totalPage = 1
      this.page = 1
      this.inputValue = val
      this.$router.replace({
        name: 'search',
        query: {
          type: 'query',
          q: this.inputValue
        }
      })
    },
    fetchNextPage() {
      const totalHeight = document.documentElement.offsetHeight
      const scrollHeight = window.scrollY
      const windowHeight = window.innerHeight

      if (windowHeight + scrollHeight > 0.8 * totalHeight) {
        this.getNextPageData()
      }
    },
    async getData(page, count = this.count, callback = () => {}) {
      let result = null
      this.page = page
      result = await getRecommendUser(page, count)
      if (result.code === 200) {
        const {
          totalPage,
          list
        } = result.content
        list.map(item => ({...item, desc: `${item.school} ${item.grade} ${item.major}`}))
            .forEach(item => this.persons.push(item))
        this.totalPage = totalPage
        callback()
      } else {
        // TODO error handle
      }
    },
    getNextPageData() {
      if (this.page === this.totalPage) return
      this.getData(this.page + 1)
    },
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
