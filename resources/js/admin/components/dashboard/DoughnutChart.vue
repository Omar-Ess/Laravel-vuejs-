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
            backgroundColor: ["#922522", "#005E3C", "#255E91"],
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
