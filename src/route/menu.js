import {layzLoading} from './layzLoading'
export let menus  =  [
    {
      path: '/',
      component: layzLoading('Home'),
      meta:{
        title:'commom.mainpage',
      },
      children: [{
        path:'/',
        name:'firstPage',
        component:layzLoading('firstPage')
      }]
  },{
    path: '*',
    redirect: { path: '/404' }
  }
]

 