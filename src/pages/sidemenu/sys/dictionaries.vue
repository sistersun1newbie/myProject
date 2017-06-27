<style lang="less" scoped>
/*.el-input{
	height: 40px;
	input{
		height: 40px;
	}
}*/
</style>
<template>
	<div>
		<el-row :gutter="20">
			<!--<el-col :span="6">
					<el-input size="large" @keyup.native.enter="onQuery(sertchType)" v-model="searchValue" :placeholder="$t('dictionaries.searchAlert')"></el-input>
				</el-col>
				<el-col :span="12" :xs="12">
					<el-dropdown split-button @click='onQuery'>
						{{sertchType==='name'?$t('dictionaries.search.name'):$t('dictionaries.search.dictType')}}
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item @click.native="onQuery('name')">{{$t('dictionaries.name')}}</el-dropdown-item>
							<el-dropdown-item @click.native="onQuery('dictType')">{{$t('dictionaries.dictType')}}</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</el-col>-->
	
			<el-col :span="18" :xs="23" id="input">
				<el-input :placeholder="$t('commom.input')" v-model="searchValue" size="large" style="">
					<el-select slot="prepend" v-model="sertchType" :placeholder="$t('commom.select')" style="width: 120px;">
						<el-option :label="$t('dictionaries.name')" value="name"></el-option>
						<el-option :label="$t('dictionaries.dictType')" value="dictType"></el-option>
					</el-select>
	
					<el-button slot="append" icon="search" @click='onQuery(sertchType)'></el-button>
				</el-input>
			</el-col>
	
			<!--<el-col :span="2">
	                    <el-button size="large" icon="search"
	                               @click="onQuery">{{$t('commom.search')}}</el-button>
	                </el-col>-->
			<!--:xs="{span: 6, offset: 0}" :sm="{span: 6, offset: 0}"-->
			<el-col :xs="{span: 6, offset: 18}" :sm="{span: 6, offset: 0}">
				<el-button size="large" type="primary" style="float: right;margin:  0px 20px" icon="plus" @click="showDilog('add')">
					{{$t('commom.add')}}
				</el-button>
			</el-col>
		</el-row>
		<br>
	
		<el-table :data="pageData.data" border stripe highlight-current-row style="width: 100%">
			<el-table-column :label="$t('commom.seq')" align="center" width="100">
				<template scope="scope">
					<span style="margin-left: 10px">{{ scope.$index+1+(page&&page.start||0 )}}</span>
				</template>
			</el-table-column>
			<el-table-column :label="$t('dictionaries.name')" align="center" min-width="150">
				<template scope="scope">
					<span>{{ scope.row.name }}</span>
				</template>
			</el-table-column>
			<el-table-column :label="$t('dictionaries.dictCode')" align="center" min-width="150">
				<template scope="scope">
					<span>{{ scope.row.dictCode }}</span>
				</template>
			</el-table-column>
			<el-table-column :label="$t('dictionaries.dictType')" align="center" min-width="150">
				<template scope="scope">
					<span>{{ scope.row.dictType }}</span>
				</template>
			</el-table-column>
			<el-table-column :label="$t('dictionaries.description')" align="center" min-width="150">
				<template scope="scope">
					<span>{{ scope.row.description }}</span>
				</template>
			</el-table-column>
	
			<el-table-column :label="$t('dictionaries.seq')" align="center" min-width="150">
				<template scope="scope">
					<span>{{ scope.row.seq }}</span>
				</template>
			</el-table-column>
			<el-table-column :label="$t('dictionaries.isSys')" align="center" min-width="150">
				<template scope="scope">
					<span>{{ scope.row.isSys?$t('commom.yes'):$t('commom.no') }}</span>
				</template>
			</el-table-column>
	
			<el-table-column :label="$t('commom.operation')" align="center" min-width="277" :fixed="$store.getters.isMobile?false:'right'">
				<template scope="scope">
					<el-button size="small" @click="showDilog('detail',scope.row)" type="warning" icon="information">{{$t('commom.detail')}}
					</el-button>
					<el-button size="small" v-if='!scope.row.isSys' @click="showDilog('edit', scope.row)" type="primary" icon="edit"> {{$t('commom.edit')}}
					</el-button>
					<el-button size="small" v-if='!scope.row.isSys' @click="handleDelete(scope.row)" type="danger" icon="delete">{{$t('commom.delete')}}
					</el-button>
	
				</template>
			</el-table-column>
		</el-table>
		</el-table>
		<el-pagination style="overflow: auto" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizes" :page-size="page.length" layout="total, sizes, prev, pager, next, jumper" :total="pageData.recordsTotal" />
		<el-dialog v-model="dialogVisible" :close-on-click-modal='false' :size="$store.getters.isMobile?'full': 'small'">
			<dictionform :dictionForm='dictionForm' :disabled="dialogTyle==='detail'" ref='dictionForm' />
			<div style="float: right;margin-bottom: 20px" v-show="dialogTyle!=='detail'">
				<el-button @click="dialogVisible=false">{{$t('commom.cancel')}}</el-button>
				<el-button type="primary" @click="onSubmit">{{$t('commom.sure')}}</el-button>
			</div>
		</el-dialog>
	</div>
</template>
<script>
import dictionform from './dictionComponents/dictionForm'
import { BUSINESSTYPE_GETALL } from 'type'
import {
	sysDictionAdd,
	sysDictionDelete,
	sysDictionUpdate,
	sysDictionPages
} from 'api/api'

let dictionForm = {
	dictType: '',
	dictCode: '',
	dictZhCnName: '',
	dictJaJpName: '',
	dictKoKrName: '',
	dictEnUsName: '',
	dictZhCnDescription: '',
	dictJaJpDescription: '',
	dictKoKrDescription: '',
	dictEnUsDescription: '',
	isSys: true,
	seq: '',
	ext1: '',
	ext2: '',
	ext3: ''
}
export default {
	data() {
		return {
			//				select:'name',

			pageData: {},
			searchValue: '',
			sertchType: 'name',
			page: {
				start: 0,
				length: 10,
				draw: 1,
			},
			currentPage: 1,
			pageSizes: [10, 20, 30],
			dialogVisible: false,
			dialogTyle: '',
			dictionForm: {}
		}
	},
	components: {
		dictionform
	},

	created() {
		this.init(this.page)
	},
	watch: {
		searchValue(value) {
			if (!value) {
				this.init(this.page)
			}
		}
	},
	methods: {
		init(data) {
			sysDictionPages(data).then(res => {
				this.pageData = res.data.obj
			})
		},
		showDilog(type, data = dictionForm) {
			this.dictionForm = {
				...data
			}
			this.dialogVisible = true
			this.dialogTyle = type
		},
		onQuery(key) {
			if (key) this.sertchType = key
			this.searchValue && this.init({
				...this.page,
				[this.sertchType]: this.searchValue
			})
		},
		onSubmit() {
			this.$refs.dictionForm.validate(valid => valid && this.commitForm())
		},
		commitForm() {
			if (this.dialogTyle === 'edit') {
				delete this.dictionForm.createTime
				delete this.dictionForm.modifyTime
				sysDictionUpdate(this.dictionForm).then(res => {
					this.init(this.page)
					this.dialogVisible = false
				})
			} else if (this.dialogTyle === 'add') {
				sysDictionAdd(this.dictionForm).then(res => {
					this.init(this.page)
					this.dialogVisible = false
				})
			}
		},

		handleDelete(data) {
			this.$confirm(this.$t('commom.deleConfim'), '', {
				confirmButtonText: this.$t('commom.sure'),
				cancelButtonText: this.$t('commom.cancel'),
				type: 'warning'
			}).then(() => {
				sysDictionDelete({
					dictId: data.dictId
				}).then(res => {
					this.init(this.page)
				})
			})

		},
		handleSizeChange(val) {
			this.page.length = val
			this.page.start = (this.currentPage - 1) * this.page.length
			this.init(this.page)
		},
		handleCurrentChange(val) {
			this.currentPage = val;
			this.page.start = (this.currentPage - 1) * this.page.length
			this.init(this.page)
		}
	}
}
</script>
