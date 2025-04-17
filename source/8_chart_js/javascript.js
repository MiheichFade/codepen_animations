let chartInstance;
const ctx = document.getElementById("animatedChart").getContext("2d");

const labels = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн"];
let currentData = [120, 190, 300, 500, 400, 650];

function createChart(type = "line", data = currentData) {
  chartInstance = new Chart(ctx, {
    type,
    data: {
      labels,
      datasets: [
        {
          label: "Продажи",
          data,
          fill: type !== "bar" && type !== "radar" ? true : false,
          backgroundColor: [
            "rgba(230, 0, 31, 0.1)",
            "#ff9999",
            "#ffcc99",
            "#99ccff",
            "#c2f0c2",
            "#e6e6ff"
          ],
          borderColor: "#e6001f",
          borderWidth: 2,
          tension: 0.4,
          pointRadius: 5,
          pointHoverRadius: 8
        }
      ]
    },
    options: {
      responsive: true,
      animations: {
        tension: {
          duration: 1000,
          easing: "easeInOutQuart",
          from: 0,
          to: 0.4
        },
        y: {
          duration: 800,
          easing: "easeOutQuart"
        }
      },
      plugins: {
        legend: {
          labels: {
            font: { size: 16 }
          }
        }
      },
      scales:
        type === "pie"
          ? {}
          : {
              y: {
                beginAtZero: true,
                ticks: {
                  font: { size: 14 }
                }
              },
              x: {
                ticks: {
                  font: { size: 14 }
                }
              }
            }
    }
  });
}

createChart();

function getInputValues() {
  const inputs = document.querySelectorAll(".month-inputs input");
  return Array.from(inputs).map((input) => parseFloat(input.value) || 0);
}

document.getElementById("updateChart").addEventListener("click", () => {
  const newType = document.getElementById("chartType").value;
  const newData = getInputValues();

  const needToRebuild = chartInstance.config.type !== newType;

  if (needToRebuild) {
    chartInstance.destroy();
    createChart(newType, newData);
  } else {
    chartInstance.data.datasets[0].data = newData;
    chartInstance.update();
  }
});