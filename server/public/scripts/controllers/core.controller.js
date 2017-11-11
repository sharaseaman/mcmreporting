myApp.controller('CoreController', function (UserService, $scope) {
  var vm = this;
  vm.userService = UserService;
  vm.chartData = UserService.chartData;
  vm.joinChartData = UserService.joinChartData;
  vm.selectedYear;

  vm.getSelectedYear = function() { 
    if (vm.selectedYear !== undefined) {
      selectedYear = vm.selectedYear
      UserService.updateChartYear(selectedYear);
    } else {
      return "Please select an Year";
    }
  };

  Chart.defaults.scale.ticks.beginAtZero = true;

  vm.getChartData = function () {
    UserService.getChartData()
      .then(function () {
        vm.mainChartYears = UserService.mainChartYears;
        vm.filteredYears = UserService.filteredYears;
        vm.caseTypeLabels = UserService.caseTypeLabels
        vm.filteredCases = UserService.filteredCases;
        vm.startCaseLabel = UserService.startCaseLabel;
        vm.filteredStartCase = UserService.filteredStartCase;
        vm.referralLabel = UserService.referralLabel; 
        vm.filteredReferral = UserService.filteredReferral;
      
        vm.stateOverallLabel = UserService.stateOverallLabel;
        vm.filteredStateOverall = UserService.filteredStateOverall;

        vm.countiesOverallLabel = UserService.countiesOverallLabel;
        vm.filteredCountiesOverall = UserService.filteredCountiesOverall;
        vm.districtOverallLabel = UserService.districtOverallLabel;
        vm.filteredDistrictsOverall = UserService.filteredDistrictsOverall;
        vm.peopleServedOverallLabel = UserService.peopleServedOverallLabel;
        vm.filteredPeopleServedOverall = UserService.filteredPeopleServedOverall;
        vm.ageOverallLabel = UserService.ageOverallLabel;
        vm.filteredAgeOverall = UserService.filteredAgeOverall;
        vm.genderOverallLabel = UserService.genderOverallLabel;
        vm.filteredGenderOverall = UserService.filteredGenderOverall;

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

        var ctc = document.getElementById("startCaseTypeChart");
        var myChart = new Chart(ctc, {
          type: 'bar',
          data: {
            labels: vm.startCaseLabel,
            datasets: [{
              label: 'Overall Start Case Type',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 0.2)',
              data: vm.filteredStartCase,
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

        var ctc = document.getElementById("stateOverallChart");
        var myChart = new Chart(ctc, {
          type: 'bar',
          data: {
            labels: vm.stateOverallLabel,
            datasets: [{
              label: 'Cases by State',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 0.2)',
              data: vm.filteredStateOverall,
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

        var ctc = document.getElementById("countiesOverallChart");
        var myChart = new Chart(ctc, {
          type: 'bar',
          data: {
            labels: vm.countiesOverallLabel,
            datasets: [{
              label: 'Cases by Counties',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 0.2)',
              data: vm.filteredCountiesOverall,
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

        var ctc = document.getElementById("districtOverallChart");
        var myChart = new Chart(ctc, {
          type: 'bar',
          data: {
            labels: vm.districtOverallLabel,
            datasets: [{
              label: 'Cases by MN School District',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 0.2)',
              data: vm.filteredDistrictsOverall,
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

        var ctc = document.getElementById("peopleServedOverallChart");
        var myChart = new Chart(ctc, {
          type: 'bar',
          data: {
            labels: vm.peopleServedOverallLabel,
            datasets: [{
              label: 'Number of Cases by People Served',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 0.2)',
              data: vm.filteredPeopleServedOverall,
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

        var ctc = document.getElementById("ageOverallChart");
        var myChart = new Chart(ctc, {
          type: 'bar',
          data: {
            labels: vm.ageOverallLabel,
            datasets: [{
              label: 'Number of Cases by Age',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 0.2)',
              data: vm.filteredAgeOverall,
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
      
        var ctc = document.getElementById("genderOverallChart");
        var myChart = new Chart(ctc, {
          type: 'bar',
          data: {
            labels: vm.genderOverallLabel,
            datasets: [{
              label: 'Number of Cases by Gender',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 0.2)',
              data: vm.filteredGenderOverall,
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

        var ctc = document.getElementById("referralsChart");
        var myChart = new Chart(ctc, {
          type: 'bar',
          data: {
            labels: vm.referralLabel,
            datasets: [{
              label: 'Referrals by Source',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 0.2)',
              data: vm.filteredReferral,
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
            labels: vm.caseTypeLabels,
            datasets: [{
              label: 'Case Type',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 0.2)',
              data: vm.filteredCases,
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

        // var ctc = document.getElementById("countyChart");
        // var myChart = new Chart(ctc, {
        //   type: 'bar',
        //   data: {
        //     labels: ['Runaway', 'Acquaintance Abduction', 'Family Abduction', 'Stranger Abduction', 'LIM', 'Prevention'],
        //     datasets: [{
        //       label: 'Case Type',
        //       backgroundColor: 'rgba(54, 162, 235, 0.2)',
        //       borderColor: 'rgba(54, 162, 235, 0.2)',
        //       data: [1, 2, 3, 4, 5, 6],
        //       borderWidth: 1
        //     }]
        //   },
        //   options: {
        //     scales: {
        //       yAxes: [{
        //         ticks: {
        //           beginAtZero: true,
        //           callback: function (value) { if (value % 1 === 0) { return value; } }
        //         }
        //       }]
        //     }
        //   }
        // });

        // var ctc = document.getElementById("schoolChart");
        // var myChart = new Chart(ctc, {
        //   type: 'bar',
        //   data: {
        //     labels: ['Runaway', 'Acquaintance Abduction', 'Family Abduction', 'Stranger Abduction', 'LIM', 'Prevention'],
        //     datasets: [{
        //       label: 'Case Type',
        //       backgroundColor: 'rgba(54, 162, 235, 0.2)',
        //       borderColor: 'rgba(54, 162, 235, 0.2)',
        //       data: [1, 2, 3, 4, 5, 6],
        //       borderWidth: 1
        //     }]
        //   },
        //   options: {
        //     scales: {
        //       yAxes: [{
        //         ticks: {
        //           beginAtZero: true,
        //           callback: function (value) { if (value % 1 === 0) { return value; } }
        //         }
        //       }]
        //     }
        //   }
        // });

        // var ctc = document.getElementById("servedChart");
        // var myChart = new Chart(ctc, {
        //   type: 'bar',
        //   data: {
        //     labels: ['Runaway', 'Acquaintance Abduction', 'Family Abduction', 'Stranger Abduction', 'LIM', 'Prevention'],
        //     datasets: [{
        //       label: 'Case Type',
        //       backgroundColor: 'rgba(54, 162, 235, 0.2)',
        //       borderColor: 'rgba(54, 162, 235, 0.2)',
        //       data: [1, 2, 3, 4, 5, 6],
        //       borderWidth: 1
        //     }]
        //   },
        //   options: {
        //     scales: {
        //       yAxes: [{
        //         ticks: {
        //           beginAtZero: true,
        //           callback: function (value) { if (value % 1 === 0) { return value; } }
        //         }
        //       }]
        //     }
        //   }
        // });

        // var ctc = document.getElementById("vulnerabilityChart");
        // var myChart = new Chart(ctc, {
        //   type: 'bar',
        //   data: {
        //     labels: ['Runaway', 'Acquaintance Abduction', 'Family Abduction', 'Stranger Abduction', 'LIM', 'Prevention'],
        //     datasets: [{
        //       label: 'Case Type',
        //       backgroundColor: 'rgba(54, 162, 235, 0.2)',
        //       borderColor: 'rgba(54, 162, 235, 0.2)',
        //       data: [1, 2, 3, 4, 5, 6],
        //       borderWidth: 1
        //     }]
        //   },
        //   options: {
        //     scales: {
        //       yAxes: [{
        //         ticks: {
        //           beginAtZero: true,
        //           callback: function (value) { if (value % 1 === 0) { return value; } }
        //         }
        //       }]
        //     }
        //   }
        // });

        // var ctc = document.getElementById("ageChart");
        // var myChart = new Chart(ctc, {
        //   type: 'bar',
        //   data: {
        //     labels: ['0-2', '3-7', '8-12', '13-18', '18+'],
        //     datasets: [{
        //       label: 'Case Type',
        //       backgroundColor: 'rgba(54, 162, 235, 0.2)',
        //       borderColor: 'rgba(54, 162, 235, 0.2)',
        //       data: [1, 2, 3, 4, 5],
        //       borderWidth: 1
        //     }]
        //   },
        //   options: {
        //     scales: {
        //       yAxes: [{
        //         ticks: {
        //           beginAtZero: true,
        //           callback: function (value) { if (value % 1 === 0) { return value; } }
        //         }
        //       }]
        //     }
        //   }
        // });

      });


  }

  vm.getJoinTableData = function () {
    UserService.getJoinTableData()
      .then(function () {
        vm.vulnerabilitiesOverallLabel = UserService.vulnerabilitiesOverallLabel;
        vm.filteredVulnerabilitiesOverall = UserService.filteredVulnerabilitiesOverall;
        vm.lawEnforcementOverallLabel = UserService.lawEnforcementOverallLabel;
        vm.filteredLawEnforcementOverall = UserService.filteredLawEnforcementOverall;
        vm.raceEthnicityOverallLabel = UserService.raceEthnicityOverallLabel;
        vm.filteredRaceEthnicityOverall = UserService.filteredRaceEthnicityOverall;

        var ctc = document.getElementById("vulnerabilitiesOverallChart");
        var myChart = new Chart(ctc, {
          type: 'bar',
          data: {
            labels: vm.vulnerabilitiesOverallLabel,
            datasets: [{
              label: 'Overall Vulnerabilities',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 0.2)',
              data: vm.filteredVulnerabilitiesOverall,
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

        var ctc = document.getElementById("lawEnforcementOverallChart");
        var myChart = new Chart(ctc, {
          type: 'bar',
          data: {
            labels: vm.lawEnforcementOverallLabel,
            datasets: [{
              label: 'Overall Law Enforcement Agencies worked with',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 0.2)',
              data: vm.filteredLawEnforcementOverall,
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

        var ctc = document.getElementById("raceEthnicityOverallChart");
        var myChart = new Chart(ctc, {
          type: 'bar',
          data: {
            labels: vm.raceEthnicityOverallLabel,
            datasets: [{
              label: 'Number of Cases by Race/Ethnicity',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 0.2)',
              data: vm.filteredRaceEthnicityOverall,
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