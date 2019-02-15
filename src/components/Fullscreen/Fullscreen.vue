<template>
  <div class="fullscreen" @click="toggle">
    <el-tooltip
      :content="isFullscreen ? $t('topbar.cancelScreenfull') : $t('topbar.screenfull')"
      effect="dark"
      placement="bottom"
    >
      <i class="icon el-icon-yto-cancel-fullscreen" v-if="isFullscreen"></i>
      <i class="icon el-icon-yto-fullscreen" v-else></i>
    </el-tooltip>
  </div>
</template>

<script>
  import screenfull from 'screenfull';
  
  export default {
    name: 'Fullscreen',
    data() {
      return {
        isFullscreen: false
      };
    },
    methods: {
      toggle() {
        if (!screenfull.enabled) {
          this.$message.warning('浏览器不支持全屏');
          return;
        }
        screenfull.toggle();
        this.isFullscreen = !screenfull.isFullscreen;
      }
    }
  };
</script>

<style scoped>

</style>
