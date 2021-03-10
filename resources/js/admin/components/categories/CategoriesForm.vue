<template>
  <!-- Begin Page Content -->
  <div class="container-fluid">
    <the-breadcrumb>
      <li class="breadcrumb-item">
        <router-link :to="{ name: 'categories' }">
          <i class="fa fa-clipboard-alt"></i> Catégories</router-link
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
            Ajout de Catégories
          </h1>
          <h1 class="h4 mt-4 text-gray-800" v-else>
            Modification de Catégories
          </h1>
        </div>
        <div class="ml-auto align-self-center p-3">
          <router-link :to="{ name: 'categories' }">
            <button class="btn btn-outline-black mr-2">
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
        <form @submit.prevent="handleSubmit">
          <server-error-alert :serverErrors="serverErrors" v-if="serverErrors">
          </server-error-alert>
          <div class="form-group">
            <label>Nom de Catégorie</label>
            <input
              type="text"
              class="form-control"
              placeholder="Entrez le Nom"
              v-model="categoryObject.name"
              @blur="getSlug"
              required
            />
          </div>
          <div class="form-group">
            <label>Slug de Catégorie </label>
            <input
              type="text"
              class="form-control"
              placeholder="Entrez le Slug"
              v-model="categoryObject.slug"
              required
            />
            <small class="form-text text-muted"
              >Le slug est pour une URL conviviale.</small
            >
          </div>

          <button
            type="submit"
            class="btn btn-orange "
            v-if="isCreateMode"
            :disabled="postIsLoading"
          >
            <i v-if="postIsLoading" class="fa fa-circle-notch fa-spin"></i>
            Ajouter
          </button>
          <button
            type="submit"
            class="btn btn-orange "
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
    return {};
  },

  computed: {
    isCreateMode() {
      return this.$route.name == "categories.create";
    },
    getIsLoading() {
      return this.isLoading["get"];
    },
    postIsLoading() {
      return this.isLoading["post"];
    },
    ...mapGetters("categories", [
      "categoryObject",
      "isLoading",
      "serverErrors",
    ]),
  },
  methods: {
    getSlug() {
      if (this.categoryObject.name) {
        axios
          .get(`/api/categories/generateSlug/${this.categoryObject.name}`)
          .then((res) => {
            this.categoryObject.slug = res.data.slug;
            this.$forceUpdate();
          })
          .catch((err) => {
            this.$toast.error("La Génération de Slug n'a pas réussi");
          });
      }
    },
    handleSubmit() {
      if (this.isCreateMode) {
        this.addCategory(this.categoryObject);
      } else {
        this.updateCategory(this.categoryObject);
      }
    },

    ...mapActions("categories", [
      "addCategory",
      "fetchCategory",
      "updateCategory",
    ]),
  },
  mounted() {
    this.$store.commit("categories/clearCategory");
    this.$store.commit("categories/clearServerErrors");
    if (!this.isCreateMode) {
      this.fetchCategory(this.$route.params.id);
    }
  },
};
</script>

<style>
</style>
