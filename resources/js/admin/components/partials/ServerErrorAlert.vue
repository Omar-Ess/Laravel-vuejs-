<template>
  <div class="alert alert-danger">
    <strong><i class="fa fa-exclamation-triangle"></i></strong> une erreur s'est
    produite. réessayer
    <ul>
      <li v-for="(error, key) in serverErrors" :key="key">{{ error[0] }}</li>
    </ul>
  </div>
  
</template>

<script>
export default {
  props: {
    serverErrors: Array,
  },
};
</script>

<style>
</style>
