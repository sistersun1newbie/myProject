<template>
	<div id="app">
		<router-view ></router-view>
	</div>
</template>

<script>
  import {getRouters} from './route/layzLoading'
  import { mapActions, mapState } from 'vuex'
  	import {logout} from 'api/api'

  import { menus } from './route/menu'
	export default {
		name: 'app',
		watch: {
			menuList(routes){
				this.init(routes)
			},
			$route(){
				if(this.menuList.length==0&&this.$route.name!=='login'&&this.user){
					 this.$router.replace('/noAuthority')
				}
			},
			user(newUser,oldUser){
				if(newUser&&!oldUser&&this.menuList.length===0){
					this.getMenu()
				}
			}
		},
	 
		created () {
			const handler = () => {
				this.changeContainerSize({
					width: document.documentElement.clientWidth,
					height: document.documentElement.clientHeight
				})
			}
			handler()
			window.addEventListener('resize', handler)
			if(this.user){
				this.getMenu()
			}
			document.addEventListener('plusready',()=>{
				plus.key.addEventListener('backbutton',()=>{
					if(this.$route.path==='/'||this.$route.path==='/login'){
						plus.runtime.quit();
					}else{
						this.$router.back()
					}
				})
			})
		},
	 
		methods: {
			...mapActions([
				'changeContainerSize',
				'getMenu'
			]),
			init(routes){
				if(routes.length>0){
					menus[0].children=[...menus[0].children,...getRouters(routes)]
					this.$router.addRoutes(menus)
				}
			},
			exit(){
				logout({}, true).then((res)=>{
					sessionStorage.clear();
					window.location.reload();
				});
			}
		},
		 computed: {
			...mapState([
				'menuList',
				'user'
				
			])
		},
	}

</script>

<style >
	body {
		margin: 0px;
		padding: 0px!important;
		/*background: url(assets/bg1.jpg) center !important;
		background-size: cover;*/
		background: #ECF0F5;
		font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
		font-size: 14px;
		overflow: hidden;
		-webkit-font-smoothing: antialiased;
	}
 
	#app {
		top: 0px;
		bottom: 0px;
		width: 100%;
		overflow: hidden;
	}
  .page-container {
        font-size: 50px;
		margin-top: 50px;
        text-align: center;
        color: rgb(192, 204, 218);
    }
	.el-table .cell,
  .el-table th>div {
    padding-left: 0;
    padding-right: 0
  } 
 .el-dialog__header{
   cursor:move
 }
</style>
