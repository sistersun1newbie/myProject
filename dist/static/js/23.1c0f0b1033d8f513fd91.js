webpackJsonp([23,40],{557:function(e,a,t){t(683);var o=t(221)(t(655),t(701),null,null);e.exports=o.exports},590:function(e,a,t){t(808);var o=t(221)(t(745),t(843),null,null);e.exports=o.exports},655:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={props:{companyform:{type:Object,default:function(){return{}}},disabled:{type:Boolean,default:!1}},data:function(){var e=this;return{ruleData:[],rules:{companyZhCnName:[{required:!0,message:this.$t("company.validate.companyZhCnName"),trigger:"blur"}],companyJpJaName:[{required:!0,message:this.$t("company.validate.companyJpJaName"),trigger:"blur"}],companyEnUsName:[{required:!0,message:this.$t("company.validate.companyEnUsName"),trigger:"blur"}],companyKoKrName:[{required:!0,message:this.$t("company.validate.companyKoKrName"),trigger:"blur"}],addressZhCn:[{required:!0,message:this.$t("company.validate.addressZhCn"),trigger:"blur"}],addressJpJa:[{required:!0,message:this.$t("company.validate.addressJpJa"),trigger:"blur"}],addressEnUs:[{required:!0,message:this.$t("company.validate.addressEnUs"),trigger:"blur"}],addressKoKr:[{required:!0,message:this.$t("company.validate.addressKoKr"),trigger:"blur"}],phone:[{required:!0,validator:function(a,t,o){/^\s*\+?\s*(\(\s*\d+\s*\)|\d+)(\s*-?\s*(\(\s*\d+\s*\)|\s*\d+\s*))*\s*$/.test(t)?o():o(new Error(e.$t("company.validate.phone")))},trigger:"blur"}],email:[{required:!0,validator:function(a,t,o){/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(t)?o():o(new Error(e.$t("company.validate.email")))},trigger:"blur"}],fax:[{validator:function(a,t,o){/^(\+|-|\d){0,}$/.test(t)?o():o(new Error(e.$t("company.validate.fax")))},trigger:"blur"}]}}},created:function(){},methods:{validate:function(e){this.$refs.compform.validate(e)}},watch:{companyform:function(e){this.$refs.compform.resetFields()}}}},670:function(e,a,t){a=e.exports=t(533)(),a.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"companyForm.vue",sourceRoot:""}])},683:function(e,a,t){var o=t(670);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(534)("20e6481f",o,!0)},701:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("el-form",{ref:"compform",attrs:{model:e.companyform,rules:e.rules,"label-position":e.$store.getters.isMobile?"top":"right"}},[t("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[t("el-form-item",{attrs:{label:e.$t("company.companyZhCnName"),"label-width":"150px",prop:"companyZhCnName"}},[t("el-input",{attrs:{"auto-complete":"off",disabled:e.disabled},model:{value:e.companyform.companyZhCnName,callback:function(a){e.companyform.companyZhCnName=a},expression:"companyform.companyZhCnName"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[t("el-form-item",{attrs:{label:e.$t("company.companyJpJaName"),"label-width":"150px",prop:"companyJpJaName"}},[t("el-input",{attrs:{"auto-complete":"off",disabled:e.disabled},model:{value:e.companyform.companyJpJaName,callback:function(a){e.companyform.companyJpJaName=a},expression:"companyform.companyJpJaName"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[t("el-form-item",{attrs:{label:e.$t("company.companyEnUsName"),"label-width":"150px",prop:"companyEnUsName"}},[t("el-input",{attrs:{"auto-complete":"off",disabled:e.disabled},model:{value:e.companyform.companyEnUsName,callback:function(a){e.companyform.companyEnUsName=a},expression:"companyform.companyEnUsName"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[t("el-form-item",{attrs:{label:e.$t("company.companyKoKrName"),"label-width":"150px",prop:"companyKoKrName"}},[t("el-input",{attrs:{"auto-complete":"off",disabled:e.disabled},model:{value:e.companyform.companyKoKrName,callback:function(a){e.companyform.companyKoKrName=a},expression:"companyform.companyKoKrName"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[t("el-form-item",{attrs:{label:e.$t("company.addressZhCn"),"label-width":"150px",prop:"addressZhCn"}},[t("el-input",{attrs:{"auto-complete":"off",disabled:e.disabled},model:{value:e.companyform.addressZhCn,callback:function(a){e.companyform.addressZhCn=a},expression:"companyform.addressZhCn"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[t("el-form-item",{attrs:{label:e.$t("company.addressJpJa"),"label-width":"150px",prop:"addressJpJa"}},[t("el-input",{attrs:{"auto-complete":"off",disabled:e.disabled},model:{value:e.companyform.addressJpJa,callback:function(a){e.companyform.addressJpJa=a},expression:"companyform.addressJpJa"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[t("el-form-item",{attrs:{label:e.$t("company.addressEnUs"),"label-width":"150px",prop:"addressEnUs"}},[t("el-input",{attrs:{"auto-complete":"off",disabled:e.disabled},model:{value:e.companyform.addressEnUs,callback:function(a){e.companyform.addressEnUs=a},expression:"companyform.addressEnUs"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[t("el-form-item",{attrs:{label:e.$t("company.addressKoKr"),"label-width":"150px",prop:"addressKoKr"}},[t("el-input",{attrs:{"auto-complete":"off",disabled:e.disabled},model:{value:e.companyform.addressKoKr,callback:function(a){e.companyform.addressKoKr=a},expression:"companyform.addressKoKr"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[t("el-form-item",{attrs:{label:e.$t("company.phone"),"label-width":"150px",prop:"phone"}},[t("el-input",{attrs:{"auto-complete":"off",disabled:e.disabled},model:{value:e.companyform.phone,callback:function(a){e.companyform.phone=a},expression:"companyform.phone"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[t("el-form-item",{attrs:{label:e.$t("company.email"),"label-width":"150px",prop:"email"}},[t("el-input",{attrs:{"auto-complete":"off",disabled:e.disabled},model:{value:e.companyform.email,callback:function(a){e.companyform.email=a},expression:"companyform.email"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[t("el-form-item",{attrs:{label:e.$t("company.fax"),"label-width":"150px",prop:"fax"}},[t("el-input",{attrs:{"auto-complete":"off",disabled:e.disabled},model:{value:e.companyform.fax,callback:function(a){e.companyform.fax=a},expression:"companyform.fax"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.disabled,expression:"disabled"}],attrs:{label:e.$t("commom.creator"),"label-width":"150px"}},[t("el-input",{attrs:{"auto-complete":"off",disabled:e.disabled},model:{value:e.companyform.creator,callback:function(a){e.companyform.creator=a},expression:"companyform.creator"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.disabled,expression:"disabled"}],attrs:{label:e.$t("commom.modifyor"),"label-width":"150px"}},[t("el-input",{attrs:{"auto-complete":"off",disabled:e.disabled},model:{value:e.companyform.modifyor,callback:function(a){e.companyform.modifyor=a},expression:"companyform.modifyor"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.disabled,expression:"disabled"}],attrs:{label:e.$t("commom.createTime"),"label-width":"150px"}},[t("el-input",{attrs:{"auto-complete":"off",disabled:e.disabled},model:{value:e.companyform.createTime,callback:function(a){e.companyform.createTime=a},expression:"companyform.createTime"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.disabled,expression:"disabled"}],attrs:{label:e.$t("commom.modifyTime"),"label-width":"150px"}},[t("el-input",{attrs:{"auto-complete":"off",disabled:e.disabled},model:{value:e.companyform.modifyTime,callback:function(a){e.companyform.modifyTime=a},expression:"companyform.modifyTime"}})],1)],1)],1)],1)},staticRenderFns:[]}},745:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=t(43),s=t.n(o),n=t(557),r=t.n(n),l=(t(36),t(145)),i={companyZhCnName:"",companyJpJaName:"",companyEnUsName:"",companyKoKrName:"",addressZhCn:"",addressJpJa:"",addressEnUs:"",addressKoKr:"",phone:"",email:"",fax:"",station:""};a.default={data:function(){return{pageData:{},searchValue:"",page:{start:0,length:10,draw:1},currentPage:1,pageSizes:[10,20,30],dialogVisible:!1,dialogTyle:"",companyform:{}}},components:{compform:r.a},created:function(){this.init(this.page)},watch:{searchValue:function(e){e||this.init(this.page)}},methods:{init:function(e){var a=this;t.i(l.sysCompInfoPages)(e).then(function(e){a.pageData=e.data.obj})},showDilog:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;this.companyform=s()({},a),this.dialogVisible=!0,this.dialogTyle=e},onQuery:function(){this.searchValue&&this.init(s()({},this.page,{name:this.searchValue}))},onSubmit:function(){var e=this;this.$refs.compform.validate(function(a){return a&&e.commitForm()})},commitForm:function(){var e=this;"edit"===this.dialogTyle?(delete this.companyform.createTime,delete this.companyform.modifyTime,t.i(l.sysCompInfoUpdate)(this.companyform).then(function(a){e.init(e.page),e.dialogVisible=!1})):"add"===this.dialogTyle&&t.i(l.sysCompInfoAdd)(this.companyform).then(function(a){e.init(e.page),e.dialogVisible=!1})},handleDelete:function(e){var a=this;this.$confirm(this.$t("commom.deleConfim"),"",{confirmButtonText:this.$t("commom.sure"),cancelButtonText:this.$t("commom.cancel"),type:"warning"}).then(function(){t.i(l.sysCompInfoDelete)({companyId:e.companyId}).then(function(e){a.init(a.page)})})},handleSizeChange:function(e){this.page.length=e,this.page.start=(this.currentPage-1)*this.page.length,this.init(this.page)},handleCurrentChange:function(e){this.currentPage=e,this.page.start=(this.currentPage-1)*this.page.length,this.init(this.page)}}}},775:function(e,a,t){a=e.exports=t(533)(),a.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"company.vue",sourceRoot:""}])},808:function(e,a,t){var o=t(775);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(534)("520e505b",o,!0)},843:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:4,offset:20}},[t("el-button",{staticStyle:{float:"right",margin:"0px 20px"},attrs:{size:"large",type:"primary",icon:"plus"},on:{click:function(a){e.showDilog("add")}}},[e._v("\n                    "+e._s(e.$t("commom.add"))+"\n                ")])],1)],1),e._v(" "),t("br"),e._v(" "),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.pageData.data,border:"",stripe:"","highlight-current-row":""}},[t("el-table-column",{attrs:{label:e.$t("commom.seq"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(a.$index+1+(e.page&&e.page.start||0)))])]}}])}),e._v(" "),t("el-table-column",{attrs:{label:e.$t("company.companyName"),align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.companyName))])]}}])}),e._v(" "),t("el-table-column",{attrs:{label:e.$t("company.address"),align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.address))])]}}])}),e._v(" "),t("el-table-column",{attrs:{label:e.$t("company.phone"),align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.phone))])]}}])}),e._v(" "),t("el-table-column",{attrs:{label:e.$t("company.email"),align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.email))])]}}])}),e._v(" "),t("el-table-column",{attrs:{label:e.$t("company.fax"),align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.fax))])]}}])}),e._v(" "),t("el-table-column",{attrs:{label:e.$t("commom.operation"),align:"center",fixed:!e.$store.getters.isMobile&&"right","min-width":"277"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{size:"small",type:"warning",icon:"information"},on:{click:function(t){e.showDilog("detail",a.row)}}},[e._v(e._s(e.$t("commom.detail"))+"\n                    ")]),e._v(" "),a.row.isSys?e._e():t("el-button",{attrs:{size:"small",type:"primary",icon:"edit"},on:{click:function(t){e.showDilog("edit",a.row)}}},[e._v(" "+e._s(e.$t("commom.edit"))+"\n                    ")]),e._v(" "),a.row.isSys?e._e():t("el-button",{attrs:{size:"small",type:"danger",icon:"delete"},on:{click:function(t){e.handleDelete(a.row)}}},[e._v(e._s(e.$t("commom.delete"))+"\n                    ")])]}}])})],1),e._v(" "),t("el-pagination",{staticStyle:{overflow:"auto"},attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.page.length,layout:"total, sizes, prev, pager, next, jumper",total:e.pageData.recordsTotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),t("el-dialog",{attrs:{"close-on-click-modal":!1,size:e.$store.getters.isMobile?"full":"small"},model:{value:e.dialogVisible,callback:function(a){e.dialogVisible=a},expression:"dialogVisible"}},[t("compform",{ref:"compform",attrs:{companyform:e.companyform,disabled:"detail"===e.dialogTyle}}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"detail"!==e.dialogTyle,expression:"dialogTyle!=='detail'"}],staticStyle:{float:"right","margin-bottom":"20px"}},[t("el-button",{on:{click:function(a){e.dialogVisible=!1}}},[e._v(e._s(e.$t("commom.cancel")))]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v(e._s(e.$t("commom.sure")))])],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=23.1c0f0b1033d8f513fd91.js.map