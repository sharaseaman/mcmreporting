myApp.controller('EditController', function(UserService) {
    console.log('EditController created');
    var vm = this;
    vm.userService = UserService;
    vm.editedForm = {};
    vm.showEditForm = false;

    vm.getData = function (mcmNum) {
      console.log('In getData');
      console.log('MCM Number', mcmNum);
      if (mcmNum != undefined) {
        // UserService.getExistingForm(mcmNum).then(function () {
          vm.showEditForm = true;
        // })

      } else {
        console.log('Field is null');
      }
      
    }

    vm.updateData = function () {
      console.log('In updateData');
      vm.editedForm = {
        age: vm.age,
        city: vm.city,
        county: vm.county,
        state: vm.state,
        familyMembers: vm.familyMembers,
        caseType: vm.caseType,
        vulnerabilities: vm.vulnerabilities,
        jurisdiction: vm.jurisdiction,
        schoolDisctrict: vm.schoolDisctrict,
        outcome: vm.outcome
      }
      console.log('editedForm', vm.editedForm);
      UserService.updateForm(vm.editedForm);
    }
  });
