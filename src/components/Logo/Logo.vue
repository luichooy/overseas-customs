<template>
  <div class="logo-wrapper" @click="backHome">
    <transition name="logo" mode="out-in">
      <span v-if="isCollapse" key="collapse" class="logo">E</span>
      <span v-else key="notCollapse" class="logo">Express</span>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Logo',
    props: {
      isCollapse: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      backHome() {
        this.$router.push('/');
      }
    }
  };
</script>

<style lang="scss" scoped>
.logo-wrapper {
  height: 60px;
  line-height: 60px;
  padding: 12px 20px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
    font-size: 22px;
  }

  .logo-enter-active,
  .logo-leave-active {
    transition: all 0.3s ease-in-out;
  }

  .logo-enter,
  .logo-leave-to {
    transform: translateX(-180px);
    opacity: 1;
    /*transform: rotateZ(0) scale3d(1, 1, 1);*/
  }

  .logo-enter-to,
  .logo-leave {
    transform: translateX(0);
    opacity: 0;
    /*transform: rotateZ(360deg) scale3d(0, 0, 0);*/
  }
}
</style>
