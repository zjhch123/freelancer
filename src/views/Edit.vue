<template>
  <div class="g-edit">
    <main>
      <SimpleRow className="u-row" name="个人照片">
        <div class="flexable m-photo">
          <div class="header">
            <UserHeader 
              :src="person.header"
              :width="1.6"/>
          </div>
          <a href="javascript:;" class="upload-btn">上传</a>
        </div>
      </SimpleRow>
      <SimpleRow className="u-row" name="姓名">
        <div class="flexable">
          <input type="text" class="u-input"/>
        </div>
      </SimpleRow>
      <SimpleRow className="u-row" name="常驻城市">
        <div class="flexable">
          <input type="text" class="u-input"/>
        </div>
      </SimpleRow>
      <SimpleRow className="u-row" name="院校专业">
        <div class="flexable space">
          <input type="text" class="u-input u-input1of3" placeholder="学校"/>
          <input type="text" class="u-input u-input1of3" placeholder="年级"/>
          <input type="text" class="u-input u-input1of3" placeholder="专业"/>
        </div>
      </SimpleRow>
      <SimpleRow className="u-row" name="个人介绍">
        <div class="flexable">
          <textarea contenteditable="true" class="u-input"></textarea>
        </div>
      </SimpleRow>
      <SimpleRow className="u-row" name="主要职业">
        <div class="flexable space">
          <input type="text" class="u-input u-input1of3"/>
          <input type="text" class="u-input u-input1of3"/>
          <input type="text" class="u-input u-input1of3"/>
        </div>
      </SimpleRow>
      <SimpleRow className="u-row" name="从事职业">
        <div class="flexable">
          <input type="text" class="u-input"/>
        </div>
      </SimpleRow>
      <SimpleRow className="u-row" name="代表作品">
        <div class="flexable space">
          <input type="text" class="u-input u-input1of3"/>
          <input type="text" class="u-input u-input1of3"/>
          <input type="text" class="u-input u-input1of3"/>
        </div>
      </SimpleRow>
      <SimpleRow className="u-row" name="主要作品">
        <div class="flexable">
          <textarea class="u-input"></textarea>
        </div>
      </SimpleRow>
      <div class="u-save">
        <a href="javascript:;" class="save-btn">保存</a>
      </div>
    </main>
  </div>
</template>
<script>
import SimpleRow from '@/components/SimpleRow'
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
  components: {
    SimpleRow, UserHeader
  }
}
</script>
<style lang="scss" scoped>
.g-edit {
  padding-top: .65rem;
  margin: auto;
  padding-bottom: 1rem;
}
.flexable {
  display: flex;
  padding-left: .4rem;
  padding-right: .5rem;
  &.space {
    justify-content: space-between;
  }
}
.u-row {
  margin: .4rem 0;
}
.m-photo {
  align-items: center;
  .upload-btn {
    margin-left: .8rem;
    width: 1rem;
    height: .5rem;
    line-height: .5rem;
    display: block;
    text-align: center;
    color: white;
    background-color: #a8c6da;
    font-size: .2rem;
  }
}
.u-input {
  flex: 1;
  border: 1px solid #b5b5b5;
  border-radius: 0;
  padding-left: .08rem;
  height: .4rem;
  line-height: .4rem;
  appearance: none;
  &.u-input1of3 {
    width: 28%;
    flex: none;
  }
}
textarea[class="u-input"] {
  height: 1rem;
  line-height: 1.4;
  resize: none;
}
.save-btn {
  width: 1rem;
  height: .5rem;
  line-height: .5rem;
  margin: auto;
  display: block;
  text-align: center;
  color: white;
  background-color: #a8c6da;
  font-size: .2rem;
}
</style>
