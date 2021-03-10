<template>
  <!-- Begin Page Content -->
  <div class="container-fluid">
    <the-breadcrumb>
      <li class="breadcrumb-item active">Utilisateurs</li>
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
          <h1 class="h4 mt-4 text-gray-800">Tableau des Utilisateurs</h1>
        </div>
        <div class="ml-auto align-self-center p-3" v-if="authUser.is_admin">
          <!-- <button class="btn btn-secondary"> <i class="fa fa-sync-alt"></i> </button> -->
          <router-link :to="{ name: 'users.create' }">
            <button class="btn btn-outline-orange mr-2">
              <i class="fa fa-plus-circle"></i>
              <span> Ajouter Utilisateur</span>
            </button>
          </router-link>
          <button
            class="btn btn-black mr-2"
            @click="prepareBulkDeleteUsers"
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
                <th v-if="authUser.is_admin">
                  <input
                    type="checkbox"
                    v-model="allSelected"
                    @click="selectOrUnSelectAll"
                  />
                </th>
                <th>ID</th>
                <th>Nom</th>
                <th>Email</th>
                <th>Est Admin</th>
                <th>Avatar</th>

                <th>Rejoint le</th>
                <th v-if="authUser.is_admin">Actions</th>
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
              <tr v-for="user in allUsers" v-else :key="user.id">
                <td v-if="authUser.is_admin">
                  <input
                    type="checkbox"
                    v-model="selectedItems"
                    :value="user.id"
                  />
                </td>
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>
                  <i
                    :class="[
                      user.is_admin
                        ? 'fa fa-check text-success'
                        : 'fa fa-times text-danger',
                    ]"
                  ></i>
                </td>
                <td>
                  <img :src="user.avatar" class="img-fluid avatar" />
                </td>
                <td>{{ user.created_at | formatedDate }}</td>

                <td v-if="authUser.is_admin">
                  <router-link
                    class="mr-4"
                    :to="{
                      name: 'users.edit',
                      params: { id: user.id },
                    }"
                    ><i class="fa fa-pen text-success"></i
                  ></router-link>
                  <a href="#" @click.prevent="deleteUser(user.id)" class=""
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
        this.selectedItems.length === this.allUsers.length ? true : false;
    },
  },
  computed: {
    getIsLoading() {
      return this.isLoading["get"];
    },
    postIsLoading() {
      return this.isLoading["post"];
    },
    ...mapGetters("auth", ["authUser"]),

    ...mapGetters("users", ["allUsers", "isLoading"]),
  },
  methods: {
    selectOrUnSelectAll() {
      if (this.allSelected) {
        this.selectedItems = [];
      } else {
        this.allUsers.forEach((user) => {
          this.selectedItems.push(user.id);
        });
      }
    },
    prepareBulkDeleteUsers() {
      if (!this.selectedItems.length) {
        this.$toast.error("Aucun élément n'a été sélectionné");
        return;
      }
      fireConfirmation(async () => {
        await this.bulkDeleteUsers(this.selectedItems);
        this.selectedItems = [];
      });
    },
    ...mapActions("users", ["fetchUsers", "deleteUser", "bulkDeleteUsers"]),
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
    this.fetchUsers();
  },
};
</script>

<style>
</style>
