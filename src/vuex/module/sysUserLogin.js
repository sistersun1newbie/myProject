/**
 * Created by hanxu on 2017/2/17.
 */
import * as types  from '../type'
import  api from 'api'
export default {
  state:{
    sysUserLogins:{}
  },
  mutations:{
    [types.SYSUSER_LOGIN_PAGE](state,tableDate){
      state.sysUserLogins=tableDate;
    }
  },
  actions:{
    sysUserLoginPage({commit,state}, params) {
      return new Promise((resolve,reject)=> {
        api.sysUserLoginPage(params,false).then(
          (res) => {
            commit(types.SYSUSER_LOGIN_PAGE,res.data.obj)
            resolve(res)
          }
        ).catch(err=>{
          reject(err)
        })
      })
    }
  }
}
