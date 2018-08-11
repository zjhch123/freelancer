<template>
  <div class="g-me">
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
      <p class="u-title">&nbsp;</p>
      <div>
        <router-link class="link-item" to="/me/index">我的主页</router-link>
      </div>
      <div>
        <router-link class="link-item" to="/me/edit">主页编辑</router-link>
      </div>
      <div>
        <router-link class="link-item" to="/me/message">我的消息</router-link>
      </div>
      <div>
        <router-link class="link-item" to="/me/settings">通用设置</router-link>
      </div>
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
.u-title {
  line-height: .6rem;
  height: .6rem;
  border-bottom: 1px solid #c8c8c8;
}
.link-item {
  line-height: 1.47rem;
  height: 1.47rem;
  display: block;
  text-align: center;
  font-size: .24rem;
  color: #7b7b7b;
  border-bottom: 1px solid #c8c8c8;
}
</style>
