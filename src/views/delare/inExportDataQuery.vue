<template>
  <div class="inexport-data-query">
    <el-card shadow="never">
      <span slot="header">{{$t('common.queryCondition')}}</span>
      <el-form :model="form" inline label-position="right" label-width="120px" class="demo-form-inline">
        <el-row>
          <el-col :md="8" :lg="8" :xl="6">
            <el-form-item :label="$t('common.upCompany') + '：'">
              <el-input v-model="form.upCompany" class="input"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="8" :lg="8" :xl="6">
            <el-form-item :label="$t('common.startTime') + '：'">
              <el-date-picker
                v-model="form.startTime"
                type="datetime"
                :editable="false"
                class="input"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :md="8" :lg="8" :xl="6">
            <el-form-item :label="$t('common.endTime') + '：'">
              <el-date-picker
                v-model="form.endTime"
                type="datetime"
                :editable="false"
                class="input"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6" :push="18">
            <el-form-item style="margin-bottom: 0;">
              <el-button type="primary" @click="">{{$t('common.query')}}</el-button>
              <el-button type="primary" @click="">{{$t('common.reset')}}</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card shadow="never" style="margin-top: 16px;">
      <div class="card-header" slot="header">
        <span class="header-title">{{$t('inExportDataQuery.inExportDataQuery')}}</span>
        <div class="operate-wrapper">
          <el-button type="primary" size="small">{{$t('common.export')}}</el-button>
        </div>
      </div>
      <el-table :data="table" :height="400">
        <el-table-column :label="$t('common.date')" align="center"></el-table-column>
        <el-table-column :label="$t('common.upCompany')" align="center"></el-table-column>
        <el-table-column :label="$t('inExportDataQuery.downCompany')" align="center"></el-table-column>
        <el-table-column :label="$t('inExportDataQuery.expressNum')" align="center"></el-table-column>
        <el-table-column :label="$t('common.operation')" align="center"></el-table-column>
      </el-table>
      <el-pagination
        :page-sizes="[10, 20, 30, 40]"
        :total="total"
        @size-change="handlePageSizeChange"
        @current-change="handleCurrentChange"
        layout="total, sizes, prev, pager, next, jumper"
        class="pagination">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          upCompany: '',
          customId: '',
          transitNumber: '',
          startTime: '',
          endTime: ''
        },
        table: [],
        pagesize: 10,
        currentpage: 1,
        total: 400
      }
    },
    methods: {
      handlePageSizeChange(size) {
        console.log(size);
        this.pagesize = size;
      },
      handleCurrentChange(current) {
        console.log(current);
        this.currentpage = current;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .input {
    width: 200px;
  }
  
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
