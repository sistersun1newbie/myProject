 

<template>
    <div>
        <el-form :model="paymentFormData"
                 ref='paymentform'
                 :label-position="$store.getters.isMobile?'top':'right'">
            <el-col :span="24">
                <el-form-item :label="$t('business.paymentAccountManag.accountType')"
                              label-width="150px"
                              prop="accountType">
                    <el-radio v-model="paymentFormData.accountType"
                              :label="1"
                              :disabled="disableRadio||disabled||disableApay">{{$t('commom.apay')}}</el-radio>
                    <el-radio v-model="paymentFormData.accountType"
                              :label="2"
                              :disabled="disableRadio||disabled||disableWpay">{{$t('commom.wepay')}}</el-radio>
                </el-form-item>
            </el-col>
           <!-- <el-col :span="24">
                <el-form-item :label="$t('business.paymentAccountManag.isSys')"
                              label-width="150px"
                              prop="isSys">
    
                    <el-radio v-model="paymentFormData.isSys"
                              :label="true"
                              :disabled="disabled">{{$t('commom.yes')}}</el-radio>
                    <el-radio v-model="paymentFormData.isSys"
                              :label="false"
                              :disabled="disabled">{{$t('commom.no')}}</el-radio>
                </el-form-item>
            </el-col>-->
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('business.paymentAccountManag.accountName')"
                              label-width="150px"
                              :rules="{
                                        required: true,
                                        message: this.$t('business.validate.accountName'),
                                        trigger: 'blur'
                                    }"
                              prop="accountName">
                    <el-input v-model="paymentFormData.accountName"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
    
            <el-col :span="$store.getters.isMobile?24:11"
                    v-if='isWPay'>
                <el-form-item :label="$t('business.paymentAccountManag.wechatAppid')"
                              label-width="150px"
                              :rules="{
                                    required: true,
                                    message: this.$t('business.validate.wechatAppid'),
                                    trigger: 'blur'
                                }"
                              prop="wechatAppid">
                    <el-input v-model="paymentFormData.wechatAppid"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('business.paymentAccountManag.partner')"
                              label-width="150px"
                              :rules="{
                                        required: true,
                                        message: this.$t('business.validate.shopUserTel'),
                                        trigger: 'blur'
                                    }"
                              prop="partner">
                    <el-input v-model="paymentFormData.partner"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('business.paymentAccountManag.privateKey')"
                              label-width="150px"
                              :rules="   {
                        required: true,
                        message: this.$t('business.validate.privateKey'),
                        trigger: 'blur'
                    }"
                              prop="privateKey">
                    <el-input v-model="paymentFormData.privateKey"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11"
                    v-if='isWPay'>
                <el-form-item :label="$t('business.paymentAccountManag.certPath')"
                              label-width="150px"
                              :rules="{
                                    required: true,
                                    message: this.$t('business.validate.certPath'),
                                    trigger: 'blur'
                                }"
                              prop="certPath">
                    <el-input v-model="paymentFormData.certPath"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
    
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('commom.creator')"
                              label-width="150px"
                              v-show="disabled">
                    <el-input v-model="paymentFormData.creator"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('commom.modifyor')"
                              label-width="150px"
                              v-show="disabled">
                    <el-input v-model="paymentFormData.modifyor"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('commom.createTime')"
                              label-width="150px"
                              v-show="disabled">
                    <el-input v-model="paymentFormData.createTime"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('commom.modifyTime')"
                              label-width="150px"
                              v-show="disabled">
                    <el-input v-model="paymentFormData.modifyTime"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
    
        </el-form>
    </div>
</template>

<script>
export default {


    props: {
        paymentFormData: {
            type: Object,
            default() {
                return {}
            }
        },
        disableRadio:{
            type:Boolean,
            default:false
        },
        disableWpay:{
            type:Boolean,
            default:false
        },
        disableApay:{
            type:Boolean,
            default:false
        },
        disabled: {
            type: Boolean,
            default: false
        },

    },
    computed: {
        isWPay() {
            return this.paymentFormData.accountType === 2
        },

    }, 
    methods: {
        validate(fn) {
            this.$refs.paymentform.validate(fn);
        },

    },
    watch: {
        paymentFormData(v) {
            this.$refs.paymentform.resetFields();
        }
    }
}
</script>

<style lang="less">

</style>