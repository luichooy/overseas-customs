<template>
  <div class="national-port-setting">
    <el-card shadow="never">
      <span slot="header">{{$t('common.queryCondition')}}</span>
      <el-form :model="form" inline>
        <el-row>
          <el-col :md="6" :lg="6" :xl="6">
            <el-form-item :label="$t('nationalPortSetting.area') + '：'">
              <el-input v-model="query.area"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="6" :lg="6" :xl="6">
            <el-form-item :label="$t('nationalPortSetting.country') + '：'">
              <el-input v-model="query.country"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="6" :lg="6" :xl="6">
            <el-form-item :label="$t('nationalPortSetting.city') + '：'">
              <el-input v-model="query.city"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="6" :lg="6" :xl="6">
            <el-form-item :label="$t('nationalPortSetting.port') + '：'">
              <el-input v-model="query.port"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6" :push="18">
            <el-form-item style="margin-bottom: 0;">
              <el-button type="primary" @click="getPorts">{{$t('common.query')}}</el-button>
              <el-button type="primary" @click="resetQuery">{{$t('common.reset')}}</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card shadow="never" style="margin-top: 16px;">
      <div class="card-header" slot="header">
        <span class="header-title">{{$t('nationalPortSetting.nationalPortList')}}</span>
        <div class="operate-wrapper">
          <el-button type="primary" size="small">{{$t('common.import')}}</el-button>
          <el-button type="primary" size="small">{{$t('common.export')}}</el-button>
          <el-button type="primary" size="small" @click="showDialog('add')">{{$t('common.add')}}</el-button>
          <el-button type="primary" size="small" @click="showDialog('update')">{{$t('common.update')}}</el-button>
          <el-button type="primary" size="small" @click="handleDelete">{{$t('common.delete')}}</el-button>
        </div>
      </div>
      <el-table
        :data="ports"
        @selection-change="handleSelectionChange"
        :height="400"
      >
        <el-table-column type="selection"></el-table-column>
        <el-table-column prop="_id" :label="$t('nationalPortSetting.index')"
          align="center"></el-table-column>
        <el-table-column prop="country" :label="$t('nationalPortSetting.country')"
          align="center"></el-table-column>
        <el-table-column prop="city" :label="$t('nationalPortSetting.city')"
          align="center"></el-table-column>
        <el-table-column prop="port" :label="$t('nationalPortSetting.port')"
          align="center"></el-table-column>
        <el-table-column prop="customsCapacity" :label="$t('nationalPortSetting.customsCapacity')"
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
    <el-dialog
      :title="$t(`common.${dialogAction}`)"
      :visible.sync="dialogVisible"
      width="400px"
    >
      <div class="form-dialog">
        <el-form :model="form" :rules="formRules" ref="dialogForm" label-position="left" label-width="120px">
          <el-form-item prop="area" :label="$t('nationalPortSetting.area') + '：'">
            <el-select v-model="form.area" style="width: 100%;">
              <el-option :label="$t('nationalPortSetting.Asia')" value="Asia"></el-option>
              <el-option :label="$t('nationalPortSetting.Europe')" value="Europe"></el-option>
              <el-option :label="$t('nationalPortSetting.Africa')" value="Africa"></el-option>
              <el-option :label="$t('nationalPortSetting.NorthAmerica')" value="North America"></el-option>
              <el-option :label="$t('nationalPortSetting.SouthAmerica')" value="South America"></el-option>
              <el-option :label="$t('nationalPortSetting.Oceania')" value="Oceania"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="country" :label="$t('nationalPortSetting.country') + '：'">
            <el-input v-model="form.country"></el-input>
          </el-form-item>
          <el-form-item prop="city" :label="$t('nationalPortSetting.city') + '：'">
            <el-input v-model="form.city"></el-input>
          </el-form-item>
          <el-form-item prop="port" :label="$t('nationalPortSetting.port') + '：'">
            <el-input v-model="form.port"></el-input>
          </el-form-item>
          <el-form-item prop="customsCapacity" :label="$t('nationalPortSetting.customsCapacity') + '：'">
            <el-input v-model="form.customsCapacity"></el-input>
          </el-form-item>
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
          area: '',
          country: '',
          city: '',
          port: ''
        },
        form: {},
        formRules: {
          area: [
            {
              required: true,
              message: '请选择地区',
              trigger: 'change'
            }
          ],
          country: [
            {
              required: true,
              message: '请选择国家',
              trigger: 'blur'
            }
          ],
          city: [
            {
              required: true,
              message: '请输入城市',
              trigger: 'blur'
            }
          ],
          port: [
            {
              required: true,
              message: '请输入口岸',
              trigger: 'blur'
            }
          ],
          customsCapacity: [
            {
              required: true,
              message: '请输入关务能力',
              trigger: 'blur'
            }
          ]
        },
        ports: [],
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
        this.getPorts();
      },
      handlePageSizeChange(size) {
        this.pagesize = size;
        this.getPorts();
      },
      handleCurrentChange(current) {
        this.currentpage = current;
        this.getPorts();
      },
      getPorts() {
        this.$http.post('/port/get', {
          query: this.query,
          page_size: this.pagesize,
          cur_page: this.currentpage
        })
            .then(res => {
              if (res.status === 200) {
                this.ports = res.data.list;
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
        this.$http.delete('/port/delete', {
          data: ids
        })
            .then(res => {
              if (res.status === 200) {
                this.getPorts();
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
              console.log(this.form);
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
        this.$http.post('/port/create', this.form)
            .then(res => {
              if (res.status === 200) {
                this.dialogVisible = false;
                this.currentpage = 1;
                this.getPorts();
              } else {
                this.$message.error(res.message);
              }
            })
            .catch(err => {
              console.log(err);
            });
      },
      update() {
        this.$http.post('/port/update', this.form)
            .then(res => {
              if (res.status === 200) {
                this.dialogVisible = false;
                this.getPorts();
              } else {
                this.$message.error(res.message);
              }
            })
            .catch(error => console.log(error));
      },
      handleSelectionChange(selected) {
        this.selected = selected;
      }
    },
    mounted() {
      this.getPorts();
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
