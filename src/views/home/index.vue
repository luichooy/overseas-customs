<template>
  <div class="home">
    <country-picker></country-picker>
  </div>
</template>

<script>
  import CountryPicker from '@/components/CountryPicker/CountryPicker';
  
  export default {
    components: {
      CountryPicker
    },
    methods: {
      showAlert() {
        this.$confirm();
      }
    }
  };
</script>

<style scoped>

</style>
