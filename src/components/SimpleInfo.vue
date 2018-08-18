<template>
  <div class="m-person">
    <div class="u-left">
      <UserHeader :src="person.header || require('../assets/demo_person.png')" :width="1.6"/>
    </div>
    <div class="u-right">
      <p class="name f-text-overflow">{{person.name || '匿名电影人'}}</p>
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
</template>
<script>
import UserHeader from '@/components/UserHeader'
export default {
  components: {
    UserHeader
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
  props: {
    person: Object
  }
}
</script>
<style lang="scss" scoped>
  .m-person {
    display: flex;
    align-items: center;
    padding: .3rem .7rem;
    .u-left {
      flex: 0 0 1.6rem;
    }
    .u-right {
      flex: 1 1 auto;
      text-align: left;
      padding-left: .4rem;
      box-sizing: border-box;
      max-width: 5rem;
      .name {
        font-size: .2rem;
        font-weight: bolder;
        line-height: 1.71;
        color: black;
      }
      .job, .desc, .sample {
        font-size: .2rem;
        color: #7b7b7b;
        max-width: 7rem;
      }
    }
  }
  .f-text-overflow {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
</style>
