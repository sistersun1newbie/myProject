<template>
	<el-form :model="pageData" ref='storyForm' :rules="rules" :label-position="$store.getters.isMobile?'top':'right'">
		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('article.areaGame.zhDesc')" label-width="150px" prop="remindZhCnContent">
				<el-input v-model="pageData.remindZhCnContent" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>

		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('article.areaGame.enDesc')" label-width="150px" prop="remindEnUsContent">
				<el-input v-model="pageData.remindEnUsContent" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>

		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('article.areaGame.jaDesc')" label-width="150px" prop="remindJaJpContent">
				<el-input v-model="pageData.remindJaJpContent" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>

		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('article.areaGame.koDesc')" label-width="150px" prop="remindKoKrContent">
				<el-input v-model="pageData.remindKoKrContent" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>
	<!--<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('article.areaGame.act')" label-width="150px" prop="remindAct">
				<el-input v-model="pageData.remindAct" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>-->

		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('article.areaGame.distance')" label-width="150px" prop="distance">
				<el-input v-model.number="pageData.distance" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>

		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('article.areaGame.act')" label-width="150px" prop="remindAct">
				<el-radio-group v-model.number="pageData.remindAct">
					<el-radio :disabled="disabled" :label="1">{{$t('article.areaGame.type1')}}</el-radio>
					<el-radio :disabled="disabled" :label="2">{{$t('article.areaGame.type2')}}</el-radio>
				</el-radio-group>
			</el-form-item>
		</el-col>
		
		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('article.areaGame.game')" label-width="150px" prop="gameId">
				<el-select style="width: 100%;"  v-model.number="pageData.gameId" :placeholder="$t('commom.select')">
					<el-option v-for="item in gameList" :label="item.gameName" :value="item.gameId" :disabled="disabled" :key="item.gameId">
					</el-option>
				</el-select>
			</el-form-item>
		</el-col>
	</el-form>
</template>
<script>
	import {
		areagametaskNopages,
	} from 'api/api';
	export default {
		props: {
			disabled: Boolean,
			pageData: Object
		},
		data() {
			return {
				gameList:[],
				rules: {
					remindZhCnContent: [{
						required: true,
						message: this.$t('article.areaGame.vZhDescription'),
						trigger: 'blur'
					}],
					remindEnUsContent: [{
						required: true,
						message: this.$t('article.areaGame.vEnDescription'),
						trigger: 'blur'
					}],
					remindJaJpContent: [{
						required: true,
						message: this.$t('article.areaGame.vJaDescription'),
						trigger: 'blur'
					}],
					remindKoKrContent: [{
						required: true,
						message: this.$t('article.areaGame. vKoDescription'),
						trigger: 'blur'
					}],
					
					remindAct: [{
						required: true,
						type: 'number',
						message: this.$t('article.areaGame.vact'),
						trigger: 'blur'
					}],
					distance: [{
						validator: (rule, value, callback) => {
							if(value === '' || value == null) {
								callback(new Error(this.$t('article.areaGame.vdistance')));
							} else if((parseInt(value)<=0)&&(parseInt(value)!==NaN)) {
								callback(new Error(this.$t('article.areaGame.vdistance0')));
							} else {
								callback();
							}
						},
						required: true,
//						message: this.$t('article.areaGame.vdistance'),
						trigger: 'blur'
					}],
					gameId: [{
						required: true,
						type: 'number',
						message: this.$t('article.areaGame.vgame'),
						trigger: 'blur'
					}],
				},
			}
		},
		mouted() {},
		created() {
			areagametaskNopages().then(res => {
				this.gameList = res.data.obj
			})			
		},
		watch: {
			pageData() {
				this.$refs.storyForm.resetFields();
			}
		},
		methods: {
			validate(fn) {
				this.$refs.storyForm.validate(fn);
			},
		},
	}
</script>