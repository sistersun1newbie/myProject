webpackJsonp([30,47],{547:function(e,t,a){a(679);var i=a(221)(a(645),a(692),null,null);e.exports=i.exports},577:function(e,t,a){a(811);var i=a(221)(a(732),a(846),null,null);e.exports=i.exports},645:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{disabled:{type:Boolean,default:!1},pageData:{type:Object}},data:function(){return{base64Img:""}},created:function(){},methods:{deleteImg:function(){this.pageData.shopUserIcon="",this.base64Img="",document.getElementById("userIconfile").value=""},addImg:function(){document.getElementById("userIconfile").click()},getFile:function(e){var t=this,a=e.target.files[0];if(a){this.pageData.shopUserIcon=a;var i=new FileReader;i.onload=function(){t.base64Img=i.result},i.readAsDataURL(a)}}},watch:{pageData:function(e){this.base64Img="",document.getElementById("userIconfile").value=""}}}},666:function(e,t,a){t=e.exports=a(533)(),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"giftListForm.vue",sourceRoot:""}])},679:function(e,t,a){var i=a(666);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(534)("48a568e8",i,!0)},692:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{ref:"giftListForm",attrs:{model:e.pageData,"label-position":e.$store.getters.isMobile?"top":"right"}},[a("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[a("el-form-item",{attrs:{label:e.$t("business.giftList.head"),"label-width":"150px",prop:"'icon'"}},[a("ul",{staticClass:"el-upload-list el-upload-list--picture-card"},[a("li",{staticClass:"el-upload-list__item  "},[a("img",{staticClass:"el-upload-list__item-thumbnail",attrs:{src:e.base64Img||e.pageData.appUsersInfo.avatar,alt:""}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:!e.disabled,expression:"!disabled"}],staticClass:"el-upload-list__item-actions"},[a("span",{staticClass:"el-upload-list__item-delete"},[a("input",{staticStyle:{display:"none"},attrs:{type:"file",accept:"image/png, image/jpeg, image/bmp, image/gif",id:"userIconfile"},on:{change:e.getFile}}),e._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:e.base64Img||e.pageData.appUsersInfo.avatar,expression:"base64Img||pageData.appUsersInfo.avatar"}],staticClass:"el-icon-delete2",staticStyle:{"font-size":"40px"},on:{click:e.deleteImg}}),e._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:!e.base64Img&&!e.pageData.appUsersInfo.avatar,expression:"!base64Img&&!pageData.appUsersInfo.avatar"}],staticClass:"el-icon-plus",staticStyle:{"font-size":"40px"},on:{click:e.addImg}})])])])])])],1),e._v(" "),a("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[a("el-form-item",{attrs:{label:e.$t("business.giftList.name"),"label-width":"150px",prop:"typeJaJpName"}},[a("el-input",{attrs:{"auto-complete":"off",disabled:e.disabled},model:{value:e.pageData.appUsersInfo.nikeName,callback:function(t){e.pageData.appUsersInfo.nikeName=t},expression:"pageData.appUsersInfo.nikeName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[a("el-form-item",{attrs:{label:e.$t("business.giftList.gamename"),"label-width":"150px",prop:"typeZhCnName"}},[a("el-input",{attrs:{"auto-complete":"off",disabled:e.disabled},model:{value:e.pageData.game.gameName,callback:function(t){e.pageData.game.gameName=t},expression:"pageData.game.gameName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[a("el-form-item",{attrs:{label:e.$t("business.giftList.giftname"),"label-width":"150px",prop:"typeKoKrName"}},[a("el-input",{attrs:{"auto-complete":"off",disabled:e.disabled},model:{value:e.pageData.gameGiftInfo.giftName,callback:function(t){e.pageData.gameGiftInfo.giftName=t},expression:"pageData.gameGiftInfo.giftName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:e.$store.getters.isMobile?24:11}},[a("el-form-item",{attrs:{label:e.$t("business.giftList.gettime"),"label-width":"150px",prop:"typeEnUsName"}},[a("el-input",{attrs:{"auto-complete":"off",disabled:e.disabled},model:{value:e.pageData.reciveTime,callback:function(t){e.pageData.reciveTime=t},expression:"pageData.reciveTime"}})],1)],1)],1)],1)},staticRenderFns:[]}},732:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(43),s=a.n(i),n=a(145),l=a(547),o=a.n(l),r={totalPrice:"",count:"",currencyUnit:"",itemIcon:"",itemName:""},c=null;t.default={data:function(){return{giftData:[{ID:"123456",time:"2016-05-02",gift:"毛绒玩具"}],pageData:r,searchValue:"",tableData:"",currentPage:1,pageSizes:[10,20,30],page:{start:0,length:10,draw:1},code:"",dialogVisible:!1,dialogVisibleCode:!1,inputValue:"",dialogTyle:"",showTips:!1,showCode:!0}},components:{giftListform:o.a},created:function(){window.plus||(this.showCode=!1),this.init()},watch:{inputValue:function(e){""!=e&&(this.showTips=!1)},searchValue:function(e){e||this.init()},dialogVisibleCode:function(e){e||null==c||(c.close(),c=null)}},methods:{getQrcode:function(){if(""==this.inputValue||!/^[0-9]{1,2}?$/.test(this.inputValue))return this.showTips=!0;c?c.start():document.addEventListener("plusready",this.getScan())},getScan:function(){var e=this;c=new plus.barcode.Barcode("bcid",{},{background:"#000000"}),c.onmarked=function(t,a,i){switch(t){case plus.barcode.QR:"QR: ";break;case plus.barcode.EAN13:"EAN13: ";break;case plus.barcode.EAN8:"EAN8: "}e.getCode(a)},c.start()},getCode:function(e){var t=this;c.close(),c=null,this.code=e,a.i(n.usergiftrecordAdd)({userId:this.$store.state.user.shopUserId,quantity:this.inputValue,QRCode:e}).then(function(e){t.init()}).catch(function(e){})},showDilog:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:typeFormData;this.pageData=s()({},t,t.appUsersInfo,t.game,t.gameGiftInfo),this.dialogVisible=!0,this.dialogTyle=e},verification:function(){window.plus?this.dialogVisibleCode=!0:this.$notify.warning({title:this.$t("commom.alertTitle"),message:this.$t("commom.phoneType"),duration:3e3})},init:function(){var e=this;a.i(n.usergiftrecordPages)(this.page).then(function(t){e.tableData=t.data.obj})},onQuery:function(){var e=this;this.searchValue&&a.i(n.usergiftrecordPages)(s()({},this.page,{gameName:this.searchValue})).then(function(t){e.tableData=t.data.obj})},getpageData:function(){var e=this;a.i(n.usergiftrecordPages)(s()({},this.page,{busItemName:this.searchValue})).then(function(t){e.tableData=s()({},t.data.obj,t.data.obj.busiItem)})},handleSizeChange:function(e){this.page.length=e,this.page.start=(this.currentPage-1)*this.page.length,this.getpageData()},handleCurrentChange:function(e){var t=this;this.currentPage=e,this.page.start=(this.currentPage-1)*this.page.length,setTimeout(function(){t.getpageData()},0)}}}},778:function(e,t,a){t=e.exports=a(533)(),t.push([e.i,"\n.tips{\n\tmargin:0 auto;\n\tfont-size: 10px;\n\tcolor:red;\n\ttext-align: center;\n}\n#bcid {\n\twidth: 250px;\n\theight: 300px;\n\tmargin: 20px auto;\n\tbackground: black;\n}\n","",{version:3,sources:["D:/AcoddingFile/codFile/JZD/JISZHOUDAOguanli/sx-chejudo-front/src/pages/sidemenu/business/giftList.vue"],names:[],mappings:";AACA;CACC,cAAc;CACd,gBAAgB;CAChB,UAAU;CACV,mBAAmB;CACnB;AACD;CACC,aAAa;CACb,cAAc;CACd,kBAAkB;CAClB,kBAAkB;CAClB",file:"giftList.vue",sourcesContent:["\n.tips{\n\tmargin:0 auto;\n\tfont-size: 10px;\n\tcolor:red;\n\ttext-align: center;\n}\n#bcid {\n\twidth: 250px;\n\theight: 300px;\n\tmargin: 20px auto;\n\tbackground: black;\n}\n"],sourceRoot:""}])},811:function(e,t,a){var i=a(778);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(534)("e76e2e1e",i,!0)},846:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("el-input",{attrs:{size:"large",placeholder:e.$t("business.giftList.searchAlert")},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}})],1),e._v(" "),a("el-col",{attrs:{span:2}},[a("el-button",{attrs:{size:"large",icon:"search"},on:{click:e.onQuery}},[e._v(e._s(e.$t("commom.search")))])],1),e._v(" "),e.showCode?a("el-col",{attrs:{span:4,offset:12}},[a("el-button",{staticStyle:{float:"right",margin:"0px 20px"},attrs:{size:"large",type:"primary"},on:{click:function(t){e.verification()}}},[e._v("\n\t\t\t\t"+e._s(e.$t("business.giftList.checkcode"))+"\n\t\t\t")])],1):e._e()],1),e._v(" "),a("br"),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData.data,border:"",stripe:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:e.$t("commom.seq"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.$index+1+(e.page&&e.page.start||0)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("business.giftList.name"),align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.appUsersInfo.nikeName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("business.giftList.head"),align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("ul",{staticClass:"el-upload-list el-upload-list--picture-card"},[a("li",{staticClass:"el-upload-list__item  ",staticStyle:{width:"80px",height:"80px",margin:"3px 0 -4px 0"}},[a("img",{staticClass:"el-upload-list__item-thumbnail",attrs:{src:e.row.appUsersInfo.avatar,alt:""}})])])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("business.giftList.gamename"),align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.game.gameName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("business.giftList.giftname"),align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.gameGiftInfo.giftName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("business.giftList.gettime"),align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.reciveTime))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("commom.operation"),fixed:!e.$store.getters.isMobile&&"right",align:"center","min-width":"277"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small",type:"warning",icon:"information"},on:{click:function(a){e.showDilog("detail",t.row)}}},[e._v(e._s(e.$t("commom.detail"))+"\n\t\t\t\t")])]}}])})],1),e._v(" "),a("el-pagination",{staticStyle:{overflow:"auto"},attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.page.length,layout:"total, sizes, prev, pager, next, jumper",total:e.tableData.recordsTotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),a("el-dialog",{attrs:{"close-on-click-modal":!1,size:e.$store.getters.isMobile?"full":"small"},model:{value:e.dialogVisible,callback:function(t){e.dialogVisible=t},expression:"dialogVisible"}},[a("giftListform",{ref:"giftListForm",attrs:{pageData:e.pageData,disabled:"detail"===e.dialogTyle}})],1),e._v(" "),a("el-dialog",{staticStyle:{"text-align":"center"},attrs:{"close-on-click-modal":!1,size:e.$store.getters.isMobile?"full":"small"},model:{value:e.dialogVisibleCode,callback:function(t){e.dialogVisibleCode=t},expression:"dialogVisibleCode"}},[a("el-input",{staticStyle:{width:"120px"},attrs:{placeholder:e.$t("business.giftList.title")},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}}),a("br"),e._v(" "),e.showTips?a("p",{staticClass:"tips"},[e._v(e._s(e.$t("business.giftList.tip")))]):e._e(),e._v(" "),a("el-button",{staticStyle:{"margin-top":"20px"},attrs:{type:"primary",size:"large"},on:{click:e.getQrcode}},[e._v(e._s(e.$t("commom.qrcode")))]),e._v(" "),a("div",{attrs:{id:"bcid"}})],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=30.fc4dfc36ea6e7fb0ee0f.js.map