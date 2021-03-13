<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title"
              id="exampleModalLongTitle"
              v-if="selectedProduct.title.length"
            >
              {{ selectedProduct.title }}
            </h5>
            <h5 class="modal-title" id="exampleModalLongTitle" v-else>
              Aucun titre disponible
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p v-if="selectedProduct.desc.length" v-html=" selectedProduct.desc "></p>
            <p v-else>  Aucun description disponible</p>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedProduct: Object,
  },
};
</script>

<style>
</style>
