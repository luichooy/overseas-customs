<template>
  <div class="login"></div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .login {
    position: relative;
    height: 100%;
    background-image: url("../../assets/images/login.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    
    &:after {
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: "";
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
</style>
