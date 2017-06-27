<template>
  <div>
    <el-row :gutter="20">
    	<el-col :span="3">
      	<el-select  size="large" v-model="page.typeId" @change='onQuery(true)' :placeholder="$t('commom.select')" >
            <el-option
              v-for="item in typeData"
              :label="item.typeName"
              :value="item.typeId" 
              
              :key="item.typeId">
            </el-option>
         </el-select>
      </el-col>
      <el-col :span="3">
          <el-select  size="large" v-model="page.areaName" @change='onQuery(true)' :placeholder="$t('commom.select')" >
            <el-option
              v-for="item in areaData"
              :label="item.areaName"
              :value="item.areaCode" :key="item.areaId" >
            </el-option>
          </el-select>
      </el-col>
      <el-col :span="6">
        <el-input size="large" @keyup.native.enter='onQuery()' v-model="page.binfoName" :placeholder="$t('commom.input')">
        </el-input>
      </el-col>
      <el-col :span="2">
        <el-button size="large" icon="search" @click="onQuery()">{{$t('commom.search')}}</el-button>
      </el-col>
      <el-col :span="4" :offset="6">
        <el-button size="large" style="float: right;margin:  0px 20px" type="primary" icon="plus" @click="showDilog('add')">
          {{$t('commom.add')}}
        </el-button>
      </el-col>
    </el-row>
    <br>
    <el-table :data="shopData.data" border stripe highlight-current-row style="width: 100%">
    	 <el-table-column :label="$t('commom.seq')"
                     align="center"
                       width="100">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.$index+1+(page&&page.start||0 )}}</span>
                </template>
            </el-table-column>
      <el-table-column :label="$t('business.shopManag.binfoName')" align="center" min-width="150">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.binfoName }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('business.shopManag.binfoTitle')" align="center" min-width="150">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.binfoTitle }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('business.shopManag.binfoAddr')" align="center" min-width="150">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.binfoAddr }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('business.shopManag.type')" align="center" min-width="150">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.typeName }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('business.shopManag.areaId')" align="center" min-width="150">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.areaName }}</span>
        </template>
      </el-table-column>
       <el-table-column
        :label="$t('business.shopManag.binfoIcon')"
        align="center"
        min-width="150">
        <template scope="scope">
          <ul class="el-upload-list el-upload-list--picture-card">
              <li class="el-upload-list__item  " style="width: 80px;height: 80px;margin: 3px 0 -4px 0;">
                <img :src="scope.row.binfoIcon" alt="" class="el-upload-list__item-thumbnail">
              </li>
          </ul>
        </template>
      </el-table-column>
      <el-table-column :label="$t('business.shopManag.isShow')" align="center" min-width="150">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.delFlag==0?$t('business.shopManag.state1'):(scope.row.delFlag==1?$t('business.shopManag.state2'):$t('business.shopManag.state3')) }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('commom.operation')" align="center" min-width="277" :fixed="$store.getters.isMobile?false:'right'">
        <template scope="scope">
          <el-button size="small" @click="showDilog('detail',scope.row)" type="warning" icon="information">{{$t('commom.detail')}}
          </el-button>
          <el-button size="small" @click="showDilog('edit', scope.row)" type="primary" icon="edit">{{$t('commom.edit')}}
          </el-button>
          <el-button size="small" @click="handleDelete(scope.row)" type="danger" icon="delete">{{$t('commom.delete')}}
          </el-button>
        </template>
      </el-table-column>


    </el-table>
    <el-pagination 
      style="overflow: auto" 
      @size-change="handleSizeChange" 
      @current-change="handleCurrentChange" 
      :current-page="currentPage" 
      :page-sizes="pageSizes" 
      :page-size="page.length" 
      layout="total, sizes, prev, pager, next, jumper" 
      :total="shopData.recordsTotal"/>
  
  
    <el-dialog    v-model="dialogVisible" :close-on-click-modal='false' :size="$store.getters.isMobile?'full': 'small'">
      <shopform :shop='shop' :disabled="dialogTyle==='detail'" :mustPwd="dialogTyle==='add'"  :disabledUserName="dialogTyle==='edit'" ref='shopForm'/>
      <div style="float: right;margin-bottom: 20px" v-show="dialogTyle!=='detail'">
        <el-button @click="dialogVisible=false">{{$t('commom.cancel')}}</el-button>
        <el-button type="primary" @click="onSubmit" >{{$t('commom.sure')}}</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import {
    mapActions,
    mapState 
  } from 'vuex'
  import shopform from './businessComponents/shopForm'
  import { busiinfoDetail,busiinfoDelete,busiinfoUpdate,busiinfoAdd,busishopUserCheckByUserName,mapareasetList} from 'api/api'
 
  let shop={
    areaId:'',
    ruleId:'',
    binfoLongitude:'',
    binfoLatitude:'',
    binfoZhCnAddr:'',
    binfoJaJpAddr:'',
    binfoKoKrAddr:'',
    binfoEnUsAddr:'',
    binfoDescription:'',
    binfoZhCnDescription:'',
    binfoJaJpDescription:'',
    binfoEnUsDescription:'',
    binfoKoKrDescription:'',
    typeId:'',
    binfoIcon:'',
    binfoZhCnName:'',
    binfoJaJpName:'',
    binfoKoKrName:'',
    binfoEnUsName:'',
    binfoZhCnTitle:'',
    binfoJaJpTitle:'',
    binfoKoKrTitle:'',
    binfoEnUsTitle:'',
    shopRealName:'',
    shopUserEmail:'',
    shopUserIcon:'',
    shopUserName:'',
    shopUserPwd:'',
    shopUserRoleId:'',
    shopUserTel:'',
    clientId:'', 
    clientSecret:'',
    delFlag:0
  }

  export default {

    data() {

      return {
        areaData:[{areaName:this.$t('commom.all'),areaCode:''}],
        page: {
        	typeId:'',
					areaName:'',
	        binfoName:'',
          start: 0,
          length: 10,
          draw: 1
        },
        currentPage: 1,
        pageSizes: [10, 20, 30],
        dialogVisible: false,
        dialogTyle: '',
        shop: {...shop}
      }
    },
 
    components:{
        shopform,
    },
    created() {
    	this.businessTypeGetAll() ;
      this.busiinfoPages(this.page)
      mapareasetList().then(res=>{
        this.areaData=this.areaData.concat(res.data.obj) 
      })
    },

    computed: {
      ...mapState({
      	
        shopData: state => state.business.shopData,
        showMap:'showMap'
      }),
      typeData(){
      	let arr=[{typeName:this.$t('commom.all'),typeId:''},...this.$store.state.business.typeData]
      	return arr
      }
      
   
    },
    watch: {
      'page.binfoName'(value){
        if(!value){
          this.busiinfoPages(this.page)
        }
      }
    },
    methods: {
      ...mapActions([
      	'businessTypeGetAll',
        'busiinfoPages'
      ]),
      showDilog(type, data ) {
        
				
        if(data){
          busiinfoDetail({busiInfoId:data.busiInfoId},false).then(res=>{
            this.shop=res.data.obj
            delete this.shop.busiInfoDetail
          })
        }else{
          this.shop={...shop};
        }
        this.dialogTyle = type
        this.dialogVisible = true;
      },
      onQuery(type) {
      	console.log(this.page)
      	if(this.page.binfoName==''&&!type)return
            this.busiinfoPages(this.page)
     
       
      },
      handleDelete(data) {
        this.$confirm(this.$t('commom.deleConfim'), '', {
          confirmButtonText:this.$t('commom.sure'),
          cancelButtonText: this.$t('commom.cancel'),
          type: 'warning'
        }).then(() => {
          busiinfoDelete({busiInfoId:data.busiInfoId}).then(res=>{
            this.busiinfoPages(this.page)
          })
        }).catch(res=>{
          
        }) 
      },
      onSubmit() {
        this.$refs.shopForm.validate( valid => valid && this.commitForm() )
      },
      commitForm(){
         let  formData = new FormData();
         for(let key in this.shop){
           if(this.shop[key] == null)  continue;
           if(key==='binfoIcon'){
                formData.append('icon',this.shop[key])
           }else if(key==='shopUserIcon'){
               formData.append('userIcon',this.shop[key])
           }else{
                formData.append(key, this.shop[key]);
           }
         }
          if(this.dialogTyle==='edit'){
            busiinfoUpdate(formData).then(res=>{
              this.busiinfoPages(this.page)
              this.dialogVisible=false
            }) 
          }else if(this.dialogTyle==='add'){
            busishopUserCheckByUserName({
              shopUserName:this.shop.shopUserName,
            }).then(res=>{
              if(res.data.obj){
                busiinfoAdd(formData).then(res=>{
                  this.busiinfoPages(this.page)
                  this.dialogVisible=false
                })
              }
            }).catch(msg=>{})
          }
      },
       getpageData(){
	       	this.busiinfoPages({...this.page})
        },
		handleSizeChange(val) {
			this.page.length = val
			this.page.start = (this.currentPage - 1) * this.page.length
	        	this.getpageData()
		},
		handleCurrentChange(val) {
			this.currentPage = val;
			this.page.start = (this.currentPage - 1) * this.page.length
			setTimeout(()=>{
	        	this.getpageData()
	        },0)
		},
      
    },
     
  }
</script>
<style lang="less">

</style>