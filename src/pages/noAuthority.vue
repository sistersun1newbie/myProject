<template>
<div class="noauth">
    <p class="page-container">{{$t('noAuthority')}}</p>
    <el-button type="text" @click='exit' >{{$t('exit')}}</el-button>

</div>
</template>
<script>
import {logout} from 'api/api'
    export default {
        methods: {
            exit(){
                logout({}, true).then((res)=>{
					sessionStorage.clear();
					window.location.reload();
				});
            }
        }
    }
</script>
<style lang="less" scoped>
     .noauth{
         text-align: center;
         font-size: 30px;
         .el-button{
               font-size: 30px;  
         }
     }   
    .page-container {
        
        text-align: center;
        color: rgb(192, 204, 218);
    }
</style>
 
 