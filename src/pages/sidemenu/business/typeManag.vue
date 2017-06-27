<template>
    <div>
        <el-row :gutter="20">
        <el-col :span="6">
            <el-input size="large" @keyup.native.enter='onQuery' v-model="searchValue" :placeholder="$t('typeManag.searchAlert')"></el-input>
        </el-col>
        <el-col :span="2">
            <el-button size="large" icon="search"  @click="onQuery">{{$t('commom.search')}}</el-button>
        </el-col>
        <el-col :span="4" :offset="12">
            <el-button size="large" style="float: right;margin:  0px 20px" type="primary" icon="plus"  @click="showDilog('add')">
            {{$t('commom.add')}}
            </el-button>
        </el-col>
        </el-row>
        <br>
    <el-table
      :data="pageData"
      border
      stripe
      highlight-current-row
      style="width: 100%">
       <el-table-column :label="$t('commom.seq')"
                     align="center"
                       width="100">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.$index+1+(currentPage-1)*size}}</span>
                </template>
            </el-table-column>
      <el-table-column
        :label="$t('business.typeManag.typeName')"
        align="center"
        min-width="150">
        <template scope="scope">
          <span  >{{ scope.row.typeName }}</span>
        </template>
      </el-table-column>
      <!--<el-table-column
        :label="$t('business.typeManag.typeCode')"
        align="center"
        min-width="150">
        <template scope="scope">
          <span >{{ scope.row.typeCode }}</span>
        </template>
      </el-table-column>-->
      <el-table-column
        :label="$t('business.typeManag.buyFlag')"
        align="center"
        min-width="150">
        <template scope="scope">
          <span >{{ scope.row.buyFlag?$t('commom.yes'):$t('commom.no') }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('business.typeManag.typeIcon')"
        align="center"
        min-width="150">
        <template scope="scope">
          <ul class="el-upload-list el-upload-list--picture-card">
              <li class="el-upload-list__item  " style="width: 80px;height: 80px;margin: 3px 0 -4px 0;">
                <img :src="scope.row.typeIcon" alt="" class="el-upload-list__item-thumbnail">
              </li>
          </ul>
        </template>
      </el-table-column>
      <el-table-column :label="$t('commom.operation')" align="center" min-width="277" :fixed="$store.getters.isMobile?false:'right'">
        <template scope="scope">
          <el-button
            size="small"
            @click="showDilog('detail',scope.row)" type="warning" icon="information">{{$t('commom.detail')}}
          </el-button>
          <el-button
            size="small"
            @click="showDilog('edit', scope.row)" type="primary"  icon="edit"> {{$t('commom.edit')}}
          </el-button>
          <el-button
            size="small"
            @click="handleDelete(scope.row)" type="danger"  icon="delete">{{$t('commom.delete')}}
          </el-button>

        </template>
      </el-table-column>
    </el-table>
 </el-table>
      <el-pagination 
      style="overflow: auto" 
      @size-change="handleSizeChange" 
      @current-change="handleCurrentChange" 
      :current-page="currentPage" 
      :page-sizes="pageSizes" 
      :page-size="size" 
      layout="total, sizes, prev, pager, next, jumper" 
      :total="typeData.length"/>
  <el-dialog v-model="dialogVisible" :close-on-click-modal='false' :size="$store.getters.isMobile?'full': 'small'">
      <typeform :typeFormData='typeFormData' :disabled="dialogTyle==='detail'" ref='typeForm'/>
      <div style="float: right;margin-bottom: 20px" v-show="dialogTyle!=='detail'">
        <el-button @click="dialogVisible=false">{{$t('commom.cancel')}}</el-button>
        <el-button type="primary" @click="onSubmit"  >{{$t('commom.sure')}}</el-button>
      </div>
    </el-dialog>
    </div>
</template>
<script>
import {mapState,mapActions}from 'vuex'
import typeform from './businessComponents/typeForm'
import { BUSINESSTYPE_GETALL } from 'type'
import {businessTypeUpdate,businessTypeAdd,businessTypeDelete}from 'api/api'
let typeFormData={
    buyFlag:true,
    typeCode:"",
    typeEnUsName:'',
    typeIcon:'',
    typeId:'',
    typeJaJpName:'',
    typeKoKrName:'',
    typeName:'',
    typeZhCnName:'',
    ruleId:''
}
    export default{
        data () {
            return {
                searchValue:'',
                  currentPage: 1,
                  pageSizes: [10, 20, 30],
                  dialogVisible: false,
                  dialogTyle:'',
                  size:10,
                  typeFormData:{...typeFormData}
            }
        },
        components: {
          typeform
        },
        computed: {
          ...mapState({
              typeData:state=>state.business.typeData,
          }),
          pageData(){
               return this.typeData.filter((obj, index) => {
                if (index < this.size * this.currentPage && index >= this.size * (this.currentPage - 1)) {
                  return obj
                }
              })
          }
        },
        created () {
          this.businessTypeGetAll()
        },
        watch:{
          searchValue(value){
            if(!value){
              this.businessTypeGetAll()
            }
          }
        },
        methods: {
            ...mapActions([
                'businessTypeGetAll'
            ]),
         
            showDilog(type,data=typeFormData){
               
                this.typeFormData={...data}
               
                  this.dialogVisible=true
                  this.dialogTyle=type
            },
            onQuery(){
              this.searchValue && this.businessTypeGetAll({typeName:this.searchValue})
            },
            onSubmit(){
                  this.$refs.typeForm.validate( valid => valid && this.commitForm() )
            },
            commitForm(){
                let  formData = new FormData();
                for(let key in this.typeFormData){
                     if(this.typeFormData[key]===null)continue;
                  if(key==='typeIcon'){
                    formData.append('icon',this.typeFormData[key])
                  }else{
                    formData.append(key, this.typeFormData[key]);
                  }
                }
                  if(this.dialogTyle==='edit'){
                    businessTypeUpdate(formData).then(res=>{
                      this.businessTypeGetAll({},false)
                      this.dialogVisible=false
                    }) 
                  }else if(this.dialogTyle==='add'){
                    businessTypeAdd(formData).then(res=>{
                      this.businessTypeGetAll({},false)
                      this.dialogVisible=false
                    }) 
                  }
            },
         
            handleDelete(data){
              this.$confirm(this.$t('commom.deleConfim'), '', {
                confirmButtonText:this.$t('commom.sure'),
                cancelButtonText: this.$t('commom.cancel'),
                type: 'warning'
              }).then(() => {
                  businessTypeDelete({typeId:data.typeId}).then(res=>{
                        let arr=this.typeData.filter(obj=>obj.typeId!=data.typeId)
                        this.$store.commit(BUSINESSTYPE_GETALL,arr)
                    })
              }).catch(res=>{})

              
            },
            handleSizeChange(val){
              this.size = val
            },
            handleCurrentChange(val){
              this.currentPage = val;
            }
        }
    }
</script>
<style lang="less">
  
</style>