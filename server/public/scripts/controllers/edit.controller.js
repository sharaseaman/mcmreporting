myApp.controller('EditController', function(UserService) {
    console.log('EditController created');
    var vm = this;
    vm.userService = UserService;
    vm.editedForm = {};
    vm.showEditForm = false;
    vm.vulnerabilities = {
      add: false,
      autism: false,
      alcholism: false,
      anxiety: false,
      biPolar: false,
      depressionClinical: false,
      depressionSituational: false,
      drugUse: false,
      economic: false,
      emotionalAbuse: false,
      gang: false,
      oDD: false,
      labor: false,
      luringAdult: false,
      luringChild: false,
      missingFromCare: false,
      physicalAbuse: false,
      runaway: false,
      sexualAbuse: false,
      sexualExploitation: false,
      sexualMinority: false
    }

    vm.getData = function (mcmNum) {
      console.log('In getData');
      console.log('MCM Number', mcmNum);
      if (mcmNum != undefined) {
        UserService.getExistingForm(mcmNum).then(function () {
          vm.showEditForm = true;
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
        referral_type: vm.referralType
      }
      console.log('editedForm', vm.editedForm);
      UserService.updateForm(vm.editedForm);
    }
  });
