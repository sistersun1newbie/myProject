webpackJsonp([58],{562:function(e,o,r){var t=r(221)(r(660),r(704),null,null);e.exports=t.exports},660:function(e,o,r){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={props:{form:Object},data:function(){return{formLabelWidth:"100px",options:[{value:"menu",label:"menu"},{value:"button",label:"button"}],rules:{resZhCnName:[{required:!0,message:this.$t("commom.required"),trigger:"blur"}],resEnUsName:[{required:!0,message:this.$t("commom.required"),trigger:"blur"}],resKoKrName:[{required:!0,message:this.$t("commom.required"),trigger:"blur"}],resJaJpName:[{required:!0,message:this.$t("commom.required"),trigger:"blur"}],identity:[{required:!0,message:this.$t("commom.required"),trigger:"blur"}],permission:[{required:!0,message:this.$t("commom.required"),trigger:"blur"}]}}},methods:{clearParent:function(){this.form.parentId=0,this.form.parentIds="0",this.form.parentName=""},validate:function(e){this.$refs.form.validate(function(o){if(!o)return!1;e(o)})},resetFields:function(){this.$refs.form.resetFields()}}}},704:function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("el-form",{ref:"form",staticClass:"demo-ruleForm",attrs:{model:e.form,rules:e.rules}},[r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.$t("sysresources.commom.resourceNameZh"),"label-width":e.formLabelWidth,prop:"resZhCnName"}},[r("el-input",{attrs:{size:"small","auto-complete":"off"},model:{value:e.form.resZhCnName,callback:function(o){e.form.resZhCnName=o},expression:"form.resZhCnName"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.$t("sysresources.commom.resourceNameEn"),"label-width":e.formLabelWidth,prop:"resEnUsName"}},[r("el-input",{attrs:{size:"small","auto-complete":"off"},model:{value:e.form.resEnUsName,callback:function(o){e.form.resEnUsName=o},expression:"form.resEnUsName"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.$t("sysresources.commom.resourceNameKo"),"label-width":e.formLabelWidth,prop:"resKoKrName"}},[r("el-input",{attrs:{size:"small","auto-complete":"off"},model:{value:e.form.resKoKrName,callback:function(o){e.form.resKoKrName=o},expression:"form.resKoKrName"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.$t("sysresources.commom.resourceNameJa"),"label-width":e.formLabelWidth,prop:"resJaJpName"}},[r("el-input",{attrs:{size:"small","auto-complete":"off"},model:{value:e.form.resJaJpName,callback:function(o){e.form.resJaJpName=o},expression:"form.resJaJpName"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:11}},[r("el-form-item",{attrs:{label:e.$t("sysresources.commom.parentName"),"label-width":e.formLabelWidth}},[r("el-input",{attrs:{size:"small","auto-complete":"off",readonly:!0,icon:"plus"},on:{click:function(o){e.$emit("showTree")}},model:{value:e.form.parentName,callback:function(o){e.form.parentName=o},expression:"form.parentName"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:1}},[r("el-form-item",[r("el-button",{attrs:{size:"small",icon:"close"},on:{click:e.clearParent}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.$t("sysresources.commom.icon"),"label-width":e.formLabelWidth}},[r("el-input",{attrs:{size:"small","auto-complete":"off"},model:{value:e.form.icon,callback:function(o){e.form.icon=o},expression:"form.icon"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.$t("sysresources.commom.component"),"label-width":e.formLabelWidth}},[r("el-input",{attrs:{size:"small","auto-complete":"off"},model:{value:e.form.component,callback:function(o){e.form.component=o},expression:"form.component"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.$t("sysresources.commom.resType"),"label-width":e.formLabelWidth}},[r("el-select",{staticStyle:{width:"100%"},attrs:{size:"small"},model:{value:e.form.restype,callback:function(o){e.form.restype=o},expression:"form.restype"}},e._l(e.options,function(e,o){return r("el-option",{key:o,attrs:{label:e.label,value:e.value}})}))],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.$t("sysresources.commom.identity"),"label-width":e.formLabelWidth,prop:"identity"}},[r("el-input",{attrs:{size:"small","auto-complete":"off"},model:{value:e.form.identity,callback:function(o){e.form.identity=o},expression:"form.identity"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.$t("sysresources.commom.permission"),"label-width":e.formLabelWidth,prop:"permission"}},[r("el-input",{attrs:{size:"small","auto-complete":"off"},model:{value:e.form.permission,callback:function(o){e.form.permission=o},expression:"form.permission"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.$t("sysresources.commom.seq"),"label-width":e.formLabelWidth}},[r("el-input",{attrs:{size:"small","auto-complete":"off"},model:{value:e.form.seq,callback:function(o){e.form.seq=o},expression:"form.seq"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.$t("sysresources.commom.isShow"),"label-width":e.formLabelWidth}},[r("el-radio",{staticClass:"radio",attrs:{label:!0},model:{value:e.form.isShow,callback:function(o){e.form.isShow=o},expression:"form.isShow"}},[e._v(e._s(e.$t("commom.yes")))]),e._v(" "),r("el-radio",{staticClass:"radio",attrs:{label:!1},model:{value:e.form.isShow,callback:function(o){e.form.isShow=o},expression:"form.isShow"}},[e._v(e._s(e.$t("commom.no")))])],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.$t("sysresources.commom.url"),"label-width":e.formLabelWidth}},[r("el-input",{attrs:{size:"small","auto-complete":"off"},model:{value:e.form.url,callback:function(o){e.form.url=o},expression:"form.url"}})],1)],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=58.b2d8530cbddb13074979.js.map