/**
 * Created by hanxu on 2017/2/17.
 */
import * as types  from '../type'
import  api from 'api'
export default {
  state:{
    tableDate:{},
    sysRole:{}
  },
  mutations:{
    [types.SYSROLE_QUERY_PAGE](state,tableDate){
      state.tableDate=tableDate;
    },
    [types.SYSROLE_GET_DETAIL](state,sysRole){
      state.sysRole=sysRole;
    },
  },
  actions:{
    getRoleByPage({commit,state}, params) {
      return new Promise((resolve,reject)=> {
        api.getRoleByPage(params,false).then(
          (res) => {
            commit(types.SYSROLE_QUERY_PAGE,res.data.obj)
            resolve(res)
          }
        ).catch(err=>{
          reject(err)
        })
      })
    },
    sysRoleAdd({commit,state}, params) {
      return new Promise((resolve,reject)=> {
        api.sysRoleAdd(params,true).then(
          (res) => {
          //  commit(types.SYSROLE_ADD,res.data.obj)
            resolve(res)
          }
        ).catch(err=>{
          reject(err)
        })
      })
    },
    sysRoledelete({commit,state}, params) {
      return new Promise((resolve,reject)=> {
        api.sysRoledelete(params,true).then(
          (res) => {
          //  commit(types.SYSROLE_ADD,res.data.obj)
            resolve(res)
          }
        ).catch(err=>{
          reject(err)
        })
      })
    }
  }
}
