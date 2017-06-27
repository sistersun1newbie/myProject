<template>
  <div>
    <el-form :model="form" :rules="rules"  ref="sysRoleForm">
      <el-col :span="12">
        <el-form-item :label="$t('sysRole.zhCnName')" :label-width="formLabelWidth" prop="roleZhCnName">
          <el-input v-model="form.roleZhCnName" size="small" :disabled="disabled"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item :label="$t('sysRole.enUsName')" :label-width="formLabelWidth" prop="roleEnUsName">
          <el-input v-model="form.roleEnUsName" size="small" :disabled="disabled"></el-input>
        </el-form-item>
      </el-col>


      <el-col :span="12">
        <el-form-item :label="$t('sysRole.jaJpName')" :label-width="formLabelWidth" prop="roleJaJpName">
          <el-input size="small" v-model="form.roleJaJpName" :disabled="disabled"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item :label="$t('sysRole.koKrName')" :label-width="formLabelWidth" prop="roleKoKrName">
          <el-input size="small" v-model="form.roleKoKrName" :disabled="disabled"></el-input>
        </el-form-item>
      </el-col>


      <el-col :span="24" >
        <el-form-item  :label="$t('sysRole.zhCnDescription')" :label-width="formLabelWidth" prop="descriptionZhCn">
        <el-input size="small" v-model="form.descriptionZhCn" type="textarea" :disabled="disabled"></el-input>
        </el-form-item>
      </el-col>


      <el-col :span="24" >
        <el-form-item  :label="$t('sysRole.enUsDescription')" :label-width="formLabelWidth" prop="descriptionEnUs">

        <el-input size="small" type="textarea" v-model="form.descriptionEnUs" :disabled="disabled"></el-input>
        </el-form-item>
      </el-col>


      <el-col :span="24" >
        <el-form-item :label="$t('sysRole.jaJpDescription')" :label-width="formLabelWidth" prop="descriptionJaJp">
        <el-input size="small" type="textarea" v-model="form.descriptionJaJp" :disabled="disabled"></el-input>
        </el-form-item>
      </el-col>


      <el-col :span="24" >
        <el-form-item :label="$t('sysRole.koKrDescription')" :label-width="formLabelWidth" prop="descriptionKoKr">
        <el-input size="small" v-model="form.descriptionKoKr" type="textarea" :disabled="disabled"></el-input>
        </el-form-item>
      </el-col>

      <el-col :span ='12'>
        <el-form-item :label="$t('sysRole.isShow')" :label-width="formLabelWidth">
          <el-radio class="radio" v-model="form.isShow"  :disabled="disabled"  :label="true">{{$t("commom.yes")}}</el-radio>
          <el-radio class="radio" v-model="form.isShow"  :disabled="disabled"  :label="false">{{$t("commom.no")}}</el-radio>
        </el-form-item>
      </el-col>

      <el-col :span ='12'>
        <el-form-item :label="$t('sysRole.systemName')" :label-width="formLabelWidth" prop="role">
          <el-input size="small" v-model="form.role" :disabled="disabled"></el-input>
        </el-form-item>
      </el-col>

      <el-col :span ='12'>
        <el-form-item :label="$t('sysRole.type')" :label-width="formLabelWidth"  >
          <el-radio class="radio" v-model="form.roleType"  :disabled="disabled"  :label="0">{{$t("sysRole.systemType")}}</el-radio>
          <el-radio class="radio" v-model="form.roleType"  :disabled="disabled"  :label="1">{{$t("sysRole.shopType")}}</el-radio>
        </el-form-item>
      </el-col>

      <el-col :span ='12'>
        <el-form-item :label="$t('sysRole.roleLevel')" :label-width="formLabelWidth"  prop="roleLevel" >
          <el-input size="small" v-model.number="form.roleLevel" :disabled="disabled"></el-input>
        </el-form-item>
      </el-col>



      <el-col :span ='24'>
        <el-form-item :label="$t('sysRole.roleResources')"   :label-width="formLabelWidth" prop="sysResources">
        <el-select style="width: 100%;" v-model="form.sysResources" :multiple="true" :placeholder="$t('commom.select')" :disabled="disabled" filterable>
          <el-option
            v-for="(item,index) in allSysResources" :key='index'
            :label="item.resName"
            :value="item.resId">
          </el-option>
        </el-select>
        </el-form-item>
      </el-col>
    </el-form>
  </div>
</template>

<script>
  export default{
    props: {
      form: Object,
      disabled:Boolean,
      allSysResources:{
          type:Array,
          default(){
            return []
          }
      }
    },
    data(){
      var checkInt = (rule, value, callback) => {
        if (value==='') {
          return callback(new Error(this.$t('commom.required')));
        }
        if (!Number.isInteger(value)) {
          return  callback(new Error(this.$t('commom.intType')));
        }
        return callback();

      };
      return {
        formLabelWidth: "120px",
        rules:{
          roleZhCnName:[
            { required: true, message: this.$t('commom.required'), trigger: 'blur' },
          ],
          roleEnUsName:[
            { required: true, message: this.$t('commom.required'), trigger: 'blur' },
          ],
          roleJaJpName:[
            { required: true, message: this.$t('commom.required'), trigger: 'blur' },
          ],
          roleKoKrName:[
            { required: true, message: this.$t('commom.required'), trigger: 'blur' },
          ],
          descriptionZhCn:[
            { required: true, message: this.$t('commom.required'), trigger: 'blur' },
          ],
          descriptionEnUs:[
            { required: true, message: this.$t('commom.required'), trigger: 'blur' },
          ],
          descriptionJaJp:[
            { required: true, message: this.$t('commom.required'), trigger: 'blur' },
          ],
          descriptionKoKr:[
            { required: true, message: this.$t('commom.required'), trigger: 'blur' },
          ],
          role:[
            { required: true, message: this.$t('commom.required'), trigger: 'blur' },
          ],
          roleLevel:[
            { required: true, validator:checkInt,trigger: 'blur' }
          ],
          sysResources:[
            { required: true,type:'array', message: this.$t('commom.required'), trigger: 'blur' },
          ],
        }
      }
    },
    methods:{
      validate(fn){
        this.$refs.sysRoleForm.validate((valid) => {
          if(valid){
            fn(valid)
          }else{

            return false
          }
        });
      },
      resetFields(){
        this.$refs.sysRoleForm.resetFields();
      }
    }
  }
</script>
