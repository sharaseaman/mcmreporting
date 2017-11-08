myApp.controller('NewController', function (UserService) {
    console.log('NewController created');
    var vm = this;
    vm.userService = UserService;
    vm.userObject = UserService.userObject;
  });