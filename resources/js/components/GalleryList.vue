<template>
  <main id="main">
    <!-- ======= Portfolio Section ======= -->
    <section id="portfolio" class="portfolio">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Galerie</h2>
          <h3>Consultez nos <span>Produits</span></h3>
          <p>Produits en vedette et les plus vendus</p>
        </div>
      </div>
      <div class="container">
        <div class="input-group">
          <input
            placeholder="Rechercher des produits ..."
            type="text"
            class="form-control mb-3 portfolio-input"
            v-model="query"
          />

          <div class="input-group-append">
            <span class="input-group-text" style="height: 55px">
              <i class="fa fa-search"></i
            ></span>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-2 portfolio-flters-wrapper">
            <ul id="portfolio-flters">
              <li
                @click="handleClick()"
                :class="[selectedCategory == 'all' ? 'filter-active' : '']"
              >
                All
              </li>
              <li
                @click="handleClick(category.id)"
                v-for="category in allCategories"
                :key="category.id"
                :data-filter="'.' + category.id"
                :class="[
                  selectedCategory == category.id ? 'filter-active' : '',
                ]"
              >
                {{ category.name }}
              </li>
            </ul>
          </div>
          <div class="col-lg-10">
            <div v-if="filteredProducts.length">
              <paginate name="filteredProducts" :list="filteredProducts" :per="6">
                <transition-group
                  name="products"
                  tag="div"
                  class="row products portfolio-container"
                >
                  <div
                    class="col-lg-4 col-md-6 portfolio-item product"
                    v-for="product in paginated('filteredProducts')"
                    :key="product.id"
                  >
                    <img :src="product.image" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>{{ product.title | truncate }}</h4>

                      <a
                        :href="product.image"
                        data-gall="portfolioGallery"
                        class="venobox preview-link ml-5 btn btn-link"
                        :title="product.title"
                        ><i class="fa fa-search-plus"></i
                      ></a>

                      <button
                        v-if="product.title.length || product.desc.length"
                        @click="handleSelectProduct(product)"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        class="details-link btn btn-link"
                        title="More Details"
                      >
                        <i class="fa fa-info-circle"></i>
                      </button>
                    </div>
                  </div>
                </transition-group>
              </paginate>

              <paginate-links
                for="filteredProducts"
                :show-step-links="true"
                :classes="{
                  ul: 'pagination',
                  li: ['page-item', 'pointer'],
                  a: ['page-link', 'pointer'],
                }"
              ></paginate-links>
            </div>
            <div v-else>
              <div class="alert alert-warning">
                <h5>
                  <i class="fa fa-exclamation-circle"></i> Aucun produit ne
                  correspond à votre requête
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <gallery-item :selected-product="selectedProduct" />
    </section>
    <!-- End Portfolio Section -->
  </main>
  <!-- End #main -->
</template>

<script>
import GalleryItem from "./GalleryItem";
export default {
  components: {
    GalleryItem,
  },
  data() {
    return {
      selectedProduct: { title: "", desc: "" },
      allProducts: this.products,
      paginate: ["filteredProducts"],
      allCategories: this.categories,
      selectedCategory: "all",
      query: "",
    };
  },
  computed: {
    filteredProducts() {

      return this.allProducts.filter((product) => {
        return this.query
          .toLowerCase()
          .split(" ")
          .every(
            (word) =>
              product.title.toLowerCase().includes(word) ||
              product.desc.toLowerCase().includes(word)
          );
      });
    },
  },

  props: ["products", "categories"],
  methods: {
    handleClick(id) {
      if (id == undefined) {
        this.selectedCategory = "all";
        this.allProducts = this.products;
      } else {
        this.selectedCategory = id;
        this.allProducts = this.products.filter((product) => {
          return product.category_id === this.selectedCategory;
        });
      }
    },
    handleSelectProduct(product) {
      this.selectedProduct = product;
    },
  },
  mounted() {},
  updated() {
    $(".venobox").venobox();
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer !important;
}
.product {
  transition: all 0.35s ease-in-out;
}
.products-enter {
  transform: scale(0.5) translatey(-80px);
  opacity: 0;
}
.products-leave-to {
  transform: translatey(30px);
  opacity: 0;
}

.products-leave-active {
  position: absolute;
  z-index: -1;
}
</style>
