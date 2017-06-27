<template>
  <section>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-input size="large" v-model="condition"  @keyup.native.enter='search'
                  :placeholder="$t('sysRole.searchPlaceHolder')"></el-input>
      </el-col>
      <el-col :span="2">
        <el-button size="large" icon="search"
                   @click="search">{{$t('commom.search')}}</el-button>
      </el-col>
      <el-col :span="6"
              :offset="10">
        <el-button size="large" type="primary"
                   icon="plus"
                   style="float: right;margin:  0px 20px"
                   @click="showDetail(null,null,'add')">
          {{$t('commom.add')}}
        </el-button>
      </el-col>
    </el-row>
    <br>
    <el-table :data="roleDate.data"
              border
              stripe
              highlight-current-row
              style="width: 100%">
	      <el-table-column :label="$t('commom.seq')"
	             align="center"
	             width="100">
	        <template scope="scope">
	            <span style="margin-left: 10px">{{ scope.$index+1+(page&&page.start||0 )}}</span>
	        </template>
	    </el-table-column>
	   
      <el-table-column prop="roleName"
                       :label="$t('sysRole.roleName')"
                       min-width="180"
                       align="center">
      </el-table-column>
      <el-table-column prop="roleLevel"
                       :label="$t('sysRole.roleLevel')"
                       min-width="180"
                       align="center">
      </el-table-column>
      <el-table-column prop="isShow"
                       :label="$t('sysRole.isShow')"
                       :formatter="formatterIsShow"
                      min-width="180"
                       align="center">
      </el-table-column>
      <el-table-column :label="$t('commom.operation')"
                       align="center"
                       :fixed="$store.getters.isMobile?false:'right'"
                        min-width="277">
        <template scope="scope">
          <el-button size="small"
                     type="warning"
                     icon="information"
                     @click="showDetail(scope.$index, roleDate.data,'detail')">
            {{$t("commom.detail")}}
          </el-button>
          <el-button type="primary"
                     size="small"
                     icon="edit"
                     @click="showDetail(scope.$index, roleDate.data,'edit')">
            {{$t('commom.edit')}}
          </el-button>
          <el-button size="small"
                     type="danger"
                     icon="delete"
                     @click="deleteRole(scope.$index, roleDate.data)">
            {{$t('commom.delete')}}
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :title="$t(showType=='detail'?'sysRole.showRole':(showType=='add'?'sysRole.addRole':(showType=='edit'?'sysRole.upDateRole':(''))))"
               v-model="dialogVisible"
               :size="$store.getters.isMobile?'full': 'small'">
      <sysRoleDetail :allSysResources="allSysResources"
                     :form="form"
                     ref="sysRoleForm"
                     :disabled="showType=='detail'"></sysRoleDetail>
                     
      <div style="float: right;margin-bottom: 20px">
      	<el-button @click="dialogVisible = false">{{$t('commom.cancel')}}</el-button>
        <el-button type="primary"
                   v-show="showType=='edit'||showType=='add'"
                   @click="updateOrAdd">
          {{$t('commom.sure')}}
        </el-button>
			</div>
			
     <!-- <div slot="footer"
           class="dialog-footer">
        
      </div>-->
    </el-dialog>

    <el-pagination style="overflow: auto"
                   @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   :current-page="currentPage"
                   :page-sizes="pageSizes"
                   :page-size="page.pageSize"
                   layout="total, sizes, prev, pager, next, jumper"
                   :total="roleDate.recordsTotal" />
  </section>
</template>


<script>
import sysRoleDetail from './sysRoleComponents/detail'
import { mapActions, mapState } from 'vuex'
import { sysRoleGetDetailData } from "api/api"
import { getAllByParentId } from "api/api"
import { sysRoleUpdate } from "api/api"
export default {
  data() {
    return {
      condition: "",
      allSysResources: [],
      form: {
        roleType:0,
        isShow: true,
        sysResources: [],
        roleId: ""
      },
      page: {
        start: 0,
        length: 10,
        draw: 1
      },
      currentPage: 1,
      pageSizes: [10, 20, 30],
      dialogVisible: false,
      showType: "detail"
    }
  },
  components: {
    sysRoleDetail
  },
  created() {
    this.getRoleByPage(this.page);
    getAllByParentId({ parentId: null }, false).then((res) => {
      this.allSysResources = res.data.obj;
    })
  },
  computed: {
    ...mapState({
      roleDate: state => state.sysRole.tableDate,
      formData: state => state.sysRole.tableDate,
    }),
  },
  watch: {
    condition(v) {
      if (!v) {
        this.getRoleByPage(this.page)
      }
    }
  },
  methods: {
    deleteRole(index, rows) {
      let self = this;
      this.$msgbox({
        title: self.$t("commom.alertTitle"),
        message: self.$t("sysRole.deleteRoleAlert"),
        showCancelButton: true,
        confirmButtonText: self.$t("commom.yes"),
        cancelButtonText: self.$t("commom.no"),
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = self.$t('commom.loading');
            this.sysRoledelete({ roleId: rows[index].roleId }).then(() => {
              this.search;
              instance.confirmButtonLoading = false;
              this.getRoleByPage({ ...this.page });
              done();
            }).catch(() => {
              instance.confirmButtonLoading = false;
              done();
            })
          } else {
            done();
          }
        }
      })
    },
    ...mapActions([
      "getRoleByPage",
      "sysRoleAdd",
      "sysRoledelete"
    ]),
    handleSizeChange(val) {
      this.page.length = val
      this.page.start = (this.currentPage - 1) * this.page.length
      this.search();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.page.start = (this.currentPage - 1) * this.page.length
     
      setTimeout(()=>{
      	 this.search();
      },0)
    },
    formatterIsShow(row, column) {
      if (row.isShow) {
        return this.$t("commom.yes")
      } else {
        return this.$t("commom.no")
      }
    },
    
    showDetail(index, rows, type) {
      if (this.$refs.sysRoleForm) {
        this.$refs.sysRoleForm.resetFields();
      }
      this.showType = type;
      this.dialogVisible = true;
      if (type != 'add') {
        sysRoleGetDetailData({ roleId: rows[index].roleId }, false).then((res) => {
          this.form = res.data.obj
          this.form.sysResources = this.form.sysResources.map((obj) => {
            return obj.resId
          })
        })
      } else {
        this.form = {
          roleType:0,
          isShow: true,
          sysResources: [],
          roleId: ""
        }
      }
    },
    search() {
        this.getRoleByPage({ ...this.page, roleName: this.condition });
    },
    updateOrAdd() {
      this.$refs.sysRoleForm.validate(valid => {
        if (valid) {
          if (this.showType == 'add') {
            this.form.sysResources = this.form.sysResources.map((obj) => {
              return { resId: obj }
            })
            this.sysRoleAdd(this.form).then(() => {
            	 this.getRoleByPage({ ...this.page });
              this.search;
              this.dialogVisible = false
            })
          } else if (this.showType == "edit") {
            this.form.sysResources = this.form.sysResources.map((obj) => {
              return { resId: obj }
            })
            sysRoleUpdate(this.form, true).then(() => {
            	 this.getRoleByPage({ ...this.page });
              this.search;
              this.dialogVisible = false
            })
          }
        }
      })
    }
  }
}
</script>
