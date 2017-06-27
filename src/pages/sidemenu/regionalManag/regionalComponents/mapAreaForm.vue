<template>
    <div>
        <el-form :model="areaForm"
                 ref='areacForm'
                 :rules="rules"
                 :label-position="$store.getters.isMobile?'top':'right'">
    
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('mapArea.centIcon')"
                              label-width="150px"
                              prop="'centIcon'">
                    <input type="file"
                           accept="image/png, image/jpeg, image/bmp, image/gif"
                           id="mapArea"
                           @change='getFile'
                           style="display:none">
                    <ul class="el-upload-list el-upload-list--picture-card">
                        <li class="el-upload-list__item  ">
                            <img :src="base64Img||areaForm.centIcon"
                                 alt=""
                                 class="el-upload-list__item-thumbnail">
    
                            <span class="el-upload-list__item-actions"
                                  v-show='!disabled'>
                         <span class="el-upload-list__item-delete">
                              <i class="el-icon-delete2" v-show='base64Img||areaForm.centIcon' @click="deleteImg" style="font-size:40px"/> 
                              <i class="el-icon-plus" v-show='!base64Img&&!areaForm.centIcon' @click="addImg" style="font-size:40px" /> 
                           </span>
                            </span>
                        </li>
                    </ul>
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('mapArea.areaName')"
                              label-width="150px"
                              prop="areaName">
                    <el-input v-model="areaForm.areaName"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('mapArea.areaCode')"
                              label-width="150px"
                              prop="areaCode">
                    <el-input v-model="areaForm.areaCode"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('mapArea.centLongitude')"
                              label-width="150px"
                              prop="centLongitude">
                    <el-input v-model.number="areaForm.centLongitude"
                              auto-complete="off"
                              :disabled="disabled"
                              @click.native='showMap("cent")' />
                </el-form-item>
            </el-col>
               <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('mapArea.centLatitude')"
                              label-width="150px"
                              prop="centLatitude">
                    <el-input v-model.number="areaForm.centLatitude"
                              auto-complete="off"
                               @click.native='showMap("cent")'
                              :disabled="disabled" />
                </el-form-item>
            </el-col>



            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('mapArea.stoneZhCnName')"
                              label-width="150px"
                              prop="stoneZhCnName">
                    <el-input v-model="areaForm.stoneZhCnName"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
              <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('mapArea.stoneJaJpName')"
                              label-width="150px"
                              prop="stoneJaJpName">
                    <el-input v-model="areaForm.stoneJaJpName"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
              <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('mapArea.stoneKoKrName')"
                              label-width="150px"
                              prop="stoneKoKrName">
                    <el-input v-model="areaForm.stoneKoKrName"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
              <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('mapArea.stoneEnUsName')"
                              label-width="150px"
                              prop="stoneEnUsName">
                    <el-input v-model="areaForm.stoneEnUsName"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
           
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('mapArea.pointX1')"
                              label-width="150px"
                              prop="pointX1">
                    <el-input v-model.number="areaForm.pointX1"
                              auto-complete="off"
                              :disabled="disabled"
                              @click.native='showMap("leftUp")' />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('mapArea.pointY1')"
                              label-width="150px"
                              prop="pointY1">
                    <el-input v-model.number="areaForm.pointY1"
                              auto-complete="off"
                              :disabled="disabled"
                              @click.native='showMap("leftUp")' />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('mapArea.pointX2')"
                              label-width="150px"
                              prop="pointX2">
                    <el-input v-model="areaForm.pointX2"
                              auto-complete="off"
                              :disabled="disabled"
                              @click.native='showMap("rightDown")' />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('mapArea.pointY2')"
                              label-width="150px"
                              prop="pointY2">
                    <el-input v-model.number="areaForm.pointY2"
                              auto-complete="off"
                              :disabled="disabled"
                              @click.native='showMap("rightDown")' />
                </el-form-item>
            </el-col>
            
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('commom.creator')"
                              label-width="150px"
                              v-show="disabled">
                    <el-input v-model="areaForm.creator"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('commom.modifyor')"
                              label-width="150px"
                              v-show="disabled">
                    <el-input v-model="areaForm.modifyor"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('commom.createTime')"
                              label-width="150px"
                              v-show="disabled">
                    <el-input v-model="areaForm.createTime"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
            <el-col :span="$store.getters.isMobile?24:11">
                <el-form-item :label="$t('commom.modifyTime')"
                              label-width="150px"
                              v-show="disabled">
                    <el-input v-model="areaForm.modifyTime"
                              auto-complete="off"
                              :disabled="disabled" />
                </el-form-item>
            </el-col>
    
        </el-form>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
    props: {
        areaForm: {
            type: Object,
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            base64Img: '',
            type: '',
            rules: {
                areaName: [
                    { required: true, message: this.$t('mapArea.validate.areaName'), trigger: 'blur' }
                ],
                areaCode: [
                    { required: true, message: this.$t('mapArea.validate.areaCode'), trigger: 'blur' }
                ],
                pointX1: [
                    { required: true, type: 'number', message: this.$t('mapArea.validate.pointX1'), trigger: 'change' }
                ],
                pointY1: [
                    { required: true, type: 'number', message: this.$t('mapArea.validate.pointY1'), trigger: 'change' }
                ],
                pointY2: [
                    { required: true, type: 'number', message: this.$t('mapArea.validate.pointY2'), trigger: 'change' }
                ],
                pointX2: [
                    { required: true, type: 'number', message: this.$t('mapArea.validate.pointX2'), trigger: 'change' }
                ],
                centLongitude: [
                    { required: true, type: 'number', message: this.$t('mapArea.validate.centLongitude'), trigger: 'change' }
                ],
                centLatitude: [
                    { required: true, type: 'number', message: this.$t('mapArea.validate.centLatitude'), trigger: 'change' }
                ],
                stoneZhCnName:[
                    { required: true, message: this.$t('mapArea.validate.stoneZhCnName'), trigger: 'blur' }
                ],
                stoneJaJpName:[
                    { required: true, message: this.$t('mapArea.validate.stoneJaJpName'), trigger: 'blur' }
                ],
                stoneKoKrName:[
                    { required: true, message: this.$t('mapArea.validate.stoneKoKrName'), trigger: 'blur' }
                ],
                stoneEnUsName:[
                    { required: true, message: this.$t('mapArea.validate.stoneEnUsName'), trigger: 'blur' }
                ],
            }
        }
    },
    computed: {
        markerInfo() {
            return this.$store.state.markerInfo
        },
        isShow() {
            return this.$store.state.showMap
        },
    },

    methods: {
        ...mapMutations([
            'updatedShowMap',
            'updatedMarkerInfo'
        ]),
        showMap(type) {
            this.type = type
            if (this.disabled) return
            console.log(this.areaForm.pointX1)
            if (this.type === 'leftUp' && this.areaForm.pointX1) {
                this.updatedMarkerInfo({
                    lng: this.areaForm.pointX1,
                    lat: this.areaForm.pointY1,
                })
            } else if (this.type === 'rightDown' && this.areaForm.pointX2) {
                this.updatedMarkerInfo({
                    lng: this.areaForm.pointX2,
                    lat: this.areaForm.pointY2,
                })
            } else if (this.type === 'cent' && this.areaForm.centLongitude) {
                this.updatedMarkerInfo({
                    lat: this.areaForm.centLatitude,
                    lng: this.areaForm.centLongitude,
                })
            }
            this.updatedShowMap(true)
        },
        deleteImg() {
            this.areaForm.centIcon = '';
            this.base64Img = '';
            document.getElementById('mapArea').value = ''
        },
        addImg() {
            document.getElementById('mapArea').click()
        },
        validate(fn) {
            this.$refs.areacForm.validate(fn);
        },
        getFile(e) {
            let file = e.target.files[0]
            if (file) {
                this.areaForm.centIcon = file
                let reader = new FileReader();
                reader.onload = () => {
                    this.base64Img = reader.result //这个就是base64的数据了
                }
                reader.readAsDataURL(file);
            }
        }
    },
    watch: {
        areaForm(v) {
            this.base64Img = ''
            this.$nextTick(() => {
                document.getElementById('mapArea').value = ''
            })
            this.$refs.areacForm.resetFields();
        },
        markerInfo(m) {
            if (m.lng && m.lat) {
                if (this.type === 'leftUp') {
                    this.areaForm.pointX1 = m.lng
                    this.areaForm.pointY1 = m.lat
                } else if (this.type === 'rightDown') {
                    this.areaForm.pointX2 = m.lng
                    this.areaForm.pointY2 = m.lat
                } else if (this.type === 'cent') {
                    this.areaForm.centLongitude = m.lng
                    this.areaForm.centLatitude = m.lat
                }
            }
        },
    }
}
</script>
<style lang="less">

</style>