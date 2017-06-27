<template>
  <div>
    <el-form :model="pageData"
             ref='giftListForm'
             :label-position="$store.getters.isMobile?'top':'right'">
  		<el-col :span="$store.getters.isMobile?24:11">
  
        <el-form-item :label="$t('business.giftList.head')"
                      label-width="150px"
                      prop="'icon'">
          <ul class="el-upload-list el-upload-list--picture-card">
            <li class="el-upload-list__item  ">
              <img :src="base64Img||pageData.appUsersInfo.avatar"
                   alt=""
                   class="el-upload-list__item-thumbnail">
              <span class="el-upload-list__item-actions"
                    v-show='!disabled'>
                   <span class="el-upload-list__item-delete">
                    <input type="file"  accept="image/png, image/jpeg, image/bmp, image/gif" id="userIconfile" @change='getFile'
                     style="display:none">
                     
                        <i class="el-icon-delete2" v-show='base64Img||pageData.appUsersInfo.avatar' @click="deleteImg" style="font-size:40px"/> 
                        <i class="el-icon-plus" v-show='!base64Img&&!pageData.appUsersInfo.avatar' @click="addImg" style="font-size:40px" /> 
                     </span>
              </span>
            </li>
          </ul>
        </el-form-item>
      </el-col>
      
       <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('business.giftList.name')"
                      label-width="150px"
                      prop="typeJaJpName">
          <el-input v-model="pageData.appUsersInfo.nikeName"
                    auto-complete="off"
                    :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('business.giftList.gamename')"
                      label-width="150px"
                      prop="typeZhCnName">
          <el-input v-model="pageData.game.gameName"
                    auto-complete="off"
                    :disabled="disabled" />
        </el-form-item>
      </el-col>
     
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('business.giftList.giftname')"
                      label-width="150px"
                      prop="typeKoKrName">
         <el-input v-model="pageData.gameGiftInfo.giftName"
                    auto-complete="off"
                    :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('business.giftList.gettime')"
                      label-width="150px"
                      prop="typeEnUsName">
          <el-input v-model="pageData.reciveTime"
                    auto-complete="off"
                    :disabled="disabled" />
        </el-form-item>
      </el-col>
  
    </el-form>
  </div>
</template>
<script>
 
//import {
//syspointList,
//sysdictionariesGetbytype
//} from 'api/api';
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
     pageData:{
      type: Object,
    },
  },
  data() {
    return {	base64Img: '',
    }
  },
  
  created() {
//    syspointList().then(res => {
//      this.ruleData = res.data.obj
//    })
//  sysdictionariesGetbytype({dictType:'busiTypeCode'}).then(res=>{
//      this.codeList=res.data.obj
//  })
  },
  methods: {
  	deleteImg() {
      this.pageData.shopUserIcon = '';
      this.base64Img = '';
      document.getElementById('userIconfile').value = ''
    },
    addImg() {
      document.getElementById('userIconfile').click()
    },
    getFile(e) {
      let file = e.target.files[0]
      if (file) {
        this.pageData.shopUserIcon = file
        let reader = new FileReader();
        reader.onload = () => {
          this.base64Img = reader.result //这个就是base64的数据了
        }
        reader.readAsDataURL(file);
      }
    }
  },
  watch: {
    pageData(v) {
      this.base64Img = ''
      document.getElementById('userIconfile').value = ''
//    this.$refs.userCForm.resetFields();
    }
  }
}
</script>
<style lang="less">

</style>