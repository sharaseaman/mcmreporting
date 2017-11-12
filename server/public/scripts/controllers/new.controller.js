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
