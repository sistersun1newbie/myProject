<template>
    <el-form :model="pageData" ref='gamemissionForm' :rules="rules" :label-position="$store.getters.isMobile?'top':'right'">
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.zhName')" label-width="150px" prop="gameZhCnName">
          <el-input v-model="pageData.gameZhCnName" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.enName')" label-width="150px" prop="gameEnUsName">
          <el-input v-model="pageData.gameEnUsName" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.jaName')" label-width="150px" prop="gameJaJpName">
          <el-input v-model="pageData.gameJaJpName" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.koName')" label-width="150px" prop="gameKoKrName">
          <el-input v-model="pageData.gameKoKrName" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('article.gameMission.zhinfo')" label-width="150px" prop="gameZhCnIntroduction">
          <el-input v-model="pageData.gameZhCnIntroduction" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('article.gameMission.eninfo ')" label-width="150px" prop="gameEnUsIntroduction">
          <el-input v-model="pageData.gameEnUsIntroduction" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('article.gameMission.jainfo ')" label-width="150px" prop="gameJaJpIntroduction">
          <el-input v-model="pageData.gameJaJpIntroduction" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('article.gameMission.koinfo')" label-width="150px" prop="gameKoKrIntroduction">
          <el-input v-model="pageData.gameKoKrIntroduction" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('article.story.areaId')" label-width="150px" prop="areaId">
				<el-select style="width: 100%;" v-model="pageData.areaId" :placeholder="$t('commom.select')">
					<el-option v-for="item in arealist" :label="item.areaName" :value="item.areaId" :disabled="disabled" :key="item.areaId">
					</el-option>
				</el-select>
			</el-form-item>
		</el-col>
		
		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('article.gameMission.gift')" label-width="150px" prop="giftId">
				<el-select style="width: 100%;"  v-model="pageData.giftId" :placeholder="$t('commom.select')">
					<el-option v-for="item in giftlist" :label="item.giftName" :value="item.giftId" :disabled="disabled" :key="item.giftId">
					</el-option>
				</el-select>
			</el-form-item>
		</el-col>
		
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('article.gameMission.qrCode ')" label-width="150px" prop="qrCode">
          <el-input v-model="pageData.qrCode" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
       <el-col  :span="$store.getters.isMobile?24:11">
       	<el-form-item :label="$t('commom.status')" label-width="150px" prop="gameStatus">
       		 <el-radio-group  v-model="pageData.gameStatus">
			    <el-radio :disabled="disabled" :label="1">{{$t('article.gameMission.status1')}}</el-radio>
			    <el-radio :disabled="disabled" :label="2">{{$t('article.gameMission.status2')}}</el-radio>
			  </el-radio-group>
        </el-form-item>
       		
      </el-col>
      <el-col :span="24">
        <el-form-item :label="$t('article.gameMission.zhdetail')" label-width="150px" prop="gameZhCnDetail">
          <editor :disabled='disabled' id='missioninfoZhCnDescription' :imgOnLoad="syncTextarea" :upload-url="uploadUrl" uploadImgName='img' v-model="pageData.gameZhCnDetail" />
          </quill-editor>
        </el-form-item>
      </el-col>
       <el-col :span="24">
        <el-form-item :label="$t('article.gameMission.endetail')" label-width="150px" prop="gameEnUsDetail">
          <editor :disabled='disabled' id='missioninfoJaJpDescription' :imgOnLoad="syncTextarea" :upload-url="uploadUrl" uploadImgName='img' v-model="pageData.gameEnUsDetail" />
          </quill-editor>
        </el-form-item>
      </el-col>
       <el-col :span="24">
        <el-form-item :label="$t('article.gameMission.jadetail')" label-width="150px" prop="gameJaJpDetail">
          <editor :disabled='disabled' id='missioninfoKoKrDescription' :imgOnLoad="syncTextarea" :upload-url="uploadUrl" uploadImgName='img' v-model="pageData.gameJaJpDetail" />
          </quill-editor>
        </el-form-item>
      </el-col>
       <el-col :span="24">
        <el-form-item :label="$t('article.gameMission.kodetail')" label-width="150px" prop="gameKoKrDetail">
          <editor :disabled='disabled' id='missioninfoEnUsDescription' :imgOnLoad="syncTextarea" :upload-url="uploadUrl" uploadImgName='img' v-model="pageData.gameKoKrDetail" />
          </quill-editor>
        </el-form-item>
      </el-col>
        </el-form>
</template> 
<script>
	import editor from 'pages/components/Veditor'
 	import { AREAGAMETASK_UPLOADIMAGE } from 'type';
	import {
		apparticleGetareas,
		gamegiftinfoNopages
	} from 'api/api';
    export default {
            props: {
            disabled:Boolean,
            pageData:Object
        },
         components:{
            editor
        },
         data(){
            return{
            	arealist:'',
            	giftlist:'',
            	uploadUrl:AREAGAMETASK_UPLOADIMAGE,// /chejudo-web/appArticle/story/upPic
                rules:{
                	gameZhCnName : [
			            { required: true, message: this.$t('article.gameMission.vZhName'), trigger: 'blur' } 
			        ],
			        gameEnUsName: [
			            { required: true, message: this.$t('article.gameMission.vEnName'), trigger: 'blur' } 
			        ],
			        gameJaJpName : [
			            { required: true, message: this.$t('article.gameMission.vJaName'), trigger: 'blur' } 
			        ],
			        gameKoKrName: [
			            { required: true, message: this.$t('article.gameMission.vKoName'), trigger: 'blur' } 
			        ],
			        
			        gameZhCnIntroduction : [
			            { required: true, message: this.$t('article.gameMission.vZhInfo'), trigger: 'blur' } 
			        ],
			        gameEnUsIntroduction: [
			            { required: true, message: this.$t('article.gameMission.vEnInfo'), trigger: 'blur' } 
			        ],
			        gameJaJpIntroduction : [
			            { required: true, message: this.$t('article.gameMission.vJaInfo'), trigger: 'blur' } 
			        ],
			        gameKoKrIntroduction: [
			            { required: true, message: this.$t('article.gameMission.vKoInfo'), trigger: 'blur' } 
			        ],
			        
			        gameZhCnDetail : [
			            { required: true, message: this.$t('article.gameMission.vZhDescription'), trigger: 'blur' } 
			        ],
			        gameEnUsDetail: [
			            { required: true, message: this.$t('article.gameMission.vEnDescription'), trigger: 'blur' } 
			        ],
			        gameJaJpDetail : [
			            { required: true, message: this.$t('article.gameMission.vJaDescription'), trigger: 'blur' } 
			        ],
			        gameKoKrDetail: [
			            { required: true, message: this.$t('article.gameMission.vKoDescription'), trigger: 'blur' } 
			        ],
			        
			        
			        areaId: [
			            { required: true,type: 'number', message: this.$t('article.story.storyinfoarea'), trigger: 'blur' } 
			        ],
			        giftId: [
			            { required: true,type: 'number', message: this.$t('article.gameMission.vgift'), trigger: 'blur' } 
			        ],
			        gameStatus: [
			            { required: true,type: 'number', message: this.$t('commom.storyinfostatus'), trigger: 'blur' } 
			        ],
			        qrCode: [
			            { required: true,message: this.$t('article.gameMission.vqrCode'), trigger: 'blur' } 
			        ],
                },
            }
        },
        mouted(){
        },
        created() {
			apparticleGetareas().then(res => {
				this.arealist = res.data.obj
			})
			
			gamegiftinfoNopages().then(res => {
				this.giftlist = res.data.obj
			})
			
		},
        watch: {
			pageData() {
				this.$refs.gamemissionForm.resetFields();
			},
			
		},
        methods:{
        	validate(fn){
		        this.$refs.gamemissionForm.validate(fn); 
		      },
		      syncTextarea(value){
			 	this.pageData.gameZhCnDetail +=value
			 	this.pageData.gameEnUsDetail+=value
			 	this.pageData.gameJaJpDetail +=value
			 	this.pageData.gameKoKrDetail+=value
			}
        },
    }
</script>