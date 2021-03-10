<template>
  <!-- Begin Page Content -->
  <div class="container-fluid">
    <the-breadcrumb>
      <li class="breadcrumb-item active">Catégories</li>
    </the-breadcrumb>
    <!-- DataTales Example -->
    <div class="card card-sticker shadow mb-4 mt-5">
      <div class="d-flex" id="card-header-wrapper">
        <div class="card-header card-header-sticker bg-primary text-center">
          <h6 class="font-weight-bold text-white">
            <i class="fa fa-clipboard-list fa-2x"></i>
          </h6>
        </div>
        <div><h1 class="h4 mt-4 text-gray-800">Tableau des Catégories</h1></div>
        <div class="ml-auto align-self-center p-3">
          <router-link :to="{ name: 'categories.create' }">
            <button class="btn btn-outline-orange mr-2">
              <i class="fa fa-plus-circle"></i> <span> Ajouter Catégorie</span>
            </button>
          </router-link>
          <button
            class="btn btn-black mr-2"
            @click="prepareBulkDeleteCategories"
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
                <th>Nom</th>
                <th>Slug</th>
                <th>N. de Produits</th>
                <th>Créé le</th>
                <th>Actions</th>
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
              <tr v-for="category in allCategories" v-else :key="category.id">
                <td>
                  <input
                    type="checkbox"
                    v-model="selectedItems"
                    :value="category.id"
                  />
                </td>
                <td>{{ category.id }}</td>
                <td>{{ category.name }}</td>
                <td>{{ category.slug }}</td>
                <td>
                  <span
                    class="badge"
                    :class="[
                      category.products_count
                        ? 'badge-success'
                        : 'badge-danger',
                    ]"
                    >{{ category.products_count }}</span
                  >
                </td>
                <td>{{ category.created_at | formatedDate }}</td>
                <td>
                  <router-link
                    class="mr-4"
                    :to="{
                      name: 'categories.edit',
                      params: { id: category.id },
                    }"
                    ><i class="fa fa-pen text-success"></i
                  ></router-link>
                  <a
                    href="#"
                    class=""
                    @click.prevent="deleteCategory(category.id)"
                    ><i class="fa fa-trash text-danger"></i
                  ></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <!-- /.container-fluid -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { fireConfirmation } from "../../helpers";

export default {
  data() {
    return {
      dtTable: null,
      selectedItems: [],
      allSelected: false,
    };
  },
  watch: {
    selectedItems() {
      this.allSelected =
        this.selectedItems.length === this.allCategories.length ? true : false;
    },
  },
  computed: {
    getIsLoading() {
      return this.isLoading["get"];
    },
    postIsLoading() {
      return this.isLoading["post"];
    },
    ...mapGetters("categories", ["allCategories", "isLoading"]),
  },
  methods: {
    selectOrUnSelectAll() {
      if (this.allSelected) {
        this.selectedItems = [];
      } else {
        this.allCategories.forEach((category) => {
          this.selectedItems.push(category.id);
        });
      }
    },
    prepareBulkDeleteCategories() {
      if (!this.selectedItems.length) {
        this.$toast.error("Aucun élément n'a été sélectionné");
        return;
      }
      fireConfirmation(async () => {
        await this.bulkDeleteCategories(this.selectedItems);
        this.selectedItems = [];
      });
    },
    ...mapActions("categories", [
      "fetchCategories",
      "deleteCategory",
      "bulkDeleteCategories",
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
    this.fetchCategories();
  },
};
</script>

<style>
</style>
