<template>
  <!-- Begin Page Content -->
  <div class="container-fluid">
    <the-breadcrumb> </the-breadcrumb>
    <dashboard-carts :data="countData" :loading="countLoading" />
    <!-- Content Row -->

    <div class="row">
      <!-- Area Chart -->
      <div class="col-xl-8 col-lg-7">
        <div class="card shadow mb-4">
          <!-- Card Header - Dropdown -->
          <div
            class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
          >
            <h6 class="m-0 font-weight-bold text-primary">
              Produits Ajoutés Par Mois
            </h6>
          </div>
          <!-- Card Body -->
          <div class="card-body">
            <div class="align-center" v-if="chartLoading">
              <scale-loader
                color="#3C62D1"
                height="100px"
                width="10px"
              ></scale-loader>
            </div>
            <div v-else>
              <line-chart
                :styles="{ position: 'relative', height: '283px' }"
                :data="chartData"
              ></line-chart>
            </div>
          </div>
        </div>
      </div>

      <!-- Pie Chart -->
      <div class="col-xl-4 col-lg-5">
        <div class="card shadow mb-4">
          <!-- Card Header - Dropdown -->
          <div
            class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
          >
            <h6 class="m-0 font-weight-bold text-primary">
              Résumé des Données
            </h6>
          </div>
          <!-- Card Body -->
          <div class="card-body">
            <div class="align-center" v-if="countLoading">
              <scale-loader
                color="#3C62D1"
                height="100px"
                width="10px"
              ></scale-loader>
            </div>
            <div v-else>
              <doughnut-chart
                :styles="{ position: 'relative', height: '240px' }"
                :data="countData"
              ></doughnut-chart>
              <div class="mt-4 text-center small">
                <span class="mr-2">
                  <i class="fas fa-circle " style="color : #922522"></i> Utilisateurs
                </span>
                <span class="mr-2">
                  <i class="fas fa-circle " style="color : #255E91"></i> Produits
                </span>
                <span class="mr-2">
                  <i class="fas fa-circle "  style="color : #005E3C "></i> Catégories
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /.container-fluid -->
</template>

<script>
import LineChart from "./LineChart.vue";
import DashboardCarts from "./DashboardCarts.vue";
import DoughnutChart from "./DoughnutChart.vue";
export default {
  components: { LineChart, DoughnutChart, DashboardCarts },
  data() {
    return {
      countData: null,
      countLoading: true,
      chartData: null,
      chartLoading: true,
    };
  },
  methods: {
    getCount() {
      axios
        .get("/api/dashboard/count")
        .then((res) => {
          this.countData = res.data;
          this.countLoading = false;
        })
        .catch((err) => {
          this.$toast.error(
            "Erreur lors de l'obtention des données. réessayer"
          );
        });
    },
    getCharts() {
      axios
        .get("/api/dashboard/charts")
        .then((res) => {
          this.chartData = res.data;
          this.chartLoading = false;
        })
        .catch((err) => {
          this.$toast.error(
            "Erreur lors de l'obtention des données. réessayer"
          );
        });
    },
  },
  mounted() {
    this.getCount();
    this.getCharts();
  },
};
</script>

<style>
</style>
