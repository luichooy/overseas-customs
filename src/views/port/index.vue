<template>
  <div class="port-wrapper">
    <el-card shadow="never">
      <span slot="header">{{$t('common.queryCondition')}}</span>
      <div class="query-wrapper">
        <span>{{  $t('port.country') + '：' }}</span>
        <el-select v-model="query.country" clearable>
          <el-option v-for="country in countries" :key="country" :label="$t(`country.${country}`)"
            :value="country"></el-option>
        </el-select>
        <el-button type="primary" @click="getPorts" style="margin-left: 16px;">{{$t('common.query')}}</el-button>
      </div>
    </el-card>
    <el-card shadow="never" style="margin-top: 8px;">
      <div class="ports-wrapper">
        <ul class="port-list" v-if="ports.length">
          <li v-for="port in ports" :key="port._id" class="port-item">
            <h2 class="city">{{ port.city }}</h2>
            <p class="port">
              <span class="name">{{ port.port }}：</span>
              <span class="capacity">{{ port.customsCapacity }}</span>
            </p>
          </li>
        </ul>
        <div class="no-ports" v-else>
          <img src="../../assets/images/port.jpg" alt="no-port" width="100%">
          <p class="no-ports-text">{{ $t('port.noPortsText') }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        query: {
          country: ''
        },
        continent: '',
        countries: [],
        ports: []
      };
    },
    methods: {
      getCountries() {
        this.$http.get(`/port/getCountries?continent=${this.continent}`)
            .then(res => {
              if (res.status === 200) {
                this.countries = res.data;
              } else {
                this.$message.error(res.message);
              }
            })
            .catch(err => {
              console.log(err);
            });
      },
      getPorts() {
        this.$http.post('/port/get', {
          query: this.query,
          page_size: 1000000,
          cur_page: 1
        })
            .then(res => {
              if (res.status === 200) {
                this.ports = res.data.list;
              } else {
                this.$message.error(res.message);
              }
            })
            .catch(err => {
              console.log(err);
            });
      }
    },
    created() {
      this.continent = this.$route.params.continent;
      this.getCountries();
    },
    beforeRouteUpdate(to, from, next) {
      this.continent = to.params.continent;
      this.getCountries();
      next();
    }
  };
</script>

<style lang="scss" scoped>
  
  .ports-wrapper{
    margin-bottom: -16px;
  }
  
  .port-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    .port-item {
      width: 300px;
      height: 250px;
      margin-bottom: 16px;
      text-align: center;
      border: 1px solid goldenrod;
      border-radius: 4px;
      
      .city {
        margin: 50px;
      }
      
      .port {
        line-height: 2.5;
        .name {
          color: #838385;
        }
        
        .capacity {
          color: #313033;
        }
      }
    }
  }
  
  .no-ports {
    position: relative;
    
    .no-ports-text {
      position: absolute;
      top: 16px;
      left: 16px;
      font-size: 25px;
      color: goldenrod;
    }
  }
</style>
