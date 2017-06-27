<template>
    <div>
    
        <el-table :data="shopData" border stripe highlight-current-row style="width: 100%">
         
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
            <el-table-column :label="$t('business.shopManag.binfoIcon')" align="center" min-width="150">
                <template scope="scope">
                    <ul class="el-upload-list el-upload-list--picture-card">
                        <li class="el-upload-list__item  " style="width: 80px;height: 80px;margin: 3px 0 -4px 0;">
                            <img :src="scope.row.binfoIcon" alt="" class="el-upload-list__item-thumbnail">
                        </li>
                    </ul>
                </template>
            </el-table-column>
            <el-table-column :label="$t('commom.operation')" align="center" :fixed="$store.getters.isMobile?false:'right'" min-width="277">
                <template scope="scope">
                    <el-button size="small" @click="showDilog('detail',scope.row)" type="warning" icon="information">{{$t('commom.detail')}}
                    </el-button>
                    <el-button size="small" @click="showDilog('edit', scope.row)" type="primary" icon="edit">{{$t('commom.edit')}}
                    </el-button>
                </template>
            </el-table-column>
    
        </el-table>
        <el-dialog v-model="dialogVisible" :close-on-click-modal='false' :size="$store.getters.isMobile?'full': 'small'">
            <shopform :shop='shop' :disabled="dialogTyle==='detail'" :mustPwd="dialogTyle==='add'" :disabledUserName="dialogTyle==='edit'" ref='shopForm' />
            <div style="float: right;margin-bottom: 20px" v-show="dialogTyle!=='detail'">
                <el-button @click="dialogVisible=false">{{$t('commom.cancel')}}</el-button>
                <el-button type="primary" @click="onSubmit">{{$t('commom.sure')}}</el-button>
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
import { busiinfoDetail, busiinfoUpdate, busishopUserCheckByUserName } from 'api/api'
export default {
    data() {
        return {
            shopData: [],
            dialogVisible: false,
            dialogTyle: '',
            shop: {}
        }
    },

    components: {
        shopform,
    },
    created() {
        this.init()
    },
    computed: {
        ...mapState({
            showMap: 'showMap'
        }),
    },
    methods: {
        init() {
            busiinfoDetail({ busiInfoId: this.$store.state.user.busiInfoId }, false).then(res => {
                this.shopData = []
                this.shopData.push(res.data.obj)
            })
        },
        showDilog(type, data) {
            this.shop = { ...data };
            this.dialogTyle = type
            this.dialogVisible = true;
        },
        onSubmit() {
            this.$refs.shopForm.validate(valid => valid && this.commitForm())
        },
        commitForm() {
            let formData = new FormData();
            for (let key in this.shop) {
                if (this.shop[key] == null) continue;
                if (key === 'binfoIcon') {
                    formData.append('icon', this.shop[key])
                } else if (key === 'shopUserIcon') {
                    formData.append('userIcon', this.shop[key])
                } else {
                    formData.append(key, this.shop[key]);
                }
            }
            if (this.dialogTyle === 'edit') {
                busiinfoUpdate(formData).then(res => {
                    this.init()
                    this.dialogVisible = false
                })
            }
        },

    },

}
</script>
<style lang="less">

</style>