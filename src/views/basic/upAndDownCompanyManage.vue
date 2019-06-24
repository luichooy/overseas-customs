<template>
  <div class="upanddowm-company-manage">
    <el-card shadow="never">
      <span slot="header">{{$t('common.queryCondition')}}</span>
      <el-form :model="form" inline>
        <el-row>
          <el-col :md="6" :lg="6" :xl="6">
            <el-form-item :label="$t('upAndDownCompanyManage.companyCode') + '：'">
              <el-input v-model="query.companyCode"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="6" :lg="6" :xl="6">
            <el-form-item :label="$t('upAndDownCompanyManage.companyName') + '：'">
              <el-input v-model="query.companyName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="6" :lg="6" :xl="6">
            <el-form-item :label="$t('upAndDownCompanyManage.country') + '：'">
              <el-input v-model="query.country"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="6" :lg="6" :xl="6">
            <el-form-item :label="$t('upAndDownCompanyManage.language') + '：'">
              <el-select v-model="query.language" clearable style="width:202px;">
                <el-option value="zh-cn" :label="$t('language.zh-cn')"></el-option>
                <el-option value="en" :label="$t('language.en')"></el-option>
                <el-option value="zh-tw" :label="$t('language.zh-tw')"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6" :push="18">
            <el-form-item style="margin-bottom: 0;">
              <el-button type="primary" @click="getCompanies">{{$t('common.query')}}</el-button>
              <el-button type="primary" @click="resetQuery">{{$t('common.reset')}}</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card shadow="never" style="margin-top: 16px;">
      <div class="card-header" slot="header">
        <span class="header-title">{{$t('upAndDownCompanyManage.upAndDownCompanyManage')}}</span>
        <div class="operate-wrapper">
          <el-button type="primary" size="small" @click="handleExport">{{$t('common.export')}}</el-button>
          <el-button type="primary" size="small" @click="showDialog('add')">{{$t('common.add')}}</el-button>
          <el-button
            type="primary"
            size="small"
            @click="showDialog('update')"
          >{{$t('common.update')}}</el-button>
          <el-button type="primary" size="small" @click="handleDelete">{{$t('common.delete')}}</el-button>
        </div>
      </div>
      <el-table :data="companies" @selection-change="handleSelectionChange" :height="400">
        <el-table-column type="selection"></el-table-column>
        <el-table-column
          prop="companyCode"
          :label="$t('upAndDownCompanyManage.companyCode')"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="companyName"
          :label="$t('upAndDownCompanyManage.companyName')"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="companyAbbr"
          :label="$t('upAndDownCompanyManage.companyAbbr')"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="telphone"
          :label="$t('upAndDownCompanyManage.telphone')"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="country"
          :label="$t('upAndDownCompanyManage.country')"
          align="center"
        ></el-table-column>
        <el-table-column :label="$t('upAndDownCompanyManage.language')" align="center">
          <template slot-scope="scope">{{ $t(`language.${scope.row.language}`) }}</template>
        </el-table-column>
      </el-table>
      <el-pagination
        :page-sizes="[10, 20, 30, 40]"
        :total="total"
        :page-size="pagesize"
        :current-page="currentpage"
        @size-change="handlePageSizeChange"
        @current-change="handleCurrentChange"
        layout="total, sizes, prev, pager, next, jumper"
        class="pagination"
      ></el-pagination>
    </el-card>
    <el-dialog :title="$t(`common.${dialogAction}`)" :visible.sync="dialogVisible" width="60%">
      <div class="form-dialog">
        <el-form :model="form" :rules="formRules" ref="dialogForm" inline label-position="top">
          <el-row>
            <el-col :span="8">
              <el-form-item
                prop="companyCode"
                :label="$t('upAndDownCompanyManage.companyCode') + '：'"
              >
                <el-input v-model="form.companyCode"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item
                prop="companyName"
                :label="$t('upAndDownCompanyManage.companyName') + '：'"
              >
                <el-input v-model="form.companyName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item
                prop="companyAbbr"
                :label="$t('upAndDownCompanyManage.companyAbbr') + '：'"
              >
                <el-input v-model="form.companyAbbr"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="telphone" :label="$t('upAndDownCompanyManage.telphone') + '：'">
                <el-input v-model="form.telphone"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="country" :label="$t('upAndDownCompanyManage.country') + '：'">
                <el-input v-model="form.country"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="language" :label="$t('upAndDownCompanyManage.language') + '：'">
                <el-select v-model="form.language" style="width:202px;">
                  <el-option value="zh-cn" :label="$t('language.zh-cn')"></el-option>
                  <el-option value="en" :label="$t('language.en')"></el-option>
                  <el-option value="zh-tw" :label="$t('language.zh-tw')"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="encryptId" :label="$t('upAndDownCompanyManage.encryptId') + '：'">
                <el-input v-model="form.encryptId"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="16">
              <el-form-item
                prop="secretKey"
                :label="$t('upAndDownCompanyManage.secretKey') + '：'"
                style="width:100%;"
              >
                <el-input v-model="form.secretKey" readonly style="width:90%">
                  <template slot="append">
                    <el-button
                      type="primary"
                      @click="generateSecretKey"
                    >{{ $t('upAndDownCompanyManage.generateSecretKey') }}</el-button>
                  </template>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <template slot="footer">
        <el-button @click="dialogVisible = false">{{ $t('common.cancel') }}</el-button>
        <el-button type="primary" @click="handlerDialogOk('dialogForm')">{{ $t('common.ok') }}</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
  const originForm = {
    companyCode: '',
    companyName: '',
    companyAbbr: '',
    country: '',
    telphone: '',
    language: '',
    encryptId: '',
    secretKey: ''
  };
  export default {
    data() {
      return {
        query: {
          companyCode: '',
          companyName: '',
          country: '',
          language: ''
        },
        form: {},
        formRules: {
          companyCode: [
            {
              required: true,
              message: '请输入公司编号',
              trigger: 'blur'
            }
          ],
          companyName: [
            {
              required: true,
              message: '请输入公司名称',
              trigger: 'blur'
            }
          ],
          country: [
            {
              required: true,
              message: '请选择国家',
              trigger: 'blur'
            }
          ],
          telphone: [
            {
              required: true,
              message: '请输入电话号码',
              trigger: 'blur'
            }
          ],
          language: [
            {
              required: true,
              message: '请选择语言',
              trigger: 'change'
            }
          ]
        },
        companies: [],
        pagesize: 10,
        currentpage: 1,
        total: 400,
        dialogAction: 'add',
        dialogVisible: false,
        selected: []
      };
    },
    watch: {
      dialogVisible(visible) {
        if (!visible) {
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
        this.getCompanies();
      },
      handlePageSizeChange(size) {
        this.pagesize = size;
        this.getCompanies();
      },
      handleCurrentChange(current) {
        this.currentpage = current;
        this.getCompanies();
      },
      getCompanies() {
        this.$http
          .post('/company/get', {
            query: this.query,
            page_size: this.pagesize,
            cur_page: this.currentpage
          })
          .then(res => {
            if (res.status === 200) {
              this.companies = res.data.list;
              this.total = res.data.total;
            } else {
              this.$message.error(res.message);
            }
          })
          .catch(err => {
            console.log(err);
          });
      },
      showDialog(action) {
        this.dialogAction = action;

        if (action === 'add') {
          this.form = Object.assign({}, originForm);
          this.dialogVisible = true;
        } else if (action === 'update') {
          if (this.selected.length) {
            this.form = Object.assign({}, originForm, this.selected[0]);
            this.dialogVisible = true;
          } else {
            this.$message.warning(this.$t('message.notSelect'));
          }
        }
      },
      handleDelete() {
        if (this.selected.length) {
          this.delete();
        } else {
          this.$message.warning(this.$t('message.notSelect'));
        }
      },
      delete() {
        let ids = [];
        this.selected.forEach(selected => {
          ids.push(selected._id);
        });
        this.$http
          .delete('/company/delete', {
            data: ids
          })
          .then(res => {
            if (res.status === 200) {
              this.getCompanies();
            } else {
              this.$message.error(res.message);
            }
          })
          .catch(error => {
            console.log(error);
          });
      },
      handlerDialogOk(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            if (this.dialogAction === 'add') {
              this.add();
            } else if (this.dialogAction === 'update') {
              this.update();
            }
          } else {
            console.log('error submit!');
            return false;
          }
        });
      },
      add() {
        this.$http
          .post('/company/create', {
            data: this.form
          })
          .then(res => {
            if (res.status === 200) {
              this.dialogVisible = false;
              this.currentpage = 1;
              this.getCompanies();
            } else {
              this.$message.error(res.message);
            }
          })
          .catch(err => {
            console.log(err);
          });
      },
      update() {
        this.$http
          .post('/company/update', this.form)
          .then(res => {
            if (res.status === 200) {
              this.dialogVisible = false;
              this.getCompanies();
            } else {
              this.$message.error(res.message);
            }
          })
          .catch(error => console.log(error));
      },
      handleExport() {
        this.$http
          .get('/company/export', {
            responseType: 'blob'
          })
          .then(data => {
            let blob = new Blob([data], { tppe: 'utf-8' });
            let url = window.URL.createObjectURL(blob);
            let link = document.createElement('a');
            link.style.display = 'none';
            link.href = url;
            link.setAttribute('download', 'company.xlsx');
            document.body.appendChild(link);
            link.click();
            link.remove();
          })
          .catch(err => {
            console.log(err);
          });
      },
      handleSelectionChange(selected) {
        this.selected = selected;
      },
      generateSecretKey() {
        console.log(1);
      }
    },
    mounted() {
      this.getCompanies();
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
