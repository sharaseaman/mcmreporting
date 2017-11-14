myApp.controller('NewController', function (UserService) {
  console.log('NewController as nwc created');
  var vm = this;
  var newIntake = [];


  vm.itemChange = function () {
    console.log('inside itemchange');
    console.log(vm.SchoolDistrictWhereChildWasEnrolledIn);
  }


  vm.userService = UserService;
  vm.userObject = UserService.userObject;


  UserService.getCities().then(function (response) {
    console.log('cities', response.data);
    return vm.cities = response.data;
  });

  UserService.getCounties().then(function (response) {
    return vm.counties = response.data;
  });

  UserService.getAgencies().then(function (response) {
    return vm.agencies = response.data;
  });

  UserService.getSchools().then(function (response) {
    console.log('schools', response.data);

    return vm.schools = response.data;
  });


  vm.click = function () {
    console.log('in click');


    // var vulnerabilities = {
    //   vm.ADDIn,
    //   vm.AutismIn,
    //   vm.AlcoholIn,
    //   vm.AnxietyIn,
    //   vm.BiPolarIn,
    //   vm.DepressionClinicalIn,
    //   vm.DepressionSituationalIn,
    //   vm.DrugUseIn,
    //   vm.EconomicIn,
    //   vm.EmotionalAbuseIn,
    //   vm.GangIn,
    //   vm.ODDIn,
    //   vm.LaborIn,
    //   vm.LuringAdultIn,
    //   vm.LuringChildIn,
    //   vm.MissingFromCareIn,
    //   vm.PhysicalAbuseIn,
    //   vm.RunawayIn,
    //   vm.SexualAbuseIn,
    //   vm.SexualExploitationIn,
    //   vm.SexualMinorityIn
    // };

    var newIntake = {
      mcm_number: vm.caseIn,
      intake_date: vm.DateofIntaketoMCMIn,
      age: vm.AgeIn,
      gender: vm.GenderIn,
      last_seen: vm.DateLastSeenIn,
      reported_missing: vm.DateReportedMissingtoPoliceIn,
      people_served: vm.FamilyMembersInvolvedInSearchIn,
      city: vm.CityMissingFromIn,
      county: vm.CountyMissingFromIn,
      state: vm.StateMissingFromIn,
      school: vm.SchoolDistrictWhereChildWasEnrolledIn,
      start_case_type: vm.CaseTypeWhenOpenedIn,
      end_case_type: vm.CaseTypeWhenClosedIn,
      disposition: vm.CaseDispositionIn,
      close_date: vm.DateCaseClosedIn,
      referral_type: vm.ReferralTypeIn
    };

    if (newIntake.mcm_number == null || newIntake.intake_date == null || newIntake.age == null || newIntake.gender == null
    || newIntake.last_seen == null || newIntake.reported_missing == null || newIntake.people_served == null|| newIntake.city == null
  || newIntake.county == null|| newIntake.state == null || newIntake.school == null || newIntake.start_case_type == null|| newIntake.end_case_type == null
|| newIntake.disposition == null || newIntake.close_date == null || newIntake.referral_type == null) {
      swal({  
        title: 'Please fill in all required fields.',
        icon: "warning",        
        width: 600,
        padding: 100,
        background: '#fff url(assets/page.JPG)'
      })
    } else {
      console.log('newIntake', newIntake);
      swal({
        title: 'Required fields submitted to database.',
        icon: "success",
        width: 600,
        padding: 100,
        background: '#fff url(assets/page.JPG)'
      }).then(function () {
        UserService.postInputData(newIntake);
        UserService.postVulnerabilities(vulnerabilities);
      });
    };
  };


  //shara working on pdf below
  var pdf = new jsPDF();

  vm.printPDF = function () {
    console.log('test');

    pdf.text(10, 10, 'Name: ' + vm.caseIn);

    pdf.save();
  }
  //shara working on pdf above
});