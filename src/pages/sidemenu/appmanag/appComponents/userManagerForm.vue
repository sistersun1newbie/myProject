<template>
	<el-form :model="pageData" ref='userManager' :rules="rules" :label-position="$store.getters.isMobile?'top':'right'">
		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('appmanag.usermanager.userimg')" label-width="150px" prop="avatar">
				<input type="file" accept="image/png, image/jpeg, image/bmp, image/gif" id="userMangFile" @change='getFile' style="display:none">
				<ul class="el-upload-list el-upload-list--picture-card">
					<li class="el-upload-list__item  ">
						<img :src="base64Img||pageData.avatar" alt="" class="el-upload-list__item-thumbnail">

						<span class="el-upload-list__item-actions" v-show='!disabled'>
                 <span class="el-upload-list__item-delete">
                      <i class="el-icon-delete2" v-show='base64Img||pageData.avatar' @click="deleteImg" style="font-size:40px"/> 
                      <i class="el-icon-plus" v-show='!base64Img&&!pageData.avatar' @click="addImg" style="font-size:40px" /> 
                   </span>
						</span>
					</li>
				</ul>
			</el-form-item>
		</el-col>

		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('appmanag.usermanager.realName')" label-width="150px" prop="realName">
				<el-input v-model="pageData.realName" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>

		<!--<el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('appmanag.usermanager.gender')" label-width="150px" prop="gender">
          <el-input v-model="pageData.gender" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>-->

		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('appmanag.usermanager.gender')" label-width="150px" prop="gender">
				<el-radio class="radio" v-model="pageData.gender" :label="2" :disabled="disabled">{{$t('appmanag.usermanager.genderfemale')}}</el-radio>
				<el-radio class="radio" v-model="pageData.gender" :label="1" :disabled="disabled">{{$t('appmanag.usermanager.gendermale')}}</el-radio>
				<el-radio class="radio" v-model="pageData.gender" :label="0" :disabled="disabled">{{$t('appmanag.usermanager.genderunknow')}}</el-radio>
			</el-form-item>
		</el-col>

		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('appmanag.usermanager.userCode')" label-width="150px" prop="userCode">
				<el-input v-model="pageData.userCode" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>

		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('appmanag.usermanager.nikeName')" label-width="150px" prop="nikeName">
				<el-input v-model="pageData.nikeName" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>

		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('appmanag.usermanager.passportNo')" label-width="150px" prop="passportNo">
				<el-input v-model="pageData.passportNo" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>

		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('appmanag.usermanager.cfType')" label-width="150px" prop="cfType">
				<el-input v-model="pageData.cfType" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>

		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('appmanag.usermanager.deviceType')" label-width="150px" prop="deviceType">
				<el-input v-model="pageData.deviceType" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>

		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('appmanag.usermanager.deviceCode')" label-width="150px" prop="deviceCode">
				<el-input v-model="pageData.deviceCode" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>

		<!--     <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('appmanag.usermanager.userCountry')" label-width="150px" prop="userCountry">
          <el-input v-model="pageData.userCountry" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>-->
		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('appmanag.usermanager.userCountry')" label-width="150px" prop="userCountry">
				<el-select style="width: 100%;" v-model="pageData.userCountry" :placeholder="$t('commom.select')">
					<el-option v-for="item in countryData" :label="item.name" :value="item.dictCode" :disabled="disabled" :key="item.dictCode">
					</el-option>
				</el-select>
			</el-form-item>
		</el-col>

		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('appmanag.usermanager.userName')" label-width="150px" prop="userName">
				<el-input v-model="pageData.userName" auto-complete="off" :disabled="true" />
			</el-form-item>
		</el-col>

		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('appmanag.usermanager.userPwd')" label-width="150px" prop="userPwd">
				<el-input v-model="pageData.userPwd" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>

		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('appmanag.usermanager.telPrefix')" label-width="150px" prop="telPrefix">
				<el-input v-model="pageData.telPrefix" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>
		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('appmanag.usermanager.phoneform')" label-width="150px" prop="phone">
				<el-input v-model="pageData.phone" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>
		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('appmanag.usermanager.emailform')" label-width="150px" prop="email">
				<el-input v-model="pageData.email" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>
	</el-form>
</template>
<script>
	import {
		appuserCountrycode
	} from 'api/api';
	export default {
		props: {
			disabled: Boolean,
			pageData: Object,
		},
		data() {
			return {
				countryData: '',
				base64Img: '',
				rules: {
					avatar: [{
						required: true,
						validator:(rule, value, callback)=>{
                    	if (value==null||value=='') {
				          callback(new Error(this.$t('appmanag.usermanager.vuserimg')));
				        }else if (typeof value!='object'&& typeof value!='string') {
				          callback(new Error(this.$t('appmanag.usermanager.vuserimg')));
				        } else {
				          callback();
				        }
                   		 },
//						message: this.$t('appmanag.usermanager.vuserimg'),
						trigger: 'blur'
					}],
					realName: [{
						required: true,
						message: this.$t('appmanag.usermanager.vrealName'),
						trigger: 'blur'
					}],
					gender: [{
						required: true,
						type: 'number',
						message: this.$t('appmanag.usermanager.vgender'),
						trigger: 'blur'
					}],
					userCode: [{
						required: true,
						message: this.$t('appmanag.usermanager.vuserCode'),
						trigger: 'blur'
					}],
					nikeName: [{
						required: true,
						message: this.$t('appmanag.usermanager.vnikeName'),
						trigger: 'blur'
					}],
					passportNo: [{
						required: true,
						message: this.$t('appmanag.usermanager.vpassportNo'),
						trigger: 'blur'
					}],
					cfType: [{
						required: true,
						message: this.$t('appmanag.usermanager.vcfType'),
						trigger: 'blur'
					}],
					deviceType: [{
						required: true,
						message: this.$t('appmanag.usermanager.vdeviceType'),
						trigger: 'blur'
					}],
					deviceCode: [{
						required: true,
						message: this.$t('appmanag.usermanager.vdeviceCode'),
						trigger: 'blur'
					}],
					userCountry: [{
						required: true,
						message: this.$t('appmanag.usermanager.vuserCountry'),
						trigger: 'blur'
					}],
					userName: [{
						required: true,
						message: this.$t('appmanag.usermanager.vuserName'),
						trigger: 'blur'
					}],

					userPwd: [{
						required: true,
						message: this.$t('appmanag.usermanager.vuserPwd'),
						trigger: 'blur'
					}],
					telPrefix: [{
						required: true,
						message: this.$t('appmanag.usermanager.vtelPrefix'),
						trigger: 'blur'
					}],
					phone: [{
						required: true,
						message: this.$t('appmanag.usermanager.vphoneform'),
						trigger: 'blur'
					}],
					email: [{
						required: true,
						message: this.$t('appmanag.usermanager.vemailform'),
						trigger: 'blur'
					}],
					//type: 'number',
				},
			}
		},
		created() {
			appuserCountrycode().then(res => {
				this.countryData = res.data.obj
			})
		},
		mounted(){
		},
		methods: {
			getFile(e) {
				let file = e.target.files[0]
				if(file) {
					this.pageData.avatar = file
					let reader = new FileReader();
					reader.onload = () => {
						this.base64Img = reader.result //这个就是base64的数据了
					}
					reader.readAsDataURL(file);
				}
			},
			deleteImg() {
				this.pageData.avatar = '';
				this.base64Img = '';
				document.getElementById('userMangFile').value = ''
			},
			addImg() {
				document.getElementById('userMangFile').click()
			},
			validate(fn) {
				this.$refs.userManager.validate(fn);
			},
		},
		watch: {
            pageData(val){
            	document.getElementById('userMangFile').value=''
                this.base64Img=''
		        this.$refs.userManager.resetFields();
            }
        },
	}
</script>