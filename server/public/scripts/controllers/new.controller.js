myApp.controller('NewController', function (UserService) {
    console.log('NewController as nwc created');
    var vm = this;
    var newIntake = [];



    
  
    vm.itemChange = function(){
      console.log('inside itemchange');
      console.log(vm.SchoolDistrictWhereChildWasEnrolledIn);
    }

    // vm.agencyChange = function(){
    //   console.log('inside itemchange');
    //   // console.log(vm.SchoolDistrictWhereChildWasEnrolledIn);
    // }


    vm.userService = UserService;
    vm.userObject = UserService.userObject;


   UserService.getCities().then(function (response){
    console.log('cities', response.data);
    return vm.objects = response.data;
  });

  UserService.getCounties().then(function (response){
    return vm.objects = response.data;
  });

  UserService.getAgencies().then(function (response){
    return vm.objects = response.data;
  });

  UserService.getSchools().then(function (response){
    console.log('schools', response.data);
    
    return vm.objects = response.data;
  });

  
  vm.click = function () {
    console.log('in click');

    var newIntake = {
      // mcm_number: vm.caseIn,
      // intake_date: vm.DateofIntaketoMCMIn,
      // age: vm.AgeIn,
      // gender: vm.GenderIn,
      // last_seen: vm.DateLastSeenIn,
      // reported_missing: vm.DateReportedMissingtoPoliceIn,
      // people_served: ???,
      // city: vm.CityMissingFromIn,
      // county: vm.CountyMissingFromIn,
      state: vm.StateMissingFromIn,
      // school: vm.SchoolDistrictWhereChildWasEnrolledIn,
      // start_case_type: vm.CaseTypeWhenOpenedIn,
      // referral_type: vm.ReferralTypeIn,
      // mcm_number:   ???,
    };

    console.log('newIntake', newIntake);
    swal({
        title: 'Required fields will be sent to database',
        width: 600,
        padding: 100,
        background: '#fff url(assets/page.JPG)'
    }).then(function () {
        UserService.postInputData(newIntake);
        $location.path('/forms/newIntake');
    });
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
