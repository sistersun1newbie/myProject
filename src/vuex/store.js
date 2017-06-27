import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as types from './type'

import layout from './module/layout'
import sysResource from './module/sysResource'
import business from './module/business'
import sysRole from "./module/sysRole"
import sysUserLogin from "./module/sysUserLogin"
import chatlist from "./module/chatlist"
Vue.use(Vuex)
let user =null;
if(sessionStorage.getItem('user')){
    user=JSON.parse(sessionStorage.getItem('user'))
}
 
// 应用初始状态
const state = {
    menuList:[],
    user:user,
    showMap:false,
    mapKey:'AIzaSyBbloFO2HTS8hmVRoEuD91gydD7dsGRRNQ',
    mapCenter:{
        lat: 33.395457899680636,
        lng: 126.56532168388367,
        addr:'',
    },
    markerInfo:null,
}

// 定义所需的 mutations
const mutations = {
  [types.LOGIN_IN](state,user=null){
       state.user=user;
       if(user){
            sessionStorage.setItem('user',JSON.stringify(user))
       }else{
           sessionStorage.removeItem('user')
       }
  },

  [types.GET_MENU](state,menuList){
    state.menuList=menuList
 },
 updatedShowMap(state,flag) {
     state.showMap=flag
 },

 updatedMarkerInfo(state,markerInfo){
    state.markerInfo=markerInfo
 },
}
// 创建 store 实例
export default new Vuex.Store({
    modules: {
        layout,
        sysResource,
        business,
        sysRole,
      sysUserLogin,
      chatlist,
    },
    actions,
    getters,
    state,
    mutations
})
