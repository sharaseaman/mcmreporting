myApp.controller('NewController', function (UserService) {
    console.log('NewController as nwc created');
    var vm = this;

    vm.userService = UserService;
    vm.userObject = UserService.userObject;


   UserService.getCities().then(function () {
        vm.CityMissingFromIn = UserService.cities;
        console.log('vm.CityMissingFromIn.city',vm.CityMissingFromIn.input.city)
    })

    // var Labels = vm.CityMissingFromIn.map(function (object) {
    //     return [object.city];
    //     console.log("object.city", object.city);
    //   });


    //shara working on pdf below
    var pdf = new jsPDF();
    
        vm.printPDF = function () {
            console.log('test');
    
            pdf.text(10, 10, 'Name: ' + vm.caseIn);
  
            pdf.save();
        }
    //shara working on pdf above
  });
