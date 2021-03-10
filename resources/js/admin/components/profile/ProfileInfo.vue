<template>
  <div class="card bg-secondary shadow">
    <div class="card-header bg-white border-0">
      <div class="row align-items-center">
        <div class="col-8">
          <h3 class="mb-0">Mon Profil</h3>
        </div>
        <div class="col-md-4 text-right">
          <router-link
            :to="{ name: 'profile.settings' }"
            class="btn btn-sm btn-outline-orange"
            ><i class="fa fa-cog"></i> Paramètres</router-link
          >
        </div>
      </div>
    </div>
    <div class="card-body">
      <vcl-code v-if="getIsLoading" />
      <form v-else>
        <h6 class="heading-small text-muted mb-4">Info de Profil</h6>
        <div class="pl-lg-4">
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group focused">
                <label class="form-control-label" for="input-username"
                  >Nom Complet</label
                >
                <input
                  type="text"
                  id="input-username"
                  disabled
                  class="form-control form-control-alternative"
                  :value="authUser.name"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label class="form-control-label" for="input-email"
                  >Adresse Email</label
                >
                <input
                  type="email"
                  id="input-email"
                  class="form-control form-control-alternative"
                  disabled
                  :value="authUser.email"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group focused">
                <label class="form-control-label" for="input-username"
                  >ID d'Utilisateur</label
                >
                <input
                  type="text"
                  id="input-username"
                  disabled
                  class="form-control form-control-alternative"
                  :value="authUser.id"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label class="form-control-label" for="input-email"
                  >Est Admin</label
                >

                <input
                  type="email"
                  id="input-email"
                  class="form-control form-control-alternative"
                  disabled
                  :value="this.authUser.is_admin ? '✔' : '❌'"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="form-group focused">
                <label class="form-control-label" for="input-username"
                  >Rejoint Le</label
                >
                <input
                  type="text"
                  id="input-username"
                  disabled
                  class="form-control form-control-alternative"
                  :value="authUser.created_at | formatedDate"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { VclCode } from "vue-content-loading";
export default {
  computed: {
        getIsLoading() {
      return this.isLoading["get"];
    },
    ...mapGetters("auth", ["authUser" , 'isLoading']),
  },
  components: { VclCode },
};
</script>

<style>
</style>
