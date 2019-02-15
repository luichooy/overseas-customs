<template>
  <div class="walk-process">
    <el-card shadow="never">
      <span slot="header">{{$t('common.queryCondition')}}</span>
      <el-form :model="form">
        <el-row>
          <el-col :span="24">
            <el-form-item :label="$t('walkProcess.waybillNum') + '：'">
              <el-input v-model="form.upCompany" type="textarea" :rows="3" :placeholder="$t('walkProcess.placeholder') "></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" :offset="16">
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
          <el-button type="primary" size="small">导出</el-button>
        </div>
      </div>
      <el-table :data="table" :height="400">
        <el-table-column :label="$t('walkProcess.serialNum')" align="center"></el-table-column>
        <el-table-column :label="$t('walkProcess.waybillNum')" align="center"></el-table-column>
        <el-table-column :label="$t('walkProcess.latestTrack')" align="center"></el-table-column>
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
