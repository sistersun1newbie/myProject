/**
 * Created by hanxu on 2017/2/17.
 */
import * as types  from '../type'
export default {
    state:{
        containerSize:{
            height:'',
            width:'',
            themeColor:{
                header:'#20A0FF',
                sidebar:'',
                bottomebar:'transparent'
            }
        }
    },
    mutations:{
        [types.CHANGE_SIZE](state,size){
          Object.assign(state.containerSize,size)
        }
    },
    actions:{
        changeContainerSize({commit},size){
            commit(types.CHANGE_SIZE,size)
        }
    },
    getters:{
        windowWidth : state => state.containerSize.width,
        windowHeight: state => state.containerSize.height,
        isMobile : state =>state.containerSize.width<768,
        themeColor:state=>state.containerSize.themeColor
    }
}
