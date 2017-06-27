import {layzLoading} from './layzLoading'
export default  [
  {
    path: '/login',
    component: layzLoading('Login'),
    name: 'login',
 
  },
   {
    path: '/noAuthority',
    component: layzLoading('noAuthority'),
    name: 'noAuthority',
    
  },
  {
    path: '/404',
    component: layzLoading('404'),
    name: '404',
 
  },
];

 