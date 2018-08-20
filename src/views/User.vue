<template>
  <div class="g-user">
    <UserBanner
      :imagePath="person.header">
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
            代表作: {{person.productions.join(' ')}}
          </p>
        </div>
      </div>
    </UserBanner>
    <router-view></router-view>
  </div>
</template>
<script>
import UserBanner from '@/components/UserBanner'
import UserHeader from '@/components/UserHeader'
import { getUserDetail } from '../api/index.js'
export default {
  data() {
    return {
      id: '',
      detail: {
        city: '',
        job: '',
        production: ''
      },
      person: {
        header: null,
        name: '_',
        jobs: [],
        desc: '',
        productions: [],
        introduction: ''
      }
    }
  },
  async mounted() {
    window.scrollTo(0, 0)
    this.id = this.$route.params.id;
    const result = await getUserDetail(this.id);
    if (result.code === 200) {
      if (result.content === null) {
        // TODO handle error
        return
      }
      const person = result.content
      this.person = {
        ...person,
        desc: `${person.school} ${person.grade} ${person.major}`
      }
      this.detail = person.detail
      this.EventEmit.emit('user_launched', {...this.person, detail: {...this.detail}})
    } else {
      // TODO handle error
    }
  },
  methods: {
  },
  computed: {
    hasJob() {
      return !!this.person.jobs && this.person.jobs.length !== 0
    },
    hasDesc() {
      return !!this.person.desc && this.person.desc.trim() !== ''
    },
    hasSample() {
      return !!this.person.productions && this.person.productions.length !== 0
    }
  },
  components: {
    UserBanner, UserHeader
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
    max-width: 7rem;
  }
  .f-text-overflow {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}
.u-back {
  position: absolute;
  top: .2rem;
  left: .2rem;
  font-size: .3rem;
  color: white;
  z-index: 60;
}
</style>
