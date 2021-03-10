<template>
  <div class="main-content">
    <div class="container-fluid">
      <the-breadcrumb>
        <li class="breadcrumb-item active">Profile</li>
      </the-breadcrumb>
      <div id="profile">
        <div class="row mt-5">
          <div class="col-xl-5 order-xl-2">
            <profile-card />
          </div>
          <div class="col-xl-7 order-xl-1">
            <profile-info />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProfileCard from "./ProfileCard.vue";
import ProfileInfo from "./ProfileInfo.vue";

export default {
  components: { ProfileCard, ProfileInfo},
  computed: {

    ...mapGetters("auth", ["authUser"]),
  },
  methods: {
    ...mapActions("auth", ["getAuthUser"]),
  },
  mounted() {
    this.$store.commit("auth/clearServerErrors");
    this.getAuthUser();
  },
};
</script>

<style >
</style>
