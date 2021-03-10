<template>
  <!-- Begin Page Content -->
  <div class="container-fluid">
    <the-breadcrumb>
      <li class="breadcrumb-item">
        <router-link :to="{ name: 'users' }">
          <i class="fa fa-clipboard-alt"></i> Utilisateurs</router-link
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
            Ajout de Utilisateurs
          </h1>
          <h1 class="h4 mt-4 text-gray-800" v-else>
            Modification de Utilisateurs
          </h1>
        </div>
        <div class="ml-auto align-self-center p-3">
          <router-link :to="{ name: 'users' }">
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
        <form @submit.prevent="handleSubmit" enctype="multipart/form-data">
          <server-error-alert :serverErrors="serverErrors" v-if="serverErrors">
          </server-error-alert>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label>Nom d'Utilisateur</label>
              <input
                type="text"
                class="form-control"
                placeholder="Entrez le Nom"
                v-model="userObject.name"
                required
              />
            </div>
            <div class="form-group col-md-6">
              <label>Email d'Utilisateur</label>
              <input
                type="email"
                class="form-control"
                placeholder="Entrez l'Email"
                v-model="userObject.email"
                required
              />
            </div>
          </div>
          <div class="form-group" v-if="isCreateMode">
            <label>Mot de Passe</label>
            <input
              type="password"
              class="form-control"
              placeholder="Entrez le Mot de passe"
              v-model="userObject.password"
              required
            />
          </div>

          <div class="form-group">
            <label>Avatar d'Utilisateur</label>
            <div class="input-group mb-3 mt-2">
              <div
                class="input-group-prepend"
                id="inputGroupFileAddon01"
                style="display: none"
              >
                <button
                  type="button"
                  class="input-group-text btn btn-danger"
                  @click="cancelAvatar"
                >
                  <i class="fa fa-close mr-2"></i> Cancel
                </button>
              </div>
              <div class="custom-file">
                <input
                  type="file"
                  class="custom-file-input form-control mr-3"
                  name="avatar"
                  id="avatar"
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
                  Choisissez un nouvel avatar
                </label>
              </div>
            </div>
            <img
              v-if="!isCreateMode"
              :src="userObject.avatar"
              class="avatar"
              alt=""
            />
          </div>
          <div class="form-group d-flex">
            <label class="mr-2">Est Admin : </label>
            <span class="">
              <toggle-button
                v-model="userObject.is_admin"
                :value="userObject.is_admin"
                :sync="true"
              />
            </span>
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
      newAvatar: null,
    };
  },

  computed: {
    isCreateMode() {
      return this.$route.name == "users.create";
    },
    getIsLoading() {
      return this.isLoading["get"];
    },
    postIsLoading() {
      return this.isLoading["post"];
    },
    ...mapGetters("users", ["userObject", "isLoading", "serverErrors"]),
  },
  methods: {
    onFileChange(e) {
      this.newAvatar = e.target.files[0];
    },
    cancelAvatar() {
      $("#avatar").val("");
      $("#upload-file-info").html("Choose new Avatar");
      $("#inputGroupFileAddon01").css("display", "none");
      this.newAvatar = null;
    },
    handleSubmit() {
      // create new formdata object
      let formData = new FormData();
      // appending the avatar file to the formdata if the file is not null
      if (this.newAvatar) {
        formData.append("newAvatar", this.newAvatar);
      }
      // appending all the userObject properties to the form data
      _.each(this.userObject, (value, key) => {
        formData.append(key, value);
      });

      // and passing the form data instead of the user object
      if (this.isCreateMode) {
        this.addUser(formData);
      } else {
        this.updateUser(formData);
      }
    },

    ...mapActions("users", ["addUser", "fetchUser", "updateUser"]),
  },
  mounted() {
    this.$store.commit("users/clearUser");
    this.$store.commit("users/clearServerErrors");
    if (!this.isCreateMode) {
      this.fetchUser(this.$route.params.id);
    }
  },
};
</script>

<style>
</style>
