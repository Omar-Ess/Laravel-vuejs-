<template>
  <!-- Begin Page Content -->
  <div class="container-fluid">
    <the-breadcrumb>
      <li class="breadcrumb-item">
        <router-link :to="{ name: 'products' }">
          <i class="fa fa-clipboard-alt"></i> Produits</router-link
        >
      </li>
      <li class="breadcrumb-item active" v-if="isCreateMode">Ajouter</li>
      <li class="breadcrumb-item active" v-else>Modifier</li>
    </the-breadcrumb>
    <!-- DataTales Example -->
    <div class="card card-sticker shadow mb-4 mt-5">
      <div class="d-flex" id="card-header-wrapper">
        <div class="card-header card-header-sticker bg-primary text-center">
          <h6 class="font-weight-bold text-white">
            <i class="fa fa-plus fa-2x" v-if="isCreateMode"></i>
            <i class="fa fa-pen fa-2x" v-else></i>
          </h6>
        </div>
        <div>
          <h1 class="h4 mt-4 text-gray-800" v-if="isCreateMode">
            Ajout de Produits
          </h1>
          <h1 class="h4 mt-4 text-gray-800" v-else>Modification de Produits</h1>
        </div>
        <div class="ml-auto align-self-center p-3">
          <router-link :to="{ name: 'products' }">
            <button class="btn btn-outline-black   mr-2">
              <i class="fa fa-arrow-circle-left"></i> <span> Annuler</span>
            </button>
          </router-link>
        </div>
      </div>
      <div class="card-body">
        <div v-if="getIsLoading">
          <loading
            color="#2B51C4"
            :active.sync="getIsLoading"
            :is-full-page="false"
          >
            <h5 slot="after">Loading</h5>
          </loading>
        </div>
        <form @submit.prevent="handleSubmit" enctype="multipart/form-data">
          <server-error-alert :serverErrors="serverErrors" v-if="serverErrors">
          </server-error-alert>
          <div class="form-group">
            <label>Titre de Produit</label>
            <input
              type="text"
              class="form-control"
              placeholder="Entrez le Titre"
              v-model="productObject.title"
            />
          </div>
          <div class="form-group">
            <label>Catégorie</label>
            <multiselect
              v-model="selectedCategory"
              :options="allCategories"
              :close-on-select="true"
              :clear-on-select="true"
              :preserve-search="true"
              placeholder="Choisir un Catégorie"
              label="name"
              track-by="id"

            ></multiselect>
          </div>

          <div class="form-group">
            <label>Image de Produit</label>
            <div class="input-group mb-3 mt-2">
              <div
                class="input-group-prepend"
                id="inputGroupFileAddon01"
                style="display: none"
              >
                <button
                  type="button"
                  class="input-group-text btn btn-danger"
                  @click="cancelImage"
                >
                  <i class="fa fa-close mr-2"></i> Cancel
                </button>
              </div>
              <div class="custom-file">
                <input
                  type="file"
                  class="custom-file-input form-control mr-3"
                  name="image"
                  id="image"
                  aria-describedby="inputGroupFileAddon01"
                  onchange="$('#upload-file-info').html(this.files[0].name) ; $('#inputGroupFileAddon01').css('display','block')"
                  @change="onFileChange"
                />
                <label
                  class="custom-file-label"
                  style="overflow: hidden"
                  id="upload-file-info"
                  for="image"
                >
                  Choisissez un nouvel image
                </label>
              </div>
            </div>
            <img
              v-if="!isCreateMode"
              :src="productObject.image"
              class="img-fluid"
              width="100"
              height="100"
              alt=""
            />
          </div>
          <div class="form-group">
            <label class="">Description </label>
            <!-- <textarea
              cols="20"
              rows="5"
              v-model="productObject.desc"
              class="form-control"
              placeholder="Entrez la Description"
            ></textarea> -->
            <wysiwyg v-model="productObject.desc"


              placeholder="Entrez la Description"/>
          </div>
          <button
            type="submit"
            class="btn btn-orange  btn-block"
            v-if="isCreateMode"
            :disabled="postIsLoading"
          >
            <i v-if="postIsLoading" class="fa fa-circle-notch fa-spin"></i>
            Ajouter
          </button>
          <button
            type="submit"
            class="btn btn-orange  btn-block"
            v-else
            :disabled="postIsLoading"
          >
            <i v-if="postIsLoading" class="fa fa-circle-notch fa-spin"></i>

            Sauvegarder
          </button>
        </form>
      </div>
    </div>
  </div>
  <!-- /.container-fluid -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      newImage: null,
      selectedCategory: null,
    };
  },

  computed: {
    isCreateMode() {
      return this.$route.name == "products.create";
    },
    getIsLoading() {
      return this.isLoading["get"];
    },
    postIsLoading() {
      return this.isLoading["post"];
    },

    ...mapGetters("products", ["productObject", "isLoading", "serverErrors"]),
    ...mapGetters("categories", ["allCategories"]),
  },
  methods: {
    handleMultiSelect(category) {
      this.productObject.category_id = category.id;
    },
    onFileChange(e) {
      this.newImage = e.target.files[0];
    },
    cancelImage() {
      $("#image").val("");
      $("#upload-file-info").html("Choisir une nouvelle image");
      $("#inputGroupFileAddon01").css("display", "none");
      this.newImage = null;
    },
    handleSubmit() {
      // create new formdata object
      let formData = new FormData();
      // appending the Image file to the formdata if the file is not null
      if (this.newImage) {
        formData.append("newImage", this.newImage);
      }
      // appending all the productObject properties to the form data
      _.each(this.productObject, (value, key) => {
        formData.append(key, value);
      });


      //to fit multiselect component
      if (this.selectedCategory) {
        formData.append("category_id", this.selectedCategory.id);
      }
      // and passing the form data instead of the product object
      if (this.isCreateMode) {
        this.addProduct(formData);
      } else {
        this.updateProduct(formData);
      }
    },

    ...mapActions("products", ["addProduct", "fetchProduct", "updateProduct"]),
    ...mapActions("categories", ["fetchCategories"]),
  },
  mounted() {
    this.$store.commit("products/clearProduct");
    this.$store.commit("products/clearServerErrors");
    if (!this.isCreateMode) {
      this.fetchProduct(this.$route.params.id);
    }
    this.fetchCategories().then(() => {
      //to fit multiselect component
      if (!this.isCreateMode) {
        this.selectedCategory = this.allCategories.find((category) => {
          return category.id === 34;
        });
      }
    });
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

