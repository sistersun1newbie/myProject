<template>
    <el-form :model="pageData" ref='gamePrizeForm' :rules="rules" :label-position="$store.getters.isMobile?'top':'right'">
       <el-form-item :label="$t('gamePrizes.giftIcon')"
                      label-width="150px"
                      prop="'giftIcon'">
          <!--<el-input v-model="pageData.binfoIcon" auto-complete="off" :disabled="disabled"/>-->
  
          <input type="file"
                 accept="image/png, image/jpeg, image/bmp, image/gif"
                 id="gamePriz"
                 @change='getFile'
                 style="display:none">
  
          <ul class="el-upload-list el-upload-list--picture-card">
            <li class="el-upload-list__item  ">
              <img :src="base64Img||pageData.giftIcon"
                   class="el-upload-list__item-thumbnail">
  
              <span class="el-upload-list__item-actions"
                    v-show='!disabled'>
                   <span class="el-upload-list__item-delete">
                        <i class="el-icon-delete2" v-show='base64Img||pageData.giftIcon' @click="deleteImg" style="font-size:40px"/> 
                        <i class="el-icon-plus" v-show='!base64Img&&!pageData.giftIcon' @click="addImg" style="font-size:40px" /> 
                     </span>
              </span>
            </li>
          </ul>
        </el-form-item>
           <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.zhName')" label-width="150px" prop="giftZhCnName">
          <el-input v-model="pageData.giftZhCnName" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.enName')" label-width="150px" prop="giftEnUsName">
          <el-input v-model="pageData.giftEnUsName" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
   
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.jaName')" label-width="150px" prop="giftJaJpName">
          <el-input v-model="pageData.giftJaJpName" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.koName')" label-width="150px" prop="giftKoKrName">
          <el-input v-model="pageData.giftKoKrName" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
    	<el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('gamePrizes.giftCount')" label-width="150px" prop="giftCount">
          <el-input v-model.number="pageData.giftCount" auto-complete="off" :disabled="disabled" />
        </el-form-item>
      </el-col>
      
       <el-col  :span="$store.getters.isMobile?24:11">
       	<el-form-item :label="$t('commom.status')" label-width="150px" prop="giftStatus">
       		 <el-radio-group  v-model="pageData.giftStatus">
			    <el-radio :disabled="disabled" :label="1">{{$t('commom.up')}}</el-radio>
			    <el-radio :disabled="disabled" :label="2">{{$t('commom.down')}}</el-radio>
			  </el-radio-group>
        </el-form-item>
       		
      </el-col>
       </el-col>
  
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.creator')"
                      label-width="150px"
                      v-show="disabled">
          <el-input v-model="pageData.creator"
                    auto-complete="off"
                    :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.modifyor')"
                      label-width="150px"
                      v-show="disabled">
          <el-input v-model="pageData.modifyor"
                    auto-complete="off"
                    :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.createTime')"
                      label-width="150px"
                      v-show="disabled">
          <el-input v-model="pageData.createTime"
                    auto-complete="off"
                    :disabled="disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="$store.getters.isMobile?24:11">
        <el-form-item :label="$t('commom.modifyTime')"
                      label-width="150px"
                      v-show="disabled">
          <el-input v-model="pageData.modifyTime"
                    auto-complete="off"
                    :disabled="disabled" />
        </el-form-item>
      </el-col>
        </el-form>
</template> 
 
<script>
 
    export default {
            props: {
            disabled:Boolean,
            pageData:Object
        },
         data(){
            return{
            	 base64Img:'',
              rules:{
              giftEnUsName : [
			            { required: true, message: this.$t('gamePrizes.giftEnUsName'), trigger: 'blur' } 
			        ],
			        giftZhCnName: [
			            { required: true, message: this.$t('gamePrizes.giftZhCnName'), trigger: 'blur' } 
			        ],
			        giftJaJpName : [
			            { required: true, message: this.$t('gamePrizes.giftJaJpName'), trigger: 'blur' } 
			        ],
			        giftKoKrName: [
			            { required: true, message: this.$t('gamePrizes.giftKoKrName'), trigger: 'blur' } 
			        ],
			        giftCount: [
			            { required: true,type: 'number', message: this.$t('gamePrizes.giftCount'), trigger: 'blur' } 
			        ],
			        status: [
			            { required: true,type: 'number', message: this.$t('gamePrizes.validate.giftStatus'), trigger: 'blur' } 
			        ],
             
              },
            }
        },
        mouted(){
        },
        methods:{
        	validate(fn){
		        this.$refs.gamePrizeForm.validate(fn); 
		      },
            deleteImg() {
            this.pageData.giftIcon = '';
            this.base64Img = '';
            document.getElementById('gamePriz').value = ''
          },
          addImg() {
            document.getElementById('gamePriz').click()
          },
          getFile(e) {
            let file = e.target.files[0]
            if (file) {
              this.pageData.giftIcon = file
              let reader = new FileReader();
              reader.onload = () => {
                this.base64Img = reader.result //这个就是base64的数据了
              }
              reader.readAsDataURL(file);
            }
          }
        },
       watch: {
         pageData(v){
           this.base64Img = ''
          this.$nextTick(() => {
            document.getElementById('gamePriz').value = ''
          })
          this.$refs.gamePrizeForm.resetFields();
         }
       }
    }
</script>