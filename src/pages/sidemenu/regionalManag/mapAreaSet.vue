<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6">
                <el-input size="large" @keyup.native.enter="onQuery"
                          v-model="areaName"
                          :placeholder="$t('mapArea.searchAlert')"></el-input>
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
        <br>
        <el-table :data="areaList.data"
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
            <el-table-column :label="$t('mapArea.areaName')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.areaName }}</span>
                </template>
            </el-table-column>
            <el-table-column :label="$t('mapArea.areaCode')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.areaCode }}</span>
                </template>
            </el-table-column>
            <el-table-column :label="$t('mapArea.stoneName')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.stoneName }}</span>
                </template>
            </el-table-column>
            <el-table-column :label="$t('mapArea.centIcon')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                    <ul class="el-upload-list el-upload-list--picture-card">
                        <li class="el-upload-list__item  "
                            style="width: 80px;height: 80px;margin: 3px 0 -4px 0;">
                            <img :src="scope.row.centIcon"
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
                               icon="information">{{$t('commom.detail')}}
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
            <mapareaform :areaForm='areaForm'
                         :disabled="dialogTyle==='detail'"
                         ref='areaForm' />
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
    mapareasetPages,
    mapareasetDelete,
    mapareasetDetail,
    mapareasetAdd,
    mapareasetUpdate
} from 'api/api';
import mapareaform from './regionalComponents/mapAreaForm';
let areaForm = {
    "areaId": '',
    "areaName": '',
    "areaCode": '',
    "centLatitude": '',
    "centLongitude": '',
    "centIcon": '',
    "pointX1": '',
    "pointY1": '',
    "pointX2": '',
    "pointY2": '',
    "ofsetAngle": '',
    "ofsetAnglXv": '',
    "ofsetAnglYv": '',
    "stoneZhCnName":"",
    "stoneJaJpName":"",
    "stoneKoKrName":"",
    "stoneEnUsName":"",
    "stoneName":"",
}
export default {
    data() {
        return {
            areaList: {},
            areaName: '',
            page: {
                start: 0,
                length: 10,
                draw: 1,
            },
            currentPage: 1,
            pageSizes: [10, 20, 30],
            dialogVisible: false,
            dialogTyle: '',
            areaForm: {}
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
        areaName(value) {
            if (!value) {
                this.init(this.page)
            }
        }
    },
    methods: {
        init(data) {
            mapareasetPages(data).then(res => {
                this.areaList = res.data.obj
            })
        },
        showDilog(type, data=areaForm) {
            this.areaForm = { ...data }
            this.dialogTyle = type
            this.dialogVisible = true;
        },
        onQuery() {
            if (this.areaName) {
                this.init({ ...this.page, areaName: this.areaName })
            }

        },
        handleDelete(data) {
            this.$confirm(this.$t('commom.deleConfim'), '', {
                confirmButtonText: this.$t('commom.sure'),
                cancelButtonText: this.$t('commom.cancel'),
                type: 'warning'
            }).then(() => {
                mapareasetDelete({ areaId: data.areaId }).then(res => {
                    this.init()
                })
            })
        },
        onSubmit() {
            this.$refs.areaForm.validate( valid => valid && this.commitForm() )
        },
        commitForm() {
             let  formData = new FormData();
             for(let key in this.areaForm){
               if(this.areaForm[key] == null)  continue;
               if(key=='centIcon'){
                    formData.append('stoneImage',this.areaForm[key])
               }else{
                    formData.append(key,this.areaForm[key])
               }
             }
            if (this.dialogTyle === 'edit') {
                mapareasetUpdate(formData).then(res=>{
                  this.init(this.page)
                  this.dialogVisible=false
                }) 
            } else if (this.dialogTyle === 'add') {
                mapareasetAdd(formData).then(res=>{
                    this.init(this.page)
                    this.dialogVisible=false
                })
            }
        },
        handleSizeChange(val) {
            this.page.length = val
            this.page.start = (this.currentPage - 1) * this.page.length
            this.init({ ...this.page, areaName: this.areaName })
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            this.page.start = (this.currentPage - 1) * this.page.length
            setTimeout(()=>{
            this.init({ ...this.page, areaName: this.areaName })
	        },0)
        },

    },
}
</script>
<style lang="less">

</style>