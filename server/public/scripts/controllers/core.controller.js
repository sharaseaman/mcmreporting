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

    });
  }

});