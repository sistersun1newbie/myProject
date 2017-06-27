<template>
    <div>
        <el-row :gutter="20">
            <!--<el-col :span="6">
                <el-input size="large"
                          v-model="searchValue"
                          :placeholder="$t('company.searchAlert')"></el-input>
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
          
    
 
        <el-table :data="pageData.data"
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
            <el-table-column :label="$t('company.companyName')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                    <span>{{ scope.row.companyName }}</span>
                </template>
            </el-table-column>
            <el-table-column :label="$t('company.address')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                    <span>{{ scope.row.address }}</span>
                </template>
            </el-table-column>
            <el-table-column :label="$t('company.phone')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                    <span>{{ scope.row.phone }}</span>
                </template>
            </el-table-column>
            <el-table-column :label="$t('company.email')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                    <span>{{ scope.row.email }}</span>
                </template>
            </el-table-column>
              <el-table-column :label="$t('company.fax')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                    <span>{{ scope.row.fax }}</span>
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
                               icon="information">{{$t('commom.detail')}}
                    </el-button>
                    <el-button size="small"
                                v-if='!scope.row.isSys'
                               @click="showDilog('edit', scope.row)"
                               type="primary"
                               icon="edit"> {{$t('commom.edit')}}
                    </el-button>
                    <el-button size="small"
                    v-if='!scope.row.isSys'
                               @click="handleDelete(scope.row)"
                               type="danger"
                               icon="delete">{{$t('commom.delete')}}
                    </el-button>
    
                </template>
            </el-table-column>
        </el-table>
        </el-table>
        <el-pagination style="overflow: auto"
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="currentPage"
                       :page-sizes="pageSizes"
                       :page-size="page.length"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="pageData.recordsTotal" />
        <el-dialog v-model="dialogVisible"
                   :close-on-click-modal='false'
                   :size="$store.getters.isMobile?'full': 'small'">
            <compform :companyform='companyform'
                      :disabled="dialogTyle==='detail'"
                      ref='compform' />
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

import compform from './companyComponents/companyForm'
import { BUSINESSTYPE_GETALL } from 'type'
import {
    sysCompInfoAdd,
    sysCompInfoPages,
    sysCompInfoUpdate,
    sysCompInfoDelete
} from 'api/api'
  
let companyform = {
    companyZhCnName:'',
    companyJpJaName:'',
    companyEnUsName:'',
    companyKoKrName:'',
    addressZhCn:'',
    addressJpJa:'',
    addressEnUs:'',
    addressKoKr:'',
    phone:'',
    email:'',
    fax:'',
    station:'',
}
export default {
    data() {
        return {
            pageData: {},
            searchValue: '',
            page: {
                start: 0,
                length: 10,
                draw: 1,
            },
            currentPage: 1,
            pageSizes: [10, 20, 30],
            dialogVisible: false,
            dialogTyle: '',
            companyform: {}
        }
    },
    components: {
        compform
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
            sysCompInfoPages(data).then(res => {
                this.pageData = res.data.obj
            })
        },
        showDilog(type, data=companyform) {
            this.companyform = { ...data }
            this.dialogVisible = true
            this.dialogTyle = type
        },
        onQuery() {
            this.searchValue &&  this.init({ ...this.page, name: this.searchValue })  
        },
        onSubmit() {
            this.$refs.compform.validate(valid => valid && this.commitForm())
        },
        commitForm() {
            if (this.dialogTyle === 'edit') {
                delete this.companyform.createTime
                 delete this.companyform.modifyTime
                sysCompInfoUpdate(this.companyform).then(res=>{
                    this.init(this.page)
                    this.dialogVisible=false
                })
            } else if (this.dialogTyle === 'add') {
                sysCompInfoAdd(this.companyform).then(res=>{
                    this.init(this.page)
                    this.dialogVisible=false
                })
            }
        },

        handleDelete(data) {
            this.$confirm(this.$t('commom.deleConfim'), '', {
                confirmButtonText: this.$t('commom.sure'),
                cancelButtonText: this.$t('commom.cancel'),
                type: 'warning'
            }).then(() => {
                sysCompInfoDelete({companyId:data.companyId}).then(res=>{
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
<style lang="less">

</style>