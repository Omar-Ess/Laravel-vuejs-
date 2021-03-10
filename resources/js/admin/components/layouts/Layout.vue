<template>
  <div id="wrapper">
    <the-sidebar :csrf="csrf"> </the-sidebar>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <the-navbar> </the-navbar>
        <slot></slot>
      </div>
      <the-footer> </the-footer>
    </div>
    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
      <i class="fas fa-angle-up"></i>
    </a>
  </div>
</template>

<script>
import TheFooter from "../partials/TheFooter.vue";
import TheNavbar from "../partials/TheNavbar.vue";
import TheSidebar from "../partials/TheSidebar.vue";
export default {
  components: { TheSidebar, TheNavbar, TheFooter },
  props: {
    csrf: String,
  },
  mounted() {
    // Scroll to top button appear
    $(document).on("scroll", function () {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $(".scroll-to-top").fadeIn();
      } else {
        $(".scroll-to-top").fadeOut();
      }
    });

    // Smooth scrolling using jQuery easing
    $(document).on("click", "a.scroll-to-top", function (e) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top,
          },
          1000,
          "easeInOutExpo"
        );
      e.preventDefault();
    });
  },
};
</script>

<style>
</style>
