/**
 * Created by hanxu on 2017/2/17.
 */
 
import  api from 'api'
export default {
  state:{
  	socketFlag:false,
  	 chatList:[],
  	 chatLocationList:[],
  	 userListObj:[],
    chatObj:{},
    userObj:{}
  },
  mutations:{
  	updatesocketFlag(state,flag=false){
        state.socketFlag=flag
     },
     updatechatObj(state,chatObj=null){
        state.chatObj=chatObj
     },
     updatemsgAmount(state,msgAmount){
        state.msgAmount=msgAmount
     },
     //消息
     SOCKET_3(state,msg){
        if(!msg.type)  msg.type='client'
        state.chatList.push(msg)
    },
    clearMsg(state,msg){
        state.chatList=msg
    },
     //地理位置
    SOCKET_4(state,chart){
        if(!chart.type)  chart.type='server'
        state.chatLocationList.push(chart)
    },
     //等待列表
    SOCKET_30(state,obj){
//      if(!chart.type)  chart.type='server'
		if(obj.msgType==30){
			state.userListObj=obj.ext
		}
    },
     //等待分配对象
    SOCKET_2(state,obj){
    	console.log('SOCKET_2  ',obj)
    	if(obj.msgType==2){
			state.userObj=obj.ext||{}
		}
    },
  },
  actions:{},
}

