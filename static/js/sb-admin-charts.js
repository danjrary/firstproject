// Chart.js scripts
// -- Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';
// -- Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Mar 1", "Mar 2", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7", "Mar 8", "Mar 9", "Mar 10", "Mar 11", "Mar 12", "Mar 13"],
    datasets: [{
      label: "Sessions",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
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
    lables: ["揭露", "未揭露"],
    datasets: [{
      data: [80, 20],
      backgroundColor: ['#4285F4', '#D8D8D8'],
    }],
  },
});


// -- 女男比例 Pie Chart 

var ctx = document.getElementById("PieChart_type");
var PieChart_type = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["全職人員", "約聘人員", "派遣人員"],
    datasets: [{
      data: [97, 2, 1],
      backgroundColor: ['#4285F4', '#dc3545', '#585859'],
    }],
  },
});

// -- 職務類別比例 Pie Chart 

var ctx = document.getElementById("PieChart_job");
var PieChart_job = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["研發人員", "管理人員", "行銷人員", "製造人員"],
    datasets: [{
      data: [89, 6, 3, 2],
      backgroundColor: ['#007bff', '#dc3545', '#585859', '#28a745'],
    }],
  },
});


// 歷年員工人數

var ctx = document.getElementById("BarChart_employee");
var BarChart_employee = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["2012", "2013", "2014", "2015", "2016", "2017"],
    datasets: [{
      label: "女性",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [815, 912, 1051, 1341, 2021, 2284],
    },
    {
      label: "男性",
      backgroundColor: "rgba(185,185,185,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 5312, 6251, 7841, 9821, 14984],
    },
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