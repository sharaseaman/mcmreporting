myApp.controller('EditController', function(UserService) {
    console.log('EditController created');
    var vm = this;
    vm.userService = UserService;
    vm.editedForm = {};
    vm.showEditForm = false;
    vm.caseBeingEdited = {};
    vm.case_vulnerabilities = [{
      name: "ADD/ADHD",
      value: false
    }, {
      name: "ASD",
      value: false
    }, {
      name: "Alcohol use/abuse",
      value: false
    },
    {
      name: "Anxiety",
      value: false
    }, {
      name: "BiPolarDisorder",
      value: false
    },
    {
      name: "Depression (Clinical)",
      value: false
    }, {
      name: "Depression (Situational)",
      value: false
    },
    {
      name: "Drug use/abuse",
      value: false
    }, {
      name: "Economic exploitation (history",
      value: false
    },
    {
      name: "Emotional abuse (history)",
      value: false
    }, {
      name: "Gang association",
      value: false
    },
    {
      name: "ODD",
      value: false
    }, {
      name: "Labor Exploitation (history)",
      value: false
    },
    {
      name: "Luring/grooming by adult",
      value: false
    }, {
      name: "Luring/grooming by child",
      value: false
    },
    {
      name: "Missing From Care",
      value: false
    }, {
      name: "Physical Abuse (history)",
      value: false
    },
    {
      name: "Runaway (history)",
      value: false
    }, {
      name: "Sexual Abuse (history)",
      value: false
    },
    {
      name: "Sexual exploitation (history)",
      value: false
    }, {
      name: "Sexual Minority",
      value: false
    }
    ]

    vm.race_ethnicity = [{
      name: "African American",
      value: false
    }, {
      name: "Asian Pacific Islander",
      value: false
    }, {
      name: "Caucasian",
      value: false
    },
    {
      name: "Latinx",
      value: false
    }, {
      name: "Native American",
      value: false
    }
    ]

    UserService.getCities().then(function (response) {
      console.log('cities', response.data);
      return vm.cities = response.data;
    });

    UserService.getCounties().then(function (response) {
      return vm.counties = response.data;
    });

    UserService.getAgencies().then(function (response) {
      console.log('lawEnforcement', response.data)
      return vm.agencies = response.data;

    });


    vm.getData = function (mcmNum) {
      console.log('In getData');
      console.log('MCM Number', mcmNum);
      if (mcmNum != undefined) {
        UserService.getExistingForm(mcmNum).then(function () {
        }).then(function () {
          vm.caseBeingEdited = UserService.caseBeingEdited;
          vm.age = UserService.caseBeingEdited.data[0].age;
          vm.vulnArray = [];
          for (var i = 0; i < vm.caseBeingEdited.data.length; i++) {
            vm.vulnArray.push(vm.caseBeingEdited.data[i].vulnerabilities_id);
          }
          console.log("vulnArray", vm.vulnArray);  
          // if(1 in vm.vulnArray) {
          //   vm.case_vulnerabilities[0].value = true;
          // } 

          for (var j = 0; j < vm.vulnArray.length; j++) {
            if (vm.vulnArray[j] == 1) {
              vm.case_vulnerabilities[0].value = true;
            } else if (vm.vulnArray[j] == 2) {
              vm.case_vulnerabilities[1].value = true;
            } else if (vm.vulnArray[j] == 3) {
              vm.case_vulnerabilities[2].value = true;
            } else if (vm.vulnArray[j] == 4) {
              vm.case_vulnerabilities[3].value = true;
            } else if (vm.vulnArray[j] == 5) {
              vm.case_vulnerabilities[4].value = true;
            } else if (vm.vulnArray[j] == 6) {
              vm.case_vulnerabilities[5].value = true;
            } else if (vm.vulnArray[j] == 7) {
              vm.case_vulnerabilities[6].value = true;
            } else if (vm.vulnArray[j] == 8) {
              vm.case_vulnerabilities[7].value = true;
            } else if (vm.vulnArray[j] == 9) {
              vm.case_vulnerabilities[8].value = true;
            } else if (vm.vulnArray[j] == 10) {
              vm.case_vulnerabilities[9].value = true;
            } else if (vm.vulnArray[j] == 11) {
              vm.case_vulnerabilities[10].value = true;
            } else if (vm.vulnArray[j] == 12) {
              vm.case_vulnerabilities[11].value = true;
            } else if (vm.vulnArray[j] == 13) {
              vm.case_vulnerabilities[12].value = true;
            } else if (vm.vulnArray[j] == 14) {
              vm.case_vulnerabilities[13].value = true;
            } else if (vm.vulnArray[j] == 15) {
              vm.case_vulnerabilities[14].value = true;
            } else if (vm.vulnArray[j] == 16) {
              vm.case_vulnerabilities[15].value = true;
            } else if (vm.vulnArray[j] == 17) {
              vm.case_vulnerabilities[16].value = true;
            } else if (vm.vulnArray[j] == 18) {
              vm.case_vulnerabilities[17].value = true;
            } else if (vm.vulnArra[j] == 19) {
              vm.case_vulnerabilities[18].value = true;
            } else if (vm.vulnArray[j] == 20) {
              vm.case_vulnerabilities[19].value = true;
            } else if (vm.vulnArray[j] == 21) {
              vm.case_vulnerabilities[20].value = true;
            }       
          }
          
          console.log('Add value', vm.case_vulnerabilities[0].value);
          
          // vm.DateLastSeenIn = '02/10/2016';
          // vm.DateReportedMissingtoPoliceIn = '06/23/17';
          // vm.familyMembers = 1;
          // vm.OfficeDetectiveIn1 = 'Joe Black';
          // vm.LEPhoneNumberIn1 = '(651)-555-5555';
          // vm.StreetAddressIn1 = '123 Main Street';
          // vm.OfficeDetectiveIn2 = 'John Boy';
          // vm.LEPhoneNumberIn2 = '(612)-555-5555';
          // vm.StreetAddressIn2 = '221 B Baker Street';
          // vm.schoolDisctrict = 123;
          // vm.gender = UserService.caseBeingEdited.data[0].age;
          

          console.log('vm.caseBeingEdited', vm.caseBeingEdited);
        }).then(function () {
          vm.showEditForm = true;
        })

      } else {
        console.log('Field is null');
      }
      
    }

    vm.updateData = function () {
      console.log('In updateData');
      vm.editedForm = {
        mcm_number: vm.caseIn,
        age: vm.age,
        gender: vm.gender,
        last_seen: vm.DateLastSeenIn,
        reported_missing: vm.DateReportedMissingtoPoliceIn,
        close_date: vm.DateClosed,
        city: vm.city,
        county: vm.county,
        state: vm.state,
        familyMembers: vm.familyMembers, // people_served ?
        start_case_type: vm.startingCaseType,
        end_case_type: vm.endingCaseType,
        school: vm.schoolDisctrict,
        disposition: vm.disposition,
        referral_type: vm.referralType,
        case_vulnerabilities: [],
        race_ethnicity: [],
        case_lawenforcement_denial: []
      }
      swal({
        title: 'Required fields submitted to database.',
        icon: "success",
        width: 600,
        padding: 100,
        background: '#fff url(assets/page.JPG)'

        }).then(function () {
        vm.editedForm.case_vulnerabilities = vm.case_vulnerabilities.filter(function (vulnerability) {
          return vulnerability.value == true;
        });
      }).then(function () {
        vm.editedForm.race_ethnicity = vm.race_ethnicity.filter(function (ethnicity) {
          return ethnicity.value == true;

        });
      }).then(function (){
        console.log('editedForm', vm.editedForm);
        UserService.updateForm(vm.editedForm)
      })
      
    }
  });
