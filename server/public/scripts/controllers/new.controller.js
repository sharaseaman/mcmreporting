myApp.controller('NewController', function (UserService) {
    console.log('NewController as nwc created');
    var vm = this;
  
    vm.agencyChange = function(){
      console.log('inside itemchange');
      // console.log(vm.CityMissingFromIn);
  
    }

    vm.countyChange = function(){
      console.log('inside itemchange');
      // console.log(vm.CityMissingFromIn);
  
    }

    vm.cityChange = function(){
      console.log('inside itemchange');
      // console.log(vm.CityMissingFromIn);
  
    }


    vm.schoolChange = function(){
      console.log('inside itemchange');
      // console.log(vm.CityMissingFromIn);
  
    }

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

  // UserService.postInputData().then(function (response){
    
  // }

  vm.click = function (){

    
    UserService.postInputData(vm.input);
  };

//create object with following required fields:

  // mcm_number, intake_date, age, gender, 
  // last_seen, reported_missing, people_served, 
  // city, county, state, school, 
start_case_type, referral_type, mcm_number

  // nwc.caseIn, nwc.DateofIntaketoMCMIn, nwc.AgeIn, nwc.GenderIn, 
  // nwc.DateLastSeenIn, nwc.DateReportedMissingtoPoliceIn, ??
  // nwc.CityMissingFromIn, nwc.CountyMissingFromIn, nwc.StateMissingFromIn
  // nwc.SchoolDistrictWhereChildWasEnrolledIn, 
  // nwc.CaseTypeWhenOpenedIn, nwc.ReferralTypeIn ??

  
  // UserService.postAgencies().then(function (response){
  //   return vm.objects = response.data;
  // });



    //shara working on pdf below
    var pdf = new jsPDF();
    
        vm.printPDF = function () {
            console.log('test');
    
            pdf.text(10, 10, 'Name: ' + vm.caseIn);
  
            pdf.save();
        }
    //shara working on pdf above
  });
