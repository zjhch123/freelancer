<template>
  <div class="g-home">
    <Banner 
      :width="7.5"
      :height="5.28"
      :imagePath="require('../assets/home-banner.png')">
      <div class="m-logo">
        <p class="u-tlt">FREELANCER</p>
        <p class="u-sub">-中传电影创作人平台-</p>
      </div>
      <!-- <SearchBar /> -->
    </Banner>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import SearchBar from '@/components/SearchBar.vue'
export default {
  name: 'home',
  components: {
    Banner, SearchBar
  }
}
</script>
<style lang="scss" scoped>
.g-home {
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
}
</style>

