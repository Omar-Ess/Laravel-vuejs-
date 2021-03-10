<template>
  <div class="container-fluid">
    <!-- 404 Error Text -->
    <div class="text-center">
      <div class="error mx-auto" data-text="404">404</div>
      <p class="lead text-gray-800 mb-5">Ressource Introuvable</p>
      <p class="text-gray-500 mb-0">Il semble que tu es perdu...</p>
      <router-link :to="{ name: 'dashboard' }"
        >&larr; Retour au Dashboard</router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
