<template>
  <div>
    <el-form :model="typeFormData"
             ref='typeCForm'
             :rules="rules"
             :label-position="$store.getters.isMobile?'top':'right'">
  
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('business.typeManag.typeIcon')"
                      label-width="150px"
                      prop="'typeIcon'">
          <!--<el-input v-model="typeFormData.binfoIcon" auto-complete="off" :disabled="disabled"/>-->
  
          <input type="file"
                 accept="image/png, image/jpeg, image/bmp, image/gif"
                 id="typefile"
                 @change='getFile'
                 style="display:none">
  
          <ul class="el-upload-list el-upload-list--picture-card">
            <li class="el-upload-list__item  ">
              <img :src="base64Img||typeFormData.typeIcon"
                   alt=""
                   class="el-upload-list__item-thumbnail">
  
              <span class="el-upload-list__item-actions"
                    v-show='!disabled'>
                   <span class="el-upload-list__item-delete">
                        <i class="el-icon-delete2" v-show='base64Img||typeFormData.typeIcon' @click="deleteImg" style="font-size:40px"/> 
                        <i class="el-icon-plus" v-show='!base64Img&&!typeFormData.typeIcon' @click="addImg" style="font-size:40px" /> 
                     </span>
              </span>
            </li>
          </ul>
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.zhName')"
                      label-width="150px"
                      prop="typeZhCnName">
          <el-input v-model="typeFormData.typeZhCnName"
                    auto-complete="off"
                    :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.jaName')"
                      label-width="150px"
                      prop="typeJaJpName">
          <el-input v-model="typeFormData.typeJaJpName"
                    auto-complete="off"
                    :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.koName')"
                      label-width="150px"
                      prop="typeKoKrName">
          <el-input v-model="typeFormData.typeKoKrName"
                    auto-complete="off"
                    :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.enName')"
                      label-width="150px"
                      prop="typeEnUsName">
          <el-input v-model="typeFormData.typeEnUsName"
                    auto-complete="off"
                    :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('business.shopManag.ruleId')"
                      label-width="150px"
                      prop="ruleId">
          <el-select style="width: 100%;" v-model="typeFormData.ruleId"
                     :placeholder="$t('commom.select')">
            <el-option v-for="item in ruleData"
                       :label="item.ruleTitle"
                       :value="item.ruleId"
                       :disabled="disabled"
                       :key="item.ruleId">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('business.typeManag.typeCode')"
                      label-width="150px"
                      prop="typeCode">
          <!--<el-input v-model="typeFormData.typeCode"
                    auto-complete="off"
                    :disabled="disabled" />-->

               <el-select style="width: 100%;" v-model="typeFormData.typeCode"
                     :placeholder="$t('commom.select')">
            <el-option v-for="item in codeList"
                       :label="item.name"
                       :value="item.dictCode"
                       :disabled="disabled"
                       :key="item.dictId">
            </el-option>
          </el-select>      
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('business.typeManag.buyFlag')"
                      label-width="150px"
                      prop="buyFlag">
          <el-radio class="radio"
                    v-model="typeFormData.buyFlag"
                    :label="true"
                    :disabled="disabled">{{$t('commom.yes')}}</el-radio>
          <el-radio class="radio"
                    v-model="typeFormData.buyFlag"
                    :label="false"
                    :disabled="disabled">{{$t('commom.no')}}</el-radio>
        </el-form-item>
      </el-col>
  
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.creator')"
                      label-width="150px"
                      v-show="disabled">
          <el-input v-model="typeFormData.creator"
                    auto-complete="off"
                    :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.modifyor')"
                      label-width="150px"
                      v-show="disabled">
          <el-input v-model="typeFormData.modifyor"
                    auto-complete="off"
                    :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.createTime')"
                      label-width="150px"
                      v-show="disabled">
          <el-input v-model="typeFormData.createTime"
                    auto-complete="off"
                    :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.modifyTime')"
                      label-width="150px"
                      v-show="disabled">
          <el-input v-model="typeFormData.modifyTime"
                    auto-complete="off"
                    :disabled="disabled" />
        </el-form-item>
      </el-col>
  
    </el-form>
  </div>
</template>
<script>
 
import {
  syspointList,
  sysdictionariesGetbytype
} from 'api/api';
export default {
  props: {
    typeFormData: {
      type: Object,
      default() {
        return {}
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      base64Img: '',
      ruleData: [],
      codeList:[],
      rules: {
        typeZhCnName: [
          { required: true, message: this.$t('business.validate.binfoZhCnName'), trigger: 'blur' }
        ],
        typeKoKrName: [
          { required: true, message: this.$t('business.validate.binfoKoKrName'), trigger: 'blur' }
        ],
        typeEnUsName: [
          { required: true, message: this.$t('business.validate.binfoEnUsName'), trigger: 'blur' }
        ],
        typeJaJpName: [
          { required: true, message: this.$t('business.validate.binfoJaJpName'), trigger: 'blur' }
        ],
        ruleId: [
          { required: true, type: 'number', message: this.$t('business.validate.ruleId'), trigger: 'change' }
        ],
        typeCode:[
          { required: true,  message: this.$t('business.validate.typeCode'), trigger: 'change' }
        ],
        buyFlag: [
          { required: true, type: 'boolean', message: this.$t('business.validate.buyFlag'), trigger: 'blur' }
        ],
      }
    }
  },
  created() {
      syspointList().then(res => {
        this.ruleData = res.data.obj
      })
    sysdictionariesGetbytype({dictType:'busiTypeCode'}).then(res=>{
        this.codeList=res.data.obj
    })
  },
  methods: {
    deleteImg() {
      this.typeFormData.typeIcon = '';
      this.base64Img = '';
      document.getElementById('typefile').value = ''
    },
    addImg() {
      document.getElementById('typefile').click()
    },
    validate(fn) {
      this.$refs.typeCForm.validate(fn);
    },
    getFile(e) {
      let file = e.target.files[0]
      if (file) {
        this.typeFormData.typeIcon = file
        let reader = new FileReader();
        reader.onload = () => {
          this.base64Img = reader.result //这个就是base64的数据了
        }
        reader.readAsDataURL(file);
      }
    }
  },
  watch: {
    typeFormData(v) {
      this.base64Img = ''
      this.$nextTick(() => {
        document.getElementById('typefile').value = ''
      })
      this.$refs.typeCForm.resetFields();
    }
  }
}
</script>
<style lang="less">

</style>