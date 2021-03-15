<template>
  <!-- Footer -->
  <footer class="sticky-footer bg-white">
    <div class="container my-auto">
      <div class="copyright text-center my-auto">
        <span>Copyright &copy; {{appName}} 2021</span>
      </div>
    </div>
  </footer>
  <!-- End of Footer -->
</template>

<script>
export default {
  data() {
    return {
      appName: window.appName,
    };
  },
};
</script>

<style>
</style>
