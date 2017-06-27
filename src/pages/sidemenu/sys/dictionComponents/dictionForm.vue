<template>
    <div>
        <el-form :model="dictionForm"
                 ref='typeCForm'
                 :rules="rules"
                 :label-position="$store.getters.isMobile?'top':'right'">
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('commom.zhName')"
                              label-width="150px"
                              prop="dictZhCnName">
                    <el-input v-model="dictionForm.dictZhCnName"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('commom.jaName')"
                              label-width="150px"
                              prop="dictJaJpName">
                    <el-input v-model="dictionForm.dictJaJpName"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('commom.koName')"
                              label-width="150px"
                              prop="dictKoKrName">
                    <el-input v-model="dictionForm.dictKoKrName"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('commom.enName')"
                              label-width="150px"
                              prop="dictEnUsName">
                    <el-input v-model="dictionForm.dictEnUsName"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
    
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('dictionaries.dictCode')"
                              label-width="150px"
                              prop="dictCode">
                    <el-input v-model="dictionForm.dictCode"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('dictionaries.dictType')"
                              label-width="150px"
                              prop="dictType">
                    <el-input v-model="dictionForm.dictType"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('sysRole.zhCnDescription')"
                              label-width="150px"
                              prop="dictZhCnDescription">
                    <el-input v-model="dictionForm.dictZhCnDescription"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('sysRole.jaJpDescription')"
                              label-width="150px"
                              prop="dictJaJpDescription">
                    <el-input v-model="dictionForm.dictJaJpDescription"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
    
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('sysRole.koKrDescription')"
                              label-width="150px"
                              prop="dictKoKrDescription">
                    <el-input v-model="dictionForm.dictKoKrDescription"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('sysRole.enUsDescription')"
                              label-width="150px"
                              prop="dictEnUsDescription">
                    <el-input v-model="dictionForm.dictEnUsDescription"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
    
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('dictionaries.seq')"
                              label-width="150px"
                              prop="seq">
                    <el-input v-model="dictionForm.seq"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('dictionaries.ext1')"
                              label-width="150px"
                              prop="ext1">
                    <el-input v-model="dictionForm.ext1"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('dictionaries.ext2')"
                              label-width="150px"
                              prop="ext2">
                    <el-input v-model="dictionForm.ext2"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('dictionaries.ext3')"
                              label-width="150px"
                              prop="ext3">
                    <el-input v-model="dictionForm.ext3"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
    
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('dictionaries.isSys')"
                              label-width="150px"
                              prop="isSys">
                    <el-radio class="radio"
                              v-model="dictionForm.isSys"
                              :label="true"
                              :disabled="disabled">{{$t('commom.yes')}}</el-radio>
                    <el-radio class="radio"
                              v-model="dictionForm.isSys"
                              :label="false"
                              :disabled="disabled">{{$t('commom.no')}}</el-radio>
                </el-form-item>
            </el-col>
    
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('commom.creator')"
                              label-width="150px"
                              v-show="disabled">
                    <el-input v-model="dictionForm.creator"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('commom.modifyor')"
                              label-width="150px"
                              v-show="disabled">
                    <el-input v-model="dictionForm.modifyor"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('commom.createTime')"
                              label-width="150px"
                              v-show="disabled">
                    <el-input v-model="dictionForm.createTime"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('commom.modifyTime')"
                              label-width="150px"
                              v-show="disabled">
                    <el-input v-model="dictionForm.modifyTime"
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
        dictionForm: {
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
                dictCode: [
                    { required: true, message: this.$t('dictionaries.validate.dictCode'), trigger: 'blur' }
                ],
                 dictType: [
                    { required: true, message: this.$t('dictionaries.validate.dictType'), trigger: 'blur' }
                ],
                 dictZhCnName: [
                    { required: true, message: this.$t('dictionaries.validate.dictZhCnName'), trigger: 'blur' }
                ],
                 dictJaJpName: [
                    { required: true, message: this.$t('dictionaries.validate.dictJaJpName'), trigger: 'blur' }
                ],
                 dictKoKrName: [
                    { required: true, message: this.$t('dictionaries.validate.dictKoKrName'), trigger: 'blur' }
                ],
                 dictEnUsName: [
                    { required: true, message: this.$t('dictionaries.validate.dictEnUsName'), trigger: 'blur' }
                ],
                 dictZhCnDescription: [
                    { required: true, message: this.$t('dictionaries.validate.dictZhCnDescription'), trigger: 'blur' }
                ],
                 dictJaJpDescription: [
                    { required: true, message: this.$t('dictionaries.validate.dictJaJpDescription'), trigger: 'blur' }
                ],
                 dictKoKrDescription: [
                    { required: true, message: this.$t('dictionaries.validate.dictKoKrDescription'), trigger: 'blur' }
                ],
                 dictEnUsDescription: [
                    { required: true, message: this.$t('dictionaries.validate.dictEnUsDescription'), trigger: 'blur' }
                ],
                // isSys:[
                //     { type: 'boolean', message: this.$t('dictionaries.validate.isSys'), trigger: 'blur' }
                // ]
                
            }
        }
    },
    created() {

    },
    methods: {

        validate(fn) {
            this.$refs.typeCForm.validate(fn);
        },

    },
    watch: {
        dictionForm(v) {
            this.$refs.typeCForm.resetFields();
        }
    }
}
</script>
<style lang="less">

</style>