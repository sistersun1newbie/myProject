<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="6">
				<el-input size="large" v-model="searchValue" :placeholder="$t('business.myOrderList.search')"></el-input>
			</el-col>
			<el-col :span="2">
				<el-button size="large" icon="search" @click="onQuery">{{$t('commom.search')}}</el-button>
			</el-col>
			<el-col :span="4" :offset="12" v-if="showCode">
				<el-button size="large" style="float: right;margin:  0px 20px" type="primary" @click="verification()">
					{{$t('business.myOrderList.checkcode')}}
				</el-button>
			</el-col>
		</el-row>
		<br>
		<el-table :data="tableData.data" border stripe highlight-current-row style="width: 100%">
			<el-table-column :label="$t('commom.seq')" align="center" width="100">
				<template scope="scope">
					<span style="margin-left: 10px">{{parseInt(scope.$index) +1+(page&&page.start||0 )}}</span>
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
			<el-table-column :label="$t('commom.operation')" align="center" min-width="150" :fixed="$store.getters.isMobile?false:'right'">
				<template scope="scope">
					<el-button size="small" @click="showDilog('detail',scope.row)" type="warning" icon="information">{{$t('commom.detail')}}
					</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination style="overflow: auto" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizes" :page-size="page.length" layout="total, sizes, prev, pager, next, jumper" :total="tableData.recordsTotal" />
		<el-dialog v-model="dialogVisible" :close-on-click-modal='false'>
			<stayCheckform :pageData='pageData' :disabled="dialogTyle==='detail'" ref='stayCheckForm' />

		</el-dialog>
		<el-dialog v-model="dialogVisibleCode" :close-on-click-modal='false' 
			:size="$store.getters.isMobile?'full': 'small'"
			style="text-align: center;">
			<el-input v-model="tkValue" :placeholder="$t('business.giftList.ticket')" style="width:120px;"></el-input><br />
			<p class="tkTip" v-if="showTips">{{$t('business.giftList.tip')}}</p>
			<el-button type="primary" size="large" @click="checkQrcode" style="margin-top: 20px;">{{$t('commom.qrcode')}}</el-button>
			<div id="scid"></div>
		</el-dialog>
	</div>
</template>

<style>
	.tkTip{
		margin:0 auto;
		font-size: 10px;
		color:red;
		text-align: center;
	}
	#scid{
		width: 250px;
		height: 300px;
		margin: 20px auto;
		background: black;
	}
</style>
<script>
	import stayCheckform from './businessComponents/stayCheckForm'
	import {
		userorderBusishoporder,
		usergiftrecordExchange
	} from 'api/api';
	let pageData = {
		totalPrice: '',
		count: '',
		currencyUnit: '',

		itemIcon: '',
		itemName: '',
	}
	let scan = null;
	export default {
		data() {
			return {
				pageData: pageData
					/*[{
							          name: '毛绒玩具',
							          price: '5',
							          num:'1',
							          total:'5'
							        }]*/
					,
				searchValue: '',
				tableData: '',

				currentPage: 1,
				pageSizes: [10, 20, 30],
				page: {
					start: 0,
					length: 10,
					draw: 1,
				},
				dialogVisible: false,
				dialogVisibleCode: false,
				dialogTyle: '',
				tkValue:'',
				showTips:false,
				code:'',
				showCode:true

			}
		},
		components: {
			stayCheckform
		},
		created() {
			if(!window.plus){
					this.showCode=false
				}
			this.init()
		},
		watch: {
			tkValue(t){
				if(t!=''){
					this.showTips=false
				}
			},
			searchValue(value) {
				if(!value) {
					this.init()
				}
			},
			dialogVisibleCode(f){
				if(!f&&scan!=null){
					scan.close()
					scan=null
				}
			}
		},
		methods: {
			checkQrcode(){
				if(this.tkValue==''||!/^[0-9]{1,2}?$/.test(this.tkValue)){
					return this.showTips=true
				}
				if(scan){
					scan.start()
				}else {
					document.addEventListener('plusready',this.getkScan())
					
				}
			},
			getkScan(){
				 
					scan = new plus.barcode.Barcode('scid',{},{background:'#000000'});
						scan.onmarked = ( type,result,file)=>{
											var text = '未知: ';
											switch(type){
												case plus.barcode.QR:
												text = 'QR: ';
												break;
												case plus.barcode.EAN13:
												text = 'EAN13: ';
												break;
												case plus.barcode.EAN8:
												text = 'EAN8: ';
												break;
											}
											this.getkCode(result)
										}
						 
						scan.start();
 
			},
			getkCode(code){
				scan.close();
				scan=null
				this.code=code
				usergiftrecordExchange({shopUserId:this.$store.state.user.shopUserId,quantity:this.tkValue,orderId:code}).then(res => {
						this.init()
						 
					}).catch(err=>{
						 
					})
			},
			verification(){
				if(!window.plus){
					this.$notify.warning({
			          title: this.$t('commom.alertTitle'),
			          message:  this.$t('commom.phoneType'),
			          duration:3000
			        });
				}else{
					this.dialogVisibleCode=true
				}
			},
			init() {
				//busItemName
				userorderBusishoporder(this.page).then(res => {
					this.tableData = { ...res.data.obj,
						...res.data.obj.busiItem
					}
				})
			},
			onQuery() {
				if(this.searchValue) {
					userorderBusishoporder({ ...this.page,
						busItemName: this.searchValue
					}).then(res => {
						this.tableData = { ...res.data.obj,
							...res.data.obj.busiItem
						}
					})
				}
			},
			showDilog(type, data = typeFormData) {
				this.pageData = {
					 ...data,
						...data.busiItem
				}
				this.dialogVisible = true
				this.dialogTyle = type
			},
			getpageData() {
				userorderBusishoporder({ ...this.page,
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