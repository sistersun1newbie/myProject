<template>
	<div>
		<el-row :gutter="20">
        <el-col :span="6">
            <el-input size="large" v-model="searchValue" :placeholder="$t('business.myOrderList.search')"></el-input>
        </el-col>
        <el-col :span="2">
            <el-button size="large" icon="search" @click="onQuery"  >{{$t('commom.search')}}</el-button>
        </el-col>
        </el-row>
        <br>
		<el-table :data="tableData.data" border stripe highlight-current-row style="width: 100%">
			<el-table-column :label="$t('commom.seq')" align="center" width="100">
				<template scope="scope">
					<span style="margin-left: 10px">{{ scope.$index+1+(page&&page.start||0 )}}</span>
				</template>
			</el-table-column>
			<el-table-column :label="$t('business.myOrderList.goodsimg')" align="center" min-width="150">
				<template scope="scope">
					<ul class="el-upload-list el-upload-list--picture-card">
						<li class="el-upload-list__item  " style="width: 80px;height: 80px;margin: 3px 0 -4px 0;">
							<img :src=" scope.row.busiItem.itemIcon" alt="" class="el-upload-list__item-thumbnail">
						</li>
					</ul>
				</template>
			</el-table-column>
			
			<el-table-column :label="$t('business.myOrderList.name')" align="center" min-width="150">
				<template scope="scope">
					<span>{{ scope.row.busiItem.itemName }}</span>
				</template>
			</el-table-column>
			
			<el-table-column :label="$t('business.myOrderList.num')" align="center" min-width="150">
				<template scope="scope">
					<span>{{ scope.row.count  }}</span>
				</template>
			</el-table-column>
			
			
			<el-table-column :label="$t('business.myOrderList.total')" align="center" min-width="150">
				<template scope="scope">
					<span>{{ scope.row.totalPrice }}</span>
				</template>
			</el-table-column>
			
			<el-table-column :label="$t('business.myOrderList.goodsuom')" align="center" min-width="150">
				<template scope="scope">
					<span>{{  scope.row.currencyUnit}}</span>
				</template>
			</el-table-column>
			<el-table-column :label="$t('commom.operation')" align="center" :fixed="$store.getters.isMobile?false:'right'" min-width="150">
				<template scope="scope">
					<el-button size="small" @click="showDilog('detail',scope.row)" type="warning" icon="information">{{$t('commom.detail')}}
					</el-button>
				</template>
			</el-table-column>
		</el-table>
    <el-pagination style="overflow: auto" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizes" :page-size="page.length" layout="total, sizes, prev, pager, next, jumper" :total="tableData.recordsTotal" />
      <el-dialog v-model="dialogVisible"
                   :close-on-click-modal='false'>
                   <myOrderform :pageData="pageData" :disabled="dialogTyle==='detail'" ref='myOrderForm'/>
                   
        </el-dialog>
	</div>
</template>
 
<style>

</style>
<script>
	import myOrderform from './businessComponents/myOrderForm'
	import {
		userorderNoexchange,
		usergiftrecordExchange
	} from 'api/api';
	let pageData = {
		totalPrice: '',
		count: '',
		currencyUnit: '',

		itemIcon: '',
		itemName: '',
	}
  export default{
        data () {
            return {
            	pageData: pageData,
            	tableData: '',
//          	orderData:[{
//		          state: '交易成功',
//		          name: '毛绒玩具',
//		          price: '5',
//		          num:'1',
//		          total:'5'
//		        }],
            	searchValue:'',
            	
                  currentPage: 1,
                  pageSizes: [10, 20, 30],
                  page: {
					start: 0,
					length: 10,
					draw: 1,
					},
                  dialogVisible:false,
                  dialogTyle:''
            }
        },
        components: {
          myOrderform
  		},
  		created() {
			this.init()
		},
		watch: {
			searchValue(value) {
				if(!value) {
					this.init()
				}
			}
		},
  		methods:{
  			showDilog(type,data){
               
                this.pageData={...data,
						...data.busiItem}
               
                  this.dialogVisible=true
                  this.dialogTyle=type
            },
            init() {
				//busItemName
				userorderNoexchange(this.page).then(res => {
					this.tableData = { ...res.data.obj,
						...res.data.obj.busiItem
					}
				})
			},
			onQuery() {
				if(this.searchValue) {
					userorderNoexchange({ ...this.page,
						busItemName: this.searchValue
					}).then(res => {
						this.tableData = { ...res.data.obj,
							...res.data.obj.busiItem
						}
					})
				}
			},
			getpageData() {
				userorderNoexchange({ ...this.page,
					busItemName: this.searchValue
				}).then(res => {
					this.tableData = { ...res.data.obj,
						...res.data.obj.busiItem
					}
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