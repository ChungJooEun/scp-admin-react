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

export { lineGraphOptions };
export default barGraphOptions;
