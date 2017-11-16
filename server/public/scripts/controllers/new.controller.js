myApp.controller('NewController', function (UserService) {
  console.log('NewController as nwc created');
  var vm = this;
  var newIntake = [];

  vm.case

  vm.case_vulnerabilities = [{ name: "ADD/ADHD", value: false }, { name: "ASD", value: false }, { name: "Alcohol use/abuse", value: false},
  { name: "Anxiety", value: false }, { name: "BiPolarDisorder", value: false},
  { name: "Depression (Clinical)", value: false }, { name: "Depression (Situational)", value: false}, 
  { name: "Drug use/abuse", value: false }, { name: "Economic exploitation (history", value: false }, 
  { name: "Emotional abuse (history)", value: false }, { name: "Gang association", value: false }, 
  { name: "ODD", value: false }, { name: "Labor Exploitation (history)", value: false }, 
  { name: "Luring/grooming by adult", value: false }, { name: "Luring/grooming by child", value: false }, 
  { name: "Missing from care", value: false }, { name: "Physical Abuse (history)", value: false },
  { name: "Runaway (history)", value: false }, { name: "Sexual Abuse (history)", value: false }, 
  { name: "Sexual exploitation (history)", value: false }, { name: "Sexual Minority", value: false }]

  vm.race_ethnicity = [{ name: "African American", value: false }, { name: "Asian Pacific Islander", value: false }, { name: "Caucasian", value: false},
  { name: "Latinx", value: false }, { name: "Native American", value: false}]


  vm.changeVul = function (inputVuln) {
  console.log("inputVuln", inputVuln);
  inputVuln.value = !inputVuln.value;
  console.log("inputVuln.name", inputVuln.value);
 }


 vm.changeRace = function (inputRace) {
  console.log("inputVuln", inputRace);
  inputRace.value = !inputRace.value;
  console.log("inputVuln.name", inputRace.value);
 }

  vm.itemChange = function () {
    console.log('inside itemchange');
    console.log(vm.SchoolDistrictWhereChildWasEnrolledIn);
  }


  vm.userService = UserService;
  vm.userObject = UserService.userObject;


  UserService.getCities().then(function (response) {
    console.log('cities', response.data);
    return vm.cities = response.data;
  });

  UserService.getCounties().then(function (response) {
    return vm.counties = response.data;
  });

  UserService.getAgencies().then(function (response) {
    return vm.agencies = response.data;
  });

  UserService.getSchools().then(function (response) {
    console.log('schools', response.data);

    return vm.schools = response.data;
  });


  vm.click = function () {
    console.log('in click');

    var newIntake = {
      mcm_number: vm.caseIn,
      intake_date: vm.DateofIntaketoMCMIn,
      age: vm.AgeIn,
      gender: vm.GenderIn,
      last_seen: vm.DateLastSeenIn,
      reported_missing: vm.DateReportedMissingtoPoliceIn,
      people_served: vm.FamilyMembersInvolvedInSearchIn,
      city: vm.CityMissingFromIn,
      county: vm.CountyMissingFromIn,
      state: vm.StateMissingFromIn,
      school: vm.SchoolDistrictWhereChildWasEnrolledIn,
      start_case_type: vm.CaseTypeWhenOpenedIn,
      end_case_type: vm.CaseTypeWhenClosedIn,
      disposition: vm.CaseDispositionIn,
      close_date: vm.DateCaseClosedIn,
      referral_type: vm.ReferralTypeIn,
      case_vulnerabilities:[],
      race_ethnicity: [],
      case_lawenforcement_denial: []
    }

   
    if (newIntake.mcm_number == null || newIntake.intake_date == null || newIntake.age == null || newIntake.gender == null
    || newIntake.last_seen == null || newIntake.reported_missing == null || newIntake.people_served == null|| newIntake.city == null
  || newIntake.county == null|| newIntake.state == null || newIntake.school == null || newIntake.start_case_type == null|| newIntake.end_case_type == null
|| newIntake.disposition == null || newIntake.close_date == null || newIntake.referral_type == null) 
{
      swal({  
        title: 'Please complete all required fields.',
        icon: "warning",        
        width: 600,
        padding: 100,
        background: '#fff url(assets/page.JPG)'
      })
    } else {
      console.log('newIntake', newIntake);
      swal({
        title: 'Required fields submitted to database.',
        icon: "success",
        width: 600,
        padding: 100,
        background: '#fff url(assets/page.JPG)'
      }).then(function () {
        newIntake.case_vulnerabilities = vm.case_vulnerabilities.filter(function(vulnerability) {
        return vulnerability.value == true;
        });
      }).then(function() {
        newIntake.race_ethnicity = vm.race_ethnicity.filter(function(ethnicity) {
          return ethnicity.value == true;

      });
      }).then(function () {
        UserService.postInputData(newIntake);
        console.log('final newIntake', newIntake)
      });
      
 }
}
  




  //shara working on pdf below
  var pdf = new jsPDF();

  vm.printPDF = function () {
    console.log('test');

    pdf.text(10, 10, 'Name: ' + vm.caseIn);

    pdf.save();
  }
  //shara working on pdf above
});