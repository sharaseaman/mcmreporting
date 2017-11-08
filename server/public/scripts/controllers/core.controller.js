myApp.controller('CoreController', function (UserService) {
  console.log('CoreController created');
  var vm = this;
  vm.userService = UserService;
});