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

    vm.getData = function (mcmNum) {
      console.log('In getData');
      console.log('MCM Number', mcmNum);
      if (mcmNum != undefined) {
        UserService.getExistingForm(mcmNum).then(function () {
          vm.showEditForm = true;
        }).then(function () {
          vm.caseBeingEdited = UserService.caseBeingEdited;
          console.log('vm.caseBeingEdited', vm.caseBeingEdited);
        })

      } else {
        console.log('Field is null');
      }
      
    }

    vm.updateData = function () {
      console.log('In updateData');
      vm.editedForm = {
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
        editedForm.case_vulnerabilities = vm.case_vulnerabilities.filter(function (vulnerability) {
          return vulnerability.value == true;
        });
      }).then(function () {
        editedForm.race_ethnicity = vm.race_ethnicity.filter(function (ethnicity) {
          return ethnicity.value == true;

        });
      }).then(function (){
        console.log('editedForm', vm.editedForm);
        UserService.updateForm(vm.editedForm)
      })
      
    }
  });
