<template>
  <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Panneau d'Administration</h1>

    <ol class="breadcrumb float-sm-right">
      <li class="breadcrumb-item">
        <router-link :to="{ name: 'dashboard' }">
          <i class="fa fa-tachometer-alt"></i> Dashboard</router-link
        >
      </li>
      <slot> </slot>
    </ol>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.router-link-active {
    color: #858aa5 ;
  box-shadow: none;
  background-color: inherit;
}
.router-link-exact-active {
  color: #858aa5 ;
  box-shadow: none;
  background-color: inherit;
}
a {
  color: #2b51c4 !important;
}
</style>
