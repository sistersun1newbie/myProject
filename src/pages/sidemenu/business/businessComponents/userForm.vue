<template>
  <div>
    <el-form :model="userForm"
             ref='userCForm'
             :rules="rules"
             :label-position="$store.getters.isMobile?'top':'right'">
  
      <el-col :span="$store.getters.isMobile?24:11">
  
        <el-form-item :label="$t('business.userManag.shopUserIcon')"
                      label-width="150px"
                      prop="'icon'">
          <!--<el-input v-model="userForm.binfoIcon" auto-complete="off" :disabled="disabled"/>-->
  
          <!--<input type="file"  accept="image/png,image/gif,image/jpg" id="userIconfile" @change='getFile' style="display:none">-->
  
          <ul class="el-upload-list el-upload-list--picture-card">
            <li class="el-upload-list__item  ">
              <img :src="base64Img||userForm.shopUserIcon"
                   alt=""
                   class="el-upload-list__item-thumbnail">
              <span class="el-upload-list__item-actions"
                    v-show='!disabled'>
                   <span class="el-upload-list__item-delete">
                    <input type="file"  accept="image/png, image/jpeg, image/bmp, image/gif" id="userIconfile" @change='getFile'
                     style="display:none">
                     
                        <i class="el-icon-delete2" v-show='base64Img||userForm.shopUserIcon' @click="deleteImg" style="font-size:40px"/> 
                        <i class="el-icon-plus" v-show='!base64Img&&!userForm.shopUserIcon' @click="addImg" style="font-size:40px" /> 
                     </span>
              </span>
            </li>
          </ul>
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('business.userManag.shopUserName')"
                      label-width="150px"
                      prop="shopUserName">
          <el-input v-model="userForm.shopUserName"
                    auto-complete="off"
                    :disabled="disabled || userNameDisabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('business.userManag.shopUserPwd')"
                      label-width="150px"
                      prop="shopUserPwd">
          <el-input v-model="userForm.shopUserPwd"
                    type="password"
                    auto-complete="off"
                    :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('business.userManag.shopRealName')"
                      label-width="150px"
                      prop="shopRealName">
          <el-input v-model="userForm.shopRealName"
                    auto-complete="off"
                    :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('business.userManag.shopUserTel')"
                      label-width="150px"
                      prop="shopUserTel">
          <el-input v-model="userForm.shopUserTel"
                    auto-complete="off"
                    :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('business.userManag.shopUserRoleId')"
                      label-width="150px"
                      prop="shopUserRoleId">
          <!--<el-input v-model="userForm.shopUserRoleId" auto-complete="off" :disabled="disabled" />-->
          <el-select style="width: 100%;" v-model.number="userForm.shopUserRoleId"
                    :disabled="disabled"
                     :placeholder="$t('business.validate.shopUserRoleId')">
            <el-option v-for="(item,index) in RoleList"
                       :label="item.roleName"
                       :key='item.roleId'
                       :value="item.roleId">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('business.userManag.shopUserEmail')"
                      label-width="150px"
                      prop="shopUserEmail">
          <el-input v-model="userForm.shopUserEmail"
                    auto-complete="off"
                    :disabled="disabled" />
        </el-form-item>
      </el-col>
  
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.creator')"
                      label-width="150px"
                      v-show="disabled">
          <el-input v-model="userForm.creator"
                    auto-complete="off"
                    :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.modifyor')"
                      label-width="150px"
                      v-show="disabled">
          <el-input v-model="userForm.modifyor"
                    auto-complete="off"
                    :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.createTime')"
                      label-width="150px"
                      v-show="disabled">
          <el-input v-model="userForm.createTime"
                    auto-complete="off"
                    :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.modifyTime')"
                      label-width="150px"
                      v-show="disabled">
          <el-input v-model="userForm.modifyTime"
                    auto-complete="off"
                    :disabled="disabled" />
        </el-form-item>
      </el-col>
  
    </el-form>
  </div>
</template>
<script>
	import {
		sysRoleGetAll
	} from 'api/api';
export default {
  props: {
    userForm: {
      type: Object,
      default() {
        return {}
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    userNameDisabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      base64Img: '',
      RoleList: [],
      rules: {
        shopUserName: [
          { required: true, message: this.$t('business.validate.shopUserName'), trigger: 'blur' }
        ],
        shopUserPwd: [
          { required: true, message: this.$t('business.validate.shopUserPwd'), trigger: 'blur' }
        ],
        shopUserTel: [
          { required: true, message: this.$t('business.validate.shopUserTel'), trigger: 'blur' }
        ],
        shopRealName: [
          { required: true, message: this.$t('business.validate.shopRealName'), trigger: 'blur' }
        ],
        shopUserEmail: [
          { type: 'email', message: this.$t('business.validate.shopUserEmail'), trigger: 'blur' }
        ],
        shopUserRoleId:[
           { required: true,type:'number',message: this.$t('business.validate.shopUserRoleId'), trigger: 'change' }
        ]
      }
    }
  },
created() {
			sysRoleGetAll({roleType:1}).then(res => {
				this.RoleList = res.data.obj
			})
		},
  methods: {
    deleteImg() {
      this.userForm.shopUserIcon = '';
      this.base64Img = '';
      document.getElementById('userIconfile').value = ''
    },
    addImg() {
      document.getElementById('userIconfile').click()
    },
    validate(fn) {
      this.$refs.userCForm.validate(fn);
    },
    getFile(e) {
      let file = e.target.files[0]
      if (file) {
        this.userForm.shopUserIcon = file
        let reader = new FileReader();
        reader.onload = () => {
          this.base64Img = reader.result //这个就是base64的数据了
        }
        reader.readAsDataURL(file);
      }
    }
  },
  watch: {
    userForm(v) {
      this.base64Img = ''
      document.getElementById('userIconfile').value = ''
      this.$refs.userCForm.resetFields();
    }
  }
}
</script>
<style lang="less">

</style>