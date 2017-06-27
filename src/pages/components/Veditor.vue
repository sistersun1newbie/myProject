<template lang="html">
<div>   
    <div :id="id" class='editor'></div>
</div>
</template>

<script>
import wangeditor from 'wangeditor'
export default {
    name:'vEdit',
    props:{
        value:{
            type:String,
            default:''
        },
        uploadUrl:{
             type:String,
             default:''
        },
        uploadImgName:{
             type:String,
             default:'img'
        },
        disabled:{
            type: Boolean,
            default:false
        },
        id:{
             type:String,
             required: true
        },
        imgOnLoad:{
        	 type:Function
        }
    },  
    data() {
        return {
            editor:null
        }
    },
    watch: {
        disabled(v){
            if(v){
                this.editor&&this.editor.disable();
            }else{
                this.editor&&this.editor.enable();
            }
        },
        value(v){
             if(this.editor){
                if(v!=this.editor.$txt.html()){
                    this.editor.$txt.html(v||'')
                }
            }
        }
    
    },
    mounted() {
        this.createEditor()
    },
    methods: {
        createEditor() {
            this.editor = new wangeditor(this.id)
            if(this.imgOnLoad){
            	 this.editor.config.uploadImgFns.onload =  (resultText, xhr)=> {
			        // 上传图片时，已经将图片的名字存在 editor.uploadImgOriginalName
			        var originalName = this.editor.uploadImgOriginalName || '';  
	             	let imgTag='<img src="' + resultText + '" alt="' + originalName + '" style="max-width:100%;"/>'
			       	this.imgOnLoad(imgTag,this.editor)
			    };
            }
              
            
            if(this.disabled)this.editor.disable();
            if(this.$lang==='zh'){
                this.editor.config.lang = wangeditor.langs['zh-cn'];

            }else{
                this.editor.config.lang = wangeditor.langs['en'];
            }
            wangEditor.config.printLog = process.env.NODE_ENV !== 'production';
            this.editor.config.uploadImgFileName=this.uploadImgName
            this.editor.config.menus = ['source', '|', 'bold', 'underline', 'italic', 'strikethrough', 'eraser', 'forecolor', 'bgcolor', '|', 'quote', 'fontfamily', 'fontsize', 'head', 'unorderlist', 'orderlist', 'alignleft', 'aligncenter', 'alignright',
                '|', 'link', 'unlink', 'table', 'img', 'video', 'insertcode', '|', 'undo', 'redo', 'fullscreen'
            ]
            
            this.editor.config.uploadImgUrl = this.uploadUrl
            this.editor.onchange = ()=>this.$emit('input',this.editor.$txt.html())
            this.editor.create()
            this.editor.$txt.html(this.value||'');
        },
    },
}
</script>

<style lang="css" >
    .editor{
        height: 200px;
    }
    .wangEditor-container{
        border-radius: 2px;
        overflow: hidden;
        border: 1px solid #CCC;
    }
</style>