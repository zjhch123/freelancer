<template>
  <div class="g-user">
    <Banner
      :imagePath="require('../assets/demo_person2.png')"
      :width="7.5"
      :height="5.32">
      <div class="m-user">
        <UserHeader :src="person.header" :width="1.6"/>
        <div class="u-info">
          <p class="name f-text-overflow">{{person.name}}</p>
          <p class="job f-text-overflow" v-if="hasJob">
            {{person.jobs.join(' ')}}
          </p>
          <p class="desc f-text-overflow" v-if="hasDesc">
            {{person.desc}}
          </p>
          <p class="sample f-text-overflow" v-if="hasSample">
            代表作: {{person.samples.join(' ')}}
          </p>
        </div>
      </div>
    </Banner>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import Banner from '@/components/Banner'
import UserHeader from '@/components/UserHeader'
export default {
  data() {
    return {
      person: {
        header: require('../assets/demo_person.png'),
        name: '小助手',
        jobs: ['导演', '编剧'],
        desc: '中传2014级导演系（剪辑方向）',
        samples: ['《寻龙诀》', '《封神》']
      }
    }
  },
  computed: {
    hasJob() {
      return this.person.jobs !== null && this.person.jobs.length !== 0
    },
    hasDesc() {
      return this.person.desc !== null && this.person.desc.trim() !== ''
    },
    hasSample() {
      return this.person.samples !== null && this.person.samples.length !== 0
    }
  },
  components: {
    Banner, UserHeader
  }
}
</script>
<style lang="scss" scoped>
.m-user {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  .name {
    font-size: .2rem;
    font-weight: bolder;
    line-height: 3;
  }
  .job, .desc, .sample {
    font-size: .2rem;
    margin: .04rem 0;
    font-weight: bold;
  }
  .f-text-overflow {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}
</style>
