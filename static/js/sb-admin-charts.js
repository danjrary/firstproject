// Chart.js scripts
// -- Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// -- Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["2012", "2013", "2014", "2015", "2016", "2017"],
    datasets: [{
      label: "範疇一",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [815, 912, 1051, 1341, 2021, 2284],
    },
    {
      label: "範疇二",
      backgroundColor: "rgba(185,185,185,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 5312, 6251, 7841, 9821, 14984],
    },
    {
      label: "範疇三",
      backgroundColor: "rgba(85,85,85,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [215, 312, 251, 841, 821, 1184],
    }

    ],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        },
        stacked: true
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 20000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        },
        stacked: true
      }],
    },
    legend: {
      display: false
    },
  }
});
// -- Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["外購電力", "液化石油氣", "柴油", "再生能源"],
    datasets: [{
      data: [19456776, 4756476, 919160, 591100],
      backgroundColor: ['#007bff', '#dc3545', '#585859', '#28a745'],
    }],
  },
});


// -- Disclosure Score Pie Chart 
var ctx = document.getElementById("PieChart_score");
var PieChart_score = new Chart(ctx, {
  type: 'doughnut',
  data: {
    lables: ["", ""],
    datasets: [{
      data: [80, 20],
      backgroundColor: ['#4285F4', '#D8D8D8'],
    }],
  },
});
