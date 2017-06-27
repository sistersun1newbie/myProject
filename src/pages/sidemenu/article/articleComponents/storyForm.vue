<template>
	<el-form :model="storyData" ref='storyForm' :rules="rules" :label-position="$store.getters.isMobile?'top':'right'">

		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('commom.zhName')" label-width="150px" prop="articleCnZhTitle">
				<el-input v-model="storyData.articleCnZhTitle" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>

		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('commom.enName')" label-width="150px" prop="articleEnUsTitle">
				<el-input v-model="storyData.articleEnUsTitle" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>

		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('commom.jaName')" label-width="150px" prop="articleJaJpTitle">
				<el-input v-model="storyData.articleJaJpTitle" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>

		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('commom.koName')" label-width="150px" prop="articleKoKrTitle">
				<el-input v-model="storyData.articleKoKrTitle" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>

		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('article.story.author')" label-width="150px" prop="articleAuthor">
				<el-input v-model="storyData.articleAuthor" auto-complete="off" :disabled="disabled" />
			</el-form-item>
		</el-col>

		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('article.story.areaId')" label-width="150px" prop="areaId">
				<el-select style="width: 100%;" v-model="storyData.areaId" :placeholder="$t('commom.select')">
					<el-option v-for="item in arealist" :label="item.areaName" :value="item.areaId" :disabled="disabled" :key="item.areaId">
					</el-option>
				</el-select>
			</el-form-item>
		</el-col>

		<el-col :span="$store.getters.isMobile?24:11">
			<el-form-item :label="$t('commom.status')" label-width="150px" prop="status">
				<el-radio-group v-model="storyData.status">
					<el-radio :disabled="disabled" :label="1">{{$t('article.story.up')}}</el-radio>
					<el-radio :disabled="disabled" :label="2">{{$t('article.story.down')}}</el-radio>
				</el-radio-group>
			</el-form-item>
		</el-col>

		<el-col :span="24">
			<el-form-item :label="$t('article.story.binfoZhCnDescription')" label-width="150px" prop="articleCnZhDescription">
				<editor :disabled='disabled'  :imgOnLoad="syncTextarea" id='articleinfoZhCnDescription' :upload-url="uploadUrl" uploadImgName='img' v-model="storyData.articleCnZhDescription" />
				</quill-editor>
			</el-form-item>
		</el-col>
		<el-col :span="24">
			<el-form-item :label="$t('article.story.binfoJaJpDescription')" label-width="150px" prop="articleJaJpDescription">
				<editor :disabled='disabled'  :imgOnLoad="syncTextarea" id='articleinfoJaJpDescription' :upload-url="uploadUrl" uploadImgName='img' v-model="storyData.articleJaJpDescription" />
				</quill-editor>
			</el-form-item>
		</el-col>
		<el-col :span="24">
			<el-form-item :label="$t('article.story.binfoKoKrDescription')" label-width="150px" prop="articleKoKrDescription">
				<editor :disabled='disabled'  :imgOnLoad="syncTextarea" id='articleinfoKoKrDescription' :upload-url="uploadUrl" uploadImgName='img' v-model="storyData.articleKoKrDescription" />
				</quill-editor>
			</el-form-item>
		</el-col>
		<el-col :span="24">
			<el-form-item :label="$t('article.story.binfoEnUsDescription')" label-width="150px" prop="articleEnUsDescription">
				<editor :disabled='disabled'  :imgOnLoad="syncTextarea" id='articleinfoEnUsDescription' :upload-url="uploadUrl" uploadImgName='img' v-model="storyData.articleEnUsDescription" />
				</quill-editor>
			</el-form-item>
		</el-col>
	</el-form>
</template>
<script>
	import editor from 'pages/components/Veditor'
	import { ARTICLESTORY_UPPIC } from 'type';
	import {
		apparticleGetareas
	} from 'api/api';
	export default {
		props: {
			disabled: Boolean,
			storyData: Object
		},
		data() {
			return {
				arealist: '',
				uploadUrl: ARTICLESTORY_UPPIC, // /chejudo-web/appArticle/story/upPic
				rules: {
					areaId: [{
						required: true,type: 'number',
						message: this.$t('article.story.storyinfoarea'),
						trigger: 'blur'
					}],
					articleCnZhTitle: [{
						required: true,
						message: this.$t('article.story.binfoZhCnName'),
						trigger: 'blur'
					}],
					articleEnUsTitle: [{
						required: true,
						message: this.$t('article.story.binfoEnUsName'),
						trigger: 'blur'
					}],
					articleJaJpTitle: [{
						required: true,
						message: this.$t('article.story.binfoJaJpName'),
						trigger: 'blur'
					}],
					articleKoKrTitle: [{
						required: true,
						message: this.$t('article.story.binfoKoKrName'),
						trigger: 'blur'
					}],
					articleAuthor: [{
						required: true,
						message: this.$t('article.story.storyinfoAuthor'),
						trigger: 'blur'
					}],
					status: [{
						required: true,
						type: 'number',
						message: this.$t('article.story.storyinfostatus'),
						trigger: 'blur'
					}],
					articleCnZhDescription: [{
						required: true,
						message: this.$t('article.story.vinfoZhCnDescription'),
						trigger: 'blur'
					}],
					articleJaJpDescription: [{
						required: true,
						message: this.$t('article.story.vinfoJaJpDescription'),
						trigger: 'blur'
					}],
					articleKoKrDescription: [{
						required: true,
						message: this.$t('article.story.vinfoKoKrDescription'),
						trigger: 'blur'
					}],
					articleEnUsDescription: [{
						required: true,
						message: this.$t('article.story.vinfoEnUsDescription'),
						trigger: 'blur'
					}],
				},
			}
		},
		mouted() {},
		watch: {
			storyData() {
				this.$refs.storyForm.resetFields();
			}
		},
		created() {
			apparticleGetareas().then(res => {
				this.arealist = res.data.obj
			})
		},
		methods: {
			validate(fn) {
				this.$refs.storyForm.validate(fn);
			},
			syncTextarea(value){
			 	this.storyData.articleCnZhDescription+=value
			 	this.storyData.articleJaJpDescription+=value
			 	this.storyData.articleKoKrDescription+=value
			 	this.storyData.articleEnUsDescription+=value
			}
		},
		components: {
			editor
		}
	}
</script>