webpackJsonp([37,63],{542:function(e,t,a){var i=a(221)(a(640),a(697),null,null);e.exports=i.exports},571:function(e,t,a){a(807);var i=a(221)(a(726),a(842),null,null);e.exports=i.exports},640:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(145);t.default={props:{disabled:Boolean,pageData:Object},data:function(){var e=this;return{gameList:[],rules:{remindZhCnContent:[{required:!0,message:this.$t("article.areaGame.vZhDescription"),trigger:"blur"}],remindEnUsContent:[{required:!0,message:this.$t("article.areaGame.vEnDescription"),trigger:"blur"}],remindJaJpContent:[{required:!0,message:this.$t("article.areaGame.vJaDescription"),trigger:"blur"}],remindKoKrContent:[{required:!0,message:this.$t("article.areaGame. vKoDescription"),trigger:"blur"}],remindAct:[{required:!0,type:"number",message:this.$t("article.areaGame.vact"),trigger:"blur"}],distance:[{validator:function(t,a,i){""===a||null==a?i(new Error(e.$t("article.areaGame.vdistance"))):parseInt(a)<=0&&NaN!==parseInt(a)?i(new Error(e.$t("article.areaGame.vdistance0"))):i()},required:!0,trigger:"blur"}],gameId:[{required:!0,type:"number",message:this.$t("article.areaGame.vgame"),trigger:"blur"}]}}},mouted:function(){},created:function(){var e=this;a.i(i.areagametaskNopages)().then(function(t){e.gameList=t.data.obj})},watch:{pageData:function(){this.$refs.storyForm.resetFields()}},methods:{validate:function(e){this.$refs.storyForm.validate(e)}}}},697:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"storyForm",attrs:{model:e.pageData,rules:e.rules,"label-position":e.$store.getters.isMobile?"top":"right"}},[a("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[a("el-form-item",{attrs:{label:e.$t("article.areaGame.zhDesc"),"label-width":"150px",prop:"remindZhCnContent"}},[a("el-input",{attrs:{"auto-complete":"off",disabled:e.disabled},model:{value:e.pageData.remindZhCnContent,callback:function(t){e.pageData.remindZhCnContent=t},expression:"pageData.remindZhCnContent"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[a("el-form-item",{attrs:{label:e.$t("article.areaGame.enDesc"),"label-width":"150px",prop:"remindEnUsContent"}},[a("el-input",{attrs:{"auto-complete":"off",disabled:e.disabled},model:{value:e.pageData.remindEnUsContent,callback:function(t){e.pageData.remindEnUsContent=t},expression:"pageData.remindEnUsContent"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[a("el-form-item",{attrs:{label:e.$t("article.areaGame.jaDesc"),"label-width":"150px",prop:"remindJaJpContent"}},[a("el-input",{attrs:{"auto-complete":"off",disabled:e.disabled},model:{value:e.pageData.remindJaJpContent,callback:function(t){e.pageData.remindJaJpContent=t},expression:"pageData.remindJaJpContent"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[a("el-form-item",{attrs:{label:e.$t("article.areaGame.koDesc"),"label-width":"150px",prop:"remindKoKrContent"}},[a("el-input",{attrs:{"auto-complete":"off",disabled:e.disabled},model:{value:e.pageData.remindKoKrContent,callback:function(t){e.pageData.remindKoKrContent=t},expression:"pageData.remindKoKrContent"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[a("el-form-item",{attrs:{label:e.$t("article.areaGame.distance"),"label-width":"150px",prop:"distance"}},[a("el-input",{attrs:{"auto-complete":"off",disabled:e.disabled},model:{value:e.pageData.distance,callback:function(t){e.pageData.distance=e._n(t)},expression:"pageData.distance"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[a("el-form-item",{attrs:{label:e.$t("article.areaGame.act"),"label-width":"150px",prop:"remindAct"}},[a("el-radio-group",{model:{value:e.pageData.remindAct,callback:function(t){e.pageData.remindAct=e._n(t)},expression:"pageData.remindAct"}},[a("el-radio",{attrs:{disabled:e.disabled,label:1}},[e._v(e._s(e.$t("article.areaGame.type1")))]),e._v(" "),a("el-radio",{attrs:{disabled:e.disabled,label:2}},[e._v(e._s(e.$t("article.areaGame.type2")))])],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[a("el-form-item",{attrs:{label:e.$t("article.areaGame.game"),"label-width":"150px",prop:"gameId"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:e.$t("commom.select")},model:{value:e.pageData.gameId,callback:function(t){e.pageData.gameId=e._n(t)},expression:"pageData.gameId"}},e._l(e.gameList,function(t){return a("el-option",{key:t.gameId,attrs:{label:t.gameName,value:t.gameId,disabled:e.disabled}})}))],1)],1)],1)},staticRenderFns:[]}},726:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(43),n=a.n(i),r=a(145),l=a(542),o=a.n(l),s={gameId:"",remindZhCnContent:"",remindJaJpContent:"",remindKoKrContent:"",remindEnUsContent:"",remindAct:1,distance:""};t.default={data:function(){return{searchValue:"",tableData:{},dialogVisible:!1,dialogTyle:"",pageData:n()({},s),page:{start:0,length:10,draw:1},currentPage:1,pageSizes:[10,20,30]}},components:{storyform:o.a},created:function(){this.init()},watch:{searchValue:function(e){var t=this;e||a.i(r.gametaskremindPages)(this.page).then(function(e){t.tableData=e.data.obj})}},methods:{init:function(){var e=this;a.i(r.gametaskremindPages)(this.page).then(function(t){e.tableData=t.data.obj})},onQuery:function(){var e=this;this.searchValue&&a.i(r.gametaskremindPages)(n()({},this.page,{gameName:this.searchValue})).then(function(t){e.tableData=t.data.obj})},showDilog:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;this.dialogVisible=!0,this.dialogTyle=e,this.pageData=n()({},t)},onSubmit:function(){var e=this;this.$refs.storyForm.validate(function(t){return t&&e.commitForm()})},commitForm:function(){var e=this;for(var t in this.pageData)t.indexOf("Time")>-1&&delete this.pageData[t];"edit"===this.dialogTyle?a.i(r.gametaskremindUpdate)(this.pageData).then(function(t){e.init(),e.dialogVisible=!1}):"add"===this.dialogTyle&&a.i(r.gametaskremindAdd)(this.pageData).then(function(t){e.init(),e.dialogVisible=!1})},handleDelete:function(e){var t=this;this.$confirm(this.$t("commom.deleConfim"),"",{confirmButtonText:this.$t("commom.sure"),cancelButtonText:this.$t("commom.cancel"),type:"warning"}).then(function(){a.i(r.gametaskremindDelete)({remindId:e.remindId}).then(function(e){t.init()})}).catch(function(e){})},getpageData:function(){var e=this;a.i(r.gametaskremindPages)(n()({},this.page,{gameName:this.searchValue})).then(function(t){e.tableData=t.data.obj})},handleSizeChange:function(e){this.page.length=e,this.page.start=(this.currentPage-1)*this.page.length,this.getpageData()},handleCurrentChange:function(e){var t=this;this.currentPage=e,this.page.start=(this.currentPage-1)*this.page.length,setTimeout(function(){t.getpageData()},0)}}}},774:function(e,t,a){t=e.exports=a(533)(),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"areaGame.vue",sourceRoot:""}])},807:function(e,t,a){var i=a(774);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(534)("51273620",i,!0)},842:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("el-input",{attrs:{size:"large",placeholder:e.$t("article.gameMission.search")},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.onQuery(t)}},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}})],1),e._v(" "),a("el-col",{attrs:{span:2}},[a("el-button",{attrs:{size:"large",icon:"search"},on:{click:e.onQuery}},[e._v(e._s(e.$t("commom.search")))])],1),e._v(" "),a("el-col",{attrs:{span:4,offset:12}},[a("el-button",{staticStyle:{float:"right",margin:"0px 20px"},attrs:{size:"large",type:"primary",icon:"plus"},on:{click:function(t){e.showDilog("add")}}},[e._v("\n                    "+e._s(e.$t("commom.add"))+"\n                ")])],1)],1),e._v(" "),a("br"),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData.data,border:"",stripe:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:e.$t("commom.seq"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.$index+1+e.page.start))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("article.areaGame.game"),align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.gameName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("article.areaGame.act"),align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(1==t.row.remindAct?e.$t("article.areaGame.type1"):e.$t("article.areaGame.type2")))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("article.areaGame.distance"),align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.distance))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("commom.operation"),align:"center",fixed:!e.$store.getters.isMobile&&"right","min-width":"277"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small",type:"warning",icon:"information"},on:{click:function(a){e.showDilog("detail",t.row)}}},[e._v("\n                        "+e._s(e.$t("commom.detail"))+"\n                    ")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"primary",icon:"edit"},on:{click:function(a){e.showDilog("edit",t.row)}}},[e._v(e._s(e.$t("commom.edit"))+"\n                    ")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"danger",icon:"delete"},on:{click:function(a){e.handleDelete(t.row)}}},[e._v(e._s(e.$t("commom.delete"))+"\n                    ")])]}}])})],1),e._v(" "),a("el-pagination",{staticStyle:{overflow:"auto"},attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.page.length,layout:"total, sizes, prev, pager, next, jumper",total:e.tableData.recordsTotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),a("el-dialog",{attrs:{"close-on-click-modal":!1,size:e.$store.getters.isMobile?"full":"small"},model:{value:e.dialogVisible,callback:function(t){e.dialogVisible=t},expression:"dialogVisible"}},[a("storyform",{ref:"storyForm",attrs:{pageData:e.pageData,disabled:"detail"===e.dialogTyle}}),e._v(" "),a("div",{staticStyle:{float:"right","margin-bottom":"20px"}},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v(e._s(e.$t("commom.cancel")))]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:"detail"!==e.dialogTyle,expression:"dialogTyle!=='detail'"}],attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v(e._s(e.$t("commom.sure")))])],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=37.02bdb85a10e6e3191c82.js.map