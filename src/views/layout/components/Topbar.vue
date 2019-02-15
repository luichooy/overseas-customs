<template>
  <div class="page-topbar">
    <div class="topbar-left">
      
      <div class="menu-collapse"
        @click="toggleMenu"
        :style="{transform: 'rotateZ(' + (this.isCollapse ? '90' : '0') + 'deg)'}"
      >
        <i class="el-icon-yto-menu"></i>
      </div>
    </div>
    <div class="topbar-right">
      <ul class="actions-wrapper">
        <li class="action action-fullscreen">
          <Fullscreen></Fullscreen>
        </li>
        <li class="action action-i18n">
          <Language></Language>
        </li>
        <li class="action action-more">
          <i class="icon el-icon-more"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Fullscreen from '@/components/Fullscreen/Fullscreen';
  import Language from '@/components/Language/Language';
  
  export default {
    name: 'PageTopbar',
    components: {
      Fullscreen,
      Language
    },
    props: {
      isCollapse: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      backHome() {
        this.$router.push('/');
      },
      toggleMenu() {
        this.$emit('onCollapseChange');
      }
    }
  };
</script>

<style lang="scss" scoped>
  .page-topbar {
    display: flex;
    height: 28px;
    line-height: 28px;
    justify-content: space-between;
    
    .topbar-left {
      display: flex;
      justify-content: flex-start;
      
      .menu-collapse {
        width: 28px;
        height: 28px;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
      }
    }
    
    .topbar-right {
      .actions-wrapper {
        display: flex;
        justify-content: flex-end;
        
        .action {
          width: 28px;
          height: 28px;
          line-height: 28px;
          margin-left: 16px;
          text-align: center;
          cursor: pointer;
          
          &.action-more {
            border-radius: 50%;
            transform: rotate(90deg);
            
            &:hover {
              background: #EBF8F3;
            }
            
            &:active {
              background: #C8EBDF;
            }
            
            .el-icon-more {
              transform: scale(0.8);
            }
          }
        }
      }
    }
    
  }
</style>
