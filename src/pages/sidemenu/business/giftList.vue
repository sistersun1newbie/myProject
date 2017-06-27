<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="6">
				<el-input size="large" v-model="searchValue" :placeholder="$t('business.giftList.searchAlert')"></el-input>
			</el-col>
			<el-col :span="2">
				<el-button size="large" icon="search" @click="onQuery">{{$t('commom.search')}}</el-button>
			</el-col>
			<el-col :span="4" :offset="12" v-if="showCode">
				<el-button size="large" style="float: right;margin:  0px 20px" type="primary" @click="verification()">
					{{$t('business.giftList.checkcode')}}
				</el-button>
			</el-col>
		</el-row>
		<br>
		<el-table :data="tableData.data" border stripe highlight-current-row style="width: 100%">
			<el-table-column :label="$t('commom.seq')" align="center" width="100">
				<template scope="scope">
					<span style="margin-left: 10px">{{ scope.$index+1+(page&&page.start||0 )}}</span>
				</template>
			</el-table-column>
			<!--<el-table-column :label="$t('business.giftList.id')" align="center" min-width="150">
				<template scope="scope">
					<span>{{ scope.row.ID}}</span>
				</template>
			</el-table-column>-->
			<el-table-column :label="$t('business.giftList.name')" align="center" min-width="150">
				<template scope="scope">
					<span>{{ scope.row.appUsersInfo.nikeName }}</span>
				</template>
			</el-table-column>
			<el-table-column :label="$t('business.giftList.head')" align="center" min-width="150">
				<template scope="scope">
					<ul class="el-upload-list el-upload-list--picture-card">
						<li class="el-upload-list__item  " style="width: 80px;height: 80px;margin: 3px 0 -4px 0;">
							<img :src="scope.row.appUsersInfo.avatar" alt="" class="el-upload-list__item-thumbnail">
						</li>
					</ul>
				</template>
			</el-table-column>
			<el-table-column :label="$t('business.giftList.gamename')" align="center" min-width="150">
				<template scope="scope">
					<span>{{ scope.row.game.gameName }}</span>
				</template>
			</el-table-column>
			
			<el-table-column :label="$t('business.giftList.giftname')" align="center" min-width="150">
				<template scope="scope">
					<span>{{ scope.row.gameGiftInfo.giftName  }}</span>
				</template>
			</el-table-column>
			
			<el-table-column :label="$t('business.giftList.gettime')" align="center" min-width="150">
				<template scope="scope">
					<span>{{ scope.row.reciveTime}}</span>
				</template>
			</el-table-column>
			<el-table-column :label="$t('commom.operation')" :fixed="$store.getters.isMobile?false:'right'" align="center" min-width="277">
				<template scope="scope">
					<el-button size="small" @click="showDilog('detail',scope.row)" type="warning" icon="information">{{$t('commom.detail')}}
					</el-button>

				</template>
			</el-table-column>
		</el-table>
		<el-pagination style="overflow: auto" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizes" :page-size="page.length" layout="total, sizes, prev, pager, next, jumper" :total="tableData.recordsTotal" />

		<el-dialog v-model="dialogVisible" :close-on-click-modal='false'  
		:size="$store.getters.isMobile?'full': 'small'">
			<giftListform :pageData='pageData' :disabled="dialogTyle==='detail'" ref='giftListForm' />

		</el-dialog>
		<el-dialog v-model="dialogVisibleCode" :close-on-click-modal='false' 
		 :size="$store.getters.isMobile?'full': 'small'"
		style="text-align: center;">
			<el-input v-model="inputValue" :placeholder="$t('business.giftList.title')" style="width:120px;"></el-input><br />
			<p class="tips" v-if="showTips">{{$t('business.giftList.tip')}}</p>
			<el-button type="primary" size="large" @click="getQrcode" style="margin-top: 20px;">{{$t('commom.qrcode')}}</el-button>
			<div id="bcid"></div>
		</el-dialog>
	</div>
</template>

<style>
	.tips{
		margin:0 auto;
		font-size: 10px;
		color:red;
		text-align: center;
	}
	#bcid {
		width: 250px;
		height: 300px;
		margin: 20px auto;
		background: black;
	}
</style>
<script>
	import {
		usergiftrecordPages,
		usergiftrecordAdd
	} from 'api/api';
	import giftListform from './businessComponents/giftListForm'
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
				giftData: [{
					ID: '123456',
					time: '2016-05-02',
					gift: '毛绒玩具'
				}],
				pageData: pageData,
				searchValue: '',
				tableData:'',
				currentPage: 1,
				pageSizes: [10, 20, 30],
				page: {
					start: 0,
					length: 10,
					draw: 1,
				},
				code:'',
				dialogVisible: false,
				dialogVisibleCode: false,
				inputValue: '',
				dialogTyle: '',
				showTips:false,
				showCode:true

			}
		},
		components: {
			giftListform
		},
		created() {
			if(!window.plus){
					this.showCode=false
				}
			this.init()
		},
		watch: {
			inputValue(t){
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
			getQrcode(){
				
					if(this.inputValue==''||!/^[0-9]{1,2}?$/.test(this.inputValue)){
						return this.showTips=true
					}
					if(scan){
						scan.start()
					}else {
						document.addEventListener('plusready',this.getScan())
						
					}
				
				

			},
			getScan(){
				 
					scan = new plus.barcode.Barcode('bcid',{},{background:'#000000'});
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
											this.getCode(result)
										}
						 
						scan.start();
 
			},
			getCode(code){
				scan.close();
				scan=null
				this.code=code
				usergiftrecordAdd({userId:this.$store.state.user.shopUserId,quantity:this.inputValue,QRCode:code}).then(res => {
						
						 this.init()
					}).catch(err=>{
						 
					})
			},
			showDilog(type, data = typeFormData) {

				this.pageData = { ...data,...data.appUsersInfo,...data.game,...data.gameGiftInfo
				}

				this.dialogVisible = true
				this.dialogTyle = type
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
				usergiftrecordPages(this.page).then(res => {
					this.tableData =res.data.obj
						
				})
			},
			onQuery() {
				if(this.searchValue) {
					usergiftrecordPages({ ...this.page,
						gameName: this.searchValue
					}).then(res => {
						this.tableData =res.data.obj
					})
				}
			},
			getpageData() {
				usergiftrecordPages({ ...this.page,
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
		},

	}
</script>