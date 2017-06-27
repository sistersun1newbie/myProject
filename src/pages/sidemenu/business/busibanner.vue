<template>
    <div>
        <el-row :gutter="20">
          <!--  <el-col :span="6">
                <el-input size="large" @keyup.native.enter='onQuery'
                          v-model="binfoName"
                          :placeholder="$t('shopManag.searchAlert')"></el-input>
            </el-col>
            <el-col :span="2">
                <el-button size="large" icon="search"
                           @click="onQuery">{{$t('commom.search')}}</el-button>
            </el-col>-->
            <el-col :span="4"
                    :offset="20">
                <el-button size="large" type="primary" style="float: right;margin:  0px 20px"
                           icon="plus"
                           @click="showDilog('add')">
                    {{$t('commom.add')}}
                </el-button>
            </el-col>
        </el-row>
        <br>
        <el-table :data="areaList.data"
                  border
                  stripe
                  highlight-current-row
                  style="width: 100%">
            <!--<el-table-column :label="$t('business.busibanner.binfoName')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.binfoName}}</span>
                </template>
            </el-table-column>-->
            <el-table-column :label="$t('business.busibanner.seq')"
                             align="center"
                             width="100">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.$index+1+(page&&page.start||0 ) }}</span>
                </template>
            </el-table-column>
              <el-table-column :label="$t('business.busibanner.bannerType')"
                             align="center"
                             width="100">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.bannerType===1?$t('business.busibanner.bannerType1'):$t('business.busibanner.bannerType2') }}</span>
                </template>
            </el-table-column>
    
            <el-table-column :label="$t('business.busibanner.bannerimg')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                    <ul class="el-upload-list el-upload-list--picture-card">
                        <li class="el-upload-list__item  "
                            style="width: 80px;height: 80px;margin: 3px 0 -4px 0;">
                            <img :src="scope.row.pictureUrl"
                                 alt=""
                                 class="el-upload-list__item-thumbnail">
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
                               icon="information" >{{$t('commom.detail')}}
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
        <el-pagination style="overflow: auto"
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="currentPage"
                       :page-sizes="pageSizes"
                       :page-size="page.length"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="areaList.recordsTotal" />
    
        <el-dialog v-model="dialogVisible"
                   :close-on-click-modal='false'
                   :size="$store.getters.isMobile?'full': 'small'">
            <mapareaform :pageData='pageData'
                         :disabled="dialogTyle==='detail'"
                         ref='pageData' />
            <div style="float: right;margin-bottom: 20px"
                 v-show="dialogTyle!=='detail'">
                <el-button @click="dialogVisible=false">{{$t('commom.cancel')}}</el-button>
                <el-button type="primary"
                           @click="onSubmit">{{$t('commom.sure')}}</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import {
    busibannerPages,
    busibannerDelete,
//  busibannerDetail,
    busibannerAdd,
    busibannerUpdate
} from 'api/api';
import mapareaform from './businessComponents/busibannerForm';
let pageData = {
//icon:'',
    bannerText:"",
    binfoName:"",
    busiBannerId:"",
    busiInfoId:"",
    createTime:"",
    creator:"",
    language:"",
    linkType:"",
    linkUrl:"",
    modifyTime:"",
    modifyor:"",
    pictureUrl:"",
    seq:"",
    bannerType:1 
}
export default {
    data() {
        return {
            areaList: {},
            binfoName: '',
            page: {
                start: 0,
                length: 10,
                draw: 1,
            },
            currentPage: 1,
            pageSizes: [10, 20, 30],
            dialogVisible: false,
            dialogTyle: '',
            pageData: {}
        }
    },
    created() {
        this.init(this.page)
    },
    components: {
        mapareaform
    },

    computed: {

    },
    watch: {
        binfoName(value) {
            if (!value) {
                this.init(this.page)
            }
        }
    },
    methods: {
        init(data) {
            busibannerPages(data).then(res => {
                this.areaList = res.data.obj
            })
        },
        showDilog(type, data = pageData) {
            this.pageData = { ...data }
            this.dialogTyle = type
            this.dialogVisible = true;
        },
        onQuery() {
            if (this.binfoName) {
                this.init({ ...this.page, binfoName: this.binfoName })
            }

        },
        handleDelete(data) {
            this.$confirm(this.$t('commom.deleConfim'), '', {
                confirmButtonText: this.$t('commom.sure'),
                cancelButtonText: this.$t('commom.cancel'),
                type: 'warning'
            }).then(() => {
                busibannerDelete({ busiBannerId: data.busiBannerId }).then(res => {
                    this.init()
                })
            })
        },
        onSubmit() {
            this.$refs.pageData.validate( valid => valid && this.commitForm() )
        },
        commitForm() {
             let  formData = new FormData();
             for(let key in this.pageData){
               if(this.pageData[key] == null)  continue;
               if(key=='pictureUrl'){
                    formData.append('icon',this.pageData[key])
               }else{
                    formData.append(key,this.pageData[key])
               }
             }
            if (this.dialogTyle === 'edit') {
                busibannerUpdate(formData).then(res=>{
                  this.init(this.page)
                  this.dialogVisible=false
                }) 
            } else if (this.dialogTyle === 'add') {
                busibannerAdd(formData).then(res=>{
                    this.init(this.page)
                    this.dialogVisible=false
                })
            }
        },
        handleSizeChange(val) {
            this.page.length = val
            this.page.start = (this.currentPage - 1) * this.page.length
            this.init({ ...this.page, binfoName: this.binfoName })
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            this.page.start = (this.currentPage - 1) * this.page.length
            setTimeout(()=>{
	        	this.init({ ...this.page, binfoName: this.binfoName })
	        },0)
            
        },

    },
}
</script>
<style lang="less">

</style>