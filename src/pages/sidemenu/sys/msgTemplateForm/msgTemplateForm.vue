<template>
    <el-form :model="pageData" ref='storyForm' :rules="rules" :label-position="$store.getters.isMobile?'top':'right'">
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('msgTemplate.titleZh')" label-width="150px" prop="tempZhCnTitle">
          <el-input v-model="pageData.tempZhCnTitle" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('msgTemplate.titleEn')" label-width="150px" prop="tempEnUsTitle">
          <el-input v-model="pageData.tempEnUsTitle" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('msgTemplate.titleJa')" label-width="150px" prop="tempJaJpTitle">
          <el-input v-model="pageData.tempJaJpTitle" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('msgTemplate.titleKo')" label-width="150px" prop="tempKoKrTitle">
          <el-input v-model="pageData.tempKoKrTitle" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      
      
            
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('msgTemplate.tempZh')" label-width="150px" prop="tempZhCnContent">
          <el-input type="textarea" v-model="pageData.tempZhCnContent" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('msgTemplate.tempEn')" label-width="150px" prop="tempEnUsContent">
          <el-input type="textarea" v-model="pageData.tempEnUsContent" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('msgTemplate.tempJa')" label-width="150px" prop="tempJaJpContent">
          <el-input type="textarea" v-model="pageData.tempJaJpContent" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('msgTemplate.tempKo')" label-width="150px" prop="tempKoKrContent">
          <el-input type="textarea" v-model="pageData.tempKoKrContent" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
    <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('msgTemplate.templateVars')" label-width="150px" prop="tempVars">
          <el-input  v-model="pageData.tempVars" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
     <el-col  :span="$store.getters.isMobile?24:11">
       	<el-form-item :label="$t('msgTemplate.noticeType')" label-width="150px" prop="noticeType">
       		 <el-radio-group  v-model.number="pageData.noticeType">
       		 	<el-radio :disabled="disabled" :label="1">{{$t('msgTemplate.noticeType1')}}</el-radio>
       		 	<el-radio :disabled="disabled" :label="2">{{$t('msgTemplate.noticeType2')}}</el-radio>
			    <el-radio :disabled="disabled" :label="3">{{$t('msgTemplate.noticeType3')}}</el-radio>
       		 </el-radio-group>
        </el-form-item>
      </el-col>
      
       <el-col  :span="$store.getters.isMobile?24:11">
       	<el-form-item :label="$t('msgTemplate.sendType')" label-width="150px" prop="sendType">
       		 <el-radio-group  v-model.number="pageData.sendType">
       		 	<el-radio :disabled="disabled" :label="1">{{$t('msgTemplate.sendType1')}}</el-radio>
			    <el-radio :disabled="disabled" :label="2">{{$t('msgTemplate.sendType2')}}</el-radio>
					<el-radio :disabled="disabled" :label="3">{{$t('msgTemplate.sendType3')}}</el-radio>
			  </el-radio-group>
        </el-form-item>
      </el-col>
      
      <el-col  :span="$store.getters.isMobile?24:11">
       	<el-form-item :label="$t('commom.status')" label-width="150px" prop="templateStatus">
       		 <el-radio-group  v-model.number="pageData.templateStatus">
       		 	<el-radio :disabled="disabled" :label="1">{{$t('business.pointrules.up')}}</el-radio>
			    <el-radio :disabled="disabled" :label="2">{{$t('business.pointrules.down')}}</el-radio>
			  </el-radio-group>
        </el-form-item>
      </el-col>
      
      <el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('msgTemplate.templateCode')" label-width="150px" prop="templateCode">
				<el-select style="width: 100%;" v-model="pageData.templateCode" :placeholder="$t('commom.select')">
					<el-option v-for="item in templateCodelist" :label="item.name" :value="item.dictCode" :disabled="disabled" :key="item.dictCode">
					</el-option>
				</el-select>
			</el-form-item>
		</el-col>
      
      
        </el-form>
</template> 
<script>
	import {
		//字典
		sysdictionariesGetbytype,
	} from 'api/api';
    export default {
            props: {
            disabled:Boolean,
            pageData:Object
        },
         data(){
            return{
           		 templateCodelist:[],
                rules:{
                	tempZhCnTitle : [
			            { required: true, message: this.$t('msgTemplate.vtitleZh'), trigger: 'blur' } 
			        ],
			        tempKoKrTitle: [
			            { required: true, message: this.$t('msgTemplate.vtitleKo'), trigger: 'blur' } 
			        ],
			        tempEnUsTitle : [
			            { required: true, message: this.$t('msgTemplate.vtitleEn'), trigger: 'blur' } 
			        ],
			        tempJaJpTitle: [
			            { required: true, message: this.$t('msgTemplate.vtitleJa'), trigger: 'blur' } 
			        ],
			        tempEnUsContent : [
			            { required: true, message: this.$t('msgTemplate.vtempEn'), trigger: 'blur' } 
			        ],
			        tempJaJpContent: [
			            { required: true, message: this.$t('msgTemplate.vtempJa'), trigger: 'blur' } 
			        ],
			        tempKoKrContent : [
			            { required: true, message: this.$t('msgTemplate.vtempKo'), trigger: 'blur' } 
			        ],
			        tempZhCnContent: [
			            { required: true, message: this.$t('msgTemplate.vtempZh'), trigger: 'blur' } 
			        ],
					tempVars: [
			            { required: true, message: this.$t('msgTemplate.vtemplateVars'), trigger: 'blur' } 
			        ],
					templateCode: [
			            { required: true,message: this.$t('msgTemplate.vtemplateCode'), trigger: 'blur' } 
			        ],
			        noticeType: [
			            { required: true,type: 'number', message: this.$t('msgTemplate.vnoticeType'), trigger: 'blur' } 
			        ],
			        sendType: [
			            { required: true,type: 'number', message: this.$t('msgTemplate.vsendType'), trigger: 'blur' } 
			        ],
			        templateStatus: [
			            { required: true,type: 'number', message: this.$t('commom.storyinfostatus'), trigger: 'blur' } 
			        ],
                },
            }
        },
        mounted(){
        },
        created() {
			sysdictionariesGetbytype({dictType:'tempCode'}).then(res => {
				this.templateCodelist = res.data.obj
			})
			if(this.pageData.templateStatus==''||this.pageData.sendType==''||this.pageData.noticeType==''){
				this.pageData.templateStatus=1
				this.pageData.sendType=1
				this.pageData.noticeType=1
			}
			
		},
		watch: {
			pageData(dataObj) {
				this.$refs.storyForm.resetFields();
				if(dataObj.templateStatus==''||dataObj.sendType==''||dataObj.noticeType==''){
					console.log()
					dataObj.templateStatus=1
					dataObj.sendType=1
					dataObj.noticeType=1
				}
			}
		},
        methods:{
        	validate(fn){
		        this.$refs.storyForm.validate(fn); 
		      },
        },
    }
</script>