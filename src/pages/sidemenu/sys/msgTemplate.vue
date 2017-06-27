<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="6">
				<el-input size="large" @keyup.native.enter='onQuery' v-model="searchValue" :placeholder="$t('msgTemplate.vtemp')"></el-input>
			</el-col>
			<el-col :span="2">
				<el-button size="large" icon="search" @click="onQuery">{{$t('commom.search')}}</el-button>
			</el-col>
			<el-col :span="4" :offset="12">
				<el-button size="large" type="primary" icon="plus" style="float: right;margin:  0px 20px" @click="showDilog('add')">
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
			<el-table-column :label="$t('msgTemplate.messageTitle')" align="center" min-width="150">
				<template scope="scope">
					<span style="margin-left: 10px">{{ scope.row.tempTitle }}</span>
				</template>
			</el-table-column>

			<el-table-column :label="$t('msgTemplate.noticeType')" align="center" min-width="150">
				<template scope="scope">
					<span style="margin-left: 10px">{{ scope.row.noticeType==1?($t('msgTemplate.noticeType1')):(scope.row.noticeType==2?($t('msgTemplate.noticeType2')):($t('msgTemplate.noticeType3'))) }}</span>
				</template>
			</el-table-column>
			<el-table-column :label="$t('msgTemplate.sendType')" align="center" min-width="150">
				<template scope="scope">
					<span style="margin-left: 10px">{{ scope.row.sendType==1?$t('msgTemplate.sendType1'):(scope.row.sendType==2?$t('msgTemplate.sendType2'):$t('msgTemplate.sendType3')) }}</span>
				</template>
			</el-table-column>
			<el-table-column :label="$t('commom.status')" align="center" min-width="150">
				<template scope="scope">
					<span style="margin-left: 10px">{{ scope.row.templateStatus==2?($t('business.pointrules.down')):($t('business.pointrules.up')) }}</span>
				</template>
			</el-table-column>
			<el-table-column :label="$t('commom.operation')" align="center" min-width="277" :fixed="$store.getters.isMobile?false:'right'">
				<template scope="scope">
					<el-button size="small" @click="showDilog('detail',scope.row)" type="warning" icon="information">
						{{$t('commom.detail')}}
					</el-button>
					<el-button size="small" @click="showDilog('edit', scope.row)" type="primary" icon="edit">{{$t('commom.edit')}}
					</el-button>

					<el-button size="small" @click="handleDelete(scope.row)" type="danger" icon="delete">{{$t('commom.delete')}}
					</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination style="overflow: auto" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizes" :page-size="page.length" layout="total, sizes, prev, pager, next, jumper" :total="tableData.recordsTotal" />
		<el-dialog v-model="dialogVisible" :close-on-click-modal='false' :size="$store.getters.isMobile?'full': 'small'">
			<storyform :pageData='pageData'
                       :disabled="dialogTyle==='detail'"
                       ref='storyForm' />

			<div style="float: right;margin-bottom: 20px">
				<el-button @click="dialogVisible=false">{{$t('commom.cancel')}}</el-button>
				<el-button type="primary" @click="onSubmit" v-show="dialogTyle!=='detail'">{{$t('commom.sure')}}</el-button>
			</div>
		</el-dialog>

	</div>
</template>

<script>
	import {
		msgtemplatePages,
		//	msgtemplateMsg,
		msgtemplateAdd,
		msgtemplateUpdate,
		msgtemplateDelete,
		//	msgtemplateDetail
	} from 'api/api';
	import storyform from './msgTemplateForm/msgTemplateForm';
	let pageData = {
		createTime:"",
		creator:"",
		language:"",
		modifyTime:"",
		modifyor:"",
		tempTitle:"",
		tempContent:"",
		tempEnUsContent:"",
		tempEnUsTitle:"",
		tempJaJpContent:"",
		tempJaJpTitle:"",
		tempKoKrContent:"",
		tempKoKrTitle:"",
		tempZhCnContent:"",
		tempZhCnTitle:"",
		templateCode:"",
		templateId:"",
		tempVars:"",
		noticeType:"",
		sendType:"",
		templateStatus:"",
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
			this.init(this.page)
		},
		watch: {
			searchValue(value) {
				if(!value) {
					msgtemplatePages(this.page).then(res => {
						this.tableData = res.data.obj
					})
				}
			}
		},
		methods: {
			init(obj) {
				msgtemplatePages(this.page).then(res => {
					this.tableData = res.data.obj
				})
			},
			onQuery() {
				if(this.searchValue) {
					msgtemplatePages({ ...this.page,
						tempTitle: this.searchValue
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

					msgtemplateUpdate(this.pageData).then(res => {
						this.init(this.page)
						this.dialogVisible = false
					})
				} else if(this.dialogTyle === 'add') {
					msgtemplateAdd(this.pageData).then(res => {
						this.init(this.page)
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

					msgtemplateDelete({
						templateId: obj.templateId
					}).then(res => {
						this.init(this.page)
					})

				}).catch(res => {

				})

			},
			getpageData() {
				msgtemplatePages({ ...this.page,
					ruleTitle: this.searchValue
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