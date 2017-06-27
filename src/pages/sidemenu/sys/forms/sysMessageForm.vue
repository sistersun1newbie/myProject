<template>
        <el-form :model="cartoonData" ref='cartoonForm' :rules="rules" :label-position="$store.getters.isMobile?'top':'right'">
   
     <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('sysMessage.titleZh')" label-width="150px" prop="noticeZhCnTitle">
          <el-input v-model="cartoonData.noticeZhCnTitle" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('sysMessage.titleEn')" label-width="150px" prop="noticeEnUsTitle">
          <el-input v-model="cartoonData.noticeEnUsTitle" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('sysMessage.titleJa')" label-width="150px" prop="noticeJaJpTitle">
          <el-input v-model="cartoonData.noticeJaJpTitle" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('sysMessage.titleKo')" label-width="150px" prop="noticeKoKrTitle">
          <el-input v-model="cartoonData.noticeKoKrTitle" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      
     <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('sysMessage.summaryZh')" label-width="150px" prop="noticeZhCnSummary">
          <el-input type="textarea" v-model="cartoonData.noticeZhCnSummary" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('sysMessage.summaryEn')" label-width="150px" prop="noticeEnUsSummary">
          <el-input type="textarea" v-model="cartoonData.noticeEnUsSummary" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('sysMessage.summaryJa')" label-width="150px" prop="noticeJaJpSummary">
          <el-input  type="textarea" v-model="cartoonData.noticeJaJpSummary" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('sysMessage.summaryKo')" label-width="150px" prop="noticeKoKrSummary">
          <el-input type="textarea" v-model="cartoonData.noticeKoKrSummary" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      
       		
      </el-col>
      <el-col :span="24">
        <el-form-item :label="$t('sysMessage.detailZh')" label-width="150px" prop="noticeZhCnDetail">
          <editor :disabled='disabled' id='sysMessageZhCnDescription' :imgOnLoad="syncTextarea" :upload-url="uploadUrl" uploadImgName='img' v-model="cartoonData.noticeZhCnDetail" />
          </quill-editor>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item :label="$t('sysMessage.detailEn')" label-width="150px" prop="noticeEnUsDetail">
          <editor :disabled='disabled' id='sysMessageEnUsDescription' :imgOnLoad="syncTextarea" :upload-url="uploadUrl" uploadImgName='img' v-model="cartoonData.noticeEnUsDetail" />
          </quill-editor>
        </el-form-item>
      </el-col>
       <el-col :span="24">
        <el-form-item :label="$t('sysMessage.detailJa')" label-width="150px" prop="noticeJaJpDetail">
          <editor :disabled='disabled' id='sysMessageJaJpDescription' :imgOnLoad="syncTextarea" :upload-url="uploadUrl" uploadImgName='img' v-model="cartoonData.noticeJaJpDetail" />
          </quill-editor>
        </el-form-item>
      </el-col>
       <el-col :span="24">
        <el-form-item :label="$t('sysMessage.detailKo')" label-width="150px" prop="noticeKoKrDetail">
          <editor :disabled='disabled' id='sysMessageKoKrDescription' :imgOnLoad="syncTextarea"  :upload-url="uploadUrl" uploadImgName='img' v-model="cartoonData.noticeKoKrDetail" />
          </quill-editor>
        </el-form-item>
      </el-col>
       
        </el-form>
</template> 
<script>
 import editor from 'pages/components/Veditor'
  import { MSGSYSTEMNOTICE_UPLOADIMAGE } from 'type';
  	import {
	} from 'api/api';
    export default {
        props: {
            disabled:Boolean,
            cartoonData:Object
        },
        data(){
            return{
            	arealist: '',
            	uploadUrl:MSGSYSTEMNOTICE_UPLOADIMAGE,// /chejudo-web/appArticle/story/upPic
                rules:{
                	areaId: [{
						required: true,type: 'number',
						message: this.$t('article.story.storyinfoarea'),
						trigger: 'blur'
					}],
                	noticeZhCnTitle: [
			            { required: true, message: this.$t('sysMessage.vtitleZh'), trigger: 'blur' } 
			        ],
			        noticeJaJpTitle: [
			            { required: true, message: this.$t('sysMessage.vtitleJa'), trigger: 'blur' } 
			        ],
			        noticeKoKrTitle: [
			            { required: true, message: this.$t('sysMessage.vtitleKo'), trigger: 'blur' } 
			        ],
			        noticeEnUsTitle: [
			            { required: true, message: this.$t('sysMessage.vtitleEn'), trigger: 'blur' } 
			        ],
			        
			        
			        noticeZhCnSummary: [
			            { required: true, message: this.$t('sysMessage.vsummaryZh'), trigger: 'blur' } 
			        ],
			        noticeJaJpSummary: [
			            { required: true, message: this.$t('sysMessage.vsummaryJa'), trigger: 'blur' } 
			        ],
			        noticeKoKrSummary: [
			            { required: true, message: this.$t('sysMessage.vsummaryKo'), trigger: 'blur' } 
			        ],
			        noticeEnUsSummary: [
			            { required: true, message: this.$t('sysMessage.vsummaryEn'), trigger: 'blur' } 
			        ],
			        
			        
			        noticeZhCnDetail : [
			            { required: true, message: this.$t('sysMessage.vdetailZh'), trigger: 'blur' } 
			        ],
			        noticeJaJpDetail: [
			            { required: true,message: this.$t('sysMessage.vdetailJa'), trigger: 'blur' } 
			        ],
			        noticeKoKrDetail : [
			            { required: true, message: this.$t('sysMessage.vdetailKo'), trigger: 'blur' } 
			        ],
			        noticeEnUsDetail: [
			            { required: true, message: this.$t('sysMessage.vdetailEn'), trigger: 'blur' } 
			        ],
                }
            }
        },
        created() {
		},
         methods:{
        	validate(fn){
		        this.$refs.cartoonForm.validate(fn); 
		      },
		      syncTextarea(value){
			 	this.cartoonData.noticeZhCnDetail +=value
			 	this.cartoonData.noticeEnUsDetail+=value
			 	this.cartoonData.noticeJaJpDetail +=value
			 	this.cartoonData.noticeKoKrDetail+=value
			}
        },
        watch: {
			cartoonData() {
				this.$refs.cartoonForm.resetFields();
			}
		},
        components:{
            editor
        }
    }
</script>