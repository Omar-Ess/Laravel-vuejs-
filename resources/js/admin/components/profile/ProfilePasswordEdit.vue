<template>
  <form @submit.prevent="updateProfilePassword(allPasswords)">
    <server-error-alert :serverErrors="serverErrors" v-if="serverErrors">
    </server-error-alert>
    <div class="form-group">
      <label>Mot de passe actuel</label>
      <input
        type="password"
        class="form-control"
        placeholder="Enter Le Mot de passe actuel"
        v-model="allPasswords.current_password"
        required
      />
    </div>
    <div class="form-group">
      <label>Nouveau mot de passe</label>
      <input
        type="password"
        class="form-control"
        placeholder="Enter Le Nouveau mot de passe"
        v-model="allPasswords.new_password"
        required
      />
    </div>
    <div class="form-group">
      <label>Confirmer Nouveau mot de passe</label>
      <input
        type="password"
        class="form-control"
        placeholder="Enter La confirmation"
        v-model="allPasswords.new_password_confirm"
        required
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
      allPasswords: {
        current_password: "",
        new_password: "",
        new_password_confirm: "",
      },
    };
  },
  computed: {
    getIsLoading() {
      return this.isLoading["get"];
    },
    postIsLoading() {
      return this.isLoading["post"];
    },
    ...mapGetters("auth", ["isLoading", "serverErrors"]),
  },
  methods: {
    ...mapActions("auth", ["updateProfilePassword"]),
  },
};
</script>

<style>
</style>
