myApp.controller('CustomReportController', function (UserService) {
  console.log('CustomReportController created');
  var vm = this;
  vm.userService = UserService;
  vm.chartData = UserService.chartData;  
  vm.customReportData = UserService.customReportData;

  vm.getMCMRecords = function () {
    UserService.getChartData()
    .then(function (){
      vm.caseType = UserService.startCaseLabel;
      
      vm.states = UserService.stateOverallLabel;
      vm.mnCounties = UserService.countiesOverallLabel;
      vm.schoolDistricts = UserService.districtOverallLabel;
      vm.ages = UserService.ageOverallLabel;
      vm.genders = UserService.genderOverallLabel;
      vm.referralSource = UserService.referralLabel;
    
    })
  };

  vm.getJoinCaseRaceEthnicity = function () {
    UserService.getJoinCaseRaceEthnicity()
    .then (function (){
      vm.raceEthnicity = UserService.raceEthnicityOverallLabel;
    })
  }

  vm.getJoinCaseLawEnforcementDenial = function () {
    UserService.getJoinCaseLawEnforcementDenial()
    .then (function (){
      vm.lawEnforcement = UserService.lawEnforcementOverallLabel;
      vm.agencyDenial = UserService.lawDenialOverallLabel;
    })
  }

  vm.getJoinCaseVulnerabilities = function () {
    UserService.getJoinCaseVulnerabilities()
    .then (function (){
      vm.vulnerabilities = UserService.vulnerabilitiesOverallLabel;
    })
  }

  vm.submitCustomFilters = function (caseType,state,county,district,agency,denial,vulnerability,age,gender,race,source){
    // console.log('hello',caseType,state,county,district,agency,denial,vulnerability,age,gender,race,source);

    var userCustomFilters = {
      start_case_type : caseType,
      state : state,
      county_name : county,
      school_name : district,
      agency : agency,
      jurisdictional_denial : denial,
      vulnerability : vulnerability,
      age : age,
      gender : gender,
      race_ethnicity : race,
      referral_type : source
    }

    UserService.submitCustomFilters(userCustomFilters);
  }

});

