   import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import ElementUI from 'element-ui'
import VueI18n from 'vue-i18n'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.min.css'
import 'nprogress/nprogress.css'
import routes from './route'
import App from './App'
import store from './vuex/store'
import language from './Language'
import VueSocketio from 'plugin/socket';
import {socketConf} from 'api/config';
import mixin from './util/mixin';
Vue.use(VueSocketio, socketConf, store);
//拖拽弹窗
 Vue.mixin(mixin)
Vue.use(VueI18n)
Vue.use(ElementUI)
Vue.use(VueRouter)
let locale = navigator.language||navigator.browserLanguage;

Object.keys(language).forEach(function (lang) {
  Vue.locale(lang, language[lang])
  if(locale.indexOf(lang)>-1){
    Vue.config.lang =lang;
  }
})
if(localStorage.lang){
    Vue.config.lang =localStorage.lang
}else{
  localStorage.lang='zh'
  Vue.config.fallbackLang = 'zh';
}
 
// NProgress.configure({ showSpinner: false });
const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
      NProgress.start();
   	Object.assign(to.meta, to.params, to.query);
  if(to.path == '/login'&&store.state.user) {
      NProgress.done();
      next('/')
  }else if(!store.state.user&& to.path != '/login') {
      next('/login')
  } else{
      next()
  }
})

router.afterEach(from => {
  NProgress.done();
});
//浏览器title

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

let listener=[]
window.onMapReady=function(fn){
  if(typeof fn === 'function'){
     if(typeof google !=='undefined'){
          fn(google.maps)
      }else{
         listener.push(fn)
      }
  }else{
    throw Error(`${fn} is not a function`)
  }
}

window.initMap=function(){
  if(listener){
    listener.forEach((fn)=>{
       fn(google.maps)
    })
  }
    listener=null;
}






  
  
  
 
