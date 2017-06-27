<template>
    <div class="sidebar"  >
       <div style="height: 68px;padding:12px  20px 0; cursor:pointer;    border-bottom: 1px solid #dfe6ec" @click='$router.push("/")'>
            <div style="float: left">
                <slot name='logo'></slot>
            </div>
            <div style="float: left;margin-left: 15px;height: 50px;line-height: 25px">
                <p  style="margin: 0px;font-weight: 900;color: black">{{user.level}}</p>
                <i class="fa fa-circle " style="color: #3c763d;font-size: 10px;"> {{user.state}}</i>
            </div>
       </div>
      <div class="menutitle">{{$t('functionalNavigation')}}</div>
        <el-tree
        :data="menuList"
        highlight-current
        node-key="id"
        :indent="8"
        @node-click='goto'
        accordion
        :render-content="renderContent">
        </el-tree>
    </div>
</template>
<style lang='less'>
    .sidebar {
        overflow-y: auto;
        box-shadow: 3px 0px 3px #888888;
        transition: all 0.3s;
        width: 230px;
          .menutitle{
            height: 34px;
            line-height: 34px;
            padding-left: 20px;
            background: gray;
            color: white;
            font-weight: 800;
        }
        .el-tree-node {
            white-space: initial;
        }
        .el-tree-node__content{
            height: 56px;
            line-height: 56px;
            .mnu{
                padding-left: 12px ;
                
            }
            .is-active{
                color:#20a0ff;
            }
            .el-icon-arrow-down{
                transition: transform .3s;

            }
            .el-tree-node__expand-icon{
                display: none
            }
            .expanded{
            transform: rotateZ(180deg);
            }
        }
    }
</style>
<script>
 
  export default{
      props:{
          user:{
              type:Object,
              default:{
                  level:'管理员',
                  state:'在线'
              }
          },
          menuList:{
               type:Array,
              default:[]
          },
  
      },
      mounted () {
         
      },
    methods: {
        goto(route){
            if(route.component){
                this.$router.push(route)
            }
        },
        renderContent(h, { node, data, store }) {
            let className=node.childNodes.length>0&&(node.expanded?'el-icon-arrow-down expanded':'el-icon-arrow-down ')||''
            return (
                <span class={this.$route.name===data.name?'is-active mnu':'mnu'} on-Click={()=>this.goto(data)}>
                <span>
                <span><i class={data.icon}/>&nbsp;&nbsp;{data.meta.title}</span>
                </span>
                <span style="float: right; margin-right: 20px">
                <i class={className}/>
                </span>
            </span>);
        }
    }
}

</script>
