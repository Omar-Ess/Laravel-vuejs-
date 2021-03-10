<template>
  <!-- Begin Page Content -->
  <div class="container-fluid">
    <the-breadcrumb>
      <li class="breadcrumb-item active">Produits</li>
    </the-breadcrumb>
    <!-- DataTales Example -->
    <div class="card card-sticker shadow mb-4 mt-5">
      <div class="d-flex" id="card-header-wrapper">
        <div class="card-header card-header-sticker bg-primary text-center">
          <h6 class="font-weight-bold text-white">
            <i class="fa fa-clipboard-list fa-2x"></i>
          </h6>
        </div>
        <div>
          <h1 class="h4 mt-4 text-gray-800">Tableau des Produits</h1>
        </div>
        <div class="ml-auto align-self-center p-3">
          <!-- <button class="btn btn-secondary"> <i class="fa fa-sync-alt"></i> </button> -->
          <router-link :to="{ name: 'products.create' }">
            <button class="btn btn-outline-orange mr-2">
              <i class="fa fa-plus-circle"></i>
              <span> Ajouter Produit</span>
            </button>
          </router-link>
          <button
            class="btn btn-black mr-2"
            @click="prepareBulkDeleteProducts"
            :disabled="postIsLoading"
          >
            <span v-if="postIsLoading">
              <i class="fa fa-circle-notch fa-spin"></i> En cours
            </span>
            <span v-else> <i class="fa fa-dumpster"></i> Suppression </span>
          </button>
        </div>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table
            class="table table-striped table-hover"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    v-model="allSelected"
                    @click="selectOrUnSelectAll"
                  />
                </th>
                <th>ID</th>
                <th>Titre</th>

                <th>Categorie</th>
                <th>Image</th>

                <th>Créer le</th>
                <th class="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr v-if="getIsLoading">
                <td colspan="6" class="text-center">
                  <loading
                    color="#2B51C4"
                    :active.sync="getIsLoading"
                    :is-full-page="false"
                  >
                    <h5 slot="after">Loading</h5>
                  </loading>
                </td>
              </tr>
              <tr v-for="product in allProducts" v-else :key="product.id">
                <td>
                  <input
                    type="checkbox"
                    v-model="selectedItems"
                    :value="product.id"
                  />
                </td>
                <td>{{ product.id }}</td>
                <td>{{ product.title }}</td>
                <td>{{ product.category.name }}</td>
                <td>
                  <img
                    width="100"
                    height="100"
                    :src="product.image"
                    class="img-fluid"
                  />
                </td>
                <td>{{ product.created_at | formatedDate }}</td>

                <td class="text-center">
                  <a
                    @click.prevent="handleSelectProduct(product)"
                    class="venobox mr-4"
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    title="Preview"
                    ><i class="fa fa-eye text-info"></i
                  ></a>
                  <router-link
                    class="mr-4"
                    :to="{
                      name: 'products.edit',
                      params: { id: product.id },
                    }"
                    ><i class="fa fa-pen text-success"></i
                  ></router-link>
                  <a href="#" @click.prevent="deleteProduct(product.id)"
                    ><i class="fa fa-trash text-danger"></i
                  ></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
                  <product-item :selected-product="selectedProduct" />

  </div>
  <!-- /.container-fluid -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { fireConfirmation } from "../../helpers";
import ProductItem from "./ProductItem.vue";
export default {
  components: { ProductItem },
  data() {
    return {
      dtTable: null,
      selectedItems: [],
      allSelected: false,
      selectedProduct: { title: "", desc: "" },
    };
  },
  watch: {
    selectedItems() {
      this.allSelected =
        this.selectedItems.length === this.allProducts.length ? true : false;
    },
  },
  computed: {
    getIsLoading() {
      return this.isLoading["get"];
    },
    postIsLoading() {
      return this.isLoading["post"];
    },
    ...mapGetters("products", ["allProducts", "isLoading"]),
  },
  methods: {
    handleSelectProduct(product) {
      this.selectedProduct = product;
    },
    selectOrUnSelectAll() {
      if (this.allSelected) {
        this.selectedItems = [];
      } else {
        this.allProducts.forEach((product) => {
          this.selectedItems.push(product.id);
        });
      }
    },
    prepareBulkDeleteProducts() {
      if (!this.selectedItems.length) {
        this.$toast.error("Aucun élément n'a été sélectionné");
        return;
      }
      fireConfirmation(async () => {
        await this.bulkDeleteProducts(this.selectedItems);
        this.selectedItems = [];
      });
    },
    ...mapActions("products", [
      "fetchProducts",
      "deleteProduct",
      "bulkDeleteProducts",
    ]),
  },

  beforeUpdate() {
    if (this.dtTable) {
      this.dtTable.destroy();
    }
  },
  updated() {
    this.dtTable = $("#dataTable").DataTable({
      order: [[0, "desc"]],
      pageLength: 5,
    });
  },
  created() {
    this.fetchProducts();
  },
};
</script>

<style>
</style>
