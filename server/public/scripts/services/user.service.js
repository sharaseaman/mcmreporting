myApp.service('UserService', function ($http, $location) {
  console.log('UserService Loaded');
  var self = this;

  self.userObject = {};
  self.chartData = { data: [] };
  self.mainChartYears = [];
  self.users = {};

  self.getChartData = function () {
    //on page load, GET all case_data from DB to the DOM
    return $http({
      method: 'GET',
      url: '/charts'
    })
      .then(function (res) {
        //match case_data to service
        self.chartData.data = res.data;
        return self.chartData.data
      })
      .then(function (res){
        //add a year based on intake_date
        self.addYearToRecord = res.forEach(function(element){
          element.year = element.intake_date.slice(0,4);
        });

        //then create an object with an array for each year's data record
        self.filteredYears = res.reduce(function (prev, curr) {
          if (!prev[curr.year]) {
            prev[curr.year] = [];
          }

          prev[curr.year].push(curr);

          return prev;
        }, {});

        //get the keys (years) for this object
        self.mainChartYears = Object.keys(self.filteredYears);

        //map the data records to the appropriate year's array
        self.filteredYears = self.mainChartYears.map(function (year) {
          return self.filteredYears[year].length;

        });
      })
  };

  self.getuser = function () {
    console.log('UserService -- getuser');
    $http({
      method: 'GET',
      url: '/user',
    }).then(function (response) {
      if (response.data.username) {
        // user has a curret session on the server
        self.userObject.userName = response.data.username;
        self.userObject.admin = response.data.admin;
        console.log('UserService -- getuser -- User Data: ', self.userObject.userName);
        console.log('UserService -- getuser -- User Data: ', self.userObject.admin);
        
        
      } else {
        console.log('UserService -- getuser -- failure', response);
        // user has no session, bounce them back to the login page
        $location.path("/home");
      }
    });
  };
  self.logout = function () {
    console.log('UserService -- logout');
    $http({
      method: 'GET',
      url: '/user/logout'
    }).then(function (response) {
      console.log('UserService -- logout -- logged out');
      $location.path('/home');
    });
  };

//gets all users back on manage page so they can be edited -shara
  self.getAllUsers = function () {
    return $http({
      method: 'GET',
      url: '/manage',
    }).then(function (response) {
      self.users.list = response.data;
      console.log('this is response in user before if', response.data);
    });
  };

  // updates the admin priviledges 
  self.updatePriviledges = function(user) {
    return $http({
      method: 'PUT',
      url: '/manage',
      data: user
    }).then(function (response) {
      console.log('Response', response.data);
    })
  }

  // deletes the user from the db
  self.deleteUser = function(user) {
    console.log('this is user on delete service', user);
    
    return $http({
      method: 'POST',
      url: '/manage',
      data: user
    }).then(function (response) {
      console.log('Delete Response', response.data);
    })
  }

});
