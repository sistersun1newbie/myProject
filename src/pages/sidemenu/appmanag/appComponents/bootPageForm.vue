<template>
    <div>
    <el-form :model="bootPageObj" ref='bootForm' :rules="rules" :label-position="$store.getters.isMobile?'top':'right'">
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('appmanag.bootPage.pictureUrl')"  label-width="150px" prop="pictureUrl">
            <input type="file"  accept="image/png, image/jpeg, image/bmp, image/gif" id="bootFile" @change='getFile' style="display:none">
          <ul class="el-upload-list el-upload-list--picture-card">
            <li class="el-upload-list__item  ">
              <img :src="base64Img||bootPageObj.pictureUrl" alt="" class="el-upload-list__item-thumbnail">
              
             <span class="el-upload-list__item-actions"  v-show='!disabled'>
                 <span class="el-upload-list__item-delete">
                      <i class="el-icon-delete2" v-show='base64Img||bootPageObj.pictureUrl' @click="deleteImg" style="font-size:40px"/> 
                      <i class="el-icon-plus" v-show='!base64Img&&!bootPageObj.pictureUrl' @click="addImg" style="font-size:40px" /> 
                   </span>
                   </span>
            </li>
          </ul>
        </el-form-item>
      </el-col>
        <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('appmanag.bootPage.seq')" label-width="150px"  prop="seq" >
          <el-input v-model.number="bootPageObj.seq"   auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
        <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('appmanag.bootPage.isShow')" label-width="150px"   >
            <el-radio class="radio" v-model="bootPageObj.isShow" :label="1" :disabled="disabled">{{$t('appmanag.bootPage.show')}}</el-radio>
            <el-radio class="radio" v-model="bootPageObj.isShow" :label="0" :disabled="disabled">{{$t('appmanag.bootPage.hidden')}}</el-radio>
        </el-form-item>
      </el-col>


      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.creator')" label-width="150px" v-show="disabled">
          <el-input v-model="bootPageObj.creator" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.modifyor')" label-width="150px" v-show="disabled">
          <el-input v-model="bootPageObj.modifyor" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.createTime')" label-width="150px" v-show="disabled">
          <el-input v-model="bootPageObj.createTime" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.modifyTime')" label-width="150px" v-show="disabled">
          <el-input v-model="bootPageObj.modifyTime" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>

    </el-form>
    </div>
</template>
<script>
    export default {
        props: {
            bootPageObj:{
                type:Object,
                default(){
                  return {}
                }
            },
            disabled:{
                type:Boolean,
                default:false
            }
        },
        data () {
            return {
                base64Img:'',
                rules:{
                    pictureUrl: [
                        { required: true, type:'object', message: this.$t('appmanag.validate.pictureUrl'), trigger: 'blur' } 
                    ],
                    seq:[
                        { required: true,  type:'number', message: this.$t('appmanag.validate.seq'), trigger: 'blur' } 
                    ]
                }
            }
        },
        methods: {
            getFile(e){
                let file = e.target.files[0]
                if (file) {
                    this.bootPageObj.pictureUrl=file
                    let reader = new FileReader();
                    reader.onload = () => {
                    this.base64Img = reader.result //这个就是base64的数据了
                }
                    reader.readAsDataURL(file);
                }
            },
            deleteImg(){
                 this.bootPageObj.pictureUrl='';
                this.base64Img='';
                document.getElementById('bootFile').value=''
            },
            addImg(){
                document.getElementById('bootFile').click() 
            },
            validate(fn){
              this.$refs.bootForm.validate(fn); 
            },
        },
        watch: {
            bootPageObj(){
                this.base64Img=''
                this.$refs.bootForm.resetFields();
            }
        }
    }
</script>
<style lang="less">
    
</style>