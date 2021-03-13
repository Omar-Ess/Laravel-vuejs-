<script>
import { Line } from "vue-chartjs";
import dayjs from "dayjs";

export default {
  extends: Line,
  props: ["data"],
  data() {
    return {
      ticksMax: 0,
      chartData: {
        labels: [],
        datasets: [
          {
            borderWidth: 1.5,
            label: "Produits Ajoutés",
            backgroundColor: "#faebe9",
            hoverBackgroundColor: "#e1f8e2",
            borderColor: "#cc1616",
            data: [],
          },
        ],
      },

      options: {
        maintainAspectRatio: false,
        layout: {
          padding: {
            left: 10,
            right: 25,
            top: 25,
            bottom: 0,
          },
        },
        scales: {
          xAxes: [
            {
              time: {
                unit: "month",
              },
              gridLines: {
                display: false,
                drawBorder: true,
              },
              ticks: {
                maxTicksLimit: 6,
              },
              maxBarThickness: 45,
            },
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                max: this.ticksMax,
                maxTicksLimit: 5,
                padding: 10,
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2],
              },
            },
          ],
        },
        legend: {
          display: false,
        },
        tooltips: {
          titleMarginBottom: 10,
          titleFontColor: "#6e707e",
          titleFontSize: 14,
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          borderColor: "#dddfeb",
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          caretPadding: 10,
        },
      },
    };
  },
  mounted() {
    if (this.data.productsByMonth.length) {
      this.data.productsByMonth.forEach((element) => {
        this.chartData.labels.push(element.month);
        this.chartData.datasets[0].data.push(element.total);
      });

      this.ticksMax = Math.max(...this.chartData.datasets[0].data);
    } else {
      const shortMonthName = dayjs(new Date()).format("MMM");
      this.chartData.labels.push(shortMonthName);
      this.chartData.datasets[0].data.push(0);
    }
    this.renderChart(this.chartData, this.options);
  },
};
</script>
