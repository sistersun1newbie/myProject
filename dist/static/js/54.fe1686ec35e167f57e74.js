webpackJsonp([54],{566:function(e,n,t){t(817);var o=t(221)(t(721),t(853),null,null);e.exports=o.exports},721:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(43),r=t.n(o),i=t(146);n.default={data:function(){return{logining:!1,fullscreenLoading:!1,ruleForm2:{username:localStorage.username,password:"",customerType:localStorage.customerType||"admin"},isApp:!1,rules2:{username:[{required:!0,message:this.$t("login.required.name"),trigger:"blur"}],password:[{required:!0,message:this.$t("login.required.pwd"),trigger:"blur"}]},checked:!0}},computed:{height:function(){return this.$store.getters.windowHeight+"px"},menuList:function(){return this.$store.state.menuList}},created:function(){var e=this;document.addEventListener("plusready",function(){e.isApp=!0,e.ruleForm2.customerType="business"})},mounted:function(){this.setCookie("sid","",-1)},watch:{menuList:function(){var e=this;this.$router.onReady(function(){e.$router.replace("/")})}},methods:r()({},t.i(i.a)(["login"]),{setCookie:function(e,n,t){var o=new Date;o.setTime(o.getTime()+24*t*60*60*1e3);var r="expires="+o.toUTCString();document.cookie=e+"="+n+"; "+r},handleReset2:function(){this.$refs.ruleForm2.resetFields()},handleSubmit2:function(e){var n=this;this.$refs.ruleForm2.validate(function(e){e&&(n.checked?(localStorage.setItem("username",n.ruleForm2.username),localStorage.setItem("customerType",n.ruleForm2.customerType),sessionStorage.setItem("customerType",n.ruleForm2.customerType)):(localStorage.removeItem("username"),localStorage.removeItem("customerType")),n.logining=!0,n.fullscreenLoading=!0,n.login(n.ruleForm2).then(function(e){n.logining=!1}).catch(function(e){"RESULT"===e.errTpye&&"900002"==e.errorCode&&n.login(n.ruleForm2),n.logining=!1,n.fullscreenLoading=!1}))})}})}},784:function(e,n,t){n=e.exports=t(533)(),n.push([e.i,"\n.login {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n}\n.login .login-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  background-clip: padding-box;\n  background-color: #F9FAFC;\n  border: 0.5px solid #eee;\n  max-width: 350px;\n  padding: 5px 35px;\n}\n.login .login-container .title {\n  text-align: center;\n  color: #505458;\n}\n.login .bottombar {\n  height: 40px;\n  width: 100%;\n  text-align: center;\n  line-height: 40px;\n  border-top: 1px solid #D2D6DE;\n  box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);\n  background: #FFFFFF;\n}\n","",{version:3,sources:["D:/AcoddingFile/codFile/JZD/JISZHOUDAOguanli/sx-chejudo-front/src/pages/Login.vue"],names:[],mappings:";AACA;EACE,qBAAqB;EACrB,cAAc;EACd,2BAA2B;MACvB,uBAAuB;EAC3B,uBAAuB;MACnB,oBAAoB;EACxB,uBAAuB;MACnB,+BAA+B;CACpC;AACD;EACE,qBAAqB;EACrB,cAAc;EACd,2BAA2B;MACvB,uBAAuB;EAC3B,uBAAuB;MACnB,+BAA+B;EACnC,4EAA4E;EAC5E,mBAAmB;EACnB,6BAA6B;EAC7B,0BAA0B;EAC1B,yBAAyB;EACzB,iBAAiB;EACjB,kBAAkB;CACnB;AACD;EACE,mBAAmB;EACnB,eAAe;CAChB;AACD;EACE,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,8BAA8B;EAC9B,6EAA6E;EAC7E,oBAAoB;CACrB",file:"Login.vue",sourcesContent:["\n.login {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n}\n.login .login-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  background-clip: padding-box;\n  background-color: #F9FAFC;\n  border: 0.5px solid #eee;\n  max-width: 350px;\n  padding: 5px 35px;\n}\n.login .login-container .title {\n  text-align: center;\n  color: #505458;\n}\n.login .bottombar {\n  height: 40px;\n  width: 100%;\n  text-align: center;\n  line-height: 40px;\n  border-top: 1px solid #D2D6DE;\n  box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);\n  background: #FFFFFF;\n}\n"],sourceRoot:""}])},817:function(e,n,t){var o=t(784);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(534)("42cef520",o,!0)},853:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"login",staticStyle:{"background-image":"url(../../static/bg2.png)","background-size":"100% 100%","background-position":"center center"},style:{height:e.height},attrs:{"element-loading-text":e.$t("loadingText")},on:{keyup:function(n){if(!("button"in n)&&e._k(n.keyCode,"enter",13))return null;e.handleSubmit2(n)}}},[t("div"),e._v(" "),t("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm login-container",attrs:{model:e.ruleForm2,rules:e.rules2,"label-position":"left","label-width":"0px"}},[t("h3",{staticClass:"title"},[e._v(e._s(e.$t("login.title")))]),e._v(" "),t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:e.$t("login.form.usernameplaceholder")},model:{value:e.ruleForm2.username,callback:function(n){e.ruleForm2.username=n},expression:"ruleForm2.username"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:e.$t("login.form.passwordplaceholder")},model:{value:e.ruleForm2.password,callback:function(n){e.ruleForm2.password=n},expression:"ruleForm2.password"}})],1),e._v(" "),t("el-form-item",[e.isApp?e._e():t("el-radio",{staticClass:"radio",attrs:{label:"admin"},model:{value:e.ruleForm2.customerType,callback:function(n){e.ruleForm2.customerType=n},expression:"ruleForm2.customerType"}},[e._v(e._s(e.$t("login.customerType.admin")))]),e._v(" "),e.isApp?e._e():t("el-radio",{staticClass:"radio",attrs:{label:"business"},model:{value:e.ruleForm2.customerType,callback:function(n){e.ruleForm2.customerType=n},expression:"ruleForm2.customerType"}},[e._v(e._s(e.$t("login.customerType.business")))]),e._v(" "),t("el-checkbox",{staticClass:"remember",attrs:{checked:""},model:{value:e.checked,callback:function(n){e.checked=n},expression:"checked"}},[e._v(e._s(e.$t("login.rememberName")))])],1),e._v(" "),t("el-form-item",{staticStyle:{width:"100%"}},[t("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:e.logining},on:{click:e.handleSubmit2}},[e._v(e._s(e.$t("login.submit")))])],1)],1),e._v(" "),t("div",{staticClass:"bottombar"},[t("strong",{staticStyle:{"font-weight":"700","font-size":"14px",color:"#444"}},[e._v("\n          "+e._s(e.$t("copyright"))+"\n        ")])])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=54.fe1686ec35e167f57e74.js.map