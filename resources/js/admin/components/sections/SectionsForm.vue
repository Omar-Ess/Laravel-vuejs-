<template>
  <!-- Begin Page Content -->
  <div class="container-fluid">
    <the-breadcrumb>
      <li class="breadcrumb-item">Sections</li>
    </the-breadcrumb>
    <!-- DataTales Example -->
    <div class="card card-sticker shadow mb-4 mt-5">
      <div class="d-flex" id="card-header-wrapper">
        <div class="card-header card-header-sticker bg-primary text-center">
          <h6 class="font-weight-bold text-white">
            <i class="fa fa-pen fa-2x"></i>
          </h6>
        </div>
        <div>
          <h1 class="h4 mt-4 text-gray-800">Sections</h1>
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
            <label>Nom de Section</label>
            <select
              class="form-control"
              @change="handleChange"
              ref="selectDropDown"
            >
              <option value selected disabled>Sélectionnez une section</option>
              <option
                v-for="(section, index) in allSections"
                :key="index"
                :value="section.id"
              >
                {{ section.name }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label>Contenu de Section </label>
            <textarea
              placeholder="Entre Le Contenu de la section choisie"
              v-model="selectedSection.content"
              class="form-control"
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <button
            type="submit"
            class="btn btn-orange"
            :disabled="postIsLoading || selectedSectionIsEmpty"
          >
            <i
              v-if="postIsLoading "
              class="fa fa-circle-notch fa-spin"
            ></i>

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
      selectedSection: {},
    };
  },

  computed: {
    getIsLoading() {
      return this.isLoading["get"];
    },
    postIsLoading() {
      return this.isLoading["post"];
    },
    selectedSectionIsEmpty() {
      return !Object.keys(this.selectedSection).length;
    },
    ...mapGetters("sections", ["allSections", "isLoading", "serverErrors"]),
  },
  methods: {
    handleChange() {
      let foundedSection = this.allSections.find((section) => {
        return section.id == this.$refs.selectDropDown.value;
      });
      this.selectedSection = { ...foundedSection };
    },
    handleSubmit() {
      this.updateSection(this.selectedSection);
    },
    ...mapActions("sections", ["fetchSections", "updateSection"]),
  },
  mounted() {
    this.$store.commit("sections/clearServerErrors");

    this.fetchSections();
  },
};
</script>

<style>
</style>
