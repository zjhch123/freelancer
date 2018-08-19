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
          <div class="upload">
            <a href="javascript:;" class="upload-btn" @click="uploadComponent = true">上传</a>
          </div>
        </div>
      </SimpleRow>
      <SimpleRow className="u-row" name="姓名">
        <div class="flexable">
          <input type="text" class="u-input" v-model="person.name"/>
        </div>
      </SimpleRow>
      <SimpleRow className="u-row" name="常驻城市">
        <div class="flexable">
          <input type="text" class="u-input" v-model="detail.city"/>
        </div>
      </SimpleRow>
      <SimpleRow className="u-row" name="院校专业">
        <div class="flexable space">
          <input type="text" class="u-input u-input1of3" placeholder="学校" v-model="person.school"/>
          <input type="text" class="u-input u-input1of3" placeholder="年级" v-model="person.grade"/>
          <input type="text" class="u-input u-input1of3" placeholder="专业" v-model="person.major"/>
        </div>
      </SimpleRow>
      <SimpleRow className="u-row" name="个人介绍">
        <div class="flexable">
          <textarea contenteditable="true" class="u-input" v-model="person.introduction"></textarea>
        </div>
      </SimpleRow>
      <SimpleRow className="u-row" name="主要职业">
        <div class="flexable space">
          <input type="text" class="u-input u-input1of3" v-model="person.jobs[0]"/>
          <input type="text" class="u-input u-input1of3" v-model="person.jobs[1]"/>
          <input type="text" class="u-input u-input1of3" v-model="person.jobs[2]"/>
        </div>
      </SimpleRow>
      <SimpleRow className="u-row" name="从事职业">
        <div class="flexable">
          <input type="text" class="u-input" v-model="detail.job"/>
        </div>
      </SimpleRow>
      <SimpleRow className="u-row" name="代表作品">
        <div class="flexable space">
          <input type="text" class="u-input u-input1of3" v-model="person.productions[0]"/>
          <input type="text" class="u-input u-input1of3" v-model="person.productions[1]"/>
          <input type="text" class="u-input u-input1of3" v-model="person.productions[2]"/>
        </div>
      </SimpleRow>
      <SimpleRow className="u-row" name="主要作品">
        <div class="flexable">
          <textarea class="u-input" v-model="detail.production"></textarea>
        </div>
      </SimpleRow>
      <div class="u-save">
        <a href="javascript:;" class="save-btn" @click="submit">保存</a>
      </div>
    </main>
    <div class="u-upload-component" v-if="uploadComponent">
      <a href="javascript:;" @click="uploadComponent = false" class="close-modal">关闭</a>
      <div class="u-upload">
        <Croppa 
          :placeholder="'点击上传新头像'"
          :placeholder-font-size="16"
          :canvas-color="'white'"
          :show-remove-button="false"
          :prevent-white-space="true"
          v-model="imageOptions"></Croppa>
        <a href="javascript:;" class="btn cancel" @click="clearImage">重新选择</a>
        <a href="javascript:;" class="btn submit" @click="uploadImage">提交</a>
      </div>
    </div>
  </div>
</template>
<script>
import Croppa from 'vue-croppa'
import SimpleRow from '@/components/SimpleRow'
import UserHeader from '@/components/UserHeader'
import { getMyInfo, uploadImage, updateUserInfo } from '../api'
export default {
  data() {
    return {
      submitLoading: false,
      uploading: false,
      uploadComponent: false,
      noLogin: false,
      imageOptions: {},
      detail: {
        city: '',
        job: '',
        production: ''
      },
      person: {
        header: require('../assets/demo_person.png'),
        name: '电影人',
        jobs: [],
        majob: '',
        school: '',
        grade: '',
        productions: [],
        introduction: ''
      },
    }
  },
  methods: {
    clearImage() {
      this.imageOptions.remove()
    },
    uploadImage() {
      if (this.uploading) return
      this.imageOptions.generateBlob(
        async blob => {
          this.uploading = true
          try {
            const result = await uploadImage(blob);
            if (result.code === 200) {
              this.person.header = result.content
              this.uploadComponent = false
            }
          } catch(e) {
            console.log(e)
          }
          this.uploading = false
        },
        'image/jpeg',
        0.8
      );
    },
    async submit() {
      if (this.submitLoading) {
        return
      }
      this.submitLoading = true
      try {
        const result = await updateUserInfo({
          header: this.person.header,
          name: this.person.name,
          jobs: this.person.jobs,
          school: this.person.school,
          major: this.person.major,
          grade: this.person.grade,
          productions: this.person.productions,
          introduction: this.person.introduction,
          city: this.detail.city,
          job: this.detail.job,
          production: this.detail.production
        })
        if (result.code === 200) {
          this.notify('修改成功')
        } else {
          console.log(result)
          this.notify('修改失败, 请检查')  
        }
      } catch(e) {
        console.error(e)
        this.notify('修改失败, 请检查')
      }
      this.submitLoading = false
    }
  },
  async mounted() {
    const result = await getMyInfo()
    this.submitLoading = true
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

      this.person.jobs = this.person.jobs.filter(i => i.trim().length > 0).sort()
      this.person.productions = this.person.productions.filter(i => i.trim().length > 0).sort()
      this.submitLoading = false
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
  components: {
    SimpleRow, UserHeader, Croppa: Croppa.component
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
  .upload {
    margin-left: .8rem;
    position: relative;
    .upload-btn {
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
}
.u-input {
  flex: 1;
  border: 1px solid #b5b5b5;
  border-radius: 0;
  padding-left: .08rem;
  height: .4rem;
  line-height: .4rem;
  font-size: .2rem;
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
.u-upload-component {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.6);
  z-index: 100;
  .close-modal {
    color: white;
    font-size: .28rem;
    position: absolute;
    right: .2rem;
    top: .2rem;
  }
  .u-upload {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    .btn {
      width: 1.5rem;
      line-height: .5rem;
      height: .5rem;
      display: inline-block;
      font-size: .2rem;
      color: white;
      margin: .2rem .2rem;
      &.cancel {
        background-color: #a8c6da;
      }
      &.submit {
        background-color:red;
      }
    }
  }
}
</style>
