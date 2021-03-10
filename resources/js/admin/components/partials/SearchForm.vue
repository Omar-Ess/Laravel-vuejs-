<template>
  <form
    class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
    @submit.prevent="handleSearch"
  >
    <div class="input-group">
      <input
        type="text"
        class="form-control bg-light border-0 small"
        placeholder="Rechercher les e-mails entrants"
        aria-label="Search"
        aria-describedby="basic-addon2"
        v-model="text"
      />
      <div class="input-group-append">
        <button class="btn btn-black" type="submit">
          <i class="fas fa-search fa-sm"></i>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },

  methods: {
    handleSearch() {
      if (this.text.trim() !== "") {
        this.$router.push({ name: "emails", query: {q : this.text  } }).catch(()=>{})
        this.text="";
      }
    },
  },
};
</script>

<style>
</style>
