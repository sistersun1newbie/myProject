webpackJsonp([62],{551:function(e,t,a){var l=a(221)(a(649),a(712),null,null);e.exports=l.exports},649:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{disabled:Boolean,pageData:Object},data:function(){var e=this;return{rules:{ruleZhCnTitle:[{required:!0,message:this.$t("business.pointrules.binfoZhCnName"),trigger:"blur"}],ruleEnUsTitle:[{required:!0,message:this.$t("business.pointrules.binfoEnUsName"),trigger:"blur"}],ruleJaJpTitle:[{required:!0,message:this.$t("business.pointrules.binfoJaJpName"),trigger:"blur"}],ruleKoKrTitle:[{required:!0,message:this.$t("business.pointrules.binfoKoKrName"),trigger:"blur"}],pointAmount:[{required:!0,type:"number",message:this.$t("business.pointrules.vinfopointAmount"),trigger:"blur"}],pointCount:[{required:!0,trigger:"blur",validator:function(t,a,l){""===a||null==a?l(new Error(e.$t("business.pointrules.vinfopointCount"))):a<=100&&a>0?l():l(new Error(e.$t("business.pointrules.vinfopointCountRange")))}}],status:[{required:!0,type:"number",message:this.$t("commom.storyinfostatus"),trigger:"blur"}]}}},mounted:function(){},watch:{pageData:function(){this.$refs.storyForm.resetFields()}},methods:{validate:function(e){this.$refs.storyForm.validate(e)}}}},712:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"storyForm",attrs:{model:e.pageData,rules:e.rules,"label-position":e.$store.getters.isMobile?"top":"right"}},[a("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[a("el-form-item",{attrs:{label:e.$t("commom.zhName"),"label-width":"150px",prop:"ruleZhCnTitle"}},[a("el-input",{attrs:{"auto-complete":"off",disabled:e.disabled},model:{value:e.pageData.ruleZhCnTitle,callback:function(t){e.pageData.ruleZhCnTitle=t},expression:"pageData.ruleZhCnTitle"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[a("el-form-item",{attrs:{label:e.$t("commom.enName"),"label-width":"150px",prop:"ruleEnUsTitle"}},[a("el-input",{attrs:{"auto-complete":"off",disabled:e.disabled},model:{value:e.pageData.ruleEnUsTitle,callback:function(t){e.pageData.ruleEnUsTitle=t},expression:"pageData.ruleEnUsTitle"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[a("el-form-item",{attrs:{label:e.$t("commom.jaName"),"label-width":"150px",prop:"ruleJaJpTitle"}},[a("el-input",{attrs:{"auto-complete":"off",disabled:e.disabled},model:{value:e.pageData.ruleJaJpTitle,callback:function(t){e.pageData.ruleJaJpTitle=t},expression:"pageData.ruleJaJpTitle"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[a("el-form-item",{attrs:{label:e.$t("commom.koName"),"label-width":"150px",prop:"ruleKoKrTitle"}},[a("el-input",{attrs:{"auto-complete":"off",disabled:e.disabled},model:{value:e.pageData.ruleKoKrTitle,callback:function(t){e.pageData.ruleKoKrTitle=t},expression:"pageData.ruleKoKrTitle"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[a("el-form-item",{attrs:{label:e.$t("business.pointrules.pointAmount"),"label-width":"150px",prop:"pointAmount"}},[a("el-input",{attrs:{"auto-complete":"off",disabled:!0},model:{value:e.pageData.pointAmount,callback:function(t){e.pageData.pointAmount=e._n(t)},expression:"pageData.pointAmount"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[a("el-form-item",{attrs:{label:e.$t("business.pointrules.pointCount"),"label-width":"150px",prop:"pointCount"}},[a("el-input",{attrs:{"auto-complete":"off",disabled:e.disabled},model:{value:e.pageData.pointCount,callback:function(t){e.pageData.pointCount=e._n(t)},expression:"pageData.pointCount"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[a("el-form-item",{attrs:{label:e.$t("commom.status"),"label-width":"150px",prop:"status"}},[a("el-radio-group",{model:{value:e.pageData.status,callback:function(t){e.pageData.status=e._n(t)},expression:"pageData.status"}},[a("el-radio",{attrs:{disabled:e.disabled,label:0}},[e._v(e._s(e.$t("business.pointrules.down")))]),e._v(" "),a("el-radio",{attrs:{disabled:e.disabled,label:1}},[e._v(e._s(e.$t("business.pointrules.up")))])],1)],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=62.b9f54f90aee8393f2a81.js.map