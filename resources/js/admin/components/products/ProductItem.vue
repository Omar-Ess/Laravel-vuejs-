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
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header bg-black">
            <h4 class="modal-title">Preview</h4>
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
            <img :src="selectedProduct.image" width="100%" alt="" />

            <h5
              class="modal-title mt-3 mb-3"
              id="exampleModalLongTitle"
              v-if="selectedProduct.title.length"
            >
              {{ selectedProduct.title }}
            </h5>
            <h5 class="modal-title" id="exampleModalLongTitle" v-else>
              Aucun titre disponible
            </h5>
            <p v-if="selectedProduct.desc.length">{{ selectedProduct.desc }}</p>
            <p v-else>Aucun description disponible</p>
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
