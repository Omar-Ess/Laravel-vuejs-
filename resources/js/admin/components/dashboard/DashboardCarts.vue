<template>
  <!-- Content Row -->
  <div class="row">
    <!-- Earnings (Monthly) Card Example -->
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-left-orange shadow h-100">
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div
                class="text-xs font-weight-bold text-uppercase mb-1"
                style="color: #922522"
              >
                Utilisateurs
              </div>
              <div class="row no-gutters align-items-center">
                <div class="col-auto">
                  <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                    <clip-loader v-if="loading" color="blue"></clip-loader>
                    <span v-else>{{ data.usersCount }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="ml-auto">
              <i class="fas fa-users fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
        <div class="card-footer text-center" >
          <router-link :to="{ name: 'users' }" class="link-black">
            Plus d'info
            <i class="fa fa-arrow-circle-right"></i>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Earnings (Monthly) Card Example -->
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-left-green shadow h-100">
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div
                class="text-xs font-weight-bold  text-uppercase mb-1"
                style="color  : #005E3C"
              >
                Catégories
              </div>
              <div class="row no-gutters align-items-center">
                <div class="col-auto">
                  <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                    <clip-loader
                      v-if="loading"
                      :height="5"
                      :width="5"
                      color="blue"
                    ></clip-loader>

                    <span v-else> {{ data.categoriesCount }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-auto">
              <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
        <div class="card-footer text-center">
          <router-link :to="{ name: 'categories' }" class="link-black">
            Plus d'info
            <i class="fa fa-arrow-circle-right"></i>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Earnings (Monthly) Card Example -->
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-left-red shadow h-100">
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div
                class="text-xs font-weight-bold text-uppercase mb-1"
                style="color: #922522"
              >
                Produits
              </div>
              <div class="row no-gutters align-items-center">
                <div class="col-auto">
                  <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                    <clip-loader v-if="loading" color="blue"></clip-loader>
                    <span v-else>{{ data.productsCount }}</span>
                  </div>
                </div>
                <div class="col">
                  <div class="progress progress-sm mr-2">
                    <div
                      class="progress-bar"
                      style=" background-color : #922522 ; width: 50%"
                      role="progressbar"
                      aria-valuenow="200"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-auto">
              <i class="fas fa-shopping-bag fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
        <div class="card-footer text-center">
          <router-link :to="{ name: 'products' }" class="link-black">
            Plus d'info
            <i class="fa fa-arrow-circle-right"></i>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Pending Requests Card Example -->
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-left-blue shadow h-100">
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div
                class="text-xs font-weight-bold  text-uppercase mb-1"
                style="color : #255E91"
              >
                Sections
              </div>
              <div class="row no-gutters align-items-center">
                <div class="col-auto">
                  <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                    <clip-loader v-if="loading" color="blue"></clip-loader>

                    <span v-else> {{ data.sectionsCount }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-auto">
              <i class="fas fa-columns fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
        <div class="card-footer text-center ">
          <router-link :to="{ name: 'sections' }" class="link-black">
            Plus d'info
            <i class="fa fa-arrow-circle-right"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["loading", "data"],
  methods: {},
  mounted() {},
};
</script>

<style>
</style>
