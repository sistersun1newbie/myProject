<template>
    <el-form :model="form" ref="form" :rules="rules" class="demo-ruleForm">
      <el-row>
        <el-col :span="12">
          <el-form-item :label="$t('sysresources.commom.resourceNameZh')" :label-width="formLabelWidth" prop="resZhCnName">
            <el-input size="small" v-model="form.resZhCnName" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="$t('sysresources.commom.resourceNameEn')" :label-width="formLabelWidth" prop="resEnUsName">
            <el-input size="small" v-model="form.resEnUsName" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item :label="$t('sysresources.commom.resourceNameKo')" :label-width="formLabelWidth" prop="resKoKrName">
            <el-input size="small" v-model="form.resKoKrName" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="$t('sysresources.commom.resourceNameJa')" :label-width="formLabelWidth" prop="resJaJpName">
            <el-input size="small" v-model="form.resJaJpName" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11">
          <el-form-item :label="$t('sysresources.commom.parentName')" :label-width="formLabelWidth">
            <el-input size="small" auto-complete="off" :readonly="true" v-model="form.parentName" @click="$emit('showTree')"
                      icon="plus"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="1">
          <el-form-item>
            <el-button size="small" icon="close" @click="clearParent"></el-button>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item :label="$t('sysresources.commom.icon')" :label-width="formLabelWidth">
            <el-input size="small" v-model="form.icon" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>

      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item :label="$t('sysresources.commom.component')" :label-width="formLabelWidth">
            <el-input size="small" v-model="form.component" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="$t('sysresources.commom.resType')" :label-width="formLabelWidth">
            <el-select style="width: 100%;" v-model="form.restype" size="small">
              <el-option v-for="(item,index) in options" :key='index' :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item :label="$t('sysresources.commom.identity')" :label-width="formLabelWidth" prop="identity">
            <el-input size="small" v-model="form.identity" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="$t('sysresources.commom.permission')" :label-width="formLabelWidth" prop="permission">
            <el-input size="small" v-model="form.permission" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item :label="$t('sysresources.commom.seq')" :label-width="formLabelWidth">
            <el-input size="small" v-model="form.seq" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="$t('sysresources.commom.isShow')" :label-width="formLabelWidth">
            <el-radio class="radio" v-model="form.isShow" :label="true">{{$t('commom.yes')}}</el-radio>
            <el-radio class="radio" v-model="form.isShow" :label="false">{{$t('commom.no')}}</el-radio>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item :label="$t('sysresources.commom.url')" :label-width="formLabelWidth">
            <el-input size="small" v-model="form.url" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
</template>

<script>
  export default{
    props: {
      form: Object
    },
    data(){
      return{
        formLabelWidth: '100px',
        options: [{
          value: 'menu',
          label: 'menu'
        }, {
          value: 'button',
          label: 'button'
        }
        ],
        rules:{
          resZhCnName:[
            { required: true, message: this.$t('commom.required'), trigger: 'blur' },
          ],
          resEnUsName:[
            { required: true, message: this.$t('commom.required'), trigger: 'blur' },
          ],
          resKoKrName:[
            { required: true, message: this.$t('commom.required'), trigger: 'blur' },
          ],
          resJaJpName:[
            { required: true, message: this.$t('commom.required'), trigger: 'blur' },
          ],
          identity:[
            { required: true, message: this.$t('commom.required'), trigger: 'blur' },
          ],
          permission:[
            { required: true, message: this.$t('commom.required'), trigger: 'blur' },
          ],
        }
      }
    },
    methods:{
      clearParent(){
        this.form.parentId = 0;
        this.form.parentIds = "0";
        this.form.parentName = ""
      },
      validate(fn){
        this.$refs.form.validate((valid) => {
          if(valid){
              fn(valid)
          }else{

              return false
          }
        });
      },
      resetFields(){
        this.$refs.form.resetFields();
      }
    }
  }
</script>
