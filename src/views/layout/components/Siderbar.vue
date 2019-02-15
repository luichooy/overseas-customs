<template>
  <div class="page-siderbar">
    <Logo :isCollapse="isCollapse"></Logo>
    <div class="menu-wrapper">
      <el-menu
        :default-active="$route.path"
        :collapse="isCollapse"
        background-color="#424f63"
        text-color="#fff"
        active-text-color="#65CEA7"
        unique-opened
        router
        :collapse-transition="true"
        class="page-menu"
      >
        <template v-for="(item, index) in menu">
          <el-menu-item v-if="!item.children" :index="item.path" :key="index">
            <i :class="item.icon"></i>
            <span slot="title">{{ $t(`sidebar.${item.title}`) }}</span>
          </el-menu-item>
          <el-submenu v-else :index="item.path" :key="index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ $t(`sidebar.${item.title}`) }}</span>
            </template>
            <el-menu-item v-for="(citem, cindex) in item.children" :index="citem.path" :key="cindex">
              <span slot="title" style="margin-left:12px;">{{ $t(`sidebar.${citem.title}`) }}</span>
            </el-menu-item>
          </el-submenu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script>
  import Logo from '@/components/Logo/Logo';
  import generateMenu from '@/utils/menu';
  
  export default {
    name: 'PageSiderbar',
    components: {
      Logo
    },
    props: {
      isCollapse: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        menu: []
      };
    },
    created() {
      this.menu = generateMenu();
    },
    methods: {}
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/variable";
  
  .page-siderbar {
    height: 100%;
    background: $sidebarBgColor;
    
    .page-menu {
      height: 100%;
      border-right: none;
      
      &:not(.el-menu--collapse) {
        width: 300px;
      }
    }
    
    .el-menu--collapse .is-active .el-submenu__title i {
      color: #65CEA7;
    }
  }
</style>
