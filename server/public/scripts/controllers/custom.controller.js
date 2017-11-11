myApp.controller('CustomReportController', function (UserService) {
  console.log('CustomReportController created');
  var vm = this;
  vm.userService = UserService;

  vm.caseType = [
    "Runaway", "Family Abduction", "Acquantaince Abduction", "xyz"
  ];
  vm.states = [
    "MN", "NY", "NJ"
  ];
  vm.mnCounties =[];
  vm.schoolDistricts =[];
  vm.agencies =[];
  vm.agencyDenial =[];
  vm.vulnerabilities =[];
  vm.ages =[];
  vm.gender =[];
  vm.race =[];
  vm.referralSource =[];


});

