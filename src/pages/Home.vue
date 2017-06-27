<template>
	<div style="overflow: hidden">
		<mheader :style="{background: themeColor.header}" class="el-button--primary" :ismobile="isMobile" :windowwidth="windowWidth">
			<span class="bgimg" slot='logo':style="{background:`url(${require('../assets/jizhoulogo.png')})  no-repeat center`,backgroundSize:`auto 100%`}"></span>
			<div slot='left'>
				<i class="fa fa-bars mhicon2" aria-hidden="true" @click="menuClick"></i>
				<!--<div class="mhicon2" style="height: 50px;display: inline-block"> {{$t("tabbar.left") }}</div>-->
			</div>
			<div slot='right'>
				<!--<el-dropdown trigger="click">
					 	<span class="el-dropdown-link">
						<i class="fa fa-user-circle-o mhicon2" aria-hidden="true">  {{$t("tabbar.mine") }}</i>
					</span>
					<el-dropdown-menu slot="dropdown" style="background: transparent;padding: 0px">
						<el-card style="text-align: center" :body-style="{ padding: '0px' }">
							<div style="padding:20px;background: #BC0015;  ">
							 
								<img :src="user.avatar||user.shopUserIcon"  @error="$event.target.src=require('../assets/jizhoulogo.png') " style="border-radius: 25px;height:100px;">
							</div>
							<span>管理员  </span>
							<div style="padding:14px;">
								<el-button type="text" class="button">查看</el-button>
								<el-button type="text" class="button">编辑</el-button>
								<el-button type="text" class="button">修改密码</el-button>
							</div>
						</el-card>
					</el-dropdown-menu>
				</el-dropdown>-->
				<el-dropdown trigger="click">
					<span class="el-dropdown-link">
							<i class="fa fa-users mhicon2" aria-hidden="true"> {{$t("tabbar.language") }}</i>
						  </span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item v-for='(value,key) in language' :key='key' @click.native='setLanguage(key)'>{{value.languageName}}</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<el-dropdown trigger="click">
					<span class="el-dropdown-link">
							<i class="fa fa-power-off mhicon2" aria-hidden="true"/>
						  </span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item @click.native='exit'>{{$t('exit')}}</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
		</mheader>
		
		<div class="connier" :style="{height:sidebarHeight+'px'}">
				<msidebar :style="{background:themeColor.sidebar,
					minWidth:sidebarWidth+'px',
					height:sidebarHeight+'px',
					width:sidebarWidth+'px'}"
					:menuList='menuList'
					:user="{level:user.nikeName,state:$t('user.online')}"
					v-if="!user.shopUserName">
					 
				<img slot='logo' :src="user.avatar||user.shopUserIcon||''" @error="$event.target.src=require('../assets/jizhoulogo.png') "  style="border-radius: 25px;height: 50px">
				</msidebar>
				<msidebar :style="{background:themeColor.sidebar,
					minWidth:sidebarWidth+'px',
					height:sidebarHeight+'px',
					width:sidebarWidth+'px'}"
					:menuList='menuList'
					:user="{level:user.shopUserName,state:$t('user.online')}"
					v-else>
					 
				<img slot='logo' :src="user.avatar||user.shopUserIcon||''" @error="$event.target.src=require('../assets/jizhoulogo.png') "  style="border-radius: 25px;height: 50px">
				</msidebar>
				<div class="routediv" :style="{height:sidebarHeight+'px'}">
					<el-breadcrumb separator="/" class="navter">
						<el-breadcrumb-item v-if="item.meta.title" :key='item.name' :to="{ path:item.path||'/' }" v-for="item in $route.matched" replace> {{item.path==''?$t(item.meta.title):item.meta.title}}</el-breadcrumb-item>
					</el-breadcrumb>
					<router-view style="margin: 8px;margin-bottom: 100px;"></router-view>
					<div class="bottombar" v-show="showBottom" :style="{background:themeColor.bottomebar }">
						<strong style="font-weight:700;font-size: 14px;color: #444">
							{{$t('copyright')}}
						</strong>
					</div>
				</div>
		</div>
		<el-dialog v-model="showMyMap" :close-on-click-modal='false' :size="isMobile?'full':'small'">
			<mymap />
		</el-dialog>

	</div>
</template>
<script>
	import mheader from './layout/header'
	import msidebar from './layout/sideBar'
	import { mapGetters,  mapState} from 'vuex'
	import language from '../Language'
	import {localeSet, logout} from 'api/api'
	import mymap from './components/myMap' 
	import Vue from 'vue'
	export default {
		data() {
			return {
				language,
				sidebarWidth: 230,
				map:null
			}
		},
		created() {
			this.isMobile ? this.sidebarWidth = 0 : this.sidebarWidth = 230;
			this.loadMapJs()
		},
	 
		watch: {
			isMobile(flag) {
				flag ? this.sidebarWidth = 0 : this.sidebarWidth = 230;
			},
			$route() {
				this.isMobile ? this.sidebarWidth = 0 : this.sidebarWidth = 230;
			},
			$lang(key){
				console.log(key)
			},
		 
		},
		computed: {
			...mapGetters([
				'windowWidth',
				'windowHeight',
				'isMobile',
				'themeColor'
			]),
			...mapState([
				'menuList','socketFlag',
				'user',
				 'mapKey',
			]),
			showMyMap:{
				get(){
					return this.$store.state.showMap
				},
				set(flag){
					this.$store.commit('updatedShowMap',flag)
				}
			},
			showBottom(){
				return !(this.sidebarWidth!==0&&this.isMobile)
			},
			sidebarHeight() {
				return this.showBottom? this.windowHeight - 60: this.windowHeight
				// return this.isMobile ? this.windowHeight - 50 : this.windowHeight - 50
			},
		},
		components: {
			mheader,
			msidebar,
			mymap
		},
		methods: {
			loadMapJs(){
				let head= document.getElementsByTagName('head')[0]; 
				let script= document.createElement('script'); 
				script.async =true
				script.type= 'text/javascript'; 
				script.src= `https://maps.googleapis.com/maps/api/js?key=${this.mapKey}&callback=initMap&language=${this.$lang}` 
				head.appendChild(script);
			},
			menuClick() {
				this.sidebarWidth === 230 ? this.sidebarWidth = 0 : this.sidebarWidth = 230
			},
		
			setLanguage(language){
				localeSet({language:language}).then(res=>{
					Vue.config.lang=language
					localStorage.setItem('lang',language)
					window.location.reload()
				})

			},
			exit(){
				logout({}, true).then((res)=>{
					if(this.socketFlag){
						this.$socket.emit(8, { "from": this.user.userId })
						console.log('EXET===socket')
					}
					
					sessionStorage.clear();
					window.location.reload();
				});
			}
		},
	}

</script>

<style>
	.mhicon2 {
		font-size: 15px !important;
		color: #fff;
		line-height: 50px !important;
		padding: 0 12px;
		cursor: pointer
	}

	.bgimg {
		display: inline-block;
		width: 230px;
		height: 50px;
	}

	i {
		cursor: pointer
	}

	.connier {
		padding: 8px 0px;
		display: flex;
		overflow: hidden;
		justify-content: flex-start;
	}
 
	.bottombar {
		box-shadow: 3px -2px 3px #888888;
		position: absolute;
		height: 30px;
		bottom: 0px;
		padding: 8px 0;
		width: 100%;
		text-align: center;
		line-height: 30px;
		z-index: 500;
		background: #ECF0F5 !important;
	}

	.routediv {
		overflow-y: auto;
		overflow-x: hidden;
		-webkit-overflow-scrolling: touch;
		transition: all 0.3s;
		width: 100%;
	
	}

	.navter {
		padding: 8px;
	}
</style>
