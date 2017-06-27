<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6">
                    <el-input size="large" @keyup.native.enter='onQuery'
                              v-model="searchValue"
                              :placeholder="$t('article.gameMission.search')"></el-input>
                </el-col>
                <el-col :span="2">
                    <el-button size="large" icon="search"
                               @click="onQuery">{{$t('commom.search')}}</el-button>
                </el-col>
            <el-col :span="4"
                    :offset="12">
                <el-button size="large" type="primary" style="float: right;margin:  0px 20px"
                           icon="plus"
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
                    <span style="margin-left: 10px">{{ scope.$index+1+page.start }}</span>
                </template>
            </el-table-column>
            <el-table-column :label="$t('article.gameMission.name')"
                     align="center"
                     min-width="150">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.gameName }}</span>
                </template>
            </el-table-column>
            
            <el-table-column :label="$t('article.story.areaId')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.areaName }}</span>
                </template>
            </el-table-column>
            <el-table-column :label="$t('article.gameMission.gift')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.giftName }}</span>
                </template>
            </el-table-column>
            <el-table-column :label="$t('commom.status')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.gameStatus==1?($t('article.gameMission.status1')):($t('article.gameMission.status2')) }}</span>
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
            <gamemissionform :pageData='pageData'
                       :disabled="dialogTyle==='detail'"
                       ref='gamemissionForm' />
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
	areagametaskPages,
	areagametaskAdd,
	areagametaskUpdate,
	areagametaskDelete,
	areagametaskDetail
} from 'api/api';
import gamemissionform from './articleComponents/gamemissionForm';
let pageData = {
	gameCode:'',
	gameZhCnName:'',
	gameEnUsName:'',
	gameJaJpName:'',
	gameKoKrName:'',
	gameZhCnIntroduction:'',
	gameJaJpIntroduction:'',
	gameKoKrIntroduction:'',
	gameEnUsIntroduction:'',
	areaId:'',
	gameStatus:'',//状态：1-正常；2-停用
	busiId:'',
	giftId:'',
	qrCode:'',
	gameZhCnDetail:'',
	gameJaJpDetail:'',
	gameKoKrDetail:'',
	gameEnUsDetail:'',
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
        gamemissionform
    },
    created() {
        this.init()
    },
    watch: {
      searchValue(value){
        if(!value){
          areagametaskPages(this.page).then(res => {
            	this.tableData = res.data.obj
            })
        }
      }
    },
    methods: {
        init() {
            areagametaskPages(this.page).then(res => {
            	this.tableData = res.data.obj
            })
        },
        onQuery() {
        	if(this.searchValue){
	          areagametaskPages({...this.page,gameName:this.searchValue}).then(res => {
					this.tableData = res.data.obj
				})
	        }
        	
        },
        showDilog(type, obj = pageData) {
            this.dialogVisible = true
            this.dialogTyle = type
            
                this.pageData = { ...obj }
            

        },
        onSubmit() {
            this.$refs.gamemissionForm.validate(valid => valid && this.commitForm())
        },
        commitForm() {
        	for(let key in this.pageData ){
        		if(key.indexOf('Time')>-1){
        			delete  this.pageData[key]
        		}
        	}
            if (this.dialogTyle === 'edit') {
	
                areagametaskUpdate(this.pageData).then(res => {
                    this.init()
                    this.dialogVisible = false
                })
            } else if (this.dialogTyle === 'add') {
                areagametaskAdd(this.pageData).then(res => {
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
            	
                areagametaskDelete({
                    gameId: obj.gameId
                }).then(res => {
                    this.init()
                })

            }).catch(res => {

            })


       },
       getpageData(){
       	areagametaskPages({...this.page,gameName:this.searchValue}).then(res => {
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