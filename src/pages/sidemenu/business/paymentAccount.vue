<template>
    <div>
        <el-row :gutter="20"
                v-show='busiPaymentAccount.length<2'>
            <el-col :span="4"  
                    :offset="20">
                <el-button size="large" type="primary"
                           icon="plus" style="float: right;margin:  0px 20px"
                           @click="showDilog('add')">
                    {{$t('commom.add')}}
                </el-button>
            </el-col>
        </el-row>
        <br>
        <el-table :data="busiPaymentAccount"
                  border
                  stripe
                  highlight-current-row
                  style="width: 100%">
              <el-table-column :label="$t('commom.seq')"
             align="center"
              width="100">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.$index+1}}</span>
                </template>
            </el-table-column>
            <el-table-column :label="$t('business.paymentAccountManag.accountType')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                    <span>{{ scope.row.accountType===1?$t('commom.apay'):$t('commom.wepay')  }}</span>
                </template>
            </el-table-column>
            <el-table-column :label="$t('business.paymentAccountManag.accountName')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                    <span>{{ scope.row.accountName }}</span>
                </template>
            </el-table-column>
    
            <!--<el-table-column :label="$t('business.paymentAccountManag.wechatAppid')"
                                 align="center"
                                 min-width="150">
                    <template scope="scope">
                        <span>{{ scope.row.wechatAppid }}</span>
                    </template>
                </el-table-column>
                <el-table-column :label="$t('business.paymentAccountManag.partner')"
                                 align="center"
                                 min-width="150">
                    <template scope="scope">
                        <span>{{ scope.row.partner }}</span>
                    </template>
                </el-table-column>
                <el-table-column :label="$t('business.paymentAccountManag.certPath')"
                                 align="center"
                                 min-width="150">
                    <template scope="scope">
                        <span>{{ scope.row.certPath }}</span>
                    </template>
                </el-table-column>-->
            <!--<el-table-column :label="$t('business.paymentAccountManag.isSys')"
                             align="center"
                             min-width="150">
                <template scope="scope">
                    <span>{{ scope.row.isSys?'是':'否' }}</span>
                </template>
            </el-table-column>-->
    
            <el-table-column :label="$t('commom.operation')"
                             align="center"
                             :fixed="$store.getters.isMobile?false:'right'"
                             min-width="255">
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
                               icon="edit">
                        {{$t('commom.edit')}}
                    </el-button>
                    <el-button size="small"
                               @click="handleDelete(scope)"
                               type="danger"
                               icon="delete">
                        {{$t('commom.delete')}}
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    
        <el-dialog v-model="dialogVisible"
                   :close-on-click-modal='false'
                   :size="$store.getters.isMobile?'full': 'small'">
            <paymentform :paymentFormData='paymentFormData'
                         :disabled="dialogTyle==='detail'"
                         :disableWpay='disableWpay'
                         :disableApay='disableApay'
                         :disableRadio="dialogTyle==='edit'"
                         ref='paymentform' />
            <div style="float: right;margin-bottom: 20px"  v-show="dialogTyle!=='detail'">
                <el-button @click="dialogVisible=false">{{$t('commom.cancel')}}</el-button>
                <el-button type="primary"
                           @click="onSubmit"
                          >{{$t('commom.sure')}}</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import {
    busiPaymentAccountAdd,
    busiPaymentAccountDelete,
    busiPaymentAccountUpdate,
    busiPaymentAccountDetail,
    busiPaymentAccountPages,
} from 'api/api';
import paymentform from './businessComponents/paymentAcountForm';
let paymentFormData = {
    accountName: '',
    accountType: 1,
    wechatAppid: '',
    partner: '',
    privateKey: '',
    certPath: '',
}
export default {
    data() {
        return {
            searchValue: '',
            dialogVisible: false,
            dialogTyle: '',
            paymentFormData: { },
            busiPaymentAccount: []

        }
    },
    components: {
        paymentform
    },
    created() {
    
        this.init()
    },
    computed: {
        disableWpay() {
            
            return this.busiPaymentAccount.some((obj) => {
                return obj.accountType === 2
            })
        },
        disableApay() {
            
            return this.busiPaymentAccount.some((obj) => {
                return obj.accountType === 1
            })
        }
    },
    methods: {
        init() {
            busiPaymentAccountPages().then(res => {
                this.busiPaymentAccount = res.data.obj
            })
        },
        showDilog(type, obj) {
            this.dialogVisible = true
            this.dialogTyle = type
            if (obj) {
                this.paymentFormData = { ...obj }
            } else {
                let accountType=this.disableApay ? 2 : 1
                this.paymentFormData = { ...paymentFormData,accountType:accountType }
            }
           
        },

        onSubmit() {
            this.$refs.paymentform.validate(valid => valid && this.commitForm())
        },
        commitForm() {
            if (this.dialogTyle === 'edit') {
                busiPaymentAccountUpdate(this.paymentFormData).then(res => {
                    this.dialogVisible = false
                    this.init()
                })
            } else if (this.dialogTyle === 'add') {
                busiPaymentAccountAdd(this.paymentFormData).then(res => {
                    this.dialogVisible = false
                    this.init()
                })
            }
        },
        handleDelete(obj) {
            this.$confirm(this.$t('commom.deleConfim'), '', {
                confirmButtonText: this.$t('commom.sure'),
                cancelButtonText: this.$t('commom.cancel'),
                type: 'warning'
            }).then(() => {
                busiPaymentAccountDelete({
                    paymentAccountId: obj.row.paymentAccountId
                }).then(res => {
                    this.init()
                })
            }).catch(res => { })
        },

    }
}
</script>

<style lang="less">

</style>