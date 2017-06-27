/**
 * Created by hanxu on 2017/2/17.
 */
 
export const CHANGE_SIZE='CHANGE_SIZE'
export const CLEAR_USER='CLEAR_USER'
export const GET_MENU='/sysResource/getMenuAndBtn'
export const LOGIN_IN='/login'
export const LOGOUT = "/logout"
export const LOCALE_SET='/locale/set'//设置语言
export const BUSIINFO_PAGES= '/busiInfo/pages' //查询所有商家(分页)
export const BUSIINFO_NOPAGES= '/busiInfo/getBusiInfoList' //查询所有商家(不分页)

export const BUSIINFO_ADD= '/busiInfo/add' //添加商家
export const BUSIINFO_UPDATE= '/busiInfo/update' //修改商家
export const BUSIINFO_DELETE= '/busiInfo/delete' //删除商家
export const BUSIINFO_DETAIL= '/busiInfo/detail' //商家详情
export const BUSIINFO_UPLOADIMAGE= '/chejudo-web/api/busiInfo/uploadImage' //图片上传路径

export const BUSISHOPUSER_PAGES= '/busiShopUser/pages' //查询本店铺所有用户(分页)
export const BUSISHOPUSER_ADD= '/busiShopUser/add' //添加本店铺用户
export const BUSISHOPUSER_UPDATE= '/busiShopUser/update' //修改本店铺用户
export const BUSISHOPUSER_DELETE= '/busiShopUser/delete' //删除本店铺用户
export const BUSISHOPUSER_DETAIL= '/busiShopUser/detail' //查询用户详情
export const BUSISHOPUSER_CHECKBYUSERNAME='/busiShopUser/checkByUserName'//验证用户名是否存在

export const BUSINESSTYPE_ADD= '/businessType/add' //添加店铺类型
export const BUSINESSTYPE_UPDATE= '/businessType/update' //修改店铺类型
export const BUSINESSTYPE_DELETE= '/businessType/delete' //删除店铺类型
export const BUSINESSTYPE_DETAIL= '/businessType/detail' //店铺类型详情
export const BUSINESSTYPE_GETALL='/businessType/getAll'//所有店铺类型详情
export const BUSINESSTYPE_PAGES='businessType/pages'//店铺类型列表

export const BUSISHOPCOMMENT_PAGES= '/busiShopComment/pages' //查询本店铺点评
export const BUSISHOPCOMMENT_ADD= '/busiShopComment/add' //添加点评
export const BUSISHOPCOMMENT_UPDATE= '/busiShopComment/update' //修改点评
export const BUSISHOPCOMMENT_DELETE= '/busiShopComment/delete' //删除点评
export const GETALL_BY_PARENTID='/sysResource/getAllByParentId' //通过parentid查询下级资源
export const SYSRESOURCES_GETALLBYPARENTID='/sysResource/getAllByParentId' //通过parentid查询下级资源

export const SYSRESOURCE_ADD='/sysResource/add';//添加资源
export const SYSRESOURCE_Update='/sysResource/update';//修改资源
export const SYSRESOURCE_DELETE='/sysResource/delete';//修改资源

export const SYSROLE_QUERY_PAGE='/sysRoles/pages';//分页查询角色
export const SYSROLE_GET_DETAIL='/sysRoles/getById';//通过Id查询角色
export const SYSROLE_ADD='/sysRoles/add';//添加角色
export const SYSROLE_UPDATE='/sysRoles/update';//修改角色
export const SYSROLE_DELETE='/sysRoles/delete';//删除角色
export const SYSROLE_GET_ALL='/sysRoles/getAll';//不分页查询角色


export const SYSUSER_LOGIN_PAGE="/sysUsersLogin/pages"  //查询用户
export const SYSUSER_LOGIN_ADD="/sysUsersLogin/add"  //添加用户
export const SYSUSER_LOGIN_DELETE="/sysUsersLogin/delete"  //删除用户
export const SYSUSER_LOGIN_UPDATE="/sysUsersLogin/update"  //修改用户
export const SYSUSER_RESETPASSWORDE="/sysUsersLogin/resetPassword"  //修改用户


//引导页
export const  APPGUIDPAGE_ADD = '/appGuidPage/add'
export const  APPGUIDPAGE_UPDATE = '/appGuidPage/update'
export const  APPGUIDPAGE_DELETE = '/appGuidPage/delete'
export const  APPGUIDPAGE_PAGES = '/appGuidPage/getAll'
export const  APPGUIDPAGE_DETAIL = '/appGuidPage/detail'

//商家支付账号管理
export const  BUSIPAYMENTACCOUNT_ADD = '/busiPaymentAccount/add'
export const  BUSIPAYMENTACCOUNT_UPDATE = '/busiPaymentAccount/update'
export const  BUSIPAYMENTACCOUNT_DETAIL = '/busiPaymentAccount/detail'
export const  BUSIPAYMENTACCOUNT_DELETE = '/busiPaymentAccount/delete'
export const  BUSIPAYMENTACCOUNT_PAGES = '/busiPaymentAccount/pages'
 
//用户信息
export const USERINFO_REGIST = '/userinfo/regist'
export const USERINFO_USERLOGIN = '/userinfo/userLogin'
export const USERINFO_DETAIL = '/userinfo/detail'
export const USERINFO_UPDATE = '/userinfo/update'
export const USERINFO_CHANGEPASSWD = '/userinfo/changepasswd'
export const USERINFO_FOGETPASSWD = '/userinfo/fogetpasswd'

//=>区域部分（文章漫画）
//添加故事
export const  ARTICLESTORY_ADD = '/appArticle/story/add'
//添加漫画
export const  ARTICLECARTOON_ADD = '/appArticle/cartoon/add'
//分页查询故事
export const  ARTICLESTORY_PAGES = '/appArticle/story/pages'
//分页查询漫画
export const  ARTICLECARTOON_PAGES = '/appArticle/cartoon/pages'
//查询故事漫画详情
export const  ARTICLE_DETAIL = '/appArticle/detail'
//删除故事漫画
export const  ARTICLE_DELETE = '/appArticle/delete'
//故事上传文件
export const  ARTICLESTORY_UPPIC = '/chejudo-web/api/appArticle/story/upPic'
//漫画上传文件
export const  ARTICLECARTOON_UPPIC = '/chejudo-web/api/appArticle/cartoon/upPic'
//修改故事
export const  ARTICLESTORY_UPDATE = '/appArticle/story/updateStory'
//修改漫画
export const  ARTICLECARTOON_UPDATE = '/appArticle/cartoon/updateCartoon' 

//区域查询
export const  APPARTICLE_GETAREAS = '/appArticle/getAreas' 

//区域管理

export const MAPAREASET_PAGES = '/mapAreaSet/pages'
export const MAPAREASET_DETAIL = '/mapAreaSet/detail'
export const MAPAREASET_DELETE = '/mapAreaSet/delete'
export const MAPAREASET_UPDATE = '/mapAreaSet/update'
export const MAPAREASET_ADD = '/mapAreaSet/add' 
export const MAPAREASET_LIST =  '/mapAreaSet/getMapAreaSetList'
//字典管理
export const SYSDICTIONARIES_PAGES ='/sysDictionaries/pages'
export const SYSDICTIONARIES_ADD ='/sysDictionaries/add'
export const SYSDICTIONARIES_DELETE ='/sysDictionaries/delete'
export const SYSDICTIONARIES_UPDATE ='/sysDictionaries/update'

//积分规则

export const SYSPOINTSET_LIST = '/sysPointSet/getSysPointSetList' 

//=>商家部分(积分)
//分页查询积分规则
export const SYSPOINTSET_PAGES = '/sysPointSet/pages' 
//查询所有积分规则（不分页）
export const SYSPOINTSET_NOPAGES = '/sysPointSet/getSysPointSetList' 
//添加积分规则
export const SYSPOINTSET_ADD = '/sysPointSet/add' 
//修改积分规则
export const SYSPOINTSET_UPDATE = '/sysPointSet/update' 
//删除积分规则
export const SYSPOINTSET_DELETE = '/sysPointSet/delete' 
//查看积分规则详情
export const SYSPOINTSET_DETAIL = '/sysPointSet/detail' 

 
 
//公司信息
export const SYSCOMPINFO_PAGES ='/sysCompInfo/pages'
export const SYSCOMPINFO_ADD ='/sysCompInfo/add'
export const SYSCOMPINFO_UPDATE ='/sysCompInfo/update'
export const SYSCOMPINFO_DELETE ='/sysCompInfo/delete'
export const SYSCOMPINFO_DETAIL ='/sysCompInfo/detail' 
//=>app管理(用户管理)
//分页查询
export const APPUSER_PAGES = '/appuser/pages' 
//添加用户
export const APPUSER_ADD = '/appuser/add' 
//修改用户
export const APPUSER_UPDATE = '/appuser/update' 
//查询单个用户详情
export const APPUSER_DETAIL = '/appuser/detail' 
//删除用户
export const APPUSER_DELETE = '/appuser/delete' 
// 国家代码查询.
export const APPUSER_COUNTRYCODE = '/appuser/getAllCountryCode' 

//=>app管理(游戏礼物)
//分页查询
export const GAMEGIFTINFO_PAGES = '/gameGiftInfo/pages' 
//新增
export const GAMEGIFTINFO_ADD = '/gameGiftInfo/add' 
//删除礼物
export const GAMEGIFTINFO_DELETE = '/gameGiftInfo/delete' 
//礼物详情
export const GAMEGIFTINFO_DETAIL = '/gameGiftInfo/detail' 
//修改
export const GAMEGIFTINFO_UPDATE = '/gameGiftInfo/update' 
export const GAMEGIFTINFO_NOPAGES = '/gameGiftInfo/getGameGiftInfoList' 



//=>(商品)
//分页查询
export const BUSIITEM_PAGES = '/busiItem/pages/normal' 
//新增商品
export const BUSIITEM_ADD = '/busiItem/add' 
//删除礼物
export const BUSIITEM_DELETE = '/busiItem/delete'
//已经删除礼物
export const BUSIITEM_DELETED = '/busiItem/pages/deleted'
//礼物详情
export const BUSIITEM_DETAIL = '/busiItem/detail' 
//修改
export const BUSIITEM_UPDATE = '/busiItem/update' 

//=>区域(区域游戏任务)
//分页查询
export const AREAGAMETASK_PAGES = '/areaGameTask/pages' 
//新增任务
export const AREAGAMETASK_ADD = '/areaGameTask/add' 
//删除任务
export const AREAGAMETASK_DELETE = '/areaGameTask/delete'
//任务详情
export const AREAGAMETASK_DETAIL = '/areaGameTask/detail' 
//修改
export const AREAGAMETASK_UPDATE = '/areaGameTask/update'
//图片上传
export const AREAGAMETASK_UPLOADIMAGE = '/chejudo-web/api/areaGameTask/uploadImage'
export const AREAGAMETASK_NOPAGES = '/areaGameTask/getAreaGameTaskList'

//=>区域(分页查询商家轮播图片)
//分页查询
export const BUSIBANNER_PAGES = '/busiBanner/pages' 
//新增任务
export const BUSIBANNER_ADD = '/busiBanner/add' 
//删除任务
export const BUSIBANNER_DELETE = '/busiBanner/delete'
//任务详情
export const BUSIBANNER_DETAIL = '/busiBanner/detail' 
//修改
export const BUSIBANNER_UPDATE = '/busiBanner/update'

//=>区域(区域游戏提醒)
//分页查询
export const GAMETASKREMIND_PAGES = '/gameTaskRemind/pages' 
//新增
export const GAMETASKREMIND_ADD = '/gameTaskRemind/add' 
//删除
export const GAMETASKREMIND_DELETE = '/gameTaskRemind/delete'
//详情
export const GAMETASKREMIND_DETAIL = '/gameTaskRemind/detail' 
//修改
export const GAMETASKREMIND_UPDATE = '/gameTaskRemind/update'

//=>系统(消息模板)
//分页查询
export const MSGTEMPLATE_PAGES = '/msgTemplate/pages' 
//新增
export const MSGTEMPLATE_ADD = '/msgTemplate/add' 
//删除
export const MSGTEMPLATE_DELETE = '/msgTemplate/delete'
//详情
export const MSGTEMPLATE_DETAIL = '/msgTemplate/detail' 
//修改
export const MSGTEMPLATE_UPDATE = '/msgTemplate/update'
//返回信息
export const MSGTEMPLATE_MSG = '/msgTemplate/getMsg'

//对账单
export const USERORDER_PAGES = '/userOrder/pages'
export const SETISVERIFICATION_UPDATE = '/userOrder/setIsVerification'

//礼物核销
export const CHECKGIFT_ADD ='/userGiftRecord/add'
export const GIFTLIST_PAGES ='/userGiftRecord/pages'

//核销
//订单列表
export const USERORDER_NOEXCHANGE ='/userOrder/noExchange'
//待核销订单列表
export const USERORDER_BUSISHOPORDER ='/userOrder/busiShopOrder'
//游戏礼物核销
export const USERGIFTRECORD_ADD ='/userGiftRecord/add'
//核销礼物记录
export const USERGIFTRECORD_PAGES ='/userGiftRecord/pages'
//门票兑换
export const USERGIFTRECORD_EXCHANGE ='/userOrder/exchange'

//通知内容
//分页查询
export const MSGCONTENT_PAGES = '/msgContent/pages' 
//新增
export const MSGCONTENT_ADD = '/msgContent/add' 
//删除
export const MSGCONTENT_DELETE = '/msgContent/delete'
//详情
export const MSGCONTENT_DETAIL = '/msgContent/detail' 
//修改
export const MSGCONTENT_UPDATE = '/msgContent/update'

//系统通知
//分页查询
export const MSGSYSTEMNOTICE_PAGES = '/msgSystemNotice/pages' 
//新增
export const MSGSYSTEMNOTICE_ADD = '/msgSystemNotice/add' 
//删除
export const MSGSYSTEMNOTICE_DELETE = '/msgSystemNotice/delete'
//详情
export const MSGSYSTEMNOTICE_DETAIL = '/msgSystemNotice/detail' 
//修改
export const MSGSYSTEMNOTICE_UPDATE = '/msgSystemNotice/update'
export const MSGSYSTEMNOTICE_UPLOADIMAGE = '/chejudo-web/api/msgSystemNotice/uploadImage'



//获取字典
export const SYSDICTIONARIES_GETBYTYPE = '/sysDictionaries/getbyType' //dictType
export const SYSDICTIONARIES_GETBYCODE = '/sysDictionaries/getbyCode' //dictCode

 



