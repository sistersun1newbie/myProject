/**
 * Created by hanxu on 2017/2/17.
 */
import * as types  from '../type'
import  api from 'api'
export default {
  state:{
    shopData:{data:[]},
    typeData:[],
    commentData:{data:[]},
    shopUsers:[],
  },
  mutations:{
     [types.BUSIINFO_PAGES](state,shopData){
        state.shopData=shopData
     },
     [types.BUSISHOPUSER_PAGES](state,shopUsers){
        state.shopUsers=shopUsers
     },
     [types.BUSISHOPCOMMENT_PAGES](state,commentData){
        state.commentData=commentData
     },
      [types.BUSINESSTYPE_GETALL](state,typeData){
        state.typeData=typeData
     },
  },
  actions:{
        busiinfoPages({ commit,state },params){
            api.busiinfoPages(params,false).then(({data})=>{
                commit(types.BUSIINFO_PAGES,data.obj)
            })
        },
        busishopUserPages({ commit,state },params){
            api.busishopUserPages(params,false).then(({data})=>{
                commit(types.BUSISHOPUSER_PAGES,data.obj)
            })
        },
        busishopCommentPages({ commit,state },params){
            api.busishopCommentPages(params).then(({data})=>{
                commit(types.BUSISHOPCOMMENT_PAGES,data.obj)
            })
        },
        businessTypeGetAll({ commit,state },params){
            api.businessTypeGetAll(params,false).then(({data})=>{
                commit(types.BUSINESSTYPE_GETALL,data.obj)
            })
        }
  },
}

