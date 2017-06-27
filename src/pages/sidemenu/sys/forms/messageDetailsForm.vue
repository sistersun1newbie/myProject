<template>
    <el-form :model="pageData" ref='storyForm' :rules="rules" :label-position="$store.getters.isMobile?'top':'right'">
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('msgDetail.titleZh')" label-width="150px" prop="ruleZhCnTitle">
          <el-input v-model="pageData.msgZhCnTitle" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('msgDetail.titleEn')" label-width="150px" prop="ruleEnUsTitle">
          <el-input v-model="pageData.msgEnUsTitle" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('msgDetail.titleJa')" label-width="150px" prop="ruleJaJpTitle">
          <el-input v-model="pageData.msgJaJpTitle" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('msgDetail.titleKo')" label-width="150px" prop="ruleKoKrTitle">
          <el-input v-model="pageData.msgKoKrTitle" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('msgDetail.detailZh')" label-width="150px" prop="ruleZhCnTitle">
          <el-input type="textarea"  v-model="pageData.msgZhCnContent" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('msgDetail.detailEn')" label-width="150px" prop="ruleEnUsTitle">
          <el-input  type="textarea" v-model="pageData.msgEnUsContent" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('msgDetail.detailJa')" label-width="150px" prop="ruleJaJpTitle">
          <el-input type="textarea"  v-model="pageData.msgJaJpContent" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('msgDetail.detailKo')" label-width="150px" prop="ruleKoKrTitle">
          <el-input  type="textarea" v-model="pageData.msgKoKrContent" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('msgDetail.infotime')" label-width="150px" prop="ruleKoKrTitle">
          <el-input v-model="pageData.msgTime" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
       <el-col  :span="$store.getters.isMobile?24:11">
       	<el-form-item :label="$t('msgDetail.msgtype')" label-width="150px" prop="status">
       		 <el-radio-group  v-model.number="pageData.msgType">
			    <el-radio :disabled="disabled" :label="1">{{$t('msgDetail.msgtype1')}}</el-radio>
			    <el-radio :disabled="disabled" :label="2">{{$t('msgDetail.msgtype2')}}</el-radio>
			    <el-radio :disabled="disabled" :label="3">{{$t('msgDetail.msgtype3')}}</el-radio>
			  </el-radio-group>
        </el-form-item>
       		
      </el-col>
      
        </el-form>
</template> 
<script>
    export default {
            props: {
            disabled:Boolean,
            pageData:Object
        },
         data(){
            return{
                rules:{},
            }
        },
        mounted(){
        },
		watch: {
			pageData() {
				this.$refs.storyForm.resetFields();
			}
		},
        methods:{
        	validate(fn){
		        this.$refs.storyForm.validate(fn); 
		      },
        },
    }
</script>