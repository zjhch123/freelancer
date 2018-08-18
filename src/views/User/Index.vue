<template>
  <div class="g-userIndex">
    <SubTitle>&nbsp;</SubTitle>
    <main>
      <div class="m-info">
        <SimpleRow name="常住城市：">{{detail.city}}</SimpleRow>
        <SimpleRow name="院校毕业：">{{person.school}} {{person.grade }} {{person.major}}</SimpleRow>
        <SimpleRow name="主要职业：">{{person.jobs.join(' ')}}</SimpleRow>
        <SimpleRow name="从事职业：">{{detail.job}}</SimpleRow>
      </div>
      <div class="m-info">
        <SimpleRow name="代表作品：">{{person.productions.join(' ')}}</SimpleRow>
        <SimpleRow name="主要作品：">{{detail.production}}</SimpleRow>
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
        productions: []
      }
    }
  },
  components: {
    SimpleRow, SubTitle
  },
  mounted() {
    this.EventEmit.on('user_launched', (person) => {
      this.detail = person.detail
      this.person = person
    })
  },
}
</script>
<style lang="scss" scoped>
.m-info {
  margin: auto;
  padding: .45rem .5rem;
  border-bottom: 1px solid #c8c8c8;
}
</style>
