myApp.controller('CustomController', function(UserService) {
    console.log('CustomController created');
    var vm = this;
    vm.userService = UserService;
  });