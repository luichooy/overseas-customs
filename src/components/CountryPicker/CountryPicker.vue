<template>
  <div class="country-picker" :style="{width: realWidth}">
    <el-popover placement="bottom-start" :visible-arrow="false" popper-class="popover-picker">
      <el-input slot="reference"></el-input>
      
      <div class="picker-panel">
        <ul class="picker-tabs" @click="toggleTab">
          <li class="tab active">热门国家</li>
          <li class="tab">AB</li>
          <li class="tab">CD</li>
          <li class="tab">EFG</li>
          <li class="tab">H</li>
          <li class="tab">I</li>
          <li class="tab">J</li>
          <li class="tab">KL</li>
          <li class="tab">MNP</li>
          <li class="tab">QR</li>
          <li class="tab">S</li>
          <li class="tab">T</li>
          <li class="tab">W</li>
          <li class="tab">X</li>
          <li class="tab">Y</li>
          <li class="tab">Z</li>
        </ul>
      </div>
    </el-popover>
  
  
  </div>
</template>

<script>
  export default {
    name: "CountryPicker",
    props: {
      width: {
        type: [String, Number],
        default: 200
      }
    },
    computed: {
      realWidth() {
        return typeof this.width === 'string' ? this.width : this.width + 'px';
      }
    },
    methods: {
      toggleTab() {
        console.log(event);
        let target = event.target;
        let tabs = event.currentTarget;
        console.log(tabs);
        tabs.querySelector('.active').classList.remove('active');
        target.classList.add('active');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .country-picker {
  
  }
  
  .popover-picker {
    .picker-panel {
      font-size: 12px;
      
      .picker-tabs {
        display: flex;
        justify-content: space-between;
        
        .tab {
          padding: 5px;
          cursor: pointer;
          border-bottom: 1px solid #DDDDDD;
          
          &.active {
            border-bottom-color: #409EFF;
          }
        }
      }
    }
  }
</style>
