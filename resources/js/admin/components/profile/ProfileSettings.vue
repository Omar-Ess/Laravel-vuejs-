<template>
  <div class="container-fluid">
    <the-breadcrumb>
      <li class="breadcrumb-item">
        <router-link :to="{ name: 'profile' }">
          <i class="fa fa-clipboard-alt"></i> Profil</router-link
        >
      </li>
      <li class="breadcrumb-item active">Paramètres</li>
    </the-breadcrumb>
    <div class="card card-sticker shadow mb-4 mt-5">
      <div class="d-flex" id="card-header-wrapper">
        <div class="card-header card-header-sticker bg-primary text-center">
          <h6 class="font-weight-bold text-white">
            <i class="fa fa-cog fa-2x"></i>
          </h6>
        </div>
        <div><h1 class="h4 mt-4 text-gray-800">Paramètres</h1></div>
        <div class="ml-auto align-self-center p-3">
          <router-link :to="{ name: 'profile' }">
            <button class="btn btn-outline-black mr-2">
              <i class="fa fa-user-circle"></i> <span> Profile</span>
            </button>
          </router-link>
        </div>
      </div>
      <div class="card-body">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a
              class="nav-item nav-link active"
              id="nav-home-tab"
              data-toggle="tab"
              href="#nav-home"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
              @click="clearServerErrors"
              >Info de Profil</a
            >
            <a
              class="nav-item nav-link"
              id="nav-profile-tab"
              data-toggle="tab"
              href="#nav-profile"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
              @click="clearServerErrors"
              >Mot de Passe</a
            >
          </div>
        </nav>
        <div class="tab-content mt-3" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <profile-info-edit />
          </div>
          <div
            class="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <profile-password-edit />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileInfoEdit from "./ProfileInfoEdit.vue";
import ProfilePasswordEdit from "./ProfilePasswordEdit.vue";
export default {
  components: { ProfileInfoEdit, ProfilePasswordEdit },
  methods: {
    clearServerErrors() {
      this.$store.commit("auth/clearServerErrors");
    },
  },
  mounted() {
    this.$store.commit("auth/clearServerErrors");
  },
};
</script>

<style scoped>

.router-link-exact-active {
  color: black !important;
  box-shadow: none;
  background-color: inherit;
}
</style>

