myApp.controller('CoreController', function (UserService, $scope) {
  var vm = this;
  vm.userService = UserService;
  vm.chartData = UserService.chartData;
  vm.joinLawEnforcementDenialChartData = UserService.joinLawEnforcementDenialChartData;
  vm.joinjoinVulnerabilityChartData = UserService.joinVulnerabilityChartData;
  vm.joinRaceChartData = UserService.joinRaceChartData.data
  vm.selectedYear;

  Chart.defaults.scale.ticks.beginAtZero = true;
  Chart.defaults.scale.ticks.autoSkip = false;
  Chart.defaults.global.title.fontFamily = "'PT Sans', Arial, Helvetica, sans-serif";
  Chart.defaults.scale.scaleLabel.fontFamily = "'PT Sans', Arial, Helvetica, sans-serif";
  Chart.defaults.scale.ticks.fontFamily = "'PT Sans', Arial, Helvetica, sans-serif";
  Chart.defaults.global.defaultFontColor = '#666';
  Chart.defaults.global.defaultFontSize = 16;


  vm.getSelectedYear = function () {

    if (vm.selectedYear !== undefined) {
      selectedYear = vm.selectedYear;
      UserService.updateChartYear(selectedYear);

      //User Selected Year Charts 
      vm.userCaseTypeLabels = UserService.userCaseTypeLabels;
      vm.userFilteredCases = UserService.userFilteredCases;
      vm.userCountyLabels = UserService.userCountyLabels;
      vm.userFilteredCounty = UserService.userFilteredCounty;
      vm.userSchoolLabels = UserService.userSchoolLabels;
      vm.userFilteredSchool = UserService.userFilteredSchool;
      vm.userPeopleServedLabels = UserService.userPeopleServedLabels;
      vm.userFilteredPeopleServed = UserService.userFilteredPeopleServed;
      vm.userAgeLabels = UserService.userAgeLabels;
      vm.userFilteredAge = UserService.userFilteredAge;

      vm.userVulnerabilityLabels = UserService.userVulnerabilityLabels;
      vm.userFilteredVulnerability = UserService.userFilteredVulnerability;
      vm.userLawLabels = UserService.userLawLabels;
      vm.userFilteredLaw = UserService.userFilteredLaw;
      vm.userRaceLabels = UserService.userRaceLabels;
      vm.userFilteredRace = UserService.userFilteredRace;

      var ctc = document.getElementById("userCaseTypeChart");
      var myChart = new Chart(ctc, {
        type: 'pie',
        data: {
          labels: vm.userCaseTypeLabels,
          datasets: [{
            label: 'Case Type',
            backgroundColor: ['rgba(255, 150, 150, 0.4)', 'rgba(0,255,255,0.4)','rgba(255,0,255,0.4)', 'rgba(255,255,0,0.4)'],
            borderColor: ['rgba(255, 150, 150, 0.4)', 'rgba(0,255,255,0.4)','rgba(255,0,255,0.4)', 'rgba(255,255,0,0.4)'],
            data: vm.userFilteredCases,
            borderWidth: 1
          }]
        },
        options: {
          title: {
            display: true,
            position: "top",
            text: "Number of Cases by Case Type (" + vm.selectedYear + ")",
            padding: 20,
            fontSize: 18
          }
        }
      });

      var ctc = document.getElementById("userCountyChart");
      var myChart = new Chart(ctc, {
        type: 'bar',
        data: {
          labels: vm.userCountyLabels,
          datasets: [{
            label: 'MN County',
            backgroundColor: 'rgba(20, 125, 145, 0.4)',
            borderColor: 'rgba(20, 125, 145, 0.4)',
            data: vm.userFilteredCounty,
            borderWidth: 1
          }]
        },
        options: {
          title: {
            display: true,
            position: "top",
            text: "Number of Cases by MN County (" + vm.selectedYear + ")",
            padding: 20,
            fontSize: 18
          },
          scales: {
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'MN County'
              }
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Number of Cases'
              },
              ticks: {
                beginAtZero: true,
                callback: function (value) { if (value % 1 === 0) { return value; } }
              }
            }]
          }
        }
      });

      var ctc = document.getElementById("userSchoolChart");
      var myChart = new Chart(ctc, {
        type: 'bar',
        data: {
          labels: vm.userSchoolLabels,
          datasets: [{
            label: 'School Districts',
            backgroundColor: 'rgba(20, 125, 145, 0.4)',
            borderColor: 'rgba(20, 125, 145, 0.4)',
            data: vm.userFilteredSchool,
            borderWidth: 1
          }]
        },
        options: {
          title: {
            display: true,
            position: "top",
            text: "Number of Cases by School District (" + vm.selectedYear + ")",
            padding: 20,
            fontSize: 18
          },
          scales: {
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'MN School District'
              }
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Number of Cases'
              },
              ticks: {
                beginAtZero: true,
                callback: function (value) { if (value % 1 === 0) { return value; } }
              }
            }]
          }
        }
      });

      var ctc = document.getElementById("userPeopleServedChart");
      var myChart = new Chart(ctc, {
        type: 'bar',
        data: {
          labels: vm.userPeopleServedLabels,
          datasets: [{
            label: 'People Served',
            backgroundColor: 'rgba(20, 125, 145, 0.4)',
            borderColor: 'rgba(20, 125, 145, 0.4)',
            data: vm.userFilteredPeopleServed,
            borderWidth: 1
          }]
        },
        options: {
          title: {
            display: true,
            position: "top",
            text: "Number of Cases by People Served (" + vm.selectedYear + ")",
            padding: 20,
            fontSize: 18
          },
          scales: {
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'People Served'
              }
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Number of Cases'
              },
              ticks: {
                beginAtZero: true,
                callback: function (value) { if (value % 1 === 0) { return value; } }
              }
            }]
          }
        }
      });

      var ctc = document.getElementById("userVulnerabilityChart");
      var myChart = new Chart(ctc, {
        type: 'bar',
        data: {
          labels: vm.userVulnerabilityLabels,
          datasets: [{
            label: 'Vulnerability',
            backgroundColor: 'rgba(20, 125, 145, 0.4)',
            borderColor: 'rgba(20, 125, 145, 0.4)',
            data: vm.userFilteredVulnerability,
            borderWidth: 1
          }]
        },
        options: {
          title: {
            display: true,
            position: "top",
            text: "Number of Cases by Vulnerabilities (" + vm.selectedYear + ")",
            padding: 20,
            fontSize: 18
          },
          scales: {
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Vulnerability'
              }
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Number of Cases'
              },
              ticks: {
                beginAtZero: true,
                callback: function (value) { if (value % 1 === 0) { return value; } }
              }
            }]
          }
        }
      });

      var ctc = document.getElementById("userAgeChart");
      var myChart = new Chart(ctc, {
        type: 'bar',
        data: {
          labels: vm.userAgeLabels,
          datasets: [{
            label: 'Age',
            backgroundColor: 'rgba(20, 125, 145, 0.4)',
            borderColor: 'rgba(20, 125, 145, 0.4)',
            data: vm.userFilteredAge,
            borderWidth: 1
          }]
        },
        options: {
          title: {
            display: true,
            position: "top",
            text: "Number of Cases by Age (" + vm.selectedYear + ")",
            padding: 20,
            fontSize: 18
          },
          scales: {
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Age'
              }
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Number of Cases'
              },
              ticks: {
                beginAtZero: true,
                callback: function (value) { if (value % 1 === 0) { return value; } }
              }
            }]
          }
        }
      });

      var ctc = document.getElementById("userLawEnforcementChart");
      var myChart = new Chart(ctc, {
        type: 'bar',
        data: {
          labels: vm.userLawLabels,
          datasets: [{
            label: 'Law Enforcement',
            backgroundColor: 'rgba(20, 125, 145, 0.4)',
            borderColor: 'rgba(20, 125, 145, 0.4)',
            data: vm.userFilteredLaw,
            borderWidth: 1
          }]
        },
        options: {
          title: {
            display: true,
            position: "top",
            text: "Number of Cases by Law Enforcement Agencies (" + vm.selectedYear + ")",
            padding: 20,
            fontSize: 18
          },
          scales: {
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Law Enforcement Agency'
              }
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Number of Cases'
              },
              ticks: {
                beginAtZero: true,
                callback: function (value) { if (value % 1 === 0) { return value; } }
              }
            }]
          }
        }
      });

      var ctc = document.getElementById("userRaceChart");
      var myChart = new Chart(ctc, {
        type: 'bar',
        data: {
          labels: vm.userRaceLabels,
          datasets: [{
            label: 'Race/ Ethnicity',
            backgroundColor: 'rgba(20, 125, 145, 0.4)',
            borderColor: 'rgba(20, 125, 145, 0.4)',
            data: vm.userFilteredRace,
            borderWidth: 1
          }]
        },
        options: {
          title: {
            display: true,
            position: "top",
            text: "Number of Cases by Race/ Ethnicity (" + vm.selectedYear + ")",
            padding: 20,
            fontSize: 18
          },
          scales: {
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Race/Ethnicity'
              }
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Number of Cases'
              },
              ticks: {
                beginAtZero: true,
                callback: function (value) { if (value % 1 === 0) { return value; } }
              }
            }]
          }
        }
      });

    } else {
      return "Please select an Year";
    }
  };

  vm.getChartData = function () {
    UserService.getChartData()
      .then(function () {
        //Global Charts
        vm.mainChartYears = UserService.mainChartYears;
        vm.filteredYears = UserService.filteredYears;
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
        vm.start_case_type_Runaway = UserService.start_case_type_Runaway;
        vm.start_case_type_Abduction_by_Family_Member = UserService.start_case_type_Abduction_by_Family_Member;
        vm.start_case_type_Abduction_by_Acquaintance = UserService.start_case_type_Abduction_by_Acquaintance;
        vm.start_case_type_Stranger_Abduction = UserService.start_case_type_Stranger_Abduction;
        vm.start_case_type_Lost__Injured__Otherwise_Missing = UserService.start_case_type_Lost__Injured__Otherwise_Missing;


        var ctx = document.getElementById("mainBarChart");
        var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: vm.mainChartYears,
            datasets: [{
              label: 'Number of Cases per year',
              backgroundColor: 'rgba(20, 125, 145, 0.4)',
              borderColor: 'rgba(20, 125, 145, 0.4)',
              data: vm.filteredYears,
              borderWidth: 1
            }]
          },
          options: {

            title: {
              display: true,
              position: "top",
              text: "Number of Cases per year",
              padding: 20,
              fontSize: 18
            },
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Year'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Number of Cases'
                },
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
              backgroundColor: 'rgba(20, 125, 145, 0.4)',
              borderColor: 'rgba(20, 125, 145, 0.4)',
              data: vm.filteredStartCase,
              borderWidth: 1
            }]
          },
          options: {
            title: {
              display: true,
              position: "top",
              text: "Number of Cases by Start Case Type",
              padding: 20,
              fontSize: 18
            },
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Case Type'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Number of Cases'
                },
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
              backgroundColor: 'rgba(20, 125, 145, 0.4)',
              borderColor: 'rgba(20, 125, 145, 0.4)',
              data: vm.filteredStateOverall,
              borderWidth: 1
            }]
          },
          options: {
            title: {
              display: true,
              position: "top",
              text: "Number of Cases by State",
              padding: 20,
              fontSize: 18
            },
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'State'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Number of Cases'
                },
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
              backgroundColor: 'rgba(20, 125, 145, 0.4)',
              borderColor: 'rgba(20, 125, 145, 0.4)',
              data: vm.filteredCountiesOverall,
              borderWidth: 1
            }]
          },
          options: {
            title: {
              display: true,
              position: "top",
              text: "Number of Cases by MN County",
              padding: 20,
              fontSize: 18
            },
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'MN County'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Number of Cases'
                },
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
              backgroundColor: 'rgba(20, 125, 145, 0.4)',
              borderColor: 'rgba(20, 125, 145, 0.4)',
              data: vm.filteredDistrictsOverall,
              borderWidth: 1
            }]
          },
          options: {
            title: {
              display: true,
              position: "top",
              text: "Number of Cases by MN School District",
              padding: 20,
              fontSize: 18
            },
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'MN School District'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Number of Cases'
                },
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
              backgroundColor: 'rgba(20, 125, 145, 0.4)',
              borderColor: 'rgba(20, 125, 145, 0.4)',
              data: vm.filteredPeopleServedOverall,
              borderWidth: 1
            }]
          },
          options: {
            title: {
              display: true,
              position: "top",
              text: "Number of Cases by People Served",
              padding: 20,
              fontSize: 18
            },
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'People Served'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Number of Cases'
                },
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
              backgroundColor: 'rgba(20, 125, 145, 0.4)',
              borderColor: 'rgba(20, 125, 145, 0.4)',
              data: vm.filteredAgeOverall,
              borderWidth: 1
            }]
          },
          options: {
            title: {
              display: true,
              position: "top",
              text: "Number of Cases by Age",
              padding: 20,
              fontSize: 18
            },
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Age'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Number of Cases'
                },
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
              backgroundColor: 'rgba(20, 125, 145, 0.4)',
              borderColor: 'rgba(20, 125, 145, 0.4)',
              data: vm.filteredGenderOverall,
              borderWidth: 1
            }]
          },
          options: {
            title: {
              display: true,
              position: "top",
              text: "Number of Cases by Gender",
              padding: 20,
              fontSize: 18
            },
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Gender'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Number of Cases'
                },
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
              backgroundColor: 'rgba(20, 125, 145, 0.4)',
              borderColor: 'rgba(20, 125, 145, 0.4)',
              data: vm.filteredReferral,
              borderWidth: 1
            }]
          },
          options: {
            title: {
              display: true,
              position: "top",
              text: "Number of Cases by Referral Source",
              padding: 20,
              fontSize: 18
            },
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Referral Source'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Number of Cases'
                },
                ticks: {
                  beginAtZero: true,
                  callback: function (value) { if (value % 1 === 0) { return value; } }
                }
              }]
            }
          }
        });

        var ctc = document.getElementById("startCaseByDistrictStacked");
        var myChart = new Chart(ctc, {
          type: 'line',
          data: {
            labels: vm.districtOverallLabel,
            datasets: [{
              label: 'Runaway',
              borderColor: 'rgba(0,0,255,1)',
              data: vm.start_case_type_Runaway,
              borderWidth: 1,
              fill:false,
            },
            {
              label: 'Abduction by Family Member',
              borderColor: 'rgba(255,0,255,1)',
              data: vm.start_case_type_Abduction_by_Family_Member,
              borderWidth: 1,
              fill:false,
            },
            {
              label: 'Abduction by Acquaintance',
              borderColor: 'rgba(0,255,255,1)',
              data: vm.start_case_type_Abduction_by_Acquaintance,
              borderWidth: 1,
              fill:false,
            },
            {
              label: 'Stranger Abduction',
              borderColor: 'rgba(255,285,0,1)',
              data: vm.start_case_type_Stranger_Abduction,
              borderWidth: 1,
              fill:false,
            },
            {
              label: 'LIM (Lost, Injured, Otherwise Missing)',
              borderColor: 'rgba(255,285,0,1)',
              data: vm.start_case_type_Lost__Injured__Otherwise_Missing,
              borderWidth: 1,
              fill:false,
            }
            ]
          },
          options: {
            title: {
              display: true,
              position: "top",
              text: "Start Case Type in each School District (Global)",
              padding: 20,
              fontSize: 18
            },
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'School District'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Number of Cases'
                },
                ticks: {
                  beginAtZero: true,
                  callback: function (value) { if (value % 1 === 0) { return value; } }
                }
              }]
            }
          }
        });
  
      });

    vm.getJoinCaseLawEnforcementDenial = function () {
      UserService.getJoinCaseLawEnforcementDenial()
        .then(function () {
          vm.lawEnforcementOverallLabel = UserService.lawEnforcementOverallLabel;
          vm.filteredLawEnforcementOverall = UserService.filteredLawEnforcementOverall;
          vm.jurisdictional_denial_true = UserService.jurisdictional_denial_true;
          vm.jurisdictional_denial_false = UserService.jurisdictional_denial_false;

          var ctc = document.getElementById("lawEnforcementOverallChart");
          var myChart = new Chart(ctc, {
            type: 'bar',
            data: {
              labels: vm.lawEnforcementOverallLabel,
              datasets: [{
                label: 'Number of Cases by Law Enforcement Agency',
                backgroundColor: 'rgba(20, 125, 145, 0.4)',
                borderColor: 'rgba(20, 125, 145, 0.4)',
                data: vm.filteredLawEnforcementOverall,
                borderWidth: 1
              }]
            },
            options: {
              title: {
                display: true,
                position: "top",
                text: "Number of Cases by Law Enforcement Agency",
                padding: 20,
                fontSize: 18
              },
              scales: {
                xAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Law Enforcement Agency'
                  }
                }],
                yAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Number of Cases'
                  },
                  ticks: {
                    beginAtZero: true,
                    callback: function (value) { if (value % 1 === 0) { return value; } }
                  }
                }]
              }
            }
          });

          var ctc = document.getElementById("lawEnforcementStackedOverall");
          var myChart = new Chart(ctc, {
            type: 'bar',
            data: {
              labels: vm.lawEnforcementOverallLabel,
              datasets: [{
                label: 'Jurisdictional Denial- Yes',
                backgroundColor: 'rgba( 255, 165, 0, 0.6)',
                borderColor: 'rgba( 255, 165, 0, 0.6)',
                data: vm.jurisdictional_denial_true,
                borderWidth: 1
              },
              {
                label: 'Jurisdictional Denial- No',
                backgroundColor: 'rgba(20, 125, 145, 0.4)',
                borderColor: 'rgba(20, 125, 145, 0.4)',
                data: vm.jurisdictional_denial_false,
                borderWidth: 1
              }
              ]
            },
            options: {
              title: {
                display: true,
                position: "top",
                text: "Jurisdictional Denial in each Law Enforcement Agency (Global)",
                padding: 20,
                fontSize: 18
              },
              scales: {
                xAxes: [{
                  stacked: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Law Enforcement Agency'
                  }
                }],
                yAxes: [{
                  stacked: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Number of Cases'
                  },
                  ticks: {
                    beginAtZero: true,
                    callback: function (value) { if (value % 1 === 0) { return value; } }
                  }
                }]
              }
            }
          });

        })
    }

    vm.getJoinCaseVulnerabilities = function () {
      UserService.getJoinCaseVulnerabilities()
        .then(function () {
          vm.vulnerabilitiesOverallLabel = UserService.vulnerabilitiesOverallLabel;
          vm.filteredVulnerabilitiesOverall = UserService.filteredVulnerabilitiesOverall;
          vm.vulnerability_ADD_ADHD = UserService.vulnerability_ADD_ADHD;
          vm.vulnerability_ASD = UserService.vulnerability_ASD;
          vm.vulnerability_Alcohol_use_abuse = UserService.vulnerability_Alcohol_use_abuse;
          vm.vulnerability_Anxiety = UserService.vulnerability_Anxiety;
          vm.vulnerability_Luring_grooming_by_adult = UserService.vulnerability_Luring_grooming_by_adult;
          vm.vulnerability_Luring_grooming_by_child = UserService.vulnerability_Luring_grooming_by_child;
          vm.vulnerability_Depression__Situational_ = UserService.vulnerability_Depression__Situational_;
          vm.vulnerability_Missing_from_care = UserService.vulnerability_Missing_from_care;
          vm.vulnerability_Drug_use_abuse = UserService.vulnerability_Drug_use_abuse;
          vm.vulnerability_Economic_exploitation__history = UserService.vulnerability_Economic_exploitation__history;
          vm.vulnerability_Physical_Abuse__history_ = UserService.vulnerability_Physical_Abuse__history_;
          vm.vulnerability_Emotional_abuse__history_ = UserService.vulnerability_Emotional_abuse__history_;
          vm.vulnerability_Runaway__history_ = UserService.vulnerability_Runaway__history_;
          vm.vulnerability_ODD = UserService.vulnerability_ODD;
          vm.vulnerability_Labor_Exploitation__history_ = UserService.vulnerability_Labor_Exploitation__history_;
          vm.vulnerability_Depression__Clinical_ = UserService.vulnerability_Depression__Clinical_;
          vm.vulnerability_Bipolar_Disorder = UserService.vulnerability_Bipolar_Disorder;
          vm.vulnerability_Gang_association = UserService.vulnerability_Gang_association;
          vm.vulnerability_Sexual_Abuse__history_ = UserService.vulnerability_Sexual_Abuse__history_;
          vm.vulnerability_Sexual_exploitation__history_ = UserService.vulnerability_Sexual_exploitation__history_;
          vm.vulnerability_Sexual_Minority = UserService.vulnerability_Sexual_Minority;


          var ctc = document.getElementById("vulnerabilitiesOverallChart");
          var myChart = new Chart(ctc, {
            type: 'bar',
            data: {
              labels: vm.vulnerabilitiesOverallLabel,
              datasets: [{
                label: 'Overall Vulnerabilities',
                backgroundColor: 'rgba(20, 125, 145, 0.4)',
                borderColor: 'rgba(20, 125, 145, 0.4)',
                data: vm.filteredVulnerabilitiesOverall,
                borderWidth: 1
              }]
            },
            options: {
              title: {
                display: true,
                position: "top",
                text: "Number of Cases by Vulnerability",
                padding: 20,
                fontSize: 18
              },
              scales: {
                xAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Vulnerability'
                  }
                }],
                yAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Number of Cases'
                  },
                  ticks: {
                    beginAtZero: true,
                    callback: function (value) { if (value % 1 === 0) { return value; } }
                  }
                }]
              }
            }
          });

          var ctc = document.getElementById("vulnerabilityStackedOverall");
          var myChart = new Chart(ctc, {
            type: 'line',
            data: {
              labels: vm.ageOverallLabel,
              datasets: [{
                label: 'ADD/ADHD',
                backgroundColor: 'rgba(192,192,192,1)',
                borderColor: 'rgba(192,192,192,1)',
                data: vm.vulnerability_ADD_ADHD,
                borderWidth: 1,
                fill:false,
              },
              {
                label: 'ASD',
                backgroundColor: 'rgba(255,0,255,1)',
                borderColor: 'rgba(255,0,255,1)',
                data: vm.vulnerability_ASD,
                borderWidth: 1,
                fill:false,
              },
              {
                label: 'Alcohol Use Abuse',
                backgroundColor: 'rgba(0,255,255,1)',
                borderColor: 'rgba(0,255,255,1)',
                data: vm.vulnerability_Alcohol_use_abuse,
                borderWidth: 1,
                fill:false,
              },
              {
                label: 'Anxiety',
                backgroundColor: 'rgba(255,255,0,1)',
                borderColor: 'rgba(255,255,0,1)',
                data: vm.vulnerability_Anxiety,
                borderWidth: 1,
                fill:false,
              },
              {
                label: 'Luring/ grooming by adult',
                backgroundColor: 'rgba(0,0,255,1)',
                borderColor: 'rgba(0,0,255,1)',
                data: vm.vulnerability_Luring_grooming_by_adult,
                borderWidth: 1,
                fill:false,
              },
              {
                label: 'Luring/grooming by child',
                backgroundColor: 'rgba(0,255,0,1)',
                borderColor: 'rgba(0,255,0,1)',
                data: vm.vulnerability_Luring_grooming_by_child,
                borderWidth: 1,
                fill:false,
              },
              {
                label: 'Depression (Situational)',
                backgroundColor: 'rgba(255,0,0,1)',
                borderColor: 'rgba(255,0,0,1)',
                data: vm.vulnerability_Depression__Situational_,
                borderWidth: 1,
                fill:false,
              },
              {
                label: 'Missing from care',
                backgroundColor: 'rgba(230, 230, 250, 0.8)',
                borderColor: 'rgba(230, 230, 250, 0.8)',
                data: vm.vulnerability_Missing_from_care,
                borderWidth: 1,
                fill:false,
              },
              {
                label: 'Drug use abuse',
                backgroundColor: 'rgba(047, 079, 079, 1)',
                borderColor: 'rgba(047, 079, 079, 1)',
                data: vm.vulnerability_Drug_use_abuse,
                borderWidth: 1,
                fill:false,
              },
              {
                label: 'Economic exploitation (history)',
                backgroundColor: 'rgba(112,128,144, 1)',
                borderColor: 'rgba(112,128,144,1)',
                data: vm.vulnerability_Economic_exploitation__history,
                borderWidth: 1,
                fill:false,
              },
              {
                label: 'Physical Abuse (history)',
                backgroundColor: 'rgba(000,206,209,1)',
                borderColor: 'rgba(000,206,209,1)',
                data: vm.vulnerability_Physical_Abuse__history_,
                borderWidth: 1,
                fill:false,
              },
              {
                label: 'Runaway (history)',
                backgroundColor: 'rgba(205,092,092,1)',
                borderColor: 'rgba(205,092,092,1)',
                data: vm.vulnerability_Runaway__history_,
                borderWidth: 1,
                fill:false,
              },
              {
                label: 'ODD',
                backgroundColor: 'rgba(205,133,063,1)',
                borderColor: 'rgba(205,133,063,1)',
                data: vm.vulnerability_ODD,
                borderWidth: 1,
                fill:false,
              },
              {
                label: 'Labor Exploitation (history)',
                backgroundColor: 'rgba(178,034,034,1)',
                borderColor: 'rgba(178,034,034,1)',
                data: vm.vulnerability_Labor_Exploitation__history_,
                borderWidth: 1,
                fill:false,
              },
              {
                label: 'Depression (Clinical)',
                backgroundColor: 'rgba(255,105,180,1)',
                borderColor: 'rgba(255,105,180,1)',
                data: vm.vulnerability_Depression__Clinical_,
                borderWidth: 1,
                fill:false,
              },
              {
                label: 'Bipolar Disorder',
                backgroundColor: 'rgba(238,130,238,1)',
                borderColor: 'rgba(238,130,238,1)',
                data: vm.vulnerability_Bipolar_Disorder,
                borderWidth: 1,
                fill:false,
              },
              {
                label: 'Gang Association',
                backgroundColor: 'rgba(139,121,094,1)',
                borderColor: 'rgba(139,121,094,1)',
                data: vm.vulnerability_Gang_association,
                borderWidth: 1,
                fill:false,
              },
              {
                label: 'Sexual Abuse (history)',
                backgroundColor: 'rgba(255,228,225,1)',
                borderColor: 'rgba(255,228,225,1)',
                data: vm.vulnerability_Sexual_Abuse__history_,
                borderWidth: 1,
                fill:false,
              },
              {
                label: 'Sexual Exploitation (history)',
                backgroundColor: 'rgba(030,144,255,1)',
                borderColor: 'rgba(030,144,255,1)',
                data: vm.vulnerability_Sexual_exploitation__history_,
                borderWidth: 1,
                fill:false,
              },
              {
                label: 'Sexual Minority',
                backgroundColor: 'rgba(255,	165,	079, 1)',
                borderColor: 'rgba(255,	165,	079, 1)',
                data: vm.vulnerability_Sexual_Minority,
                borderWidth: 1,
                fill:false,
              }
              ]
            },
            options: {
              title: {
                display: true,
                position: "top",
                text: "Vulnerabilities in each Age (Global)",
                padding: 20,
                fontSize: 18
              },
              scales: {
                xAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Age'
                  }
                }],
                yAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Number of Cases'
                  },
                  ticks: {
                    beginAtZero: true,
                    callback: function (value) { if (value % 1 === 0) { return value; } }
                  }
                }]
              }
            }
          });

        });
    };

    vm.getJoinCaseRaceEthnicity = function () {
      UserService.getJoinCaseRaceEthnicity()
        .then(function () {

          vm.raceEthnicityOverallLabel = UserService.raceEthnicityOverallLabel;
          vm.filteredRaceEthnicityOverall = UserService.filteredRaceEthnicityOverall;


          var ctc = document.getElementById("raceEthnicityOverallChart");
          var myChart = new Chart(ctc, {
            type: 'bar',
            data: {
              labels: vm.raceEthnicityOverallLabel,
              datasets: [{
                label: 'Number of Cases by Race/Ethnicity',
                backgroundColor: 'rgba(20, 125, 145, 0.4)',
                borderColor: 'rgba(20, 125, 145, 0.4)',
                data: vm.filteredRaceEthnicityOverall,
                borderWidth: 1
              }]
            },
            options: {
              title: {
                display: true,
                position: "top",
                text: "Number of Cases by Race/ Ethnicity",
                padding: 20,
                fontSize: 18
              },
              scales: {
                xAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Race/ Ethnicity'
                  }
                }],
                yAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Number of Cases'
                  },
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
  };

  vm.saveChart = function (id, shouldSaveWithYear) {
    var yearString = '';
    var ctx = document.getElementById(id);

    if (shouldSaveWithYear) {
      yearString = vm.selectedYear;
    }

    ctx.toBlob(function (blob) {
      saveAs(blob, id + yearString)
    });
  };

})
