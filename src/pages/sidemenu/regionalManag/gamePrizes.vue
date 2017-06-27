<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6">
                    <el-input size="large" @keyup.native.enter="onQuery"
                              v-model="searchValue"
                              :placeholder="$t('gamePrizes.searchAlert')"></el-input>
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
            <el-table-column :label="$t('gamePrizes.giftName')"
                     align="center"
                     min-width="150">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.giftName }}</span>
                </template>
            </el-table-column>
          
            <!--<el-table-column :label="$t('gamePrizes.giftPrice')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.giftPrice }}</span>
                </template>
            </el-table-column>-->
            <el-table-column :label="$t('gamePrizes.giftCount')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.giftCount }}</span>
                </template>
            </el-table-column>
            <el-table-column :label="$t('commom.status')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                
                    <span style="margin-left: 10px">{{ scope.row.giftStatus==2?($t('commom.down')):($t('commom.up')) }}</span>
                </template>
            </el-table-column>
             <el-table-column :label="$t('gamePrizes.giftIcon')"
                align="center"
                min-width="150">
                <template scope="scope">
                <ul class="el-upload-list el-upload-list--picture-card">
                    <li class="el-upload-list__item  " style="width: 80px;height: 80px;margin: 3px 0 -4px 0;">
                        <img :src="scope.row.giftIcon" alt="" class="el-upload-list__item-thumbnail">
                    </li>
                </ul>
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
            <gameprizesform :pageData='pageData'
                       :disabled="dialogTyle==='detail'"
                       ref='gameprizesform' />
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
	gamegiftinfoPages,
    gamegiftinfoAdd,
    gamegiftinfoDelete,
    gamegiftinfoUpdate,
} from 'api/api';
import gameprizesform from './regionalComponents/gamePrizesForm';
let pageData = {
	    giftEnUsName:'',
        giftJaJpName:'',
        giftKoKrName:'',
        giftZhCnName:'',
        giftCount:'',
        giftPrice:'',
        giftStatus:1,
        giftIcon:'',
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
        gameprizesform
    },
    created() {
        this.init()
    },
     watch: {
        searchValue(value) {
            if (!value) {
                this.init()
            }
        }
    },
    methods: {
        init() {
            gamegiftinfoPages({...this.page,giftName:this.searchValue}).then(res => {
            	this.tableData = res.data.obj
            })
        },
        onQuery() {
        	let data ={
                ...this.page,
                giftName:this.searchValue
            }
			gamegiftinfoPages(data).then(res => {
            	this.tableData = res.data.obj
            })
        },
        showDilog(type, obj=pageData) {
            this.dialogVisible = true
            this.dialogTyle = type
            this.pageData = { ...obj }
        },
        onSubmit() {
            this.$refs.gameprizesform.validate(valid => valid && this.commitForm())
        },
        commitForm() {
             let  formData = new FormData();
                for(let key in this.pageData){
                    if(this.pageData[key]===null)continue;
                    if(key==='giftIcon'){
                        formData.append('multipartFile', this.pageData[key]);
                    }else{
                        formData.append(key, this.pageData[key]);
                    }
                }
            if (this.dialogTyle === 'edit') {
                gamegiftinfoUpdate(formData).then(res => {
                    this.init()
                    this.dialogVisible = false
                })
            } else if (this.dialogTyle === 'add') {
                gamegiftinfoAdd(formData).then(res => {
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
                gamegiftinfoDelete({
                    giftId: obj.giftId
                }).then(res => {
                    this.init()
                })

            })
       },
       
		handleSizeChange(val) {
			this.page.length = val
			this.page.start = (this.currentPage - 1) * this.page.length
        	this.init()
		},
		handleCurrentChange(val) {
			this.currentPage = val;
			this.page.start = (this.currentPage - 1) * this.page.length
			setTimeout(()=>{
	        	this.init()
	        },0)
		},
     
    }
}
</script>

<style lang="less">

</style>