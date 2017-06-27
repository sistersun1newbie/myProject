<template>
  <div>
 <el-tabs v-model="activeName" type="card" @tab-click="handleClick" >
    <el-tab-pane :label="$t('business.shopManag.shopTab')" name="shop">
    </el-tab-pane>
    <el-tab-pane :label="$t('business.shopManag.userTab')" name="user">
  </el-tab-pane>
 </el-tabs>
  <el-form :model="shop" ref='shopCForm' :rules="rules" :label-position="$store.getters.isMobile?'top':'right'">
    <div v-show="activeName=='shop'">
     
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('business.shopManag.binfoIcon')"  label-width="150px" prop="'binfoIcon'">
            <input type="file" accept="image/png, image/jpeg, image/bmp, image/gif" id="binfoIcon" @change='getFile($event,"binfoIcon")' style="display:none">
          <ul class="el-upload-list el-upload-list--picture-card">
            <li class="el-upload-list__item  ">
              <img :src="binfoIcon||shop.binfoIcon" alt="" class="el-upload-list__item-thumbnail">
             <span class="el-upload-list__item-actions" v-show='!disabled'>
                 <span class="el-upload-list__item-delete">
                      <i class="el-icon-delete2" v-show='binfoIcon||shop.binfoIcon' @click="deleteImg('binfoIcon')" style="font-size:40px"/> 
                      <i class="el-icon-plus" v-show='!binfoIcon&&!shop.binfoIcon' @click="addImg('binfoIcon')" style="font-size:40px" /> 
                   </span>
              </span>
            </li>
          </ul>
        </el-form-item>
      </el-col>
       <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('business.shopManag.type')" label-width="150px" prop="typeId">
           <el-select v-model="shop.typeId" :placeholder="$t('commom.select')" >
            <el-option
              v-for="item in typeData"
              :label="item.typeName"
              :value="item.typeId" :disabled="disabled" :key="item.typeId">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>

    <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('business.shopManag.areaId')" label-width="150px" prop="areaId">
           <el-select v-model="shop.areaId" :placeholder="$t('commom.select')" >
            <el-option
              v-for="item in areaData"
              :label="item.areaName"
              :value="item.areaId" :disabled="disabled" :key="item.areaId">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
       <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('business.shopManag.ruleId')" label-width="150px" prop="ruleId">
           <el-select v-model="shop.ruleId" :placeholder="$t('commom.select')" >
            <el-option
              v-for="item in ruleData"
              :label="item.ruleTitle"
              :value="item.ruleId" :disabled="disabled" :key="item.ruleId">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>


      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.zhName')" label-width="150px" prop="binfoZhCnName">
          <el-input v-model="shop.binfoZhCnName" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.jaName')" label-width="150px" prop="binfoJaJpName">
          <el-input v-model="shop.binfoJaJpName" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.koName')" label-width="150px" prop="binfoKoKrName">
          <el-input v-model="shop.binfoKoKrName" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.enName')" label-width="150px" prop="binfoEnUsName">
          <el-input v-model="shop.binfoEnUsName" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('business.shopManag.binfoZhCnTitle')" label-width="150px" prop="binfoZhCnTitle">
          <el-input v-model="shop.binfoZhCnTitle" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('business.shopManag.binfoJaJpTitle')" label-width="150px" prop="binfoJaJpTitle">
          <el-input v-model="shop.binfoJaJpTitle" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('business.shopManag.binfoKoKrTitle')" label-width="150px" prop="binfoKoKrTitle">
          <el-input v-model="shop.binfoKoKrTitle" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('business.shopManag.binfoEnUsTitle')" label-width="150px" prop="binfoEnUsTitle">
          <el-input v-model="shop.binfoEnUsTitle" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.longitude')" label-width="150px" prop="binfoLongitude">
          <el-input v-model.number="shop.binfoLongitude" auto-complete="off" :disabled="disabled" @click.native='mapShow' />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.latitude')" label-width="150px" @click.native='mapShow' prop="binfoLatitude">
          <el-input v-model.number="shop.binfoLatitude" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('business.shopManag.binfoZhCnAddr')" label-width="150px" prop="binfoZhCnAddr">
          <el-input v-model="shop.binfoZhCnAddr" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('business.shopManag.binfoJaJpAddr')" label-width="150px" prop="binfoJaJpAddr">
          <el-input v-model="shop.binfoJaJpAddr" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('business.shopManag.binfoKoKrAddr')" label-width="150px" prop="binfoKoKrAddr">
          <el-input v-model="shop.binfoKoKrAddr" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('business.shopManag.binfoEnUsAddr')" label-width="150px" prop="binfoEnUsAddr">
          <el-input v-model="shop.binfoEnUsAddr" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11" v-show="disabled">
        <el-form-item label="clientId" label-width="150px" prop="clientId">
          <el-input v-model.number="shop.clientId" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>  
      <el-col :span="$store.getters.isMobile?24:11" v-show="disabled">
        <el-form-item label="clientSecret" label-width="150px" prop="clientSecret">
          <el-input v-model="shop.clientSecret" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>

      

      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.creator')" label-width="150px" v-show="disabled">
          <el-input v-model="shop.creator" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.modifyor')" label-width="150px" v-show="disabled">
          <el-input v-model="shop.modifyor" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.createTime')" label-width="150px" v-show="disabled">
          <el-input v-model="shop.createTime" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.modifyTime')" label-width="150px" v-show="disabled">
          <el-input v-model="shop.modifyTime" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('business.shopManag.isShow')" label-width="150px" prop="status">
				<el-radio-group v-model="shop.delFlag">
					<el-radio :disabled="disabled" :label="0">{{$t('business.shopManag.state1')}}</el-radio>
					<el-radio :disabled="disabled" :label="1">{{$t('business.shopManag.state2')}}</el-radio>
					<el-radio :disabled="disabled" :label="2">{{$t('business.shopManag.state3')}}</el-radio>
				</el-radio-group>
			</el-form-item>
		</el-col>
      <el-col :span="24">
        <el-form-item :label="$t('business.shopManag.binfoZhCnDescription')" label-width="150px" >
          <editor :disabled='disabled' id='binfoZhCnDescription' :imgOnLoad="syncTextarea" :upload-url="uploadUrl" uploadImgName='img' v-model="shop.binfoZhCnDescription" />
          </editor>
        </el-form-item>
      </el-col>
       <el-col :span="24">
        <el-form-item :label="$t('business.shopManag.binfoJaJpDescription')" label-width="150px" >
          <editor :disabled='disabled' id='binfoJaJpDescription' :imgOnLoad="syncTextarea" :upload-url="uploadUrl" uploadImgName='img' v-model="shop.binfoJaJpDescription" />
          </editor>
        </el-form-item>
      </el-col>
       <el-col :span="24">
        <el-form-item :label="$t('business.shopManag.binfoKoKrDescription')" label-width="150px" >
          <editor :disabled='disabled' id='binfoKoKrDescription' :imgOnLoad="syncTextarea" :upload-url="uploadUrl" uploadImgName='img' v-model="shop.binfoKoKrDescription" />
          </editor>
        </el-form-item>
      </el-col>
       <el-col :span="24">
        <el-form-item :label="$t('business.shopManag.binfoEnUsDescription')" label-width="150px" >
          <editor :disabled='disabled' id='binfoEnUsDescription' :imgOnLoad="syncTextarea" :upload-url="uploadUrl" uploadImgName='img' v-model="shop.binfoEnUsDescription" />
          </editor>
        </el-form-item>
      </el-col>
      </div>
      <div v-show="activeName=='user'">
         <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('business.userManag.shopUserIcon')"  label-width="150px" prop="'shopUserIcon'">
            <input type="file" accept="image/png,image/gif,image/jpg" id="shopUserIcon" @change='getFile($event,"shopUserIcon")' style="display:none">
          <ul class="el-upload-list el-upload-list--picture-card">
            <li class="el-upload-list__item  ">
              <img :src="shopUserIcon||shop.shopUserIcon" alt="" class="el-upload-list__item-thumbnail">
             <span class="el-upload-list__item-actions" v-show='!disabled'>
                 <span class="el-upload-list__item-delete">
                      <i class="el-icon-delete2" v-show='shopUserIcon||shop.shopUserIcon' @click="deleteImg('shopUserIcon')" style="font-size:40px"/> 
                      <i class="el-icon-plus" v-show='!shopUserIcon&&!shop.shopUserIcon' @click="addImg('shopUserIcon')" style="font-size:40px" /> 
                   </span>
              </span>
            </li>
          </ul>
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('business.userManag.shopUserName')" label-width="150px" prop="shopUserName">
          <el-input v-model="shop.shopUserName" auto-complete="off" :disabled="disabled||disabledUserName" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('business.userManag.shopUserPwd')" label-width="150px" :prop="mustPwd?'shopUserPwd':''">
          <el-input v-model="shop.shopUserPwd" type="password" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('business.userManag.shopUserTel')" label-width="150px" prop="shopUserTel">
          <el-input v-model="shop.shopUserTel" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>

      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('business.userManag.shopRealName')" label-width="150px" prop="shopRealName">
          <el-input v-model="shop.shopRealName" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('business.userManag.shopUserEmail')" label-width="150px" prop="shopUserEmail">
          <el-input v-model="shop.shopUserEmail" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      </div>
    </el-form>
    <!--账号信息-->
  </el-tabs>
  </div>
</template>
<script>
  import {
    mapMutations,
    mapActions,
    mapState
  } from 'vuex'
  import editor from 'pages/components/Veditor'
import { BUSIINFO_UPLOADIMAGE } from 'type';
 import {
    mapareasetList,
  syspointList 
} from 'api/api';
  export default {
    data() {
      return {
        uploadUrl:BUSIINFO_UPLOADIMAGE,
        binfoIcon:'',
        shopUserIcon:'',
        activeName:'shop',
        businessTypes:[],
        areaData:[],
        ruleData:[],
          rules: {
          binfoZhCnName: [
            { required: true, message: this.$t('business.validate.binfoZhCnName'), trigger: 'blur' } 
          ],
          binfoKoKrName: [
            { required: true, message: this.$t('business.validate.binfoKoKrName'), trigger: 'blur' } 
          ],
          binfoEnUsName: [
            { required: true, message: this.$t('business.validate.binfoEnUsName'), trigger: 'blur' } 
          ],
          binfoJaJpName: [
            { required: true, message: this.$t('business.validate.binfoJaJpName'), trigger: 'blur' } 
          ],
          binfoKoKrTitle: [
            { required: true, message: this.$t('business.validate.binfoKoKrTitle'), trigger: 'blur' } 
          ],
          binfoZhCnTitle: [
            { required: true, message: this.$t('business.validate.binfoZhCnTitle'), trigger: 'blur' } 
          ],
          binfoJaJpTitle: [
            { required: true, message: this.$t('business.validate.binfoJaJpTitle'), trigger: 'blur' } 
          ],
          binfoEnUsTitle: [
            { required: true, message: this.$t('business.validate.binfoEnUsTitle'), trigger: 'blur' } 
          ],
          binfoLongitude: [
            { required: true, type:'number',message: this.$t('business.validate.binfoLongitude'), trigger: 'change' } 
          ],
          binfoLatitude: [
            { required: true, type:'number',message: this.$t('business.validate.binfoLatitude'), trigger: 'change' } 
          ],
          binfoZhCnAddr: [
            { required: true, message: this.$t('business.validate.binfoZhCnAddr'), trigger: 'change' } 
          ],
          binfoEnUsAddr: [
            { required: true, message: this.$t('business.validate.binfoEnUsAddr'), trigger: 'change' } 
          ],
          binfoJaJpAddr: [
            { required: true, message: this.$t('business.validate.binfoJaJpAddr'), trigger: 'change' } 
          ],
           binfoKoKrAddr: [
            { required: true, message: this.$t('business.validate.binfoKoKrAddr'), trigger: 'change' } 
          ],
          typeId: [
            { required: true,type:'number', message:this.$t('business.validate.typeId'), trigger: 'change' }
          ],
          areaId: [
            { required: true,type:'number', message:this.$t('business.validate.areaId'), trigger: 'change' }
          ],
          shopUserName: [
            { required: true, message: this.$t('business.validate.shopUserName'), trigger: 'blur' } 
          ],
          shopUserPwd: [
            { required: true, message: this.$t('business.validate.shopUserPwd'), trigger: 'blur' } 
          ],
          // clientSecret:[
          //   {  validator:(rule, value, callback)=>{
          //         if(value&&value.length>50){
          //             callback(new Error(this.$t('business.validate.clientSecret')))
          //         }else{
          //           callback()
          //         }
          //   }, trigger: 'blur' }
          // ],
          // clientId:[
          //   { type:'number',validator:(rule, value, callback)=>{

          //         if(value&&(value%1 != 0||value.toString().length>16)){
          //             callback(new Error(this.$t('business.validate.clientId')))
          //         }else{
          //           callback()
          //         }
          //   }, trigger: 'blur' }
          // ]
        },
      }
    },
    props: {
      shop: {
        type: Object,
        default(){
          return {}
        }
      },
      disabled: Boolean,
      disabledUserName:Boolean,
      mustPwd:true
    },
   
    created(){
      this.businessTypeGetAll() ;
      mapareasetList().then(res=>{
        this.areaData= res.data.obj
      })
      syspointList().then(res=>{
        this.ruleData=res.data.obj
      })
    },
    methods: {
      ...mapMutations([
        'updatedShowMap',
        'updatedMarkerInfo'
      ]),
      ...mapActions([
        'businessTypeGetAll'
      ]),
      mapShow(){
        if(this.disabled)return
        if(this.shop.binfoLongitude&&this.shop.binfoLatitude){
              this.updatedMarkerInfo({
                      lng:this.shop.binfoLongitude,
                      lat: this.shop.binfoLatitude,
                })
        }
        this.updatedShowMap(true)
      },
      getFile(e,type) {
        let file = e.target.files[0]
        if (file) {
          this.shop[type]=file
          let reader = new FileReader();
          reader.onload = () => {
            this[type] = reader.result //这个就是base64的数据了
           
          }
          reader.readAsDataURL(file);
        }
      },
      validate(fn){
        this.$refs.shopCForm.validate(fn); 
      },
      deleteImg(type){
          this.shop[type]='';
          this[type]='';
          document.getElementById(type).value=''
      },
      addImg(type){
          document.getElementById(type).click()
      },
      handleClick(tab, event){
       
      },
       syncTextarea(value){
			 	this.shop.binfoEnUsDescription  +=value
			 	this.shop.binfoKoKrDescription+=value
			 	this.shop.binfoZhCnDescription  +=value
			 	this.shop.binfoJaJpDescription+=value
			}
    },
    components: {
      editor
    },
    computed: {
      showMap() {
        return this.$store.state.showMap
      },
      markerInfo() {
        return this.$store.state.markerInfo
      },
      ...mapState({
        typeData:state=>state.business.typeData
      })
    },
    watch: {
      showMap(flag) {
        if (!flag && this.markerInfo) {
          this.shop.binfoLongitude = this.markerInfo.lng
          this.shop.binfoLatitude = this.markerInfo.lat
          this.shop.binfoZhCnAddr = this.markerInfo.addr
          this.shop.binfoJaJpAddr = this.markerInfo.addr
          this.shop.binfoKoKrAddr = this.markerInfo.addr
          this.shop.binfoEnUsAddr = this.markerInfo.addr
        }
      },
      shop(){
        this.binfoIcon=''
        this.shopUserIcon=''
        this.$refs.shopCForm.resetFields();
          this.$nextTick(()=>{
            document.getElementById('binfoIcon').value='' 
            document.getElementById('shopUserIcon').value='' 
          })
      }
    },
  }
</script>
<style lang="less">
  .ql-container .ql-editor {
    min-height: 20em;
    padding-bottom: 1em;
    max-height: 25em;
  }
  
  
</style>