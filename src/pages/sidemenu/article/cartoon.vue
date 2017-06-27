<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="6">
				<el-input size="large" @keyup.native.enter='onQuery' v-model="searchValue" :placeholder="$t('article.story.search')"></el-input>
			</el-col>
			<el-col :span="2">
				<el-button size="large" icon="search" @click="onQuery">{{$t('commom.search')}}</el-button>
			</el-col>
			<el-col :span="4" :offset="12">
				<el-button size="large" type="primary" style="float: right;margin:  0px 20px" icon="plus" @click="showDilog('add')">
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
                    <span style="margin-left: 10px">{{ scope.$index+1+page.start }}</span>
                </template>
            </el-table-column>
			 <el-table-column :label="$t('article.story.title')"
                     align="center"
                     min-width="150">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.articleTitle }}</span>
                </template>
            </el-table-column>
            <el-table-column :label="$t('article.story.author')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.articleAuthor }}</span>
                </template>
            </el-table-column>
            
            <el-table-column :label="$t('article.story.areaId')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.areaName }}</span>
                </template>
            </el-table-column>
			 <el-table-column :label="$t('commom.status')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.status===1?$t('commom.up'):$t('commom.down') }}</span>
                </template>
            </el-table-column>
            <el-table-column :label="$t('commom.operation')"
                             align="center"
							 :fixed="$store.getters.isMobile?false:'right'"
                             min-width="277">
                <template scope="scope">
                		<el-button size="small"
                               @click="showDilog('detail',scope.row)"
                               type="warning"
                               icon="information" >
                        {{$t('commom.detail')}}
                    </el-button>
                    <el-button size="small"
                               @click="showDilog('edit', scope.row)"
                               type="primary"
                               icon="edit">{{$t('commom.edit')}}
                    </el-button>
                    
                    <el-button size="small"
                               @click="handleDelete(scope.row)"
                               type="danger"
                               icon="delete">{{$t('commom.delete')}}
                    </el-button>
                </template>
            </el-table-column>
		</el-table>

		<el-pagination style="overflow: auto" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizes" :page-size="page.length" layout="total, sizes, prev, pager, next, jumper" :total="tableData.recordsTotal" />

		<el-dialog v-model="dialogVisible" :close-on-click-modal='false' :size="$store.getters.isMobile?'full': 'small'">
			<cartoonform :cartoonData='bootPageObj' :disabled="dialogTyle==='detail'" ref='cartoonForm' />
			<div style="float: right;margin-bottom: 20px">
				<el-button @click="dialogVisible=false">{{$t('commom.cancel')}}</el-button>
				<el-button type="primary" @click="onSubmit" v-show="dialogTyle!=='detail'">{{$t('commom.sure')}}</el-button>
			</div>
		</el-dialog>

	</div>
</template>

<script>
	import {
		articleCartoonAdd,
		articleCartoonPages,
//		articleDetail,
		articleDelete,
		articlecartoonUpdate
	} from 'api/api';
	import cartoonform from './articleComponents/cartoonForm';
	let bootPageObj = {
		pageId: '', //页面ID
		pictureUrl: "", //图片URL
		seq: '', //显示顺序
		showTime: '', //显示时间，备用
		areaId:'',
		articleCnZhDescription:'',
		articleJaJpDescription:'',
		articleKoKrDescription:'',
		articleEnUsDescription:'',
		isShow: 1,
		articleAuthor:localStorage.username||'',
		status:1
	}
	export default {
		data() {
			return {
				searchValue: '',
				tableData: {},
				dialogVisible: false,
				dialogTyle: '',
				bootPageObj: {
					...bootPageObj
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
			cartoonform
		},
		created() {
			this.init()
		},
		watch: {
	      searchValue(value){
	        if(!value){
	          articleCartoonPages(this.page).then(res => {
            	this.tableData = res.data.obj
            })
	        }
	      }
	    },
		methods: {
			init() {
				articleCartoonPages(this.page).then(res => {
					this.tableData = res.data.obj
				})
			},
			onQuery() {
				if(this.searchValue){
		          articleCartoonPages({...this.page,areaName:this.searchValue}).then(res => {
						this.tableData = res.data.obj
					})
		        }
				
			},
			showDilog(type, obj=bootPageObj) {
				this.dialogVisible = true
				this.dialogTyle = type
				this.bootPageObj = { ...obj }
			},
			onSubmit() {
				this.$refs.cartoonForm.validate(valid => valid && this.commitForm())
			},
			commitForm() {
				for(let key in this.bootPageObj ){
	        		if(key.indexOf('Time')>-1){
	        			delete  this.bootPageObj[key]
	        		}
	        	}
				if(this.dialogTyle === 'edit') {
					articlecartoonUpdate(this.bootPageObj).then(res => {
	                    this.init()
	                    this.dialogVisible = false
	                })
				} else if(this.dialogTyle === 'add') {
					 articleCartoonAdd(this.bootPageObj).then(res => {
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
						articleDelete({
	                    articleId: obj.articleId
	                }).then(res => {
	                    this.init()
	                })

				}).catch(res => {
				})
			},
			getpageData(){
		       	articleCartoonPages({...this.page,areaName:this.searchValue}).then(res => {
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