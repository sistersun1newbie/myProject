<template>
    <div>
        <el-form :model="companyform"
                 ref='compform'
                 :rules="rules"
                 :label-position="$store.getters.isMobile?'top':'right'">
            <el-col :span="$store.getters.isMobile?24:11">
 

                <el-form-item :label="$t('company.companyZhCnName')"
                              label-width="150px"
                              prop="companyZhCnName">
                    <el-input v-model="companyform.companyZhCnName"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('company.companyJpJaName')"
                              label-width="150px"
                              prop="companyJpJaName">
                    <el-input v-model="companyform.companyJpJaName"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
        

            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('company.companyEnUsName')"
                              label-width="150px"
                              prop="companyEnUsName">
                    <el-input v-model="companyform.companyEnUsName"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('company.companyKoKrName')"
                              label-width="150px"
                              prop="companyKoKrName">
                    <el-input v-model="companyform.companyKoKrName"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
 
   
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('company.addressZhCn')"
                              label-width="150px"
                              prop="addressZhCn">
                    <el-input v-model="companyform.addressZhCn"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('company.addressJpJa')"
                              label-width="150px"
                              prop="addressJpJa">
                    <el-input v-model="companyform.addressJpJa"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('company.addressEnUs')"
                              label-width="150px"
                              prop="addressEnUs">
                    <el-input v-model="companyform.addressEnUs"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
 
 
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('company.addressKoKr')"
                              label-width="150px"
                              prop="addressKoKr">
                    <el-input v-model="companyform.addressKoKr"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
    
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('company.phone')"
                              label-width="150px"
                              prop="phone">
                    <el-input v-model="companyform.phone"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('company.email')"
                              label-width="150px"
                              prop="email">
                    <el-input v-model="companyform.email"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
    
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('company.fax')"
                              label-width="150px"
                              prop="fax">
                    <el-input v-model="companyform.fax"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('commom.creator')"
                              label-width="150px"
                              v-show="disabled">
                    <el-input v-model="companyform.creator"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('commom.modifyor')"
                              label-width="150px"
                              v-show="disabled">
                    <el-input v-model="companyform.modifyor"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('commom.createTime')"
                              label-width="150px"
                              v-show="disabled">
                    <el-input v-model="companyform.createTime"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('commom.modifyTime')"
                              label-width="150px"
                              v-show="disabled">
                    <el-input v-model="companyform.modifyTime"
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
        companyform: {
            type: Object,
            default() {
                return {}
            }
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            ruleData: [],
            rules: {
                companyZhCnName: [
                    { required: true, message: this.$t('company.validate.companyZhCnName'), trigger: 'blur' }
                ],
                 companyJpJaName: [
                    { required: true, message: this.$t('company.validate.companyJpJaName'), trigger: 'blur' }
                ],
                 companyEnUsName: [
                    { required: true, message: this.$t('company.validate.companyEnUsName'), trigger: 'blur' }
                ],
                 companyKoKrName: [
                    { required: true, message: this.$t('company.validate.companyKoKrName'), trigger: 'blur' }
                ],
                 addressZhCn: [
                    { required: true, message: this.$t('company.validate.addressZhCn'), trigger: 'blur' }
                ],
                 addressJpJa: [
                    { required: true, message: this.$t('company.validate.addressJpJa'), trigger: 'blur' }
                ],
                 addressEnUs: [
                    { required: true, message: this.$t('company.validate.addressEnUs'), trigger: 'blur' }
                ],
                 addressKoKr: [
                    { required: true, message: this.$t('company.validate.addressKoKr'), trigger: 'blur' }
                ],
                 phone: [
                    { required: true, 
                    	validator: (rule, value, callback) => {
							if(!/^\s*\+?\s*(\(\s*\d+\s*\)|\d+)(\s*-?\s*(\(\s*\d+\s*\)|\s*\d+\s*))*\s*$/.test(value)) {
								callback(new Error(this.$t('company.validate.phone')));//vpassWordLength
							}else {
								callback();
							}
						},
//                  	message: this.$t('company.validate.phone'),
                    	trigger: 'blur' }
                ],
                 email: [
                    { required: true, 
                    	validator: (rule, value, callback) => {
							if(!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(value)) {
								callback(new Error(this.$t('company.validate.email')));//vpassWordLength
							}else {
								callback();
							}
						},
//                  	message: this.$t('company.validate.email'),
                    	trigger: 'blur' }
                ],
                 fax: [
                    { 
                    	validator: (rule, value, callback) => {
							if(!/^(\+|-|\d){0,}$/.test(value)) {
								callback(new Error(this.$t('company.validate.fax')));//vpassWordLength
							}else {
								callback();
							}
						},
                    	trigger: 'blur' }
                ],
            }
        }
    },
    created() {

    },
    methods: {
        validate(fn) {
            this.$refs.compform.validate(fn);
        },

    },
    watch: {
        companyform(v) {
            this.$refs.compform.resetFields();
        }
    }
}
</script>
<style lang="less">

</style>