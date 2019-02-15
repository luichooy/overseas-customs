<template>
  <div class="national-port-setting">
    <el-card shadow="never">
      <span slot="header">{{$t('common.queryCondition')}}</span>
      <el-form :model="query" inline label-width="130px" label-position="left" size="medium">
        <el-row>
          <el-col>
            <el-form-item :label="$t('idCardManage.name') + '：'">
              <el-input v-model="query.name" type="textarea" :rows="3" style="width: 540px;"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :sm="12" :md="8" :lg="8" :xl="6">
            <el-form-item :label="$t('idCardManage.telphone') + '：'">
              <el-input v-model="query.telphone"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="12" :md="8" :lg="8" :xl="6">
            <el-form-item :label="$t('idCardManage.credentialsType') + '：'">
              <el-select v-model="query.credentialsType" clearable>
                <el-option value="idCard" :label="$t('idCardManage.idCard')"></el-option>
                <el-option value="passport" :label="$t('idCardManage.passport')"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :sm="12" :md="8" :lg="8" :xl="6">
            <el-form-item :label="$t('idCardManage.credentialsNo') + '：'">
              <el-input v-model="query.credentialsNo"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="12" :md="8" :lg="8" :xl="6">
            <el-form-item :label="$t('idCardManage.isUpload') + '：'">
              <el-select v-model="query.isUpload" clearable>
                <el-option value="yes" :label="$t('idCardManage.yes')"></el-option>
                <el-option value="no" :label="$t('idCardManage.no')"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :sm="12" :md="8" :lg="8" :xl="6">
            <el-form-item :label="$t('idCardManage.status') + '：'">
              <el-select v-model="query.status" clearable>
                <el-option value="unchecked" :label="$t('idCardManage.unChecked')"></el-option>
                <el-option value="chekced" :label="$t('idCardManage.checked')"></el-option>
                <el-option value="failcheck" :label="$t('idCardManage.failChecked')"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6" :push="18">
            <el-form-item style="margin-bottom: 0;">
              <el-button type="primary" @click="getCustomers">{{$t('common.query')}}</el-button>
              <el-button type="primary" @click="resetQuery">{{$t('common.reset')}}</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card shadow="never" style="margin-top: 16px;">
      <div class="card-header" slot="header">
        <span class="header-title">{{$t('idCardManage.idCardManage')}}</span>
        <div class="operate-wrapper">
          <el-radio-group v-model="exportType" size="small" style="margin-right: 20px;">
            <el-radio label="horizontal">{{$t('idCardManage.hExport')}}</el-radio>
            <el-radio label="vertical">{{$t('idCardManage.vExport')}}</el-radio>
          </el-radio-group>
          <el-button type="primary" size="small">{{$t('idCardManage.batchExport')}}</el-button>
          <el-button type="primary" size="small">{{$t('idCardManage.selectExport')}}</el-button>
        </div>
      </div>
      <el-table
              :data="customers"
              @selection-change="handleSelectionChange"
              :height="400"
      >
        <el-table-column type="selection"></el-table-column>
        <el-table-column prop="_id" :label="$t('idCardManage.index')"
                         align="center"></el-table-column>
        <el-table-column prop="country" :label="$t('idCardManage.name')"
                         align="center"></el-table-column>
        <el-table-column prop="city" :label="$t('idCardManage.telphone')"
                         align="center"></el-table-column>
        <el-table-column prop="port" :label="$t('idCardManage.credentialsNo')"
                         align="center"></el-table-column>
        <el-table-column prop="customsCapacity" :label="$t('idCardManage.isUpload')"
                         align="center"></el-table-column>
        <el-table-column prop="customsCapacity" :label="$t('idCardManage.credentialsType')"
                         align="center"></el-table-column>
        <el-table-column prop="customsCapacity" :label="$t('idCardManage.uploadTime')"
                         align="center"></el-table-column>
        <el-table-column prop="customsCapacity" :label="$t('idCardManage.status')"
                         align="center"></el-table-column>
        <el-table-column prop="customsCapacity" :label="$t('idCardManage.checkTime')"
                         align="center"></el-table-column>
        <el-table-column prop="customsCapacity" :label="$t('idCardManage.checker')"
                         align="center"></el-table-column>
        <el-table-column prop="customsCapacity" :label="$t('common.operation')"
                         align="center"></el-table-column>
      </el-table>
      <el-pagination
              :page-sizes="[10, 20, 30, 40]"
              :total="total"
              :page-size="pagesize"
              :current-page="currentpage"
              @size-change="handlePageSizeChange"
              @current-change="handleCurrentChange"
              layout="total, sizes, prev, pager, next, jumper"
              class="pagination">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
  const originForm = {
    area: '',
    country: '',
    city: '',
    port: '',
    customsCapacity: ''
  };
  export default {
    data() {
      return {
        query: {
          name: '',
          telphone: '',
          credentialsType: '',
          credentialsNo: '',
          isUpload: '',
          status: ''
        },
        customers: [],
        exportType: 'horizontal',
        pagesize: 10,
        currentpage: 1,
        total: 0
      };
    },
    watch: {
      dialogVisible(visible) {
        if (!visible) {
          this.form = Object.assign({}, originForm);
          this.$refs.dialogForm.resetFields();
        }
      }
    },
    methods: {
      resetQuery() {
        for (let key in this.query) {
          this.query[key] = '';
        }
        this.currentpage = 1;
        this.getCustomers();
      },
      handlePageSizeChange(size) {
        this.pagesize = size;
        this.getCustomers();
      },
      handleCurrentChange(current) {
        this.currentpage = current;
        this.getCustomers();
      },
      getCustomers() {
        this.$http.post('/port/get', {
          query: this.query,
          page_size: this.pagesize,
          cur_page: this.currentpage
        }).then(res => {
          if (res.status === 200) {
            this.customers = res.data.list;
            this.total = res.data.total;
          } else {
            this.$message.error(res.message);
          }
        }).catch(err => {
          console.log(err);
        });
      },
      handleSelectionChange(selected) {
        this.selected = selected;
      }
    },
    mounted() {
      this.getCustomers();
    }
  };
</script>

<style lang="scss" scoped>
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .pagination {
    margin-top: 20px;
    text-align: right;
  }
</style>
