<template>
	<div class="mychart">
	
		<div class="waitList">
			<div style="border-bottom: 1px solid #efefef;">
				{{$t('service.userList')}}
			</div>
			<div v-show="personlist.length==0">
				{{$t('service.noUser')}}
			</div>
	
			<div class="userList" v-for="(i,index) in personlist">
	
				<img :src="i.avatar||''" @error="$event.target.src=require('../../../assets/jizhoulogo.png')" style="border-radius: 50%;" width="100%" />
				<div>{{i.nikeName||''}}</div>
	
			</div>
		</div>
		<div class="right">
			<div class="right-up">
				<div class="chartList" id="chatContentScroll">
					<div  v-for="(obj,index) in chartList" :key="index">
						<div class="server" v-if="obj.type==='server'">
							<div class="send">
								<div class="help-neirong" v-html="obj.content">
								</div>
							</div>
							<div class='titleicon'>
								<img src="../../../assets/jizhoulogo.png">
							</div>
						</div>
						<div class="client" v-if="obj.type==='client'">
							<div class='titleicon'>
								<img :src="userObj.user&&userObj.user.avatar||''" @error="$event.target.src=require('../../../assets/jizhoulogo.png')">
							</div>
							<div class="receive">
								<div v-html="obj.content" class="help-neirong">
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="mymap">
					<mymap :height="300" :userList="personlist" :currentObj='templocation' :isShowLocation="false" />
				</div>
			</div>
			<div class="right-down">
				<el-row :gutter="20">
					<el-col :span="24" style="margin: 5px;">
						<el-col :span="6">
							<div style="justify-content:center ; align-items: center;display: flex;" class="grid-content bg-purple">{{userObj&&userObj.user&& $t('service.active')+":"+userObj.user.nikeName}}</div>
						</el-col>
						<el-col :span="18">
							<div style="display: flex; justify-content: flex-end ">
	
								<el-button size="large" type="primary" @click.stop="changeinputType('emi')">
									<i class="fa fa-smile-o" style="-webkit-transform:scale(1.8)" aria-hidden="true"></i>
								</el-button>
								<el-button size="large" type="primary" @click="overchat('','',true)">{{$t('service.over')}}
								</el-button>
								<el-button size="large" type="primary" @click="launchMsg()">{{$t('service.sendMsg')}}
								</el-button>
							</div>
						</el-col>
	
						<div class='emi' v-show="inputType==='emi'">
							<emotion is-gif v-for='(item,index) in emotionList' :key="index" @click.native='onEmi'>{{item}}</emotion>
						</div>
					</el-col>
				</el-row>
	
				<el-row :gutter="20">
					<el-col :span="24">
						<div id="inputValue" contenteditable="true" @keyup.enter="launchMsg" spellcheck="false" style="border:1px solid #efefef;height:150px;background-color: white;overflow-y: auto;overflow-x:hidden" @input='onInput'></div>
					</el-col>
				</el-row>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import { WechatEmotion as Emotion } from 'vux'
import mymap from 'pages/components/myMap'
import { insertImage, saveSelection } from '../../../util/range'

export default {
	data() {
		return {
			emotionList: ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极'],
			inputValue: '',
			inputType: '',
			templocation: {},
		}
	},
	components: {
		Emotion,
		mymap
	},
	computed: {
		...mapState([
			'chatlist', 'user'
		]),
		...mapGetters([
			'windowWidth',
			'windowHeight',
			'isMobile',
		]),

		personlist() {
			return this.chatlist.userListObj.waitList || []
		},
		sidebarHeight() {
			return this.isMobile ? this.windowHeight - 100 : this.windowHeight - 150
		},
		userObj() {

			if (this.$store.state.chatlist.userObj.user) {

				this.templocation = {
					lat: parseFloat(this.$store.state.chatlist.userObj.user.latitude),
					lng: parseFloat(this.$store.state.chatlist.userObj.user.longitude),
					msg: '',
					nikeName: this.$store.state.chatlist.userObj.user.nikeName,
					avatar: this.$store.state.chatlist.userObj.user.avatar,
					flag: false
				}
			} else {
				this.$socket.emit(5, {
					"from": this.user.userId
				})
				this.templocation = {
					flag: true
				}
			}
			//let m={
			//	lat:33.445891409896014,
			//	lng:126.79603457450867
			//}
			//this.$store.state.chatlist.userObj.user={...this.$store.state.chatlist.userObj.user,...m}

			return this.$store.state.chatlist.userObj
		},
		chartList() {
			let last = {}
			if (this.$store.state.chatlist.chatList.length > 0) {
				last = this.$store.state.chatlist.chatList[this.$store.state.chatlist.chatList.length - 1]
			}
			if (last && last.type == 'client') {
				this.templocation.msg = last.content
				this.$nextTick(() => {
					this.refreshScroll()
				})
			}

			return this.$store.state.chatlist.chatList
		}
	},
	created() {
		console.log(this.user.userId)
		console.log(this.updatesocketFlag)
		this.updatesocketFlag({ flag: true })

		this.$socket.emit(0, {
			"from": this.user.userId
		})
	},
	mounted() {
		console.log(this.personlist)
	},
	watch: {},
	methods: {
		...mapMutations([
			'SOCKET_2',
			'SOCKET_3', 'clearMsg', 'updatesocketFlag'
		]),
		overchat(i, index, type) {
			this.clearMsg([])
			this.SOCKET_2({ msgType: 2 })

			this.$socket.emit(5, {
				"from": this.user.userId
			})

			if (type) {
				return;
			}
			this.personlist.splice(index, 1)
			let a = this.personlist.length == 0 ? null : this.personlist[0]

		},
		dismiss() {
			this.inputType = ''
		},
		launchMsg() {
			//chartList
			let scrollobj = document.getElementById('chatContentScroll')
			let textareaDom = document.getElementById('inputValue')
			let obj = {}
			//				for(let key in scrollobj) {
			//					obj[key] = scrollobj[key]
			//				}
			//				console.log('key'+':',obj)innerHTML
			//				console.log('textareaDom.innerHTML', textareaDom.innerHTML)
			if (textareaDom.innerHTML != '') {
				let data = {
					msgType: 3,
					type: 'server',
					from: this.user.userId,
					content: this.inputValue,
					language: this.$lang
				}
				console.log(data)
				this.$socket.emit(data)

				let serverMsg = this.inputValue
				this.SOCKET_3({
					type: 'server',
					content: serverMsg
				})
				this.inputValue = '';
				textareaDom.innerHTML = '';

				textareaDom.focus()
				this.$nextTick(() => {
					// DOM 更新了
					this.refreshScroll()
				})
			} else {

			}

			//	           if(this.customerService){

			//	           }
			//	           this.inputValue='';
			//	           document.getElementById('textarea').innerHTML='';
			//	           document.getElementById('textarea').focus()

		},
		refreshScroll() {
			let scrollobj = document.getElementById('chatContentScroll')
			if (scrollobj.scrollHeight) {
				console.log(scrollobj.scrollHeight)
				if (scrollobj.scrollHeight - scrollobj.clientHeight > scrollobj.scrollTop) {
					scrollobj.scrollTop = scrollobj.scrollHeight - scrollobj.clientHeight
					//						console.log("scrollobj.scrollTop",scrollobj.scrollTop)
				}
			}
		},
		onEmi(e) {
			let divInput = document.getElementById('inputValue');
		  
			insertImage(divInput, e.target.src)
			this.inputValue = divInput.innerHTML
		},
		onInput(e) {
			this.inputValue = e.target.innerHTML
			saveSelection(e.target)
		},
		changeinputType(type) {
			if (this.inputType == 'emi') {
				this.inputType = ''
				return
			}
			this.inputType = type

			document.getElementById('inputValue').focus();
		}
	}
}
</script>
<style lang="less"  >
.mychart {

	display: flex;
	border: 1px solid #efefef; // margin: 5px;
	padding: 8px 0;
	box-shadow: -3px 0px 3px #888888;
	background: white;
	.waitList {
		border-right: 1px solid #efefef;
		padding: 8px;
		width: 150px;
		text-align: center;
		.userList {
			padding: 5px;
			display: flex;
			justify-content: flex-start;
			align-items: center;
border-bottom: 1px solid #efefef;
			img {
				width: 50px;
				height: 50px;
				margin-right: 8px
			}
		}
	}
	.right {
		display: flex;
		flex-direction: column;

		width: 100%;
		.right-up {
			display: flex;
			.chartList {
				overflow-y: auto;
				height: 300px;
				width: 500px;
				border-bottom: 1px solid #efefef;
				border-right: 1px solid #efefef;
			}
			.mymap {
				width: 100%
			}
		}
	}
}









.el-row {
	margin-bottom: 0px;
	&:last-child {
		margin-bottom: 0;
	}
}

// .waitList{
// 	box-shadow: -3px 0px 3px #888888;
// 	margin-left: 8px;
// 	background: white;
// 	.userList{
// 		border-bottom: 1px solid #efefef;
// 		margin: 8px 0;
// 		display: flex;
// 		justify-content: flex-start;
// 		align-items: center;
// 		img{
// 			width: 50px;
// 			height:50px;
// 			margin-right:8px 
// 		}
// 	}
// }
.el-col {
	border-radius: 4px;
}

.bg-purple-dark {
	background: #99a9bf;
}

.bg-purple {
	background: #d3dce6;
}

.bg-purple-light {
	background: #e5e9f2;
}

.grid-content {
	border-radius: 4px;
	min-height: 36px;
}

.row-bg {
	padding: 10px 0;
	background-color: #f9fafc;
}

.titleicon {
	height: 40px;
	width: 40px;
	border-radius: 50%;
	display: flex;
	overflow: hidden;
	align-items: center;
	justify-content: center;
	max-width: 30%;
	img {
		width: 100%
	}
}

.send {
	position: relative;
	min-height: 20px;
	background: #18b9b3;
	border-radius: 9px;
	border-top-right-radius: 0;
	justify-content: flex-end;
	word-break: break-all;
	word-wrap: break-word;
	max-width: 70%;
	padding: 3px;
	margin-top: 7px;
	margin-right: 5px;
	min-width: 40px;
}

.receive {
	padding: 5px 8px;
	position: relative;
	max-width: 70%;
	min-height: 20px;
	background: #dbebec;
	border-radius: 9px;
	border-top-left-radius: 0;
	word-break: break-all;
	word-wrap: break-word;
	margin-top: 7px;
	margin-left: 5px;
	min-width: 40px;
	color: #666
}

.server {
	color: #ffffff;
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	margin-top: 10px;
	margin-right: 8px;
}

.client {
	color: #ffffff;
	margin-top: 10px;
	margin-left: 8px;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
}
</style>