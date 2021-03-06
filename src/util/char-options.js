const barGraphOptions = {
  scales: {
    y: {
      ticks: {
        beginAtZero: true,
        stepSize: 50,
      },
    },
  },
  // maintainAspectRatio: false,
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
  maintainAspectRatio: false,
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

export { lineGraphOptions, calcRate };
export default barGraphOptions;
