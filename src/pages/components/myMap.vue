<template>
	<div style="position: relative;">
		<el-input class="search" size="large" v-if="isShowLocation" :placeholder="$t('commom.input')" v-model="input5">
			<el-button slot="append" icon="search" @click.native="getAddress"></el-button>
		</el-input>
		<div :id="id" :style="{height:height+'px'}"></div>
	</div>
</template>
<style lang="less">
	.search {
		position: absolute;
		top: 5px;
		z-index: 5;
		width: 60%;
		margin-left: 20%
	}
</style>
<script>
	import { mapState, mapMutations } from 'vuex'

	export default {
		props: {
			userList: {
				type: Array,
				default: () => {
					return []
				},
			},
			isShowLocation: {
				type: Boolean,
				default: true
			},
			currentObj: {
				type: Object,
				default: () => {
					return {
						msg: '',
						avatar: '',
					}
				},
			},

			id: {
				type: String,
				default: 'myMap'
			},
			height: {
				type: [String, Number],
				default: '500'
			}
		},
		data() {
			return {
				map: null,
				marker: null,
				infoWindow: null,
				geocoder: null,
				userListMarker: [],
				singleMark: '',
				currentObjInfoWindow: '', //循环情清空
				input5: ''
			}
		},
		mounted() {
			this.mapinit()
		},
		computed: {
			...mapState([
				'mapCenter',
				'markerInfo',
				'showMap',
			]),
		},
		watch: {
			'currentObj.msg' () {
				//this.singleMark.setMap(null);

				console.log("是否删除点：", this.currentObj.flag)
				if(this.currentObj.flag) {
					console.log("删除对象啊啊啊1", this.singleMark)
					console.log("删除对象啊啊啊2", this.map)

					this.singleMark && this.singleMark.setMap(null);
					this.singleMark = ''
					console.log("删除对象啊啊啊3", this.singleMark)
					return;
				}
				this.setSingleMark(this.currentObj)

			},
			showMap(flag) {
				if(flag && this.markerInfo && this.map && this.marker) {
					this.map.setCenter(this.markerInfo);
					this.marker.setPosition(this.markerInfo)
					this.geocod(this.markerInfo)
				}
			},
			//			usercenter(newLocation) {
			//				console.log("用户位置：",newLocation)
			////				newLocation!=null&&this.map.setCenter(newLocation);
			//			},
			userList(arr) {
				// 				let list=[]
				// //				console.log(this.userListMarker)w
				// 				if(arr.length==0){
				// 					for(let i=0 ;i<this.userListMarker.length;i++){
				// 						this.userListMarker[i].setMap(null);
				// 							this.userListMarker.splice(i,1)
				// 					}
				// 					return ;
				// 				}
				// 				arr.forEach(obj=>{
				// 					let flag=this.userListMarker.some((item,index)=>{
				// 						console.log('in',item.obj == obj)
				// 						if(item.obj == obj){

				// 						}else{
				// 							item.setMap(null);
				// 							this.userListMarker.splice(index,1)
				// 						}
				// 						return item == obj
				// 					})
				// 					if(!flag){
				// 						list.push(obj)
				// 					}
				// 				})
				// 				this.setMarkList(list)
			}

		},
		methods: {
			...mapMutations([
				'updatedMarkerInfo', 'updatechatObj'
			]),
			mapinit() {
				window.onMapReady(googleMap => {

					this.map = new googleMap.Map(document.getElementById(this.id), {
						center: this.markerInfo || this.mapCenter,
						zoom: 11
					});
					// this.setMarkList(this.userList)
					this.setSingleMark(this.currentObj)
					this.geocoder = new googleMap.Geocoder;
					if(this.isShowLocation) {
						this.infoWindow = new googleMap.InfoWindow();
						this.marker = new googleMap.Marker({
							position: this.markerInfo || this.mapCenter,
							map: this.map,
							draggable: true,
							title: this.$t('myMap.position')
						});
						this.geocod(this.markerInfo || this.mapCenter)
						this.marker.addListener('dragend', this.markerDragend)

						this.marker.addListener('click', () => {
							this.infoWindow.open(this.map, this.marker);
						});
					}

				})
			},
			getAddress() {
				
				if(this.input5=='')return
				
				this.geocoder.geocode({ 'address': this.input5 }, (results, status) => {
					if(status === 'OK') {
						//		            resultsMap.setCenter(results[0].geometry.location);
						this.map.setCenter(results[0].geometry.location);
						this.marker.setPosition(results[0].geometry.location)
						let latLng={
							lat:results[0].geometry.location.lat(),
							lng:results[0].geometry.location.lng()
						}
						this.setInfoWin(latLng,results[0].formatted_address)
						console.log(results)
					} else {
						alert('Geocode was not successful for the following reason: ' + status);
					}
				});
			},
			setSingleMark(newobj) {
				console.log(newobj)
				if(!newobj.lat) {
					return;
				}
				console.log("观察msg变化  消息是：", newobj.msg)
				console.log("观察msg变化  窗口对象是：", this.currentObjInfoWindow + this.currentObjInfoWindow !== '')

				this.map.setCenter(newobj) //中心
				const googleMap = google.maps
				if(this.singleMark) {
					this.singleMark.setPosition(newobj)

				} else {
					this.singleMark = new googleMap.Marker({
						position: newobj,
						map: this.map,
						title: this.$t('myMap.position'),
						obj: newobj
					});
				}

				console.log(' this.singleMark  ', this.singleMark)
				let contentString = `<div class="el-row" style="margin-left: 0px; margin-right: 0px; margin-bottom: 0px;">
                  	 <div class="el-col el-col-8" style="padding-left: 10px; padding-right: 10px;text-align: center">
                  	 <img src="${newobj.avatar}" width="100%" style="border-radius: 50%;text-align: center;">${newobj.nikeName}
                  	 </div>
                  	 <div class="el-col el-col-16" style="padding-left: 10px; padding-right: 10px; margin-top: 15px;">
					${newobj.msg}</div></div>`
				if(this.currentObjInfoWindow !== '') {
					console.log("关闭上个窗口", this.currentObjInfoWindow.close)
					this.currentObjInfoWindow.close()
				}
				this.currentObjInfoWindow = new google.maps.InfoWindow({
					content: contentString
				});
				this.singleMark && this.singleMark.addListener('click', () => {
					this.currentObjInfoWindow.open(this.map, this.singleMark);
				});
				this.currentObjInfoWindow.open(this.map, this.singleMark);
			},
			setMarkList(arr) {
				// 				 const googleMap=google.maps
				// 				for(let i = 0; i < arr.length; i++) {
				// 					//   alert(JSON.stringify(this.userList[i]))

				// 					let mar = new googleMap.Marker({
				// 						position: arr[i].location,
				// 						map: this.map,
				// 						title: this.$t('myMap.position'),
				// 						obj:arr[i]
				// 					});
				// //					console.log(mar)
				// 					let contentString = `<div class="el-row" style="margin-left: 0px; margin-right: 0px; margin-bottom: 0px;">
				//                   	 <div class="el-col el-col-8" style="padding-left: 10px; padding-right: 10px;">
				//                   	 <img src="${arr[i].headimg}" width="100%" style="border-radius: 50%;">
				//                   	 </div>
				//                   	 <div class="el-col el-col-16" style="padding-left: 10px; padding-right: 10px; margin-top: 15px;">
				// 					${arr[i].msg}</div></div>`
				// 					let infowindow = new google.maps.InfoWindow({
				// 						content: contentString
				// 					});
				// 					mar.addListener('click', () => {
				// 						this.updatechatObj(this.userList[i])
				// 					});
				// 					infowindow.open(this.map, mar);
				// 					this.userListMarker.push(mar)

				// }
			},

			//marker拖动监听
			markerDragend(e) {
				let latLng = {
					lat: e.latLng.lat(),
					lng: e.latLng.lng()
				}
				this.geocod(latLng)
			},
			//反向地理编码
			geocod(lagLng) {
				this.geocoder.geocode({
					'location': lagLng
				}, (results, status) => {
					if(status === google.maps.GeocoderStatus.OK) {
						if(results[0]) {
							this.setInfoWin(lagLng, results[0].formatted_address)
						} else {
							window.alert('No results found');
						}
					} else {
						window.alert('Geocoder failed due to: ' + status);
					}
				});
			},
			setInfoWin(lagLng, addr) {
				let str = `<div >
                                <h3 style="text-align: center">${this.$t("myMap.position")}</h3>
                                <div>${this.$t('commom.longitude')}:${lagLng.lng}</div>
                                <div>${this.$t('commom.latitude')}:${lagLng.lat}</div>
                                <div>${this.$t('commom.addr')}:${addr}</div>
                            </div>`
				this.infoWindow.setContent(str);
				this.infoWindow.open(this.map, this.marker);
				this.updatedMarkerInfo({
					lat: lagLng.lat,
					lng: lagLng.lng,
					addr: addr
				})
			},
			onMapClick(e) {

			},
		}
	}
</script>