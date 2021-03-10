<template>
  <form @submit.prevent="updateProfileInfo(newAuthUser)">
    <server-error-alert :serverErrors="serverErrors" v-if="serverErrors">
    </server-error-alert>
    <div class="form-group">
      <label>Nom Complet</label>
      <input
        v-model="newAuthUser.name"
        type="text"
        class="form-control"
        :placeholder="authUser.name"

      />
    </div>
    <div class="form-group">
      <label>Adresse Email </label>
      <input
        type="text"
        v-model="newAuthUser.email"
        class="form-control"
        :placeholder="authUser.email"

      />
    </div>

    <button :disabled="postIsLoading" type="submit" class="btn btn-orange">
      <i v-if="postIsLoading" class="fa fa-circle-notch fa-spin"></i>
      Sauvgarder
    </button>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      newAuthUser: {},
    };
  },
  computed: {
    getIsLoading() {
      return this.isLoading["get"];
    },
    postIsLoading() {
      return this.isLoading["post"];
    },
    ...mapGetters("auth", ["authUser", "isLoading", "serverErrors"]),
  },
  methods: {
    ...mapActions("auth", ["updateProfileInfo"]),
  },
};
</script>

<style>
</style>
