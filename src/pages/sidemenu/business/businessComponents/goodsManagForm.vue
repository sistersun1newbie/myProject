<template>
	
	<el-form :model="pageData" ref='storyForm' :rules="rules" :label-position="$store.getters.isMobile?'top':'right'">
	      <el-col :span="$store.getters.isMobile?24:11">
	        <el-form-item :label="$t('business.goodsManager.goodsimg')"  label-width="150px" prop="itemIcon">
	            <input type="file"  accept="image/png, image/jpeg, image/bmp, image/gif" id="goodsFile" @change='getFile' style="display:none">
	          <ul class="el-upload-list el-upload-list--picture-card">
	            <li class="el-upload-list__item  ">
	              <img :src="base64Img||pageData.itemIcon" alt="" class="el-upload-list__item-thumbnail">
	              
	             <span class="el-upload-list__item-actions"  v-show='!disabled'>
	                 <span class="el-upload-list__item-delete">
	                      <i class="el-icon-delete2" v-show='base64Img||pageData.itemIcon' @click="deleteImg" style="font-size:40px"/> 
	                      <i class="el-icon-plus" v-show='!base64Img&&!pageData.itemIcon' @click="addImg" style="font-size:40px" /> 
	                   </span>
	                   </span>
	            </li>
	          </ul>
	        </el-form-item>
	      </el-col>
		
		
		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('commom.zhTitle')" label-width="150px" prop="itemZhCnTitle">
				<el-input v-model="pageData.itemZhCnTitle" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>

		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('commom.enTitle')" label-width="150px" prop="itemEnUsTitle">
				<el-input v-model="pageData.itemEnUsTitle" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>

		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('commom.jaTitle')" label-width="150px" prop="itemJaJpTitle">
				<el-input v-model="pageData.itemJaJpTitle" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>

		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('commom.koTitle')" label-width="150px" prop="itemKoKrTitle">
				<el-input v-model="pageData.itemKoKrTitle" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>

		

		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('commom.zhName')" label-width="150px" prop="itemZhCnName">
				<el-input v-model="pageData.itemZhCnName" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>

		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('commom.enName')" label-width="150px" prop="itemEnUsName">
				<el-input v-model="pageData.itemEnUsName" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>

		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('commom.jaName')" label-width="150px" prop="itemJaJpName">
				<el-input v-model="pageData.itemJaJpName" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>

		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('commom.koName')" label-width="150px" prop="itemKoKrName">
				<el-input v-model="pageData.itemKoKrName" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>

		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('business.goodsManager.price')" label-width="150px" prop="itemPrice">
				<el-input v-model.number="pageData.itemPrice" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>

		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('business.goodsManager.discountPrice')" label-width="150px" prop="discountPrice">
				<el-input v-model.number="pageData.discountPrice" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>

		<!--<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('business.goodsManager.currencyUnit')" label-width="150px" prop="currencyUnit">
				<el-input v-model="pageData.currencyUnit" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>-->

		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('business.goodsManager.currencyUnit')" label-width="150px" prop="currencyUnit">
				<el-select style="width: 100%;" v-model="pageData.currencyUnit" :placeholder="$t('commom.select')">
					<el-option v-for="item in currencyUnitList" :label="item.name" :value="item.dictCode" :disabled="disabled" :key="item.dictCode">
					</el-option>
				</el-select>
			</el-form-item>
		</el-col>


		<!--<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('business.goodsManager.uom')" label-width="150px" prop="uom">
				<el-input v-model="pageData.uom" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>-->
		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('business.goodsManager.total')" label-width="150px" prop="itemTotal">
				<el-input v-model.number="pageData.itemTotal" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>
		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('business.goodsManager.uom')" label-width="150px" prop="uom">
				<el-select style="width: 100%;" v-model="pageData.uom" :placeholder="$t('commom.select')">
					<el-option v-for="item in amountUomList" :label="item.name" :value="item.dictCode" :disabled="disabled" :key="item.dictCode">
					</el-option>
				</el-select>
			</el-form-item>
		</el-col>
		<el-col :span="$store.getters.isMobile?24:11" v-if="this.$store.state.user.businessType.typeCode=='viewspot'">
			<el-form-item :label="$t('business.goodsManager.ticket')" label-width="150px">
				<el-select style="width: 100%;" v-model="pageData.busiItemType" :placeholder="$t('commom.select')">
					<el-option v-for="item in ticketList" :label="item.name" :value="item.dictCode" :disabled="disabled" :key="item.dictCode">
					</el-option>
				</el-select>
			</el-form-item>
		</el-col>
		
		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('business.goodsManager.state')" label-width="150px" prop="status">
				<el-radio-group v-model="pageData.status"><!--1正常 2 下线-->
					<el-radio :disabled="disabled" :label="1">{{$t('business.goodsManager.state1')}}</el-radio>
					<el-radio :disabled="disabled" :label="2">{{$t('business.goodsManager.state2')}}</el-radio>
				</el-radio-group>
			</el-form-item>
		</el-col>

	</el-form>
</template>
<script>
	import {
		apparticleGetareas,
		gamegiftinfoNopages,
		//字典
		sysdictionariesGetbytype,
//		sysdictionariesGetbycode,
	} from 'api/api';
	export default {
		props: {
			disabled: Boolean,
			pageData: Object
		},
		data() {
			return {
				currencyUnitList:[],
				amountUomList:[],
				ticketList:[],
				base64Img:'',
				rules: {
					itemIcon: [{
						required: true,
						validator:(rule, value, callback)=>{
	                    	if (value==null||value=='') {
					          callback(new Error(this.$t('business.goodsManager.vgoodsimg')));
					        }else if (typeof value!='object'&& typeof value!='string') {
					          callback(new Error(this.$t('business.goodsManager.vgoodsimg')));
					        } else {
					          callback();
					        }
                   		 },
//						message: this.$t('business.goodsManager.vgoodsimg'),
						trigger: 'blur'
					}],
					itemZhCnTitle: [{
						required: true,
						message: this.$t('business.goodsManager.vinfoZhCnTitle'),
						trigger: 'blur'
					}],
					itemEnUsTitle: [{
						required: true,
						message: this.$t('business.goodsManager.vinfoEnUsTitle'),
						trigger: 'blur'
					}],
					itemJaJpTitle: [{
						required: true,
						message: this.$t('business.goodsManager.vinfoJaJpTitle'),
						trigger: 'blur'
					}],
					itemKoKrTitle: [{
						required: true,
						message: this.$t('business.goodsManager.vinfoKoKrTitle'),
						trigger: 'blur'
					}],
					
					itemZhCnName: [{
						required: true,
						message: this.$t('business.goodsManager.vinfoZhCnName'),
						trigger: 'blur'
					}],
					itemEnUsName: [{
						required: true,
						message: this.$t('business.goodsManager.vinfoEnUsName'),
						trigger: 'blur'
					}],
					itemJaJpName: [{
						required: true,
						message: this.$t('business.goodsManager.vinfoJaJpName'),
						trigger: 'blur'
					}],
					itemKoKrName: [{
						required: true,
						message: this.$t('business.goodsManager.vinfoKoKrName'),
						trigger: 'blur'
					}],
					
					itemPrice: [{
						required: true,
						type: 'number',
						message: this.$t('business.goodsManager.vprice'),
						trigger: 'blur'
					}],
					
					discountPrice: [{
						required: true,
						type: 'number',
						message: this.$t('business.goodsManager.discountPrice'),
						trigger: 'blur'
					}],
					currencyUnit: [{
						required: true,
						message: this.$t('business.goodsManager.vcurrencyUnit'),
						trigger: 'blur'
					}],
					uom: [{
						required: true,
						message: this.$t('business.goodsManager.vuom'),
						trigger: 'blur'
					}],

					itemTotal: [{
						required: true,type: 'number',
						message: this.$t('business.goodsManager.vdiscountPrice'),
						trigger: 'blur'
					}],
					status: [{
						required: true,type: 'number',
						message: this.$t('commom.storyinfostatus'),
						trigger: 'blur'
					}],
					
					
				},
			}
		},
		created() {
			if(this.$store.state.user.businessType.typeCode=='viewspot'){
				this.pageData.busiItemType='adult'
			}
			sysdictionariesGetbytype({dictType:'amountUom'}).then(res => {
				this.amountUomList = res.data.obj
			})
			sysdictionariesGetbytype({dictType:'money'}).then(res => {
				this.currencyUnitList = res.data.obj
			})	
			sysdictionariesGetbytype({dictType:'busiItemType'}).then(res => {
				this.ticketList = res.data.obj
			})
		},
		mounted(){
		},
		 
		methods: {
			 getFile(e){
                let file = e.target.files[0]
                if (file) {
                    this.pageData.itemIcon=file
                    let reader = new FileReader();
                    reader.onload = () => {
                    this.base64Img = reader.result //这个就是base64的数据了
                }
                    reader.readAsDataURL(file);
                }
            },
            deleteImg(){
                 this.pageData.itemIcon='';
                this.base64Img='';
                document.getElementById('goodsFile').value=''
            },
            addImg(){
                document.getElementById('goodsFile').click() 
            },
			validate(fn) {
				this.$refs.storyForm.validate(fn);
			},
		},
		watch: {
            pageData(val){
            	document.getElementById('goodsFile').value=''
                this.base64Img=''
                this.$refs.storyForm.resetFields();
            }
        },
	}
</script>