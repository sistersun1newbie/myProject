/**
 * Created by hanxu on 2017/2/17.
 */
import * as types  from '../type'
import  api from 'api'
export default {
  state:{
    resources:[],
  },
  mutations:{
    [types.SYSRESOURCES_GETALLBYPARENTID](state,resources){
      state.resources=resources;
    },
  },
  actions:{
    getAllByParentId({commit,state}, params,showMsg) {
   
    return  api.getAllByParentId(params,false).then(
          (res) => {
              commit(types.SYSRESOURCES_GETALLBYPARENTID,res.data.obj)
              return res.data.obj
          }
        ).catch(err=>{
         return err
        })
      
    },
    /*添加资源*/
    addResources({commit,state}, params){
      return   api.sysResourcesAdd(params).then(
          (res) => {
            return res
          }
        ).catch(err=>{
          return err
        })
     
    },
    updateResources({commit,state}, params){
      return   api.sysResourcesUpdate(params).then(
          (res) => {
            return res
          }
        ).catch(err=>{
           return err
        })
      
    },
    delResources({commit,state}, params){
       
      return  api.delResources(params).then(
          (res) => {
           return res
          }
        ).catch(err=>{
          return err
        })
     
    }
  }
}

