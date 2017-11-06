myApp.controller('EditController', function(UserService) {
    console.log('EditController created');
    var vm = this;
    vm.userService = UserService;
  });