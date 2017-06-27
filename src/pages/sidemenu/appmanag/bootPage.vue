<template>
    <div>
        <el-row :gutter="20">
            <!--<el-col :span="6">
                <el-input size="large"
                          v-model="searchValue"
                          :placeholder="$t('shopManag.searchAlert')"></el-input>
            </el-col>
            <el-col :span="2">
                <el-button size="large" icon="search"
                           @click="onQuery">{{$t('commom.search')}}</el-button>
            </el-col>-->
            <el-col :span="4"
                    :offset="20">
                <el-button size="large" type="primary"
                           icon="plus" style="float: right;margin:  0px 20px"
                           @click="showDilog('add')">
                    {{$t('commom.add')}}
                </el-button>
            </el-col>
        </el-row>
        <br/>
        <el-table :data="tableData"
                  border
                  stripe
                  highlight-current-row
                  style="width: 100%">
            <el-table-column :label="$t('commom.seq')"
                     align="center"
                      width="100">
                <template scope="scope">
                	<!--+((page&&page.start)||0 )-->
                    <span style="margin-left: 10px">{{ scope.$index+1}}</span>
                </template>
            </el-table-column>
            <el-table-column :label="$t('appmanag.bootPage.seq')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.seq }}</span>
                </template>
            </el-table-column>
            <el-table-column :label="$t('appmanag.bootPage.isShow')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.isShow===1?'是':'否' }}</span>
                </template>
            </el-table-column>
            <el-table-column :label="$t('commom.creator')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.creator }}</span>
                </template>
            </el-table-column>
            <el-table-column :label="$t('appmanag.bootPage.pictureUrl')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                    <ul class="el-upload-list el-upload-list--picture-card">
                        <li class="el-upload-list__item  "
                        	
                            style="width: 80px;height: 80px;margin: 3px 0 -4px 0;"><!--margin: 3px 0 -4px 0;-->
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
        <el-dialog v-model="dialogVisible"
                   :close-on-click-modal='false'
                   :size="$store.getters.isMobile?'full': 'small'">
            <bootpageform :bootPageObj='bootPageObj'
                          :disabled="dialogTyle==='detail'"
                          ref='bootForm' />
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
    appguidPagePages,
    appguidPageDelete,
    appguidPageADD,
    appguidPageUpdate
} from 'api/api';
import bootpageform from './appComponents/bootPageForm';
let bootPageObj = {
    "pageId": '', //页面ID
    "pictureUrl": "", //图片URL
    "seq": '', //显示顺序
    "showTime": '', //显示时间，备用
    "createTime": "",
    "creator": "admin",
    "modifyTime": "",
    "modifyor": '',
    'isShow': 1
}
export default {
    data() {
        return {
            searchValue: '',
            tableData: [],
            dialogVisible: false,
            dialogTyle: '',
            bootPageObj: {
                ...bootPageObj
            }
        }
    },

    components: {
        bootpageform
    },
    created() {
        this.init()
    },
    methods: {
        init() {
            appguidPagePages().then(res => {
                this.tableData = res.data.obj
            })
        },
        onQuery() {

        },
        showDilog(type, obj=bootPageObj ) {
            this.dialogVisible = true
            this.dialogTyle = type
            this.bootPageObj = {...obj}
        },
        onSubmit() {
            this.$refs.bootForm.validate(valid => valid && this.commitForm())
        },
        commitForm() {
             let  formData = new FormData();
            for(let key in this.bootPageObj){
                if(key=='pictureUrl'){
                        formData.append('multipartFile',this.bootPageObj[key])
                }else{
                    formData.append(key, this.bootPageObj[key]);
            }
         }
          if(this.dialogTyle==='edit'){
            appguidPageUpdate(formData).then(res=>{
              this.init()
              this.dialogVisible=false
            }) 
          }else if(this.dialogTyle==='add'){
            appguidPageADD(formData).then(res=>{
              this.init()
              this.dialogVisible=false
            }) 
          }
        },
        handleDelete(obj) {
            this.$confirm(this.$t('commom.deleConfim'), '', {
                confirmButtonText: this.$t('commom.sure'),
                cancelButtonText: this.$t('commom.cancel'),
                type: 'warning'
            }).then(() => {
                appguidPageDelete({
                    pageId: obj.pageId
                }).then(res => {
                    this.init()
                })

            }).catch(res => {

            })


        }
    }
}
</script>

<style lang="less">
.el-upload-list .el-upload-list__item  {
	margin: 0px;
	img{
		/*margin: 3px 0 -4px 0;*/
	}
}
</style>