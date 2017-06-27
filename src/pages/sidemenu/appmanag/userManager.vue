<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="6">
				<el-input size="large"  @keyup.native.enter='onQuery' v-model="searchValue" :placeholder="$t('appmanag.usermanager.search')"></el-input>
			</el-col>
			<el-col :span="2">
				<el-button size="large" icon="search" @click="onQuery">{{$t('commom.search')}}</el-button>
			</el-col>
			<!--display: none;-->
			<el-col :span="6" :offset="20" style="display: none;">
				<el-button size="large" style="float: right;margin:  0px 20px"  type="primary" icon="plus" @click="showDilog('add')">
					{{$t('commom.add')}}
				</el-button>
			</el-col>
		</el-row>
		<br/>
		<el-table :data="tableData.data" border stripe highlight-current-row style="width: 100%">
			<el-table-column :label="$t('commom.seq')"
                     align="center"
                      width="100">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.$index+1+(page&&page.start||0 )}}</span>
                </template>
            </el-table-column>
			

			<el-table-column :label="$t('appmanag.usermanager.nikeName')" align="center" min-width="150">
				<template scope="scope">
					<span style="margin-left: 10px">{{ scope.row.nikeName  }}</span>
				</template>
			</el-table-column>
			<el-table-column :label="$t('appmanag.usermanager.realName')" align="center" min-width="150">
				<template scope="scope">
					<span style="margin-left: 10px">{{ scope.row.realName  }}</span>
				</template>
			</el-table-column>

			<el-table-column :label="$t('appmanag.usermanager.phone')" align="center" min-width="150">
				<template scope="scope">
					<span style="margin-left: 10px">{{ scope.row.phone  }}</span>
				</template>
			</el-table-column>
			<el-table-column :label="$t('appmanag.usermanager.email')" align="center" min-width="150">
				<template scope="scope">
					<span style="margin-left: 10px">{{ scope.row.email }}</span>
				</template>
			</el-table-column>
			<el-table-column :label="$t('appmanag.usermanager.userimg')" align="center" min-width="150">
				<template scope="scope">
					<ul class="el-upload-list el-upload-list--picture-card">
						<li class="el-upload-list__item  " style="width: 80px;height: 80px;margin: 3px 0 -4px 0;">
							<img :src="scope.row.avatar" alt="" class="el-upload-list__item-thumbnail">
						</li>
					</ul>
				</template>
			</el-table-column>
			<el-table-column :label="$t('commom.operation')" align="center" :fixed="$store.getters.isMobile?false:'right'" min-width="277">
				<template scope="scope">
					<el-button size="small" @click="showDilog('detail',scope.row)" type="warning" icon="information">
						{{$t('commom.detail')}}
					</el-button>
					<!--display: none;-->
					<el-button style="display: none;" size="small" @click="showDilog('edit', scope.row)" type="primary" icon="edit">{{$t('commom.edit')}}
					</el-button>

					<el-button size="small" @click="handleDelete(scope.row)" type="danger" icon="delete">{{$t('commom.delete')}}
					</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination style="overflow: auto" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizes" :page-size="page.length" layout="total, sizes, prev, pager, next, jumper" :total="tableData.recordsTotal" />

		<el-dialog v-model="dialogVisible" :close-on-click-modal='false' :size="$store.getters.isMobile?'full': 'small'">
			<userManagerform :pageData='pageData' :disabled="dialogTyle==='detail'" ref='userManager' />
			<div style="float: right;margin-bottom: 20px">
				<el-button @click="dialogVisible=false">{{$t('commom.cancel')}}</el-button>
				<el-button type="primary" @click="onSubmit" v-show="dialogTyle!=='detail'">{{$t('commom.sure')}}</el-button>
			</div>
		</el-dialog>

	</div>
</template>

<script>
	import {
		appuserPages,
		appuserAdd,
		appuserUpdate,
		appuserDelete,
		//appuserDetail
	} from 'api/api';
	import userManagerform from './appComponents/userManagerForm';
	let pageData = {
		avatar: '',
		cfType: '',
		createTime: '',
		creator: '',
		deviceCode: '',
		deviceType: '',
		email: '',
		gender: '',
		modifyTime: '',
		modifyor: '',
		nikeName: '',
		passportNo: '',
		phone: '',
		points: '',
		realName: '',
		statue: '',
		telPrefix: '',
		userCode: '',
		userCountry: '',
		userId: '',
		userName: '',
		userPwd: '',
		userSalt: '',
	}
	export default {
		data() {
			return {
				searchValue: '',
				tableData: {},
				dialogVisible: false,
				dialogTyle: '',
				pageData: {
					...pageData
				},
				page: {
					start: 0,
					length: 10,
					draw: 1,
				},
				currentPage: 1,
				pageSizes: [10, 20, 30],
			}
		},
		components: {
			userManagerform
		},
		created() {
			this.init()
		},
		watch: {
	    searchValue(value){
	        if(!value){
	          appuserPages(this.page).then(res => {
					this.tableData = res.data.obj
				})
	        }
	      }
	    },
		methods: {
			init() {
				appuserPages(this.page).then(res => {
					this.tableData = res.data.obj
				})
			},
			onQuery() {
				if(this.searchValue){
		           appuserPages({...this.page,userName:this.searchValue}).then(res => {
					this.tableData = res.data.obj
					})
		        }
			},
			showDilog(type, obj=pageData) {
				this.dialogVisible = true
				this.dialogTyle = type
				this.pageData = { ...obj }
			},
			onSubmit() {
				this.$refs.userManager.validate(valid => valid && this.commitForm())
			},
			commitForm() {
				let formData = new FormData();
				for(let key in this.pageData) {
					if(key == 'avatar') {
						formData.append('icon', this.pageData.avatar)// this.bootPageObj[key]
					} else {
						formData.append(key, this.pageData[key]);
					}
				}
				if(this.dialogTyle === 'edit') {

					appuserUpdate(formData).then(res => {
						this.init()
						this.dialogVisible = false
					})
				} else if(this.dialogTyle === 'add') {
					appuserAdd(formData).then(res => {
						this.init()
						this.dialogVisible = false
					})
				}
			},
			handleDelete(obj) {
				this.$confirm(this.$t('commom.deleConfim'), '', {
					confirmButtonText: this.$t('commom.sure'),
					cancelButtonText: this.$t('commom.cancel'),
					type: 'warning'
				}).then(() => {
					appuserDelete({
						userId: obj.userId
					}).then(res => {
						this.init()
					})
				}).catch(res => {

				})
			},
			getpageData(){
		       	appuserPages({...this.page,userName:this.searchValue}).then(res => {
					this.tableData = res.data.obj
				})
	        },
			handleSizeChange(val) {
				this.page.length = val
				this.page.start = (this.currentPage - 1) * this.page.length
		        	this.getpageData()
			},
			handleCurrentChange(val) {
				this.currentPage = val;
				this.page.start = (this.currentPage - 1) * this.page.length
				setTimeout(()=>{
		        	this.getpageData()
		        },0)
			},
			

		}
	}
</script>

<style lang="less">

</style>