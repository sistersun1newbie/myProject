<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="6">
				<el-input size="large" @keyup.native.enter='onQuery' v-model="searchValue" :placeholder="$t('msgDetail.searchAlert')"></el-input>
			</el-col>
			<el-col :span="2">
				<el-button size="large" icon="search" @click="onQuery">{{$t('commom.search')}}</el-button>
			</el-col>
			<el-col :span="4" :offset="12">
				<el-button size="large" type="primary" v-show="false" icon="plus" style="float: right;margin:  0px 20px" @click="showDilog('add')">
					{{$t('commom.add')}}
				</el-button>
			</el-col>
		</el-row>
		<br/>
		<el-table :data="tableData.data" border stripe highlight-current-row style="width: 100%">
			<el-table-column :label="$t('commom.seq')" align="center" width="100">
				<template scope="scope">
					<span style="margin-left: 10px">{{ scope.$index+1+(page&&page.start||0 )}}</span>
				</template>
			</el-table-column>
			<el-table-column :label="$t('msgDetail.msgTitle')" align="center" min-width="150">
				<template scope="scope">
					<span style="margin-left: 10px">{{ scope.row.msgTitle }}</span>
				</template>
			</el-table-column>

			<el-table-column :label="$t('msgDetail.infotime')" align="center" min-width="150">
				<template scope="scope">
					<span style="margin-left: 10px">{{ scope.row.msgTime }}</span>
				</template>
			</el-table-column>
			<el-table-column :label="$t('msgDetail.msgtype')" align="center" min-width="150">
				<template scope="scope">
					<span style="margin-left: 10px">{{ scope.row.msgType==1?($t('msgDetail.msgtype1')):( scope.row.msgType==2?($t('msgDetail.msgtype2')):($t('msgDetail.msgtype3')) ) }}</span>
				</template>
			</el-table-column>
			<el-table-column :label="$t('commom.operation')" align="center" min-width="277" :fixed="$store.getters.isMobile?false:'right'">
				<template scope="scope">
					<el-button size="small" @click="showDilog('detail',scope.row)" type="warning" icon="information">
						{{$t('commom.detail')}}
					</el-button>
					<el-button size="small" v-show="false" @click="showDilog('edit', scope.row)" type="primary" icon="edit">{{$t('commom.edit')}}
					</el-button>

					<el-button size="small" v-show="false" @click="handleDelete(scope.row)" type="danger" icon="delete">{{$t('commom.delete')}}
					</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination style="overflow: auto" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizes" :page-size="page.length" layout="total, sizes, prev, pager, next, jumper" :total="tableData.recordsTotal" />
		<el-dialog v-model="dialogVisible" :close-on-click-modal='false' :size="$store.getters.isMobile?'full': 'small'">
			<storyform :pageData='pageData' :disabled="dialogTyle==='detail'" ref='storyForm' />

			<div style="float: right;margin-bottom: 20px">
				<el-button @click="dialogVisible=false">{{$t('commom.cancel')}}</el-button>
				<el-button type="primary" @click="onSubmit" v-show="dialogTyle!=='detail'">{{$t('commom.sure')}}</el-button>
			</div>
		</el-dialog>

	</div>
</template>

<script>
	import {
		msgcontentPages,
		msgcontentAdd,
		msgcontentUpdate,
		msgcontentDelete,
		//	msgcontentDetail
	} from 'api/api';
	import storyform from './forms/messageDetailsForm';
	let pageData = {
		msgContent:'',
		msgEnUsContent:'',
		msgEnUsTitle:'',
		msgGroup:'',
		msgId:'',
		msgJaJpContent:'',
		msgJaJpTitle:'',
		msgJoinUserList:'',
		msgKoKrContent:'',
		msgKoKrTitle:'',
		msgTime:'',
		msgTitle:'',
		msgType:'',
		msgZhCnContent:'',
		msgZhCnTitle:'',
		noticeType:'',
		status:'',
		templateId:'',
		userId:'',
	}
	export default {
		data() {
			return {
				searchValue: '',
				tableData: {},
				dialogVisible: false,
				dialogTyle: '',
				page: {
					start: 0,
					length: 10,
					draw: 1,
				},
				currentPage: 1,
				pageSizes: [10, 20, 30],

				pageData: {
					...pageData
				},
			}
		},
		components: {
			storyform,
		},
		created() {
			this.init()
		},
		watch: {
			searchValue(value) {
				if(!value) {//msgTitle
					msgcontentPages(this.page).then(res => {
						this.tableData = res.data.obj
					})
				}
			}
		},
		methods: {
			init() {
				msgcontentPages(this.page).then(res => {
					this.tableData = res.data.obj
				})
			},
			onQuery() {
				if(this.searchValue) {
					msgcontentPages({ ...this.page,
						msgTitle: this.searchValue
					}).then(res => {
						this.tableData = res.data.obj
					})
				}
			},
			showDilog(type, obj = pageData) {
				this.dialogVisible = true
				this.dialogTyle = type
				this.pageData = { ...obj
				}

			},
			onSubmit() {
				this.$refs.storyForm.validate(valid => valid && this.commitForm())
			},
			commitForm() {
				for(let key in this.pageData) {
					if(key.indexOf('Time') > -1) {
						delete this.pageData[key]
					}
				}
				if(this.dialogTyle === 'edit') {

					msgcontentUpdate(this.pageData).then(res => {
						this.init()
						this.dialogVisible = false
					})
				}else if(this.dialogTyle === 'add') {
					msgcontentAdd(this.pageData).then(res => {
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

					msgcontentDelete({
						msgId: obj.msgId
					}).then(res => {
						this.init()
					})

				}).catch(res => {

				})

			},
			getpageData() {
				msgcontentPages({ ...this.page,
					msgTitle: this.searchValue
				}).then(res => {
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
				setTimeout(() => {
					this.getpageData()
				}, 0)
			},
		}
	}
</script>

<style lang="less">

</style>