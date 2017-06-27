//test
import * as types  from './type'
import api from '../api'

export const login = ({commit},params) => {
   return  api.login(params).then((res)=>{
       let user ={...res.data.obj.userInfo,roles:res.data.obj.roles,businessType:res.data.obj.businessType,
            busiInfo:res.data.obj.busiInfo}
           commit(types.LOGIN_IN,user)
           commit(types.GET_MENU,res.data.obj.meuAndBtns)
          return res
      })  
}
 
//退出
export const logout = ({commit}, params) => {
  return  api.logout(params).then((res)=>{
      commit(types.LOGIN_IN,null);
     return res ;
    }) 
};

export const getMenu = ({commit},params) =>{
     return api.getMenu(params).then((res)=>{
          commit(types.GET_MENU,res.data.obj)
          return res
      }) 
}

