import axios from 'axios';
import NProgress from 'nprogress'
import * as types from '../vuex/type'
const querystring = require('querystring');
import { Message } from 'element-ui';

axios.interceptors.request.use(function (config) {

    NProgress.start();
    config.headers['accept-language']=localStorage.lang
    return config;
}, function (error) {
    NProgress.done();
    return Promise.reject(error);
});
axios.defaults.withCredentials=true

axios.interceptors.response.use(function (response) {
    NProgress.done();
    return response;
}, function (error) {
    NProgress.done();
    return Promise.reject(error);
});
const baseURL='/chejudo-web/api'
const baseloginUrl='/chejudo-web'

export const getMenu = (data,showMsg) => request({url:baseURL+types.GET_MENU,data,showMsg});
/*登录*/
export const login =  (data,showMsg) =>request({url:baseloginUrl+types.LOGIN_IN,
        data:querystring.stringify(data),
        showMsg,
         config:{
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
                'set-cookie':''
            }
     }});
/*退出*/
export const logout = (data, showMsg) => request({url:baseloginUrl+types.LOGOUT, data, showMsg})

/*通过父Id查询所有下级分类*/
export  const  getAllByParentId= (data,showMsg) =>request({url:baseURL+types.SYSRESOURCES_GETALLBYPARENTID,data,showMsg})
/*通过父Id查询所有下级分类*/
export  const  sysResourcesAdd= (data,showMsg) =>request({url:baseURL+types.SYSRESOURCE_ADD,data,showMsg})

//修改资源
export  const  sysResourcesUpdate=(data,showMsg)=>request({url:baseURL+types.SYSRESOURCE_Update,data,showMsg})
//国际化设置
export  const  localeSet= (data,showMsg) =>request({url:baseURL+types.LOCALE_SET,data,showMsg})

export  const delResources=(data,showMsg)=>request({url:baseURL+types.SYSRESOURCE_DELETE,data,showMsg})
//商家管理

// 店铺管理
export  const  busiinfoPages= (data,showMsg=false) =>request({url:baseURL+types.BUSIINFO_PAGES,data,showMsg})
export  const  busiinfoNoPages= (data,showMsg=false) =>request({url:baseURL+types.BUSIINFO_NOPAGES,data,showMsg})

export  const  busiinfoUpdate= (data,showMsg) =>request({url:baseURL+types.BUSIINFO_UPDATE,data,showMsg},{
            headers: { 'content-type': 'multipart/form-data' }
        })
export  const  busiinfoAdd = (data,showMsg) =>request({url:baseURL+types.BUSIINFO_ADD,data,showMsg},{
            headers: { 'content-type': 'multipart/form-data' }
        })
export  const  busiinfoDelete= (data,showMsg) =>request({url:baseURL+types.BUSIINFO_DELETE,data,showMsg})
export  const  busiinfoDetail= (data,showMsg) =>request({url:baseURL+types.BUSIINFO_DETAIL,data,showMsg})

// 店铺用户
export  const busishopUserPages= (data,showMsg=false) =>request({url:baseURL+types.BUSISHOPUSER_PAGES,data,showMsg})
export  const busishopUserAdd= (data,showMsg) =>request({url:baseURL+types.BUSISHOPUSER_ADD,data,showMsg},{
            headers: { 'content-type': 'multipart/form-data' }
        })
export  const busishopUserUpdate= (data,showMsg) =>request({url:baseURL+types.BUSISHOPUSER_UPDATE,data,showMsg},{
            headers: { 'content-type': 'multipart/form-data' }
        })
export  const busishopUserDelete= (data,showMsg) =>request({url:baseURL+types.BUSISHOPUSER_DELETE,data,showMsg})
export  const busishopUserDetail= (data,showMsg) =>request({url:baseURL+types.BUSISHOPUSER_DETAIL,data,showMsg})
export  const busishopUserCheckByUserName= (data,showMsg) =>request({url:baseURL+types.BUSISHOPUSER_CHECKBYUSERNAME,data,showMsg})

//店铺类型
export  const businessTypeAdd= (data,showMsg) =>request({url:baseURL+types.BUSINESSTYPE_ADD,data,showMsg},{
            headers: { 'content-type': 'multipart/form-data' }
        })
export  const businessTypeUpdate= (data,showMsg) =>request({url:baseURL+types.BUSINESSTYPE_UPDATE,data,showMsg},{
            headers: { 'content-type': 'multipart/form-data' }
        })
export  const businessTypeDelete= (data,showMsg) =>request({url:baseURL+types.BUSINESSTYPE_DELETE,data,showMsg})
export  const businessTypeDetail= (data,showMsg) =>request({url:baseURL+types.BUSINESSTYPE_DETAIL,data,showMsg})
export  const businessTypeGetAll= (data,showMsg) =>request({url:baseURL+types.BUSINESSTYPE_GETALL,data,showMsg})
export  const businessTypePages= (data,showMsg=false) =>request({url:baseURL+types.BUSINESSTYPE_PAGES,data,showMsg})



//店铺点评

export  const busishopCommentPages= (data,showMsg=false) =>request({url:baseURL+types.BUSISHOPCOMMENT_PAGES,data,showMsg})
export  const busishopCommentAdd= (data,showMsg) =>request({url:baseURL+types.BUSISHOPCOMMENT_ADD,data,showMsg})
export  const busishopCommentUpdate= (data,showMsg) =>request({url:baseURL+types.BUSISHOPCOMMENT_UPDATE,data,showMsg})
export  const busishopCommentDelete= (data,showMsg) =>request({url:baseURL+types.BUSISHOPCOMMENT_DELETE,data,showMsg})

//查询角色
export  const  getRoleByPage=(data,showMsg)=>request({url:baseURL+types.SYSROLE_QUERY_PAGE,data,showMsg})
//查询角色详情
export  const  sysRoleGetDetailData=(data,showMsg)=>request({url:baseURL+types.SYSROLE_GET_DETAIL,data,showMsg})
//添加角色
export const sysRoleAdd=(data,showMsg)=>request({url:baseURL+types.SYSROLE_ADD,data,showMsg})
export const sysRoleUpdate=(data,showMsg)=>request({url:baseURL+types.SYSROLE_UPDATE,data,showMsg})
export const sysRoledelete=(data,showMsg)=>request({url:baseURL+types.SYSROLE_DELETE,data,showMsg})
export const sysRoleGetAll=(data,showMsg)=>request({url:baseURL+types.SYSROLE_GET_ALL,data,showMsg})

//查询用户
export const sysUserLoginPage=(data,showMsg)=>request({url:baseURL+types.SYSUSER_LOGIN_PAGE,data,showMsg})
export const sysUserLoginAdd=(data,showMsg)=>request({url:baseURL+types.SYSUSER_LOGIN_ADD,data,showMsg},{
  headers: { 'content-type': 'multipart/form-data' }
})
//重置密码
export const sysuserResetpassworde=(data,showMsg)=>request({url:baseURL+types.SYSUSER_RESETPASSWORDE,data,showMsg})



//引导页
export const appguidPageADD = (data,showMsg) => request({url:baseURL+types.APPGUIDPAGE_ADD,data,showMsg},
        {
            headers: { 'content-type': 'multipart/form-data' }
        })
export const appguidPageDelete = (data,showMsg) => request({url:baseURL+types.APPGUIDPAGE_DELETE,data,showMsg})
export const appguidPageUpdate = (data,showMsg) => request({url:baseURL+types.APPGUIDPAGE_UPDATE,data,showMsg},
        {
            headers: { 'content-type': 'multipart/form-data' }
        })
export const appguidPagePages = (data,showMsg=false) => request({url:baseURL+types.APPGUIDPAGE_PAGES,data,showMsg})
export const appguidPageDetail = (data,showMsg) => request({url:baseURL+types.APPGUIDPAGE_DETAIL,data,showMsg})

//支付账号
export const busiPaymentAccountAdd = (data,showMsg) => request({url:baseURL+types.BUSIPAYMENTACCOUNT_ADD,data,showMsg})
export const busiPaymentAccountDelete = (data,showMsg) => request({url:baseURL+types.BUSIPAYMENTACCOUNT_DELETE,data,showMsg})
export const busiPaymentAccountUpdate = (data,showMsg) => request({url:baseURL+types.BUSIPAYMENTACCOUNT_UPDATE,data,showMsg})
export const busiPaymentAccountDetail = (data,showMsg) => request({url:baseURL+types.BUSIPAYMENTACCOUNT_DETAIL,data,showMsg})
export const busiPaymentAccountPages = (data,showMsg=false) => request({url:baseURL+types.BUSIPAYMENTACCOUNT_PAGES,data,showMsg})

export const sysUserLoginDelete=(data,showMsg)=>request({url:baseURL+types.SYSUSER_LOGIN_DELETE,data,showMsg})
export const sysUserLoginUpdate=(data,showMsg)=>request({url:baseURL+types.SYSUSER_LOGIN_UPDATE,data,showMsg})

//漫画文章
export const articleStoryAdd=(data,showMsg)=>request({url:baseURL+types.ARTICLESTORY_ADD,data,showMsg})
export const articleCartoonAdd=(data,showMsg)=>request({url:baseURL+types.ARTICLECARTOON_ADD,data,showMsg})
export const articleStoryPages=(data,showMsg=false)=>request({url:baseURL+types.ARTICLESTORY_PAGES,data,showMsg})
export const articleCartoonPages=(data,showMsg=false)=>request({url:baseURL+types.ARTICLECARTOON_PAGES,data,showMsg})
export const articleDetail=(data,showMsg)=>request({url:baseURL+types.ARTICLE_DETAIL,data,showMsg})
export const articleDelete=(data,showMsg)=>request({url:baseURL+types.ARTICLE_DELETE,data,showMsg})
export const articlestoryUppic=(data,showMsg)=>request({url:baseURL+types.ARTICLESTORY_UPPIC,data,showMsg})
export const articlecartoonUppic=(data,showMsg)=>request({url:baseURL+types.ARTICLECARTOON_UPPIC,data,showMsg})
export const articlestoryUpdate=(data,showMsg=false)=>request({url:baseURL+types.ARTICLESTORY_UPDATE,data,showMsg})
export const articlecartoonUpdate=(data,showMsg)=>request({url:baseURL+types.ARTICLECARTOON_UPDATE,data,showMsg})
export const apparticleGetareas=(data,showMsg)=>request({url:baseURL+types.APPARTICLE_GETAREAS,data,showMsg})


//区域管理
export const mapareasetPages =(data,showMsg=false)=>request({url:baseURL+types.MAPAREASET_PAGES,data,showMsg})
export const mapareasetDelete =(data,showMsg)=>request({url:baseURL+types.MAPAREASET_DELETE,data,showMsg})
export const mapareasetDetail=(data,showMsg)=>request({url:baseURL+types.MAPAREASET_DETAIL,data,showMsg})
export const mapareasetAdd =(data,showMsg=false)=>request({url:baseURL+types.MAPAREASET_ADD,data,showMsg},
        {
            headers: { 'content-type': 'multipart/form-data' }
        })
export const mapareasetUpdate =(data,showMsg)=>request({url:baseURL+types.MAPAREASET_UPDATE,data,showMsg},
        {
            headers: { 'content-type': 'multipart/form-data' }
        })
export const mapareasetList =(data,showMsg)=>request({url:baseURL+types.MAPAREASET_LIST,data,showMsg})
//字典查询
export const sysDictionAdd =(data,showMsg)=>request({url:baseURL+types.SYSDICTIONARIES_ADD,data,showMsg})
export const sysDictionDelete =(data,showMsg)=>request({url:baseURL+types.SYSDICTIONARIES_DELETE,data,showMsg})
export const sysDictionUpdate =(data,showMsg)=>request({url:baseURL+types.SYSDICTIONARIES_UPDATE,data,showMsg})
export const sysDictionPages =(data,showMsg=false)=>request({url:baseURL+types.SYSDICTIONARIES_PAGES,data,showMsg})
//积分规则
 

//=>商家部分(积分)
export const syspointsetPages =(data,showMsg=false)=>request({url:baseURL+types.SYSPOINTSET_PAGES,data,showMsg})
export const syspointsetNopages = (data,showMsg=false)=>request({url:baseURL+types.SYSPOINTSET_NOPAGES,data,showMsg})
export const syspointsetAdd = (data,showMsg)=>request({url:baseURL+types.SYSPOINTSET_ADD,data,showMsg})
export const syspointsetUpdate =(data,showMsg=false)=>request({url:baseURL+types.SYSPOINTSET_UPDATE,data,showMsg})
export const syspointsetDelete =(data,showMsg)=>request({url:baseURL+types.SYSPOINTSET_DELETE,data,showMsg})
export const syspointsetDetail =(data,showMsg)=>request({url:baseURL+types.SYSPOINTSET_DETAIL,data,showMsg})
export const syspointList =(data,showMsg)=>request({url:baseURL+types.SYSPOINTSET_LIST,data,showMsg})


//公司信息
export const sysCompInfoAdd =(data,showMsg)=>request({url:baseURL+types.SYSCOMPINFO_ADD,data,showMsg})
export const sysCompInfoDetail =(data,showMsg)=>request({url:baseURL+types.SYSCOMPINFO_DETAIL,data,showMsg})
export const sysCompInfoPages =(data,showMsg=false)=>request({url:baseURL+types.SYSCOMPINFO_PAGES,data,showMsg})
export const sysCompInfoUpdate =(data,showMsg=false)=>request({url:baseURL+types.SYSCOMPINFO_UPDATE,data,showMsg})
export const sysCompInfoDelete =(data,showMsg)=>request({url:baseURL+types.SYSCOMPINFO_DELETE,data,showMsg})
 
//=>app管理(用户管理)
export const appuserPages =(data,showMsg=false)=>request({url:baseURL+types.APPUSER_PAGES,data,showMsg})
export const appuserAdd =(data,showMsg)=>request({url:baseURL+types.APPUSER_ADD,data,showMsg},{
            headers: { 'content-type': 'multipart/form-data' }
        })
export const appuserUpdate =(data,showMsg)=>request({url:baseURL+types.APPUSER_UPDATE,data,showMsg},{
            headers: { 'content-type': 'multipart/form-data' }
        })
export const appuserDetail =(data,showMsg)=>request({url:baseURL+types.APPUSER_DETAIL,data,showMsg})
export const appuserDelete =(data,showMsg)=>request({url:baseURL+types.APPUSER_DELETE,data,showMsg})
export const appuserCountrycode =(data,showMsg)=>request({url:baseURL+types.APPUSER_COUNTRYCODE,data,showMsg})

//=>app管理(游戏礼物)
export const gamegiftinfoPages =(data,showMsg=false)=>request({url:baseURL+types.GAMEGIFTINFO_PAGES,data,showMsg})
export const gamegiftinfoAdd =(data,showMsg)=>request({url:baseURL+types.GAMEGIFTINFO_ADD,data,showMsg},{
            headers: { 'content-type': 'multipart/form-data' }
        })
export const gamegiftinfoDelete =(data,showMsg)=>request({url:baseURL+types.GAMEGIFTINFO_DELETE,data,showMsg})
export const gamegiftinfoDetail =(data,showMsg)=>request({url:baseURL+types.GAMEGIFTINFO_DETAIL,data,showMsg})
export const gamegiftinfoUpdate =(data,showMsg)=>request({url:baseURL+types.GAMEGIFTINFO_UPDATE,data,showMsg},{
            headers: { 'content-type': 'multipart/form-data' }
        })
export const gamegiftinfoNopages =(data,showMsg=false)=>request({url:baseURL+types.GAMEGIFTINFO_NOPAGES,data,showMsg})

//=>(商品)
export const busiitemPages =(data,showMsg=false)=>request({url:baseURL+types.BUSIITEM_PAGES,data,showMsg})
export const busiitemAdd =(data,showMsg)=>request({url:baseURL+types.BUSIITEM_ADD,data,showMsg},
		{
            headers: { 'content-type': 'multipart/form-data' }
        })
export const busiitemDelete =(data,showMsg)=>request({url:baseURL+types.BUSIITEM_DELETE,data,showMsg})
export const busiitemDeleted =(data,showMsg)=>request({url:baseURL+types.BUSIITEM_DELETED,data,showMsg})
export const busiitemDetail =(data,showMsg)=>request({url:baseURL+types.BUSIITEM_DETAIL,data,showMsg})
export const busiitemUpdate =(data,showMsg)=>request({url:baseURL+types.BUSIITEM_UPDATE,data,showMsg},
		{
            headers: { 'content-type': 'multipart/form-data' }
        })



//=>区域(区域游戏任务)
//分页查询
export const areagametaskPages =(data,showMsg=false)=>request({url:baseURL+types.AREAGAMETASK_PAGES,data,showMsg})
export const areagametaskAdd =(data,showMsg)=>request({url:baseURL+types.AREAGAMETASK_ADD,data,showMsg})
export const areagametaskDelete =(data,showMsg)=>request({url:baseURL+types.AREAGAMETASK_DELETE,data,showMsg})
export const areagametaskDetail =(data,showMsg)=>request({url:baseURL+types.AREAGAMETASK_DETAIL,data,showMsg})
export const areagametaskUpdate =(data,showMsg)=>request({url:baseURL+types.AREAGAMETASK_UPDATE,data,showMsg})
export const areagametaskNopages =(data,showMsg=false)=>request({url:baseURL+types.AREAGAMETASK_NOPAGES,data,showMsg})

//=>(分页查询商家轮播图片)
export const busibannerPages =(data,showMsg=false)=>request({url:baseURL+types.BUSIBANNER_PAGES,data,showMsg})
export const busibannerAdd =(data,showMsg)=>request({url:baseURL+types.BUSIBANNER_ADD,data,showMsg})
export const busibannerDelete =(data,showMsg)=>request({url:baseURL+types.BUSIBANNER_DELETE,data,showMsg})
export const busibannerDetail =(data,showMsg)=>request({url:baseURL+types.BUSIBANNER_DETAIL,data,showMsg})
export const busibannerUpdate =(data,showMsg)=>request({url:baseURL+types.BUSIBANNER_UPDATE,data,showMsg})

//=>区域(区域游戏提醒)
//分页查询
export const gametaskremindPages =(data,showMsg=false)=>request({url:baseURL+types.GAMETASKREMIND_PAGES,data,showMsg})
export const gametaskremindAdd =(data,showMsg)=>request({url:baseURL+types.GAMETASKREMIND_ADD,data,showMsg})
export const gametaskremindDelete =(data,showMsg)=>request({url:baseURL+types.GAMETASKREMIND_DELETE,data,showMsg})
export const gametaskremindDetail =(data,showMsg)=>request({url:baseURL+types.GAMETASKREMIND_DETAIL,data,showMsg})
export const gametaskremindUpdate =(data,showMsg)=>request({url:baseURL+types.GAMETASKREMIND_UPDATE,data,showMsg})


//=>系统(消息模板)
//分页查询
export const msgtemplatePages =(data,showMsg=false)=>request({url:baseURL+types.MSGTEMPLATE_PAGES,data,showMsg})
export const msgtemplateAdd =(data,showMsg)=>request({url:baseURL+types.MSGTEMPLATE_ADD,data,showMsg})
export const msgtemplateDelete =(data,showMsg)=>request({url:baseURL+types.MSGTEMPLATE_DELETE,data,showMsg})
export const msgtemplateDetail =(data,showMsg)=>request({url:baseURL+types.MSGTEMPLATE_DETAIL,data,showMsg})
export const msgtemplateUpdate =(data,showMsg)=>request({url:baseURL+types.MSGTEMPLATE_UPDATE,data,showMsg})
export const msgtemplateMsg =(data,showMsg)=>request({url:baseURL+types.MSGTEMPLATE_MSG,data,showMsg})

//对账单
export const userorderPages =(data,showMsg=false)=>request({url:baseURL+types.USERORDER_PAGES,data,showMsg})//dictType
export const setisverificationUpdate =(data,showMsg)=>request({url:baseURL+types.SETISVERIFICATION_UPDATE,data,showMsg})//dictType

//礼物核销
export const checkgiftadd =(data,showMsg)=>request({url:baseURL+types.CHECKGIFT_ADD,data,showMsg})
export const giftlistpages =(data,showMsg=false)=>request({url:baseURL+types.GIFTLIST_PAGES,data,showMsg})

//核销
export const userorderNoexchange =(data,showMsg)=>request({url:baseURL+types.USERORDER_NOEXCHANGE,data,showMsg})
export const userorderBusishoporder =(data,showMsg)=>request({url:baseURL+types.USERORDER_BUSISHOPORDER,data,showMsg})
export const usergiftrecordAdd =(data,showMsg)=>request({url:baseURL+types.USERGIFTRECORD_ADD,data,showMsg})
export const usergiftrecordPages =(data,showMsg=false)=>request({url:baseURL+types.USERGIFTRECORD_PAGES,data,showMsg})
export const usergiftrecordExchange =(data,showMsg)=>request({url:baseURL+types.USERGIFTRECORD_EXCHANGE,data,showMsg})

//通知内容
export const msgcontentPages =(data,showMsg=false)=>request({url:baseURL+types.MSGCONTENT_PAGES,data,showMsg})
export const msgcontentAdd =(data,showMsg)=>request({url:baseURL+types.MSGCONTENT_ADD,data,showMsg})
export const msgcontentDelete =(data,showMsg)=>request({url:baseURL+types.MSGCONTENT_DELETE,data,showMsg})
export const msgcontentDetail =(data,showMsg)=>request({url:baseURL+types.MSGCONTENT_DETAIL,data,showMsg})
export const msgcontentUpdate =(data,showMsg)=>request({url:baseURL+types.MSGCONTENT_UPDATE,data,showMsg})

//系统通知
export const msgsystemnoticePages =(data,showMsg=false)=>request({url:baseURL+types.MSGSYSTEMNOTICE_PAGES,data,showMsg})
export const msgsystemnoticeAdd =(data,showMsg)=>request({url:baseURL+types.MSGSYSTEMNOTICE_ADD,data,showMsg})
export const msgsystemnoticeDelete =(data,showMsg)=>request({url:baseURL+types.MSGSYSTEMNOTICE_DELETE,data,showMsg})
export const msgsystemnoticeDetail =(data,showMsg)=>request({url:baseURL+types.MSGSYSTEMNOTICE_DETAIL,data,showMsg})
export const msgsystemnoticeUpdate =(data,showMsg)=>request({url:baseURL+types.MSGSYSTEMNOTICE_UPDATE,data,showMsg})
export const msgsystemnoticeUploadimage =(data,showMsg)=>request({url:baseURL+types.MSGSYSTEMNOTICE_UPLOADIMAGE,data,showMsg})



//获取字典
export const sysdictionariesGetbytype =(data,showMsg)=>request({url:baseURL+types.SYSDICTIONARIES_GETBYTYPE,data,showMsg})//dictType
export const sysdictionariesGetbycode =(data,showMsg)=>request({url:baseURL+types.SYSDICTIONARIES_GETBYCODE,data,showMsg})//dictCode

let date=null;
function isBeoverdue(){
    if(date && new Date().getTime()-date>30*60*1000) return true
    date=new Date().getTime();
    return false
}

function request( { url = '', data={} , showMsg = true, method='post',config={} } ){
    return new Promise((resolve,reject)=>{
            if(isBeoverdue()){
                sessionStorage.clear();
                window.location.reload()
                return
            }
         axios[method](url,data,config)
         .then((res)=>{
            if(res.statusText==='OK'&&res.data){
                if(!res.data.result){
                    if(res.data.description){
                        showMsg&&Message.warning(res.data.description)
                    }
                     reject({errmsg:res.data.description,errTpye:'RESULT',errorCode:res.data.errorCode})
                }else{
                    if(res.data.description){
                        showMsg&&Message.success(res.data.description)
                    }
                     resolve(res)
                }
            } else{
                 Message.error(res.statusText);
                reject({errmsg:res.statusText,errTpye:'STATUS'})
            }
        }).catch((err)=>{
             Message.error(err.message);
             reject({errTpye:'ERROR',errmsg:err.message})
        })
    })
}
