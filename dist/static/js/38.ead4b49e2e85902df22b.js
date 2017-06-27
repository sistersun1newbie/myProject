webpackJsonp([38],{563:function(e,r,l){var o=l(221)(l(661),l(694),null,null);e.exports=o.exports},661:function(e,r,l){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=l(662),s=l.n(o);r.default={props:{form:Object,disabled:Boolean,allSysResources:{type:Array,default:function(){return[]}}},data:function(){var e=this,r=function(r,l,o){return""===l?o(new Error(e.$t("commom.required"))):s()(l)?o():o(new Error(e.$t("commom.intType")))};return{formLabelWidth:"120px",rules:{roleZhCnName:[{required:!0,message:this.$t("commom.required"),trigger:"blur"}],roleEnUsName:[{required:!0,message:this.$t("commom.required"),trigger:"blur"}],roleJaJpName:[{required:!0,message:this.$t("commom.required"),trigger:"blur"}],roleKoKrName:[{required:!0,message:this.$t("commom.required"),trigger:"blur"}],descriptionZhCn:[{required:!0,message:this.$t("commom.required"),trigger:"blur"}],descriptionEnUs:[{required:!0,message:this.$t("commom.required"),trigger:"blur"}],descriptionJaJp:[{required:!0,message:this.$t("commom.required"),trigger:"blur"}],descriptionKoKr:[{required:!0,message:this.$t("commom.required"),trigger:"blur"}],role:[{required:!0,message:this.$t("commom.required"),trigger:"blur"}],roleLevel:[{required:!0,validator:r,trigger:"blur"}],sysResources:[{required:!0,type:"array",message:this.$t("commom.required"),trigger:"blur"}]}}},methods:{validate:function(e){this.$refs.sysRoleForm.validate(function(r){if(!r)return!1;e(r)})},resetFields:function(){this.$refs.sysRoleForm.resetFields()}}}},662:function(e,r,l){e.exports={default:l(663),__esModule:!0}},663:function(e,r,l){l(665),e.exports=l(18).Number.isInteger},664:function(e,r,l){var o=l(45),s=Math.floor;e.exports=function(e){return!o(e)&&isFinite(e)&&s(e)===e}},665:function(e,r,l){var o=l(38);o(o.S,"Number",{isInteger:l(664)})},694:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,l=e._self._c||r;return l("div",[l("el-form",{ref:"sysRoleForm",attrs:{model:e.form,rules:e.rules}},[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:e.$t("sysRole.zhCnName"),"label-width":e.formLabelWidth,prop:"roleZhCnName"}},[l("el-input",{attrs:{size:"small",disabled:e.disabled},model:{value:e.form.roleZhCnName,callback:function(r){e.form.roleZhCnName=r},expression:"form.roleZhCnName"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:e.$t("sysRole.enUsName"),"label-width":e.formLabelWidth,prop:"roleEnUsName"}},[l("el-input",{attrs:{size:"small",disabled:e.disabled},model:{value:e.form.roleEnUsName,callback:function(r){e.form.roleEnUsName=r},expression:"form.roleEnUsName"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:e.$t("sysRole.jaJpName"),"label-width":e.formLabelWidth,prop:"roleJaJpName"}},[l("el-input",{attrs:{size:"small",disabled:e.disabled},model:{value:e.form.roleJaJpName,callback:function(r){e.form.roleJaJpName=r},expression:"form.roleJaJpName"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:e.$t("sysRole.koKrName"),"label-width":e.formLabelWidth,prop:"roleKoKrName"}},[l("el-input",{attrs:{size:"small",disabled:e.disabled},model:{value:e.form.roleKoKrName,callback:function(r){e.form.roleKoKrName=r},expression:"form.roleKoKrName"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:e.$t("sysRole.zhCnDescription"),"label-width":e.formLabelWidth,prop:"descriptionZhCn"}},[l("el-input",{attrs:{size:"small",type:"textarea",disabled:e.disabled},model:{value:e.form.descriptionZhCn,callback:function(r){e.form.descriptionZhCn=r},expression:"form.descriptionZhCn"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:e.$t("sysRole.enUsDescription"),"label-width":e.formLabelWidth,prop:"descriptionEnUs"}},[l("el-input",{attrs:{size:"small",type:"textarea",disabled:e.disabled},model:{value:e.form.descriptionEnUs,callback:function(r){e.form.descriptionEnUs=r},expression:"form.descriptionEnUs"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:e.$t("sysRole.jaJpDescription"),"label-width":e.formLabelWidth,prop:"descriptionJaJp"}},[l("el-input",{attrs:{size:"small",type:"textarea",disabled:e.disabled},model:{value:e.form.descriptionJaJp,callback:function(r){e.form.descriptionJaJp=r},expression:"form.descriptionJaJp"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:e.$t("sysRole.koKrDescription"),"label-width":e.formLabelWidth,prop:"descriptionKoKr"}},[l("el-input",{attrs:{size:"small",type:"textarea",disabled:e.disabled},model:{value:e.form.descriptionKoKr,callback:function(r){e.form.descriptionKoKr=r},expression:"form.descriptionKoKr"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:e.$t("sysRole.isShow"),"label-width":e.formLabelWidth}},[l("el-radio",{staticClass:"radio",attrs:{disabled:e.disabled,label:!0},model:{value:e.form.isShow,callback:function(r){e.form.isShow=r},expression:"form.isShow"}},[e._v(e._s(e.$t("commom.yes")))]),e._v(" "),l("el-radio",{staticClass:"radio",attrs:{disabled:e.disabled,label:!1},model:{value:e.form.isShow,callback:function(r){e.form.isShow=r},expression:"form.isShow"}},[e._v(e._s(e.$t("commom.no")))])],1)],1),e._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:e.$t("sysRole.systemName"),"label-width":e.formLabelWidth,prop:"role"}},[l("el-input",{attrs:{size:"small",disabled:e.disabled},model:{value:e.form.role,callback:function(r){e.form.role=r},expression:"form.role"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:e.$t("sysRole.type"),"label-width":e.formLabelWidth}},[l("el-radio",{staticClass:"radio",attrs:{disabled:e.disabled,label:0},model:{value:e.form.roleType,callback:function(r){e.form.roleType=r},expression:"form.roleType"}},[e._v(e._s(e.$t("sysRole.systemType")))]),e._v(" "),l("el-radio",{staticClass:"radio",attrs:{disabled:e.disabled,label:1},model:{value:e.form.roleType,callback:function(r){e.form.roleType=r},expression:"form.roleType"}},[e._v(e._s(e.$t("sysRole.shopType")))])],1)],1),e._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:e.$t("sysRole.roleLevel"),"label-width":e.formLabelWidth,prop:"roleLevel"}},[l("el-input",{attrs:{size:"small",disabled:e.disabled},model:{value:e.form.roleLevel,callback:function(r){e.form.roleLevel=e._n(r)},expression:"form.roleLevel"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:e.$t("sysRole.roleResources"),"label-width":e.formLabelWidth,prop:"sysResources"}},[l("el-select",{staticStyle:{width:"100%"},attrs:{multiple:!0,placeholder:e.$t("commom.select"),disabled:e.disabled,filterable:""},model:{value:e.form.sysResources,callback:function(r){e.form.sysResources=r},expression:"form.sysResources"}},e._l(e.allSysResources,function(e,r){return l("el-option",{key:r,attrs:{label:e.resName,value:e.resId}})}))],1)],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=38.ead4b49e2e85902df22b.js.map