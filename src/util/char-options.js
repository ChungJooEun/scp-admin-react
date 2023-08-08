const getBarGraphOptions = (dateRange) => {
  return {
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
          stepSize: 50,
        },
      },
    },
    plugins: {
      legend : {
        display : dateRange === "이번주",
      }
    }
    // maintainAspectRatio: false,
  }
};

const lineGraphOptions = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 50,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const calcRate = (num, sum) => {
  if (sum === 0) {
    return 0;
  }

  return parseInt((num / sum) * 100);
};

export { lineGraphOptions, calcRate, getBarGraphOptions };
