myApp.controller('CoreController', function (UserService, $scope) {
  console.log('CoreController created');
  var vm = this;
  vm.userService = UserService;
  vm.chartData = UserService.chartData;

  Chart.defaults.scale.ticks.beginAtZero = true;

  vm.getChartData = function () {
    UserService.getChartData().then(function () {
      vm.mainChartYears = UserService.mainChartYears;
      vm.filteredYears = UserService.filteredYears;
      

      var ctx = document.getElementById("mainBarChart");
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: vm.mainChartYears,
          datasets: [{
            label: 'Number of Cases per year',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 0.2)',
            data: vm.filteredYears,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                callback: function (value) { if (value % 1 === 0) { return value; } }
              }
            }]
          }
        }
      });

      var ctc = document.getElementById("caseTypeChart");
      var myChart = new Chart(ctc, {
        type: 'bar',
        data: {
          labels: ['Runaway', 'Acquaintance Abduction', 'Family Abduction', 'Stranger Abduction', 'LIM', 'Prevention'],
          datasets: [{
            label: 'Case Type',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 0.2)',
            data: [1, 2, 3, 4, 5, 6],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                callback: function (value) { if (value % 1 === 0) { return value; } }
              }
            }]
          }
        }
      });

      var ctc = document.getElementById("countyChart");
      var myChart = new Chart(ctc, {
        type: 'bar',
        data: {
          labels: ['Runaway', 'Acquaintance Abduction', 'Family Abduction', 'Stranger Abduction', 'LIM', 'Prevention'],
          datasets: [{
            label: 'Case Type',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 0.2)',
            data: [1, 2, 3, 4, 5, 6],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                callback: function (value) { if (value % 1 === 0) { return value; } }
              }
            }]
          }
        }
      });

      var ctc = document.getElementById("schoolChart");
      var myChart = new Chart(ctc, {
        type: 'bar',
        data: {
          labels: ['Runaway', 'Acquaintance Abduction', 'Family Abduction', 'Stranger Abduction', 'LIM', 'Prevention'],
          datasets: [{
            label: 'Case Type',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 0.2)',
            data: [1, 2, 3, 4, 5, 6],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                callback: function (value) { if (value % 1 === 0) { return value; } }
              }
            }]
          }
        }
      });

      var ctc = document.getElementById("servedChart");
      var myChart = new Chart(ctc, {
        type: 'bar',
        data: {
          labels: ['Runaway', 'Acquaintance Abduction', 'Family Abduction', 'Stranger Abduction', 'LIM', 'Prevention'],
          datasets: [{
            label: 'Case Type',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 0.2)',
            data: [1, 2, 3, 4, 5, 6],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                callback: function (value) { if (value % 1 === 0) { return value; } }
              }
            }]
          }
        }
      });

      var ctc = document.getElementById("vulnerabilityChart");
      var myChart = new Chart(ctc, {
        type: 'bar',
        data: {
          labels: ['Runaway', 'Acquaintance Abduction', 'Family Abduction', 'Stranger Abduction', 'LIM', 'Prevention'],
          datasets: [{
            label: 'Case Type',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 0.2)',
            data: [1, 2, 3, 4, 5, 6],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                callback: function (value) { if (value % 1 === 0) { return value; } }
              }
            }]
          }
        }
      });

      var ctc = document.getElementById("ageChart");
      var myChart = new Chart(ctc, {
        type: 'bar',
        data: {
          labels: ['0-2', '3-7', '8-12', '13-18', '18+'],
          datasets: [{
            label: 'Case Type',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 0.2)',
            data: [1, 2, 3, 4, 5],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                callback: function (value) { if (value % 1 === 0) { return value; } }
              }
            }]
          }
        }
      });

    });


  }

});