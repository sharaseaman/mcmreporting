myApp.controller('ManageController', function (UserService) {
    console.log('ManageController created');
    var vm = this;
    vm.userService = UserService;
    vm.userObject = UserService.userObject;
    


    //basic function to test manage route and get call
    vm.getAllUsers = function(){
      UserService.getAllUsers().then(function() {
        vm.users = UserService.users.list;
        console.log('vm.users', vm.users);
      })
    }

    vm.deleteUser = function(user) {
      console.log('In deleteUser', user.username);
      UserService.userToDelete = user;
      UserService.deleteUser(user).then(function () {
        vm.getAllUsers();
      })
    }

    vm.editPriviledge = function(user) {
      console.log('In editPrivledge', user.username);
      user.admin = !user.admin;
      console.log('New admin value:', user.admin);
      UserService.updatePriviledges(user);

    }

  });