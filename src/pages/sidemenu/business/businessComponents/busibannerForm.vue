<template>
    <div>
        <el-form :model="pageData"
                 ref='areacForm'
                 :rules="rules"
                 :label-position="$store.getters.isMobile?'top':'right'">
            <el-col :span="24">
                <el-form-item :label="$t('business.busibanner.bannerimg')"
                              label-width="150px"
                              prop="pictureUrl">
                    <input type="file"
                           accept="image/png, image/jpeg, image/bmp, image/gif"
                           id="mapArea"
                           @change='getFile'
                           style="display:none">
                    <ul class="el-upload-list el-upload-list--picture-card">
                        <li class="el-upload-list__item  ">
                            <img :src="base64Img||pageData.pictureUrl"
                                 alt=""
                                 class="el-upload-list__item-thumbnail">
    
                            <span class="el-upload-list__item-actions"
                                  v-show='!disabled'>
                         <span class="el-upload-list__item-delete">
                              <i class="el-icon-delete2" v-show='base64Img||pageData.pictureUrl' @click="deleteImg" style="font-size:40px"/> 
                              <i class="el-icon-plus" v-show='!base64Img&&!pageData.pictureUrl' @click="addImg" style="font-size:40px" /> 
                           </span>
                            </span>
                        </li>
                    </ul>
                </el-form-item>
            </el-col>
			<el-col :span="24">
				<el-form-item :label="$t('business.busibanner.seq')" label-width="150px" prop="seq">
					<el-input v-model.number="pageData.seq" auto-complete="off" :disabled="disabled" />
				</el-form-item>
			</el-col>
             <el-col :span="24">
                <el-form-item :label="$t('business.busibanner.bannerType')"
                              label-width="150px"
                              prop="accountType">
                    <el-radio v-model="pageData.bannerType"
                              :label="1"
                              :disabled="disabled">{{$t('business.busibanner.bannerType1')}}</el-radio>
                    <el-radio v-model="pageData.bannerType"
                              :label="2"
                             :disabled="disabled"">{{$t('business.busibanner.bannerType2')}}</el-radio>
                </el-form-item>
            </el-col>
			<!--<el-col :span="$store.getters.isMobile?24:11">
				<el-form-item :label="$t('business.busibanner.binfoName')" label-width="150px" prop="busiInfoId">
					<el-select  style="width: 100%;" v-model.number="pageData.busiInfoId" :placeholder="$t('commom.select')">
						<el-option v-for="item in businessList" :label="item.binfoName" :value="item.busiInfoId" :disabled="disabled" :key="item.busiInfoId">
						</el-option>
					</el-select>
				</el-form-item>
			</el-col>-->
			
        </el-form>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
import {
	busiinfoNoPages
	} from 'api/api';

export default {
    props: {
        pageData: {
            type: Object,
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
        	businessList:'',
            base64Img: '',
            type: '',
            rules: {
            	pictureUrl: [
                    { required: true,
                    	validator:(rule, value, callback)=>{
                    	if (value==null||value=='') {
				          callback(new Error( this.$t('business.busibanner.vbannerimg')));
				        }else if (typeof value!='object'&& typeof value!='string') {
				          callback(new Error( this.$t('business.busibanner.vbannerimg')));
				        } else {
				          callback();
				        }
                    },
//                  message: this.$t('business.busibanner.vbannerimg'), 
                    trigger: 'blur' }
                ],
                busiInfoId: [
                    { required: true,type: 'number', message: this.$t('business.busibanner.vbinfoName'), trigger: 'blur' }
                ],
                seq: [
                    { required: true,type: 'number', message: this.$t('business.busibanner.vseq'), trigger: 'blur' }
                ],
            }
        }
    },
      created() {
//			busiinfoNoPages().then(res => {
//				this.businessList = res.data.obj
//			})
			
		},
		mounted(){
//			 if(this.pageData.pictureUrl){
//          	this.rules.pictureUrl[0].type='string'
//          }else{
//          	this.rules.pictureUrl[0].type='object'
//          }
		},
    computed: {
    },

    methods: {
        ...mapMutations([
            'updatedShowMap',
            'updatedMarkerInfo'
        ]),
        showMap(type) {},
        deleteImg() {
            this.pageData.pictureUrl = '';
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
                this.pageData.pictureUrl = file
                let reader = new FileReader();
                reader.onload = () => {
                    this.base64Img = reader.result //这个就是base64的数据了
                }
                reader.readAsDataURL(file);
            }
        }
    },
    watch: {
        pageData(val) {
            this.base64Img = ''
            this.$nextTick(() => {
                document.getElementById('mapArea').value = ''
            })
            this.$refs.areacForm.resetFields();
            
        },
    }
}
</script>
<style lang="less">

</style>