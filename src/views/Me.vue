<template>
  <div class="g-me">
    <div class="m-login" v-if="!noLogin">
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
      <main>
        <router-view></router-view>
      </main>
    </div>
    <div class="m-nologin" v-if="noLogin">
      <NoLogin></NoLogin>
    </div>
  </div>
</template>
<script>
import UserBanner from '@/components/UserBanner'
import UserHeader from '@/components/UserHeader'
import NoLogin from '@/components/NoLogin'
import { getMyInfo } from '../api'
export default {
  data() {
    return {
      noLogin: false,
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
        productions: []
      },
      listenerFunc: null
    }
  },
  async mounted() {
    this.listenerFunc = () => this.EventEmit.emit('me_launched', {...this.person, detail: {...this.detail}})
    this.EventEmit.on('need_me_data', this.listenerFunc)
    const result = await getMyInfo()
    if (result.code === 200) {
      if(result.content === null) {
        return
      }
      const person = result.content
      this.person = {
        ...person,
        desc: `${person.school} ${person.grade} ${person.major}`
      }
      this.detail = person.detail
      this.listenerFunc()
    } else {
      switch (result.code) {
        case 401:
          this.noLogin = true
          break
        default:
          // TODO
      }
    }
  },
  beforeDestroy() {
    this.EventEmit.removeListener('need_me_data', this.listenerFunc)
  },
  computed: {
    hasJob() {
      return this.person.jobs !== null && this.person.jobs.length !== 0
    },
    hasDesc() {
      return this.person.desc !== null && this.person.desc.trim() !== ''
    },
    hasSample() {
      return this.person.productions !== null && this.person.productions.length !== 0
    }
  },
  components: {
    UserBanner, UserHeader, NoLogin
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
.m-nologin {
  margin-top: 2rem;
}
</style>
