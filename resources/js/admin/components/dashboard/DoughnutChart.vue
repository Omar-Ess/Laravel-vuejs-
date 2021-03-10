<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  props: ["data"],
  data() {
    return {
      chartData: {
        labels: ["Utilisateurs", "Catégories", "Produits"],
        datasets: [
          {
            borderWidth: 1,
            backgroundColor: ["#dd2467", "#51AB55", "#23C4D8"],
            data: [
              this.data.usersCount,
              this.data.categoriesCount,
              this.data.productsCount,
            ],
          },
        ],
      },

      options: {
        cutoutPercentage: 82,

        maintainAspectRatio: false,
        responsive: true,
        legend: {
          display: false,
        },
      },
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>
