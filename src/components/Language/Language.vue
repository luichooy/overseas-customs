<template>
  <div class="language">
    <el-dropdown trigger="click" @command="toggle">
      <span class="el-dropdown-link">
        <i class="icon el-icon-yto-i18n"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="zh" :disabled="language === 'zh'">中文</el-dropdown-item>
        <el-dropdown-item command="en" :disabled="language === 'en'">English</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  import { setTitle } from '../../utils';
  
  export default {
    name: 'Language',
    computed: {
      language() {
        return this.$store.state.language;
      }
    },
    methods: {
      toggle(lang) {
        this.$i18n.locale = lang;
        this.$store.commit('SET_LANGUAGE', lang);
        setTitle(this.$t(`title.${this.$route.meta.title}`));
        this.$message.success(this.$t('topbar.tipsOfLang'));
      }
    }
  };
</script>

<style scoped>

</style>
