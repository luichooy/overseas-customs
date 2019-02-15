<template>
  <div class="layout">
    <el-container>
      <el-aside :width="menuWidth">
        <Siderbar :isCollapse="isCollapse"></Siderbar>
      </el-aside>
      <el-container>
        <el-header>
          <Topbar :isCollapse="isCollapse" @onCollapseChange="hangleCollapseChange"></Topbar>
        </el-header>
        <el-main
          v-loading="loading"
          element-loading-text="拼命加载中"
        >
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import { Topbar, Siderbar } from './components';
  
  export default {
    name: 'Layout',
    components: {
      Topbar,
      Siderbar
    },
    data() {
      return {
        isCollapse: false
      };
    },
    computed: {
      loading() {
        return this.$store.state.loading;
      },
      menuWidth() {
        return this.isCollapse ? '64px' : '300px';
      }
    },
    methods: {
      hangleCollapseChange() {
        this.isCollapse = !this.isCollapse;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .layout, .el-container {
    height: 100%;
  }
  
  .el-header {
    height: 100%;
    padding: 16px 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, .05);
  }
  
  .el-aside {
    transition: width .3s ease-in-out;
  }
</style>
