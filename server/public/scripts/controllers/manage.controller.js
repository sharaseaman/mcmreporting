myApp.controller('ManageController', function (UserService) {
    console.log('ManageController created');
    var vm = this;
    vm.userService = UserService;
    vm.userObject = UserService.userObject;


    //basic function to test manage route and get call
    vm.editUsers = function(){
      UserService.editUsers();
    }

  });