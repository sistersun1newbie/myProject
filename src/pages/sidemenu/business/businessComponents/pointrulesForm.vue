<template>
  <el-form :model="pageData" ref='storyForm' :rules="rules" :label-position="$store.getters.isMobile?'top':'right'">
  
    <el-col :span="$store.getters.isMobile?24:11">
      <el-form-item :label="$t('commom.zhName')" label-width="150px" prop="ruleZhCnTitle">
        <el-input v-model="pageData.ruleZhCnTitle" auto-complete="off" :disabled="disabled" />
      </el-form-item>
    </el-col>
  
    <el-col :span="$store.getters.isMobile?24:11">
      <el-form-item :label="$t('commom.enName')" label-width="150px" prop="ruleEnUsTitle">
        <el-input v-model="pageData.ruleEnUsTitle" auto-complete="off" :disabled="disabled" />
      </el-form-item>
    </el-col>
  
    <el-col :span="$store.getters.isMobile?24:11">
      <el-form-item :label="$t('commom.jaName')" label-width="150px" prop="ruleJaJpTitle">
        <el-input v-model="pageData.ruleJaJpTitle" auto-complete="off" :disabled="disabled" />
      </el-form-item>
    </el-col>
  
    <el-col :span="$store.getters.isMobile?24:11">
      <el-form-item :label="$t('commom.koName')" label-width="150px" prop="ruleKoKrTitle">
        <el-input v-model="pageData.ruleKoKrTitle" auto-complete="off" :disabled="disabled" />
      </el-form-item>
    </el-col>
  
    <el-col :span="$store.getters.isMobile?24:11">
      <el-form-item :label="$t('business.pointrules.pointAmount')" label-width="150px" prop="pointAmount">
        <el-input v-model.number="pageData.pointAmount" auto-complete="off" :disabled="true" />
      </el-form-item>
    </el-col>
  
    <el-col :span="$store.getters.isMobile?24:11">
      <el-form-item :label="$t('business.pointrules.pointCount')" label-width="150px" prop="pointCount">
        <el-input v-model.number="pageData.pointCount" auto-complete="off" :disabled="disabled" />
      </el-form-item>
    </el-col>
  
    <el-col :span="$store.getters.isMobile?24:11">
      <el-form-item :label="$t('commom.status')" label-width="150px" prop="status">
        <el-radio-group v-model.number="pageData.status">
          <el-radio :disabled="disabled" :label="0">{{$t('business.pointrules.down')}}</el-radio>
          <el-radio :disabled="disabled" :label="1">{{$t('business.pointrules.up')}}</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-col>
  </el-form>
</template> 
<script>
export default {
  props: {
    disabled: Boolean,
    pageData: Object
  },
  data() {
    return {
      rules: {
        ruleZhCnTitle: [
          { required: true, message: this.$t('business.pointrules.binfoZhCnName'), trigger: 'blur' }
        ],
        ruleEnUsTitle: [
          { required: true, message: this.$t('business.pointrules.binfoEnUsName'), trigger: 'blur' }
        ],
        ruleJaJpTitle: [
          { required: true, message: this.$t('business.pointrules.binfoJaJpName'), trigger: 'blur' }
        ],
        ruleKoKrTitle: [
          { required: true, message: this.$t('business.pointrules.binfoKoKrName'), trigger: 'blur' }
        ],
        pointAmount: [
          { required: true, type: 'number', message: this.$t('business.pointrules.vinfopointAmount'), trigger: 'blur' }
        ],
        pointCount: [
          {
            required: true,
            trigger: 'blur',
            validator: (rule, value, callback) => {
              if (value === '' || value == null) {
                callback(new Error(this.$t('business.pointrules.vinfopointCount')));
              } else if (!(value <= 100 && value > 0)) {
                callback(new Error(this.$t('business.pointrules.vinfopointCountRange')));
              } else {
                callback();
              }
            },
          }
        ],
        status: [
          { required: true, type: 'number', message: this.$t('commom.storyinfostatus'), trigger: 'blur' }
        ],
      },
    }
  },
  mounted() {
  },
  watch: {
    pageData() {
      this.$refs.storyForm.resetFields();
    }
  },
  methods: {
    validate(fn) {
      this.$refs.storyForm.validate(fn);
    },
  },
}
</script>