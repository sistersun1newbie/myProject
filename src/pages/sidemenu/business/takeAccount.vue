<template>
	<div>
		<!--type="flex" justify="center"-->
		<el-row  :gutter="20">
			<el-col :span="$store.getters.isMobile?12:6">
				 <el-date-picker
			      v-model="dataArray"
			      type="daterange"
			      align="right"
			      :placeholder="$t('business.account.chooseDate')"
			       size="large"  :editable="false" style="width: 100%;"
			     >
			    </el-date-picker>
			</el-col>
			<!-- :style="customerType?{'visibility':'visible'}:{'visibility':'hidden'}" v-show="customerType" -->
			<el-col  :span="$store.getters.isMobile?12:6">
				<!--<el-input size="large" v-model="searchValue" @keyup.native.enter='onQuery' :placeholder="$t('business.goodsManager.search')"></el-input>-->
				<el-autocomplete   v-show="customerType" style="width: 100%;"
			      class="inline-input"
			      v-model="searchValue" size="large"
			      :fetch-suggestions="querySearch"
			      :placeholder="$t('business.account.inputSearch')"
			      @select="handleSelect"
			    ></el-autocomplete>
			</el-col>
			<!--<el-col  :span="$store.getters.isMobile?11:2" >
				<el-button size="large" v-show="false" icon="search" @click="onQuery">{{$t('commom.search')}}</el-button>
			</el-col>--><!--:style="customerType?{'visibility':'visible'}:{'visibility':'hidden'}" -->
			<el-col   :span="4" :offset="$store.getters.isMobile?20:8">
				<el-button   v-show="customerType"   size="large" style="float: right;margin:  0px 20px" type="primary" icon="plus" @click="showDilog('add')">
					{{$t('business.account.account')}}
				</el-button>
			</el-col>
		</el-row>
		<br/>
		<el-table :data="tableData" border stripe highlight-current-row style="width: 100%">
            <el-table-column :label="$t('commom.seq')"
             align="center"
              width="100">
	            <template scope="scope">
	                <span style="margin-left: 10px">{{parseInt( scope.$index)+1}}</span>
	            </template>
            </el-table-column>
            
            <!--<el-table-column :label="$t('business.myOrderList.goodsimg')" align="center" min-width="150">
				<template scope="scope">
					<ul class="el-upload-list el-upload-list--picture-card" v-show="scope.row.busiItem&&scope.row.busiItem.itemIcon">
						<li class="el-upload-list__item  " style="width: 80px;height: 80px;margin: 3px 0 -4px 0;">
							<img :src=" scope.row.busiItem&&scope.row.busiItem.itemIcon" alt="" class="el-upload-list__item-thumbnail">
						</li>
					</ul>
				</template>
			</el-table-column>-->



			<el-table-column :label="$t('business.account.appUserName')" align="center" min-width="150">
				<template scope="scope">
					<span style="margin-left: 10px">{{ scope.row.appUserName }}</span>
				</template>
			</el-table-column>
			<el-table-column :label="$t('business.account.createTime')" align="center" min-width="150">
				<template scope="scope">
					<span style="margin-left: 10px">{{ scope.row.busiItem&&scope.row.busiItem.createTime }}</span>
				</template>
			</el-table-column>
			<el-table-column :label="$t('business.account.name')" align="center" min-width="150">
				<template scope="scope">
					<span style="margin-left: 10px">{{ scope.row.busiItem&&scope.row.busiItem.itemName }}</span>
				</template>
			</el-table-column>
			<el-table-column :label="$t('business.account.num')" align="center" min-width="150">
				<template scope="scope">
					<span style="margin-left: 10px">{{ scope.row.count }}</span>
				</template>
			</el-table-column>

			<el-table-column :label="$t('business.account.totalPrice')" align="center" min-width="150">
				<template scope="scope">
					<span style="margin-left: 10px">{{scope.row.totalPrice}}</span>
				</template>
			</el-table-column>
			<el-table-column :label="$t('business.account.goodsuom')" align="center" min-width="150">
				<template scope="scope">
					<span style="margin-left: 10px">{{ scope.row.currencyUnit }}</span>
				</template>
			</el-table-column>
			
			<el-table-column :label="$t('business.account.isVerification')" align="center" min-width="150">
				<template scope="scope">
					<span style="margin-left: 10px">{{scope.row.isVerification===false?$t('business.account.isVerificationFalse'):(scope.row.isVerification===true?$t('business.account.isVerificationTrue'):'')}}</span>
				</template>
			</el-table-column>

			<!--<el-table-column :fixed="$store.getters.isMobile?false:'right'"  v-show="customerType" :label="$t('commom.operation')" align="center" min-width="277">
				<template scope="scope">
					<el-button size="small" @click="showDilog('detail',scope.row)" type="warning" icon="information">
						{{$t('business.account.account')}}
					</el-button>
				</template>
			</el-table-column>
			-->
		</el-table>

	</div>
</template>

<script>
	import {
		userorderPages,
		setisverificationUpdate,
		busiinfoNoPages
	} from 'api/api';
	let pageData = {
		appUserName:'',
		busiInfoId:'',
		busiItem:{},
		busiItemId:'',
		count:'',
		createTime:'',
		creator:'',
		currencyUnit:'',
		isDel:'',
		isVerification:'',
		itemPrice:'',
		modifyTime:'',
		modifyor:'',
		orderId:'',
		payType:'',
		realCount:'',
		status:'',
		tickNum:'',
		totalPrice:'',
		userId:'',
	}
	export default {
		data() {
			return {
				dataArray:'',
				shoplist:[],
				shopObj:'',
				searchValue: '',
				customerType:localStorage.customerType&&localStorage.customerType==='admin'?true:false,
				
				tableData: [],
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

		created() {
			this.init()
		},
		watch: {
			dataArray(value,oldval) {
//				console.log(typeof this.shopObj=='object')
//				console.log( value[0]!=null)
//				console.log(value+"===="+oldval)
//				console.log(typeof value+"===="+typeof oldval)
				if(typeof oldval==typeof value &&JSON.stringify(oldval)==JSON.stringify(value)){
					return ;
				}
				
				if( value[0]!=null){
					if(this.customerType){
						if(typeof this.shopObj=='object'){
							this.onQuery()
						}
					}else{
						this.onQuery()
					}
				}
				
				
			},
			searchValue(val){
				if(!val){
//					console.log("====")
					this.shopObj=''
				}
			}
		},
		methods: {
			 querySearch(queryString, cb) {
		        let shoplist = this.shoplist;
		        let results = queryString ? shoplist.filter(this.createFilter(queryString)) : shoplist;
		        // 调用 callback 返回建议列表的数据
		        for(let i=0 ;i<results.length; i++){
		             results[i].value =	results[i].binfoName
		        }
		        cb(results);
		      },
		      createFilter(queryString) {
		        return (restaurant) => {
		          return (restaurant.binfoName.indexOf(queryString.toLowerCase())>-1);
		        };
		      },
	        handleSelect(item) {
	        	
//	        	console.log('handleSelect',item)
	        	this.shopObj=item
//	        	console.log(typeof this.dataArray!=='string')
	        	if(typeof this.dataArray!=='string'){
	        		this.onQuery()
	        	}
		      },
			init() {
				busiinfoNoPages({},false).then((res) => {
					this.shoplist = res.data.obj
				})
			},
			onQuery() {
//				console.log(typeof this.dataArray[0])
//				console.log(JSON.stringify( this.dataArray[0]).substring(1,11))
//				console.log(this.dataArray[0].substring(0,9))
//				console.log( parseInt(this.dataArray[0]&&JSON.stringify( this.dataArray[0]).substring(9,11)) )
				userorderPages({
					startTime:  this.dataArray[0]&&JSON.stringify( this.dataArray[0]).substring(1,11)||'',
					endTime:this.dataArray[1]&&JSON.stringify( this.dataArray[1]).substring(1,11)||'',
					busShopId:this.shopObj.busiInfoId||'',
				}).then(res => {
//					console.log({...res.data.obj,...res.data.obj.busiItem})
					this.tableData =res.data.obj
					this.AddTableDate(this.tableData)
				})
			},
			AddTableDate(tableData){
					let temp={
						count:0,
						totalPrice:0,
						appUserName:'',
						itemIcon:false,
						isVerification:'',
						itemName:'',
						currencyUnit:''
						
					}
					if(tableData.length>0){
						for(let i=0;i<tableData.length;i++){
							temp.count=tableData[i].count+temp.count
							temp.totalPrice=tableData[i].totalPrice+temp.totalPrice
						}
						tableData.push(temp)
					}
					console.log(tableData)
					
			},
			showDilog(type, obj) {
//				this.dialogVisible = true
//				this.dialogTyle = type
//				if(obj) {
//					this.pageData = { ...obj
//					}
//				} else {
//					this.pageData = { ...pageData}
//				}
				if(this.dataArray[0]!=null){
					if(this.customerType){
						if(typeof this.shopObj=='object'){
							this.accountSubmit()
						}
					}else{
						this.accountSubmit()
					}
				}
				
			},
			accountSubmit() {
				setisverificationUpdate({
					//orderId:obj.orderId,
					startTime:  this.dataArray[0]&&JSON.stringify( this.dataArray[0]).substring(1,11)||'',
					endTime:this.dataArray[1]&&JSON.stringify( this.dataArray[1]).substring(1,11)||'',
					busShopId:this.shopObj.busiInfoId||'',
				}).then(res => {
					this.onQuery() 
				})
			}
			

		}
	}
</script>

<style lang="less">

</style>