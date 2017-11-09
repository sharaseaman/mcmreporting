myApp.controller('NewController', function (UserService) {
    console.log('NewController as nwc created');
    var vm = this;
    vm.userService = UserService;
    vm.userObject = UserService.userObject;

    //shara working on pdf below
    var pdf = new jsPDF();
    
        vm.printPDF = function () {
            console.log('test');
    
            pdf.text(10, 10, 'Name: ' + vm.caseIn);
  
            pdf.save();
        }
    //shara working on pdf above
  });