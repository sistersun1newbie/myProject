<template>
	<section>
		<el-row :gutter="20">
			<el-col :span="6">
				<el-input size="large" @keyup.native.enter='search' v-model="condition" :placeholder="$t('sysUserLogin.vuserName')"></el-input>
			</el-col>
			<el-col :span="2">
				<el-button size="large" icon="search" @click="search">{{$t('commom.search')}}</el-button>
			</el-col>
			<el-col :span="6" :offset="10">
				<el-button size="large" type="primary" icon="plus" style="float: right;margin:  0px 20px" @click="showDetail(null,null,'add')">
					{{$t('commom.add')}}
				</el-button>
			</el-col>
		</el-row>
		<br>
		<el-table :data="tableData.data" border stripe highlight-current-row style="width: 100%">
			 <el-table-column :label="$t('commom.seq')"
             align="center"
              width="100">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.$index+1+(page&&page.start||0 )}}</span>
                </template>
            </el-table-column>
			<el-table-column align="center" prop="userName" :label="$t('sysUserLogin.userName')" min-width="180">
			</el-table-column>
			<el-table-column align="center" prop="userPhone" :label="$t('sysUserLogin.phone')" min-width="180">
			</el-table-column>
			<el-table-column align="center" prop="userEmail" min-width="180" :label="$t('sysUserLogin.email')">
			</el-table-column>
			<el-table-column align="center" prop="busUserInfo.realName" min-width="180" :label="$t('sysUserLogin.realName')">
			</el-table-column>
			<el-table-column :label="$t('commom.operation')" align="center" min-width="360" :fixed="$store.getters.isMobile?false:'right'">
				<template scope="scope">
						<el-button size="small" type="warning" icon="information" @click="showDetail(scope.row, tableData.data,'detail')">
							{{$t("commom.detail")}}
						</el-button>
						<el-button type="primary" icon="edit" size="small" @click="showDetail(scope.row, tableData.data,'edit')">
							{{$t('commom.edit')}}
						</el-button>

					<el-button type="danger" icon="delete" size="small" @click="deleteSysUserLongin(scope.row)">
						{{$t('commom.delete')}}
					</el-button>
					<el-button type="success" icon="setting" size="small" @click="resetPsw(scope.row, tableData.data)">
						{{$t('sysUserLogin.resetPws')}}
					</el-button>
				</template>
			</el-table-column>
		</el-table>
		<!--详情弹窗-->

		<el-dialog v-model="dialogFlag"  :close-on-click-modal='false'
                   :size="$store.getters.isMobile?'full': 'small'">
			<el-form :model="form" :rules="rules" ref='formref' :label-position="$store.getters.isMobile?'top':'right'">
				
				<el-col :span="$store.getters.isMobile?24:11">
					<el-form-item :label="$t('sysUserLogin.headImg')" :label-width="formLabelWidth">

						<input type="file" accept="image/png, image/jpeg, image/bmp, image/gif" @change='getFile($event)' id="File" style="display:none">
						<ul class="el-upload-list el-upload-list--picture-card">
							<li class="el-upload-list__item  ">
								<img :src="base64Img||form.busUserInfo.avatar" alt="" class="el-upload-list__item-thumbnail">
								<span class="el-upload-list__item-actions" v-if="!disabled">
                   <span class="el-upload-list__item-delete">
                        <i class="el-icon-delete2" v-show='base64Img||form.busUserInfo.avatar' @click="deleteImg()" style="font-size:40px"/>
                        <i class="el-icon-plus" v-show='!base64Img&&!form.busUserInfo.avatar' @click="addImg()" style="font-size:40px" />
                     </span>
								</span>
							</li>
						</ul>

					</el-form-item>
				</el-col>
				
				<el-col :span="$store.getters.isMobile?24:11">
					<el-form-item :label="$t('sysUserLogin.userName')" :label-width="formLabelWidth" prop="userName">
						<el-input v-model="form.userName" size="small" :disabled="userNameFlag"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="$store.getters.isMobile?24:11" v-if="noneFlag">
					<el-form-item :label="$t('sysUserLogin.passWord')" :label-width="formLabelWidth" prop="userPwd">
						<el-input type="password" v-model="form.userPwd" size="small"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="$store.getters.isMobile?24:11" v-if="noneFlag">
					<el-form-item :label="$t('sysUserLogin.passWord')" :label-width="formLabelWidth" prop="vuserPwd">
						<el-input type="password" v-model="form.vuserPwd" size="small"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="$store.getters.isMobile?24:11">
					<el-form-item :label="$t('sysUserLogin.phone')" :label-width="formLabelWidth" prop="userPhone">
						<el-input size="small" v-model="form.userPhone" :disabled="disabled"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="$store.getters.isMobile?24:11">
					<el-form-item :label="$t('sysUserLogin.email')" :label-width="formLabelWidth" prop="userEmail">
						<el-input size="small" v-model="form.userEmail" :disabled="disabled"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="$store.getters.isMobile?24:11">
					<el-form-item :label="$t('sysUserLogin.realName')" :label-width="formLabelWidth">
						<el-input size="small" v-model="form.busUserInfo.realName" :disabled="disabled"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="$store.getters.isMobile?24:11">
					<el-form-item :label="$t('sysUserLogin.nickName')" :label-width="formLabelWidth" prop="busUserInfo.nikeName">
						<el-input size="small" v-model="form.busUserInfo.nikeName" :disabled="disabled"></el-input>
					</el-form-item>
				</el-col>

				<el-col :span="$store.getters.isMobile?24:11">
					<el-form-item :label="$t('sysUserLogin.sex')" :label-width="formLabelWidth">
						<el-radio class="radio" v-model="form.busUserInfo.gender" :label="true" :disabled="disabled">{{$t('appmanag.usermanager.gendermale')}}</el-radio>
						<el-radio class="radio" v-model="form.busUserInfo.gender" :label="false" :disabled="disabled">{{$t('appmanag.usermanager.genderfemale')}}</el-radio>
					</el-form-item>
				</el-col>

				

				<el-col :span="$store.getters.isMobile?24:11">
					<el-form-item :label="$t('sysRole.roleName')" :label-width="formLabelWidth" prop="roles">
						<el-select  style="width: 100%;" v-model="form.roles" multiple :placeholder="$t('commom.select')" :disabled="disabled">
							<el-option v-for="(item,index) in allRole" :key='index' :label="item.roleName" :value="item.roleId">
							</el-option>
						</el-select>
					</el-form-item>
				</el-col>

			</el-form>
			
			<div style="float: right;margin-bottom: 20px">
				<el-button @click="dialogFlag = false">{{$t('commom.cancel')}}</el-button>
				<el-button type="primary" v-show="showType=='edit'||showType=='add'" @click="updateOrAdd">
					{{$t('commom.sure')}}
				</el-button>
			</div>
		</el-dialog>

		<el-pagination style="overflow: auto" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizes" :page-size="page.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.recordsTotal" />
	</section>

</template>

<script>
	import { mapActions, mapState } from 'vuex'
	import { sysUserLoginAdd, sysRoleGetAll, sysUserLoginUpdate, sysUserLoginDelete,sysuserResetpassworde } from "api/api"
	let form = {
		realName: "",
		nikeName: "",
		roles: [],
		gender: true,
		busUserInfo: {
			avatar: '',
			gender: true
		},
		userPwd: "",
		vuserPwd: "",
	}
	export default {
		data() {
			return {
				dialogFlag: false,
				condition: "",
				page: {
					start: 0,
					length: 10,
					draw: 1
				},
				currentPage: 1,
				pageSizes: [10, 20, 30],
				form: { ...form
				},
				formLabelWidth: "120px",
				disabled: false,
				showType: "",
				base64Img: "",
				allRole: [],
				noneFlag: true,
				userNameFlag: false,
				rules: {
					userName: [{
						required: true,
						message: this.$t('sysUserLogin.vuserName'),
						trigger: 'blur'
					}],
					userPwd: [{
						required: true,
						//						message: this.$t('business.pointrules.binfoZhCnName'),
						validator: (rule, value, callback) => {
							if(value === '' || value == null) {
								callback(new Error(this.$t('sysUserLogin.vpassWord')));//vpassWordLength
							}else if(value.length<8){
								callback(new Error(this.$t('sysUserLogin.vpassWordLength')));
							} else {
								if(this.form.vuserPwd !== '') {
									this.$refs.formref.validateField('vuserPwd');
								}
								callback();
							}
						},
						trigger: 'blur'
					}],
					vuserPwd: [{
						required: true,
						//						message: this.$t('business.pointrules.binfoZhCnName'),
						validator: (rule, value, callback) => {
							if(value === '' || value == null) {
								callback(new Error(this.$t('sysUserLogin.vpassWordsecond')));
							} else if(value !== this.form.userPwd) {
								callback(new Error(this.$t('sysUserLogin.vpassWordNotSame')));
							} else {
								callback();
							}
						},
						trigger: 'blur'
					}],
					roles: [{
						required: true,
						type: 'array',
						message: this.$t('sysUserLogin.vroleName'),
						trigger: 'blur'
					}],

				},
			}
		},

		computed: {
			...mapState({
				tableData: state => state.sysUserLogin.sysUserLogins,
			}),
		},

		methods: {
			...mapActions([
				"sysUserLoginPage"
			]),
			handleSizeChange(val) {
				this.page.length = val
				this.page.start = (this.currentPage - 1) * this.page.length
				this.search();
			},

			handleCurrentChange(val) {
				this.currentPage = val;
				this.page.start = (this.currentPage - 1) * this.page.length
				this.search();
			},
			validate(fn) {
				this.$refs.formref.validate(fn);
			},
			search() {
					this.sysUserLoginPage({ ...this.page,
						userName: this.condition
					});
			},
			showDetail(role, data, flag) {
				this.showType = flag
				this.dialogFlag = true;
				if("add" == flag) {
					this.form = { ...form}
					this.noneFlag = true;
					this.disabled = false;
					this.userNameFlag = false;

				} else if("detail" == flag) {
					this.userNameFlag = true;
					this.noneFlag = false;
					this.disabled = true;
					this.form = { ...role,
						roles: [...role.roles]
					}
					this.form.roles = this.form.roles.map(obj => {
						return obj.roleId
					})
				} else if("edit" == flag) {
					this.userNameFlag = true;
					this.noneFlag = false;
					this.disabled = false;
					this.form = { ...role,
						roles: [...role.roles]
					}
					this.form.roles = this.form.roles.map(obj => {
						return obj.roleId
					})
				}

			},
			deleteSysUserLongin(data) {
				let self = this;
				this.$msgbox({
					title: self.$t("commom.alertTitle"),
					message: self.$t("commom.deleConfim"),
					showCancelButton: true,
					confirmButtonText: self.$t("commom.yes"),
					cancelButtonText: self.$t("commom.no"),
					beforeClose: (action, instance, done) => {
						if(action === 'confirm') {
							instance.confirmButtonLoading = true;
							instance.confirmButtonText = self.$t('commom.loading');
							sysUserLoginDelete({
								userId: data.userId
							}).then(() => {
								this.sysUserLoginPage(this.page);
								instance.confirmButtonLoading = false;
								done();
							}).catch(() => {
								instance.confirmButtonLoading = false;
								done();
							})
						} else {
							done();
						}
					}
				})
			},

			updateOrAdd() {
				this.validate(valid => valid && this.commitForm())

			},
			commitForm() {
				let tempobj ={...this.form}
				for(let key in tempobj){
	        		if(key.indexOf('time')>-1){
	        			delete  tempobj[key]
	        		}
	        		if(key.indexOf('Time')>-1){
	        			delete  tempobj[key]
	        		}
	        	}
				for(let key in tempobj ){
					 if(tempobj[key]==null|| tempobj[key]=='null'|| tempobj[key]=='undefined'|| tempobj[key]==undefined){
					 	delete  tempobj[key]
					 }
	        	}
				if(this.showType == "add") {
					//添加
					let formData = new FormData();
					 tempobj.busUserInfo.gender&&(tempobj.gender = tempobj.busUserInfo.gender);
					tempobj.busUserInfo.realName&&(tempobj.realName = tempobj.busUserInfo.realName);
					tempobj.busUserInfo.nikeName&&(tempobj.nikeName = tempobj.busUserInfo.nikeName);
					delete tempobj.busUserInfo;
					for(let key in tempobj) {
						if(key == 'roles') {
							formData.append("role", tempobj[key])
						} else {
							formData.append(key, tempobj[key])
						}
					}
					sysUserLoginAdd(formData).then(() => {
						
						this.search();
						this.dialogFlag = false

					})
				} else if(this.showType == "edit") {
					//修改
					let formData = new FormData();
					// formData.append("headImg",tempobj.headImg)
					tempobj.gender = tempobj.busUserInfo.gender;
					tempobj.realName = tempobj.busUserInfo.realName;
					tempobj.nikeName = tempobj.busUserInfo.nikeName;
					tempobj.avatar = tempobj.busUserInfo.avatar;
					delete tempobj.busUserInfo;
					for(let key in tempobj) {
						if(key == 'roles') {
							formData.append("role", tempobj[key])
						} else if(key == 'avatar') {
							formData.append("headImg", tempobj[key])
						} else {
							formData.append(key, tempobj[key])
						}

					}
					sysUserLoginUpdate(formData).then(() => {
						this.search();
						this.dialogFlag = false
					})
				}
			},
			deleteImg() {
				this.form.busUserInfo.avatar = ''; //TODO
				this.base64Img = '';
				document.getElementById('File').value = ''
			},
			addImg() {
				document.getElementById('File').click();
			},
			getFile(e, type) {
				let file = e.target.files[0]
				if(file) {
					//					this.form. = file
					let reader = new FileReader();
					reader.onload = () => {
						this.base64Img = reader.result //这个就是base64的数据了
					}
					reader.readAsDataURL(file);
				}
			},
			resetPsw(data) {
				//重置密码
				this.$confirm(this.$t('sysUserLogin.deleConfim'), '', {
					confirmButtonText: this.$t('commom.sure'),
					cancelButtonText: this.$t('commom.cancel'),
					type: 'warning'
				}).then(() => {
						sysuserResetpassworde({
	                    userId: data.userId
	                }).then(res => {
	                	this.$confirm(this.$t('sysUserLogin.newpassword')+res.data.obj, '', {
							confirmButtonText: this.$t('commom.sure'),
							cancelButtonText: this.$t('commom.cancel'),
							type: 'warning'
						}).then(() => {
	                	}).catch(res => {
						})
	                	
	                })

				}).catch(res => {
				})
			}

		},
		watch: {
			condition(value) {
				if(!value) {
					this.sysUserLoginPage({ ...this.page
					})
				}
			},
			form() {
				this.$refs.formref && (this.base64Img = '',
					document.getElementById('File').value = '',
					this.$refs.formref.resetFields())
			}
		},
		created() {
			this.sysUserLoginPage(this.page);
			sysRoleGetAll().then((res) => {
				this.allRole = res.data.obj
			})
		},

	}
</script>