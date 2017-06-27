/**
 * Created by shuxunit on 2017/2/20.
 */
export const  layzLoading = path => ()=> import(`pages/${path}.vue`)

export const  getRouters = (menu=[],routers=[])=>{
      for(let i=0;i<menu.length;i++){
        let item=menu[i]
        if(item.component){
        	
          item.component = layzLoading(item.component)
           routers.push(item)
        }
        if(item.children){
          getRouters(item.children,routers)
        }
      }
      return routers
  }
function userSocket(path){
	if(path=='sidemenu/customerService/service'){
		
	}
}
