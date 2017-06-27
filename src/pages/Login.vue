<template>
  <div class="login" style="background-image:url(../../static/bg2.png);background-size:100% 100%;background-position: center center"
       @keyup.enter='handleSubmit2'
       :style='{height:height}'
       :element-loading-text="$t('loadingText')"
       v-loading.fullscreen.lock="fullscreenLoading">
    <div>

    </div>
    <el-form :model="ruleForm2"
             :rules="rules2"
             ref="ruleForm2"
             label-position="left"
             label-width="0px"
             class="demo-ruleForm login-container">
      <h3 class="title">{{$t('login.title')}}</h3>
      <el-form-item prop="username">
        <el-input type="text"
                  v-model="ruleForm2.username"
                  auto-complete="off"
                  :placeholder="$t('login.form.usernameplaceholder')"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password"
                  v-model="ruleForm2.password"
                  auto-complete="off"
                  :placeholder="$t('login.form.passwordplaceholder')"></el-input>
      </el-form-item>
      <el-form-item >
        <el-radio class="radio"
                  v-model="ruleForm2.customerType"
                  v-if="!isApp"
                  label="admin">{{$t('login.customerType.admin')}}</el-radio>
        <el-radio class="radio"
                  v-model="ruleForm2.customerType"
                  v-if="!isApp"
                  label="business">{{$t('login.customerType.business')}}</el-radio>
        <el-checkbox v-model="checked"
                     checked
                     class="remember">{{$t('login.rememberName')}}</el-checkbox>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary"
                   style="width:100%;"
                   @click="handleSubmit2"
                   :loading="logining">{{$t('login.submit')}}</el-button>
        <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
      </el-form-item>
    </el-form>
    <div class="bottombar">
      <strong style="font-weight:700;font-size: 14px;color: #444">
            {{$t('copyright')}}
          </strong>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      logining: false,
      fullscreenLoading: false,
      ruleForm2: {
        username: localStorage.username,
        password: '',
        customerType: localStorage.customerType || 'admin',
      },
      isApp:false,
      rules2: {
        username: [
          { required: true, message: this.$t('login.required.name'), trigger: 'blur' },
          //{ validator: validaePass }
        ],
        password: [
          { required: true, message: this.$t('login.required.pwd'), trigger: 'blur' },
          //{ validator: validaePass2 }
        ]
      },
      checked: true
    };
  },
  computed: {
    height() {

      return this.$store.getters.windowHeight + 'px'
    },
    menuList() {
      return this.$store.state.menuList
    }
  },
  created(){
    
    document.addEventListener('plusready',()=>{
          this.isApp=true
          this.ruleForm2.customerType = 'business'
    })
     
  },
  mounted(){
      this.setCookie('sid','',-1)
  },
  watch: {
    menuList() {
      this.$router.onReady(
        () => {
          this.$router.replace('/')
        }
      )
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      var expires = "expires="+d.toUTCString();
      document.cookie = cname + "=" + cvalue + "; " + expires;
    },
    handleReset2() {
      this.$refs.ruleForm2.resetFields();
    },
    handleSubmit2(ev) {
      this.$refs.ruleForm2.validate((valid) => {
        if (valid) {
          if (this.checked) {
            localStorage.setItem('username', this.ruleForm2.username)
            localStorage.setItem('customerType', this.ruleForm2.customerType)
            sessionStorage.setItem('customerType', this.ruleForm2.customerType)
          } else {
            localStorage.removeItem('username')
            localStorage.removeItem('customerType')
          }
          this.logining = true
          this.fullscreenLoading = true
          this.login(this.ruleForm2).then((res) => {
            this.logining = false
            
          }).catch(err => {
              if(err.errTpye==='RESULT'&&err.errorCode=='900002'){
                  this.login(this.ruleForm2)
              } 
                  this.logining = false
                  this.fullscreenLoading = false
              
          })
        }
      })
    }
  },

}
</script>

<style lang="less" >
.login {
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;
  .login-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-clip: padding-box;
    background-color: #F9FAFC;
    border: 0.5px solid #eee;
    max-width: 350px;
    padding: 5px 35px;
    .title {
      // margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {}
  }
  .bottombar {
    height: 40px;
    width: 100%;
    text-align: center;
    line-height: 40px;
    border-top: 1px solid #D2D6DE;
    box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);
    background: #FFFFFF;
  }
}
</style>
