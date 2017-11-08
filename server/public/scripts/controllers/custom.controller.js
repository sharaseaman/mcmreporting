myApp.controller('CustomReportController', function (UserService) {
  console.log('CustomReportController created');
  var vm = this;
  vm.userService = UserService;
});

