<template>
        <el-form :model="cartoonData" ref='cartoonForm' :rules="rules" :label-position="$store.getters.isMobile?'top':'right'">
   
     <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.zhName')" label-width="150px" prop="articleCnZhTitle">
          <el-input v-model="cartoonData.articleCnZhTitle" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.enName')" label-width="150px" prop="articleEnUsTitle">
          <el-input v-model="cartoonData.articleEnUsTitle" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.jaName')" label-width="150px" prop="articleJaJpTitle">
          <el-input v-model="cartoonData.articleJaJpTitle" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.koName')" label-width="150px" prop="articleKoKrTitle">
          <el-input v-model="cartoonData.articleKoKrTitle" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('article.story.author')" label-width="150px" prop="articleAuthor">
          <el-input v-model="cartoonData.articleAuthor" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      <el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('article.story.areaId')" label-width="150px" prop="areaId">
				<el-select style="width: 100%;" v-model="cartoonData.areaId" :placeholder="$t('commom.select')">
					<el-option v-for="item in arealist" :label="item.areaName" :value="item.areaId" :disabled="disabled" :key="item.areaId">
					</el-option>
				</el-select>
			</el-form-item>
		</el-col>
      
       <el-col  :span="$store.getters.isMobile?24:11">
       	<el-form-item :label="$t('commom.status')" label-width="150px" prop="status">
       		 <el-radio-group  v-model="cartoonData.status">
			    <el-radio :disabled="disabled" :label="1">{{$t('article.story.up')}}</el-radio>
			    <el-radio :disabled="disabled" :label="2">{{$t('article.story.down')}}</el-radio>
			  </el-radio-group>
        </el-form-item>
       		
      </el-col>
      <el-col :span="24">
        <el-form-item :label="$t('article.cartoon.binfoZhCnDescription')" label-width="150px" prop="articleCnZhDescription">
          <editor :disabled='disabled' id='articleinfoZhCnDescription' :imgOnLoad="syncTextarea" :upload-url="uploadUrl" uploadImgName='img' v-model="cartoonData.articleCnZhDescription" />
          </quill-editor>
        </el-form-item>
      </el-col>
       <el-col :span="24">
        <el-form-item :label="$t('article.cartoon.binfoJaJpDescription')" label-width="150px" prop="articleJaJpDescription">
          <editor :disabled='disabled' id='articleinfoJaJpDescription' :imgOnLoad="syncTextarea" :upload-url="uploadUrl" uploadImgName='img' v-model="cartoonData.articleJaJpDescription" />
          </quill-editor>
        </el-form-item>
      </el-col>
       <el-col :span="24">
        <el-form-item :label="$t('article.cartoon.binfoKoKrDescription')" label-width="150px" prop="articleKoKrDescription">
          <editor :disabled='disabled' id='articleinfoKoKrDescription' :imgOnLoad="syncTextarea"  :upload-url="uploadUrl" uploadImgName='img' v-model="cartoonData.articleKoKrDescription" />
          </quill-editor>
        </el-form-item>
      </el-col>
       <el-col :span="24">
        <el-form-item :label="$t('article.cartoon.binfoEnUsDescription')" label-width="150px" prop="articleEnUsDescription">
          <editor :disabled='disabled' id='articleinfoEnUsDescription' :imgOnLoad="syncTextarea" :upload-url="uploadUrl" uploadImgName='img' v-model="cartoonData.articleEnUsDescription" />
          </quill-editor>
        </el-form-item>
      </el-col>
        </el-form>
</template> 
<script>
 import editor from 'pages/components/Veditor'
  import { ARTICLECARTOON_UPPIC } from 'type';
  	import {
		apparticleGetareas
	} from 'api/api';
    export default {
        props: {
            disabled:Boolean,
            cartoonData:Object
        },
        data(){
            return{
            	arealist: '',
            	uploadUrl:ARTICLECARTOON_UPPIC,// /chejudo-web/appArticle/story/upPic
                rules:{
                	areaId: [{
						required: true,type: 'number',
						message: this.$t('article.story.storyinfoarea'),
						trigger: 'blur'
					}],
                	articleCnZhTitle: [
			            { required: true, message: this.$t('article.story.binfoZhCnName'), trigger: 'blur' } 
			        ],
			        articleEnUsTitle: [
			            { required: true, message: this.$t('article.story.binfoEnUsName'), trigger: 'blur' } 
			        ],
			        articleJaJpTitle: [
			            { required: true, message: this.$t('article.story.binfoJaJpName'), trigger: 'blur' } 
			        ],
			        articleKoKrTitle: [
			            { required: true, message: this.$t('article.story.binfoKoKrName'), trigger: 'blur' } 
			        ],
			        articleAuthor: [
			            { required: true, message: this.$t('article.story.storyinfoAuthor'), trigger: 'blur' } 
			        ],
			        status: [
			            { required: true,type: 'number', message: this.$t('article.story.storyinfostatus'), trigger: 'blur' } 
			        ],
			        articleCnZhDescription : [
			            { required: true, message: this.$t('article.cartoon.vinfoZhCnDescription'), trigger: 'blur' } 
			        ],
			        articleJaJpDescription: [
			            { required: true,message: this.$t('article.cartoon.vinfoJaJpDescription'), trigger: 'blur' } 
			        ],
			        articleKoKrDescription : [
			            { required: true, message: this.$t('article.cartoon.vinfoKoKrDescription'), trigger: 'blur' } 
			        ],
			        articleEnUsDescription: [
			            { required: true, message: this.$t('article.cartoon.vinfoEnUsDescription'), trigger: 'blur' } 
			        ],
                }
            }
        },
        created() {
			apparticleGetareas().then(res => {
				this.arealist = res.data.obj
			})
		},
         methods:{
        	validate(fn){
		        this.$refs.cartoonForm.validate(fn); 
		      },
		      syncTextarea(value){
			 	this.cartoonData.articleEnUsDescription +=value
			 	this.cartoonData.articleKoKrDescription+=value
			 	this.cartoonData.articleJaJpDescription +=value
			 	this.cartoonData.articleCnZhDescription+=value
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