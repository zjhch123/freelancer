<template>
  <div class="g-profile">
    <SubTitle>&nbsp;</SubTitle>
    <main>
      <div class="m-info">
        <SimpleRow name="个人介绍：">{{person.introduction}}</SimpleRow>
        <SimpleRow name="常住城市：">{{detail.city}}</SimpleRow>
        <SimpleRow name="院校专业：">{{person.school}} {{person.grade}} {{person.major}}</SimpleRow>
        <SimpleRow name="主要职业：">{{(person.jobs || []).join(' ')}}</SimpleRow>
        <SimpleRow name="从事职业：">{{detail.job}}</SimpleRow>
      </div>
      <div class="m-info">
        <SimpleRow name="代表作品：">{{(person.productions || []).join(' ')}}</SimpleRow>
        <SimpleRow name="主要作品：">
          <span v-for="(p, i) in (detail.production || '').split('\n')" :key="i">
            {{p}}<br/>
          </span>
        </SimpleRow>
      </div>
    </main>
  </div>
</template>
<script>
import SubTitle from '@/components/SubTitle'
import SimpleRow from '@/components/SimpleRow'
export default {
  data() {
    return {
      detail: {
        city: '',
        job: '',
        production: ''
      },
      person: {
        header: '',
        name: '',
        jobs: [],
        desc: '',
        productions: [],
        introduction: ''
      },
      listenerFunc: null
    }
  },
  components: {
    SimpleRow, SubTitle
  },
  mounted() {
    window.scrollTo(0, 0)
    this.listenerFunc = (person) => {
      this.detail = person.detail
      this.person = person
    }
    this.EventEmit.on('me_launched', this.listenerFunc)
    this.EventEmit.emit('need_me_data')
  },
  beforeDestroy() {
    this.EventEmit.removeListener('me_launched', this.listenerFunc)
  }
}
</script>
<style lang="scss" scoped>
.m-info {
  margin: auto;
  padding: .45rem .5rem;
  border-bottom: 1px solid #c8c8c8;
}
</style>
