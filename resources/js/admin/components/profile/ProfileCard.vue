<template>
  <div class="card card-profile shadow">
    <div class="">
      <div class="card-profile-image">
        <img
          :class="greyedOutIfLoading"
          :src="authUser.avatar"
          class="rounded-circle img-fluid"
        />
        <input
          @change="onFileChange"
          type="file"
          id="avatarInput"
          style="display: none"
        />
        <button
          @click="openAvatarInput"
          class="btn btn-orange"
          id="image-edit-btn"
          :disabled="postIsLoading || getIsLoading"
        >
          <i class="fa fa-pen"></i>
        </button>
        <span id="image-spinner" v-if="postIsLoading || getIsLoading">
          <clip-loader color="blue"></clip-loader
        ></span>
      </div>
    </div>
    <br />
    <div class="card-body pt-md-4" v-if="getIsLoading">
      <vcl-bullet-list></vcl-bullet-list>
    </div>
    <div class="card-body pt-md-4" v-else>
      <div class="text-center">
        <h3 class="text-capitalize">{{ authUser.name }}</h3>
        <div class="h5 font-weight-300 text-capitalize">
          <i class="ni location_pin mr-2"></i>{{ authUser.email }}
        </div>
        <div class="h5 mt-4">
          <span class="badge badge-primary"
            >ID Utilisateur :
            {{ authUser.id }}
          </span>
        </div>
      </div>
      <div

        class="card-footer  text-center bg-black"
        style="border-radius: 10px"
      >
        <h3 class="text-light" style="font-weight: 500">
          Rejoint Le : {{ authUser.created_at | formatedDate }}
        </h3>
      </div>
    </div>
    <server-error-alert :serverErrors="serverErrors" v-if="serverErrors">
    </server-error-alert>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { VclBulletList } from "vue-content-loading";

export default {
  data() {
    return {
      newAvatar: null,
    };
  },
  components: { VclBulletList },

  computed: {
    greyedOutIfLoading() {
      return this.postIsLoading || this.getIsLoading ? "greyedOut" : "";
    },
    getIsLoading() {
      return this.isLoading["get"];
    },
    postIsLoading() {
      return this.isLoading["post"];
    },
    ...mapGetters("auth", ["authUser", "isLoading", "serverErrors"]),
  },
  methods: {
    openAvatarInput() {
      $("#avatarInput").click();
    },
    onFileChange(e) {
      this.newAvatar = e.target.files[0];
      // create new formdata object
      let formData = new FormData();
      // appending the avatar file to the formdata if the file is not null
      if (this.newAvatar) {
        formData.append("newAvatar", this.newAvatar);
      }
      // and clearing the new avatar property
      this.newAvatar = null;
      // and passing the form data
      this.updateProfileAvatar(formData);
    },
    ...mapActions("auth", ["updateProfileAvatar"]),
  },
};
</script>

<style scoped>
.greyedOut {
  opacity: 0.4;
}
</style>>
