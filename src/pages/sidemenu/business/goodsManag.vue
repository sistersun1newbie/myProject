<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6">
                    <el-input size="large" @keyup.native.enter='onQuery'
                              v-model="searchValue"
                              :placeholder="$t('business.goodsManager.search')"></el-input>
                </el-col>
                <el-col :span="2">
                    <el-button size="large" icon="search"
                               @click="onQuery">{{$t('commom.search')}}</el-button>
                </el-col>
            <el-col :span="4"
                    :offset="12">
                <el-button size="large" type="primary"
                           icon="plus" style="float: right;margin:  0px 20px"
                           @click="showDilog('add')">
                    {{$t('commom.add')}}
                </el-button>
            </el-col>
        </el-row>
        <br/>
        <el-table :data="tableData.data"
                  border
                  stripe
                  highlight-current-row
                  style="width: 100%">
           <el-table-column :label="$t('commom.seq')"
             align="center"
              width="100">
	            <template scope="scope">
	                <span style="margin-left: 10px">{{ scope.$index+1+(page&&page.start||0 )}}</span>
	            </template>
            </el-table-column>
            <el-table-column :label="$t('business.goodsManager.title')"
                     align="center"
                     min-width="150">
                <template scope="scope">
                    <span style="margin-left: 10px">{{scope.row.itemTitle }}</span>
                </template>
            </el-table-column>
            
            <el-table-column :label="$t('business.goodsManager.name')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.itemName }}</span>
                </template>
            </el-table-column>
            <el-table-column :label="$t('business.goodsManager.price')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.itemPrice }}</span>
                </template>
            </el-table-column>
            
            <el-table-column :label="$t('business.goodsManager.discountPrice')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.discountPrice }}</span>
                </template>
            </el-table-column>
            
            
            
            <el-table-column :label="$t('business.goodsManager.total')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                    <span style="margin-left: 10px">{{scope.row.itemTotal}}</span>
                </template>
            </el-table-column>
            
            
             <el-table-column :label="$t('business.goodsManager.uom')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                    <span style="margin-left: 10px">{{scope.row.uomText}}</span>
                </template>
            </el-table-column>
             <el-table-column :label="$t('business.goodsManager.currencyUnit')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                    <span style="margin-left: 10px">{{scope.row.currencyUnitText}}</span>
                </template>
            </el-table-column>
             <el-table-column :label="$t('business.goodsManager.ticket')"
                             align="center"
                             min-width="150"
                             v-if="this.$store.state.user.businessType.typeCode=='viewspot'">
                <template scope="scope">
                    <span style="margin-left: 10px">{{scope.row.busiItemType}}</span>
                </template>
            </el-table-column>
          <!--  <el-table-column :label="$t('business.goodsManager.state')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                    <span style="margin-left: 10px">{{scope.row.uom}}</span>
                </template>
            </el-table-column>-->
            
            <el-table-column :label="$t('commom.operation')"
                             align="center"
                             :fixed="$store.getters.isMobile?false:'right'"
                             min-width="277">
                <template scope="scope">
                		<el-button size="small"
                               @click="showDilog('detail',scope.row)"
                               type="warning"
                               icon="information">
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
         <el-pagination 
      style="overflow: auto" 
      @size-change="handleSizeChange" 
      @current-change="handleCurrentChange" 
      :current-page="currentPage" 
      :page-sizes="pageSizes" 
      :page-size="page.length" 
      layout="total, sizes, prev, pager, next, jumper" 
      :total="tableData.recordsTotal"/>
      
        <el-dialog v-model="dialogVisible"
                   :close-on-click-modal='false'
                   :size="$store.getters.isMobile?'full': 'small'">
            <storyform :pageData='pageData'
                       :disabled="dialogTyle==='detail'"
                       ref='storyForm' />
            <div style="float: right;margin-bottom: 20px">
                <el-button @click="dialogVisible=false">{{$t('commom.cancel')}}</el-button>
                <el-button type="primary"
                           @click="onSubmit"
                           v-show="dialogTyle!=='detail'">{{$t('commom.sure')}}</el-button>
            </div>
        </el-dialog>
    
    </div>
</template>

<script>
import {
 //busiitemDeleted,
//busiitemDetail,
	busiitemPages,
	busiitemAdd,
	busiitemUpdate,
	busiitemDelete,
} from 'api/api';
import storyform from './businessComponents/goodsManagForm';
let pageData = {
	busiInfoId:'',
	busiItemId:'',
//	createTime:""
	creator:'',
	currencyUnit:'',
	currencyUnitText:'',
	discountPrice:'',
	itemEnUsName:'',
	itemEnUsTitle:'',
	itemIcon:'',
	itemJaJpName:'',
	itemJaJpTitle:'',
	itemKoKrName:'',
	itemKoKrTitle:'',
	itemName:'',
	itemPrice:'',
	itemTitle:'',
	itemTotal:'',
	itemZhCnName:'',
	itemZhCnTitle:'',
	//modifyTime:"2017-04-10 16:51:28"
	//modifyor:"admin"
	status:'',
	uom:'',
	uomText:'',
	busiItemType:''
}
export default {
    data() {
        return {
            searchValue: '',
            tableData:{},
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
        storyform
    },
    created() {
        this.init()
    },
    watch: {
      searchValue(value){
        if(!value){
          busiitemPages(this.page).then(res => {
            	this.tableData = res.data.obj
            })
        }
      }
    },
    methods: {
        init() {
            busiitemPages(this.page).then((res) => {
				this.tableData = res.data.obj
//          	this.tableData.data = res.data.obj
//          	this.tableData.recordsTotal=5
            })
        },
        onQuery() {
        	if(this.searchValue){
	          busiitemPages({...this.page,itemName:this.searchValue}).then(res => {
					this.tableData = res.data.obj
				})
	        }
        	
        },
        showDilog(type, obj = pageData) {
            this.dialogVisible = true
            this.dialogTyle = type
            if(!obj.busiItemType){
            	obj.busiItemType=''
            }
            this.pageData = { ...obj }

        },
        onSubmit() {
            this.$refs.storyForm.validate(valid => valid && this.commitForm())
        },
        commitForm() {
//      	for(let key in this.pageData ){
//      		if(key.indexOf('Time')>-1){
//      			delete  this.pageData[key]
//      		}
//      	}
        	let formData = new FormData();
				for(let key in this.pageData) {
					if(key == 'itemIcon') {
						formData.append('multipartFile', this.pageData.itemIcon)// this.bootPageObj[key]
					} else {
						formData.append(key, this.pageData[key]);
					}
				}
            if (this.dialogTyle === 'edit') {
	
                busiitemUpdate(formData).then(res => {
                    this.init()
                    this.dialogVisible = false
                })
            } else if (this.dialogTyle === 'add') {
                busiitemAdd(formData).then(res => {
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
            	
                busiitemDelete({
                    busiItemId: obj.busiItemId
                }).then(res => {
                    this.init()
                })

            }).catch(res => {

            })


       },
       getpageData(){
	       	 busiitemPages({...this.page,itemName:this.searchValue}).then(res => {
				this.tableData = res.data.obj
			})
        },
		handleSizeChange(val) {
			this.page.length = val
			this.page.start = (this.currentPage - 1) * this.page.length
			setTimeout(()=>{
	        	this.getpageData()
	        },0)
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