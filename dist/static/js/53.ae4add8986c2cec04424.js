webpackJsonp([53],{536:function(t,n,e){e(633);var i=e(221)(e(628),e(635),null,null);t.exports=i.exports},628:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(43),o=e.n(i),r=e(146);n.default={props:{userList:{type:Array,default:function(){return[]}},isShowLocation:{type:Boolean,default:!0},currentObj:{type:Object,default:function(){return{msg:"",avatar:""}}},id:{type:String,default:"myMap"},height:{type:[String,Number],default:"500"}},data:function(){return{map:null,marker:null,infoWindow:null,geocoder:null,userListMarker:[],singleMark:"",currentObjInfoWindow:"",input5:""}},mounted:function(){this.mapinit()},computed:o()({},e.i(r.b)(["mapCenter","markerInfo","showMap"])),watch:{"currentObj.msg":function(){if(console.log("是否删除点：",this.currentObj.flag),this.currentObj.flag)return console.log("删除对象啊啊啊1",this.singleMark),console.log("删除对象啊啊啊2",this.map),this.singleMark&&this.singleMark.setMap(null),this.singleMark="",void console.log("删除对象啊啊啊3",this.singleMark);this.setSingleMark(this.currentObj)},showMap:function(t){t&&this.markerInfo&&this.map&&this.marker&&(this.map.setCenter(this.markerInfo),this.marker.setPosition(this.markerInfo),this.geocod(this.markerInfo))},userList:function(t){}},methods:o()({},e.i(r.c)(["updatedMarkerInfo","updatechatObj"]),{mapinit:function(){var t=this;window.onMapReady(function(n){t.map=new n.Map(document.getElementById(t.id),{center:t.markerInfo||t.mapCenter,zoom:11}),t.setSingleMark(t.currentObj),t.geocoder=new n.Geocoder,t.isShowLocation&&(t.infoWindow=new n.InfoWindow,t.marker=new n.Marker({position:t.markerInfo||t.mapCenter,map:t.map,draggable:!0,title:t.$t("myMap.position")}),t.geocod(t.markerInfo||t.mapCenter),t.marker.addListener("dragend",t.markerDragend),t.marker.addListener("click",function(){t.infoWindow.open(t.map,t.marker)}))})},getAddress:function(){var t=this;""!=this.input5&&this.geocoder.geocode({address:this.input5},function(n,e){if("OK"===e){t.map.setCenter(n[0].geometry.location),t.marker.setPosition(n[0].geometry.location);var i={lat:n[0].geometry.location.lat(),lng:n[0].geometry.location.lng()};t.setInfoWin(i,n[0].formatted_address),console.log(n)}else alert("Geocode was not successful for the following reason: "+e)})},setSingleMark:function(t){var n=this;if(console.log(t),t.lat){console.log("观察msg变化  消息是：",t.msg),console.log("观察msg变化  窗口对象是：",this.currentObjInfoWindow+this.currentObjInfoWindow!==""),this.map.setCenter(t);var e=google.maps;this.singleMark?this.singleMark.setPosition(t):this.singleMark=new e.Marker({position:t,map:this.map,title:this.$t("myMap.position"),obj:t}),console.log(" this.singleMark  ",this.singleMark);var i='<div class="el-row" style="margin-left: 0px; margin-right: 0px; margin-bottom: 0px;">\n                  \t <div class="el-col el-col-8" style="padding-left: 10px; padding-right: 10px;text-align: center">\n                  \t <img src="'+t.avatar+'" width="100%" style="border-radius: 50%;text-align: center;">'+t.nikeName+'\n                  \t </div>\n                  \t <div class="el-col el-col-16" style="padding-left: 10px; padding-right: 10px; margin-top: 15px;">\n\t\t\t\t\t'+t.msg+"</div></div>";""!==this.currentObjInfoWindow&&(console.log("关闭上个窗口",this.currentObjInfoWindow.close),this.currentObjInfoWindow.close()),this.currentObjInfoWindow=new google.maps.InfoWindow({content:i}),this.singleMark&&this.singleMark.addListener("click",function(){n.currentObjInfoWindow.open(n.map,n.singleMark)}),this.currentObjInfoWindow.open(this.map,this.singleMark)}},setMarkList:function(t){},markerDragend:function(t){var n={lat:t.latLng.lat(),lng:t.latLng.lng()};this.geocod(n)},geocod:function(t){var n=this;this.geocoder.geocode({location:t},function(e,i){i===google.maps.GeocoderStatus.OK?e[0]?n.setInfoWin(t,e[0].formatted_address):window.alert("No results found"):window.alert("Geocoder failed due to: "+i)})},setInfoWin:function(t,n){var e='<div >\n                                <h3 style="text-align: center">'+this.$t("myMap.position")+"</h3>\n                                <div>"+this.$t("commom.longitude")+":"+t.lng+"</div>\n                                <div>"+this.$t("commom.latitude")+":"+t.lat+"</div>\n                                <div>"+this.$t("commom.addr")+":"+n+"</div>\n                            </div>";this.infoWindow.setContent(e),this.infoWindow.open(this.map,this.marker),this.updatedMarkerInfo({lat:t.lat,lng:t.lng,addr:n})},onMapClick:function(t){}})}},631:function(t,n,e){n=t.exports=e(533)(),n.push([t.i,"\n.search {\n  position: absolute;\n  top: 5px;\n  z-index: 5;\n  width: 60%;\n  margin-left: 20%;\n}\n","",{version:3,sources:["D:/AcoddingFile/codFile/JZD/JISZHOUDAOguanli/sx-chejudo-front/src/pages/components/myMap.vue"],names:[],mappings:";AACA;EACE,mBAAmB;EACnB,SAAS;EACT,WAAW;EACX,WAAW;EACX,iBAAiB;CAClB",file:"myMap.vue",sourcesContent:["\n.search {\n  position: absolute;\n  top: 5px;\n  z-index: 5;\n  width: 60%;\n  margin-left: 20%;\n}\n"],sourceRoot:""}])},633:function(t,n,e){var i=e(631);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(534)("7af23dcc",i,!0)},635:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{position:"relative"}},[t.isShowLocation?e("el-input",{staticClass:"search",attrs:{size:"large",placeholder:t.$t("commom.input")},model:{value:t.input5,callback:function(n){t.input5=n},expression:"input5"}},[e("el-button",{attrs:{icon:"search"},nativeOn:{click:function(n){t.getAddress(n)}},slot:"append"})],1):t._e(),t._v(" "),e("div",{style:{height:t.height+"px"},attrs:{id:t.id}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=53.ae4add8986c2cec04424.js.map