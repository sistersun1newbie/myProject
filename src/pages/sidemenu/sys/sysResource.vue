<template>
  <section>
    <el-row :gutter="20">
      <!--<el-col :span="6">
        <el-input  size="large"   v-model="resName" :placeholder="$t('sysresources.searchAlert')"></el-input>
      </el-col>
      <el-col :span="2">
        <el-button size="large" icon="search">{{$t('commom.search')}}</el-button>
      </el-col>-->
      <el-col :span="6" :offset="18">
        <el-button size="large" type="primary" icon="plus" style="float: right;margin:  0px 20px" @click="showDilog('add')">
          {{$t('commom.add')}}
        </el-button>
      </el-col>
    </el-row>
    <br>
    <!--@node-click="getNextChildren"-->
    <el-tree :data="sysResource"
             :props="defaultProps"
             lazy :load='loadmore'
             node-key="resId"
             :render-content="renderContent">
    </el-tree>


    <el-dialog :title="$t(view==='add'?'sysresources.addModal.addResoure':'sysresources.addModal.updateResoure')" v-model="showAddModal" :size="$store.getters.isMobile?'full': 'small'">
      <add :form="form" @showTree="showTree=true" v-show="view==='add'||view==='update'" ref="formRule"></add>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showAddModal = false">{{$t('commom.cancel')}}</el-button>
        <el-button type="primary"  :loading="btnLoading" @click="sysResourcesUpdate">{{btnText}}</el-button>
      </div>
    </el-dialog>


    <el-dialog v-model="showTree" :size="$store.getters.isMobile?'full': 'small'">
      <el-tree :data="sysResource" :props="defaultProps" lazy :load='loadmore' @node-click="selectedNode"></el-tree>
    </el-dialog>

  </section>
</template>


<script>

  import  add from  './sysResourcesComponents/add'
  import {mapActions}from 'vuex'
  import {
    getAllByParentId,
    sysResourcesAdd
  } from 'api/api';
  let copyForm={
    parentId: 0,
      parentIds: "0",
      isShow:true,
      resZhCnName:'',
      parentName:"",
      restype:"menu",
      resKoKrName:"",
      resEnUsName:"",
      identity:"",
      component:"",
      icon:"",
      permission:"",
      resJaJpName:"",
      seq:"",
      url:"",
  }
  export default{
    data(){
      return {
        optionMsg:"",
        resName: "",
        parentId: 0,
        view:'add',
        defaultProps: {
          children: 'children',
          label: 'resName'
        },
        sysResource: [],
        btnLoading:false,
        /*添加模态窗属性*/
        showAddModal: false,
        showTree: false,
        form:copyForm,
        selectNodeName:''

      }
    },
    components:{
      add
    },
    created(){
      this.init();
    },
    computed: {
      btnText(){
          return this.view==='add'?this.$t('commom.add'):this.$t("commom.update")
      }
    },
    methods: {
      renderContent(h, { node, data, store }){
        data.parentName = (node.parent&& node.parent.data.resName)||'';

        return(
          <span>
            <span>
              <span>{node.label}</span>
            </span>
            <span style="float: right; margin-right: 20px">
            <el-button type="primary"
                     size="small"
                     icon="edit" on-click={ () => this.showDilog("update", data) }>{this.$t('commom.edit')}</el-button>
             <el-button size="small"
                     type="danger"
                     icon="delete" on-click={ () => this.delete(data,store) }>{this.$t('commom.delete')}</el-button>
           </span>
          </span>);
      },

      init(){
         getAllByParentId({parentId: this.parentId}).then(res => {
          this.sysResource = res.data.obj
        })
      },
      delete(data,store){
          let self= this;

        this.$msgbox({
          title:self.$t("commom.alertTitle") ,
          message: self.$t("sysresources.delResources"),
          showCancelButton: true,
          confirmButtonText: self.$t("commom.yes"),
          cancelButtonText: self.$t("commom.no"),
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = self.$t('commom.loading');
              this.delResources({resId:data.resId}).then(() => {
                instance.confirmButtonLoading = false;
                store.remove(data);

                done();
              }).catch(()=>{
                instance.confirmButtonLoading = false;
                done();
              })
            } else {
              done();
            }
          }
        })
      },
      showDilog(type,data=copyForm){
        if(this.$refs.formRule){
          this.$refs.formRule.resetFields();
        }
         this.view=type;
          this.form={...data}
        this.showAddModal=true
      },
      ...mapActions([
        'addResources',
        'updateResources',
        "delResources"
      ]),
      /*获取下一级节点*/
      getNextChildren(data, node, nodeSelf){
        this.selectNode = data;
      },
      loadmore(node, resolve){
        if (node.level == 0) {
          return resolve(this.sysResource)
        }
        getAllByParentId({parentId: node.data.resId}).then((res) => {
          resolve(res.data.obj)
        }).catch(() => {
          resolve([])
        })
      },
      /*选择节点函数*/

      selectedNode(data, node, nodeSele){
        this.form.parentId = data.resId;
        this.form.parentIds = data.parentIds + "," + data.resId;
        this.form.parentName = data.resName
      },
      sysResourcesUpdate(){
        this.$refs.formRule.validate((valid) => {
          if (valid) {
            this.btnLoading=true;
            if(this.view=='update'){
              delete this.form.createTime;
              delete this.form.creator;
              delete this.form.modifyTime;
              delete this.form.modifyor;
              this.updateResources(this.form).then(()=>{
                this.form ={...copyForm}
                this.showAddModal=false;
                this.init();
                this.btnLoading=false;
              }).catch(()=>{
                this.btnLoading=false;
              })
            }else  if(this.view=='add'){

              this.addResources(this.form).then(()=>{
                this.form ={...copyForm}
                this.init();
                this.showAddModal=false;
                this.btnLoading=false;
              }).catch(()=>{
                this.btnLoading=false;
              })
            }
          }
        });
      }
    }
  }
</script>

<style lang="less">

  .demo-form-inline {
    width: 100%;
  }
  /*input 全局样式修改*/
	 .el-input--large .el-input__inner{height: 40px;}
	.el-tree-node__content{line-height: 40px;height: 40px;cursor:pointer;}

</style>
