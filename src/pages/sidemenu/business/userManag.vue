<template>
  <div>
    <el-row :gutter="20">
      <!--<el-col :span="6">
                <el-input size="large" @keyup.native.enter='onQuery' v-model="searchValue" :placeholder="$t('userManag.searchAlert')"></el-input>
            </el-col>
            <el-col :span="2">
                <el-button size="large" icon="search"  @click="onQuery">{{$t('commom.search')}}</el-button>
            </el-col>-->
      <el-col :span="4"
              :offset="20">
        <el-button size="large" type="primary"
                   icon="plus" style="float: right;margin:  0px 20px"
                   @click="showDilog('add')">
          {{$t('commom.add')}}
        </el-button>
      </el-col>
    </el-row>
    <br>
    <el-table :data="shopUsers"
              border
              stripe
              highlight-current-row
              style="width: 100%">
       <el-table-column :label="$t('commom.seq')"
                     align="center"
                      width="100">
        <template scope="scope">
            <span style="margin-left: 10px">{{ scope.$index+1}}</span>
        </template>
    </el-table-column>
      <el-table-column :label="$t('business.userManag.shopUserName')"
                       align="center"
                       min-width="150">
        <template scope="scope">
          <span>{{ scope.row.shopUserName }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('business.userManag.shopRealName')"
                       align="center"
                       min-width="150">
        <template scope="scope">
          <span>{{ scope.row.shopRealName }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('business.userManag.shopUserEmail')"
                       align="center"
                       min-width="150">
        <template scope="scope">
          <span>{{ scope.row.shopUserEmail }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('business.userManag.shopUserTel')"
                       align="center"
                       min-width="150">
        <template scope="scope">
          <span>{{ scope.row.shopUserTel }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('business.userManag.shopUserIcon')"
                       align="center"
                       min-width="150">
        <template scope="scope">
          <ul class="el-upload-list el-upload-list--picture-card">
            <li class="el-upload-list__item  "
                style="width: 80px;height: 80px;margin: 3px 0 -4px 0;">
              <img :src="scope.row.shopUserIcon"
                   alt=""
                   class="el-upload-list__item-thumbnail">
            </li>
          </ul>
        </template>
      </el-table-column>
      <el-table-column :label="$t('commom.operation')"
                       align="center"
                       :fixed="$store.getters.isMobile?false:'right'"
                       min-width="255">
        <template scope="scope">
          <el-button size="small"
                     @click="showDilog('detail',scope.row)"
                     type="warning"
                     icon="information">
            {{$t('commom.detail')}}
          </el-button>
          <el-button size="small"
                     @click="showDilog('edit', scope.row)"
                     type="primary"
                     icon="edit">
            {{$t('commom.edit')}}
          </el-button>
          <el-button size="small"
                     @click="handleDelete(scope)"
                     type="danger"
                     icon="delete">
            {{$t('commom.delete')}}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--<el-pagination 
        style="overflow: auto" 
        @size-change="handleSizeChange" 
        @current-change="handleCurrentChange" 
        :current-page="currentPage" 
        :page-sizes="pageSizes" 
        :page-size="page.length" 
        layout="total, sizes, prev, pager, next, jumper" 
        :total="1"/>-->
    <el-dialog v-model="dialogVisible"
               :close-on-click-modal='false'
               :size="$store.getters.isMobile?'full': 'small'">
      <userform :userForm='userformData'
                :disabled="dialogTyle==='detail'"
                :userNameDisabled="dialogTyle==='edit'"
                ref='userform' />
      <div style="float: right;margin-bottom: 20px"
           v-show="dialogTyle!=='detail'">
        <el-button @click="dialogVisible=false">{{$t('commom.cancel')}}</el-button>
        <el-button type="primary"
                   @click="onSubmit">{{$t('commom.sure')}}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  mapActions,
  mapState
} from 'vuex'
import {
  busishopUserAdd,
  busishopUserUpdate,
  busishopUserDelete,
  busishopUserDetail,
  busishopUserCheckByUserName
} from 'api/api';
import userform from './businessComponents/userForm'
let userformData = {
  shopUserName: '',
  shopUserPwd: '',
  shopUserTel: '',
  shopRealName: '',
  shopUserEmail: '',
  shopUserIcon: '',
  shopUserRoleId: ''
}
export default {
	name:'userManager',
  data() {
    return {
      searchValue: '',
      // page: {
      //   start: 0,
      //   length: 10,
      //   draw: 1
      // },
      // currentPage: 1,
      // pageSizes: [10, 20, 30],
      dialogVisible: false,
      dialogTyle: '',
      userformData: {
        ...userformData
      }
    }
  },
  components: {
    userform
  },
  created() {
    this.busishopUserPages()
  },
  computed: {
    ...mapState({
      shopUsers: state => state.business.shopUsers
    })
  },
  methods: {
    ...mapActions([
      'busishopUserPages'
    ]),
    showDilog(type, obj = userformData) {
      this.dialogVisible = true
      this.dialogTyle = type
        this.userformData = { ...obj }
    },
    // onQuery(){

    // },
    onSubmit() {
      this.$refs.userform.validate(valid => valid && this.commitForm())
    },
    commitForm() {
      let formData = new FormData();
      for (let key in this.userformData) {
        if (this.userformData[key] === null) continue;
        if (key === 'shopUserIcon') {
          formData.append('icon', this.userformData[key]);
        } else {
          formData.append(key, this.userformData[key]);
        }
      }

      if (this.dialogTyle === 'edit') {
        busishopUserUpdate(formData).then(res => {
          this.dialogVisible = false
          this.busishopUserPages()
        })
      } else if (this.dialogTyle === 'add') {
        busishopUserAdd(formData).then(res => {
          this.dialogVisible = false
          this.busishopUserPages()
        })
      }
    },
    handleDelete(obj) {

      this.$confirm(this.$t('commom.deleConfim'), '', {
        confirmButtonText: this.$t('commom.sure'),
        cancelButtonText: this.$t('commom.cancel'),
        type: 'warning'
      }).then(() => {
        busishopUserDelete({
          shopUserId: obj.row.shopUserId
        }).then(res => {
          this.busishopUserPages()
        })
      }).catch(res => { })
    },
    // handleSizeChange(obj){

    // },
    // handleCurrentChange(){

    // },
  }
}
</script>

<style lang="less">

</style>