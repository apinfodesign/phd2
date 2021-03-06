var contact = angular.module ('contact', ['ngRoute', function() {

'use strict';

contact.controller('formController', ['$scope', function($scope) {

  console.log("starting formController at startup...............");
  this.testing = "testing";
  this.master = {};

  this.update = function (user) {
      $scope.master = angular.copy(user);
      console.log('update function in formcontroller');
      console.log('user values are: ', user,  user.name,  user.email,  user.phone,  user.text);
      formService2.update(user);
  };

  this.reset = function () {
      $scope.user = angular.copy($scope.master);
  };

  this.reset();

  // this.dosomething = function () {
  //     console.log("doing something in formcontroller.... ");
  // };

    }])
contact.service('formService2', ['$http', function ($http) {
this.update = function(user) {

  console.log('at form service user is: ', user);
      $http({
      method: 'POST',
      url: '/api/mailer',
      data: user,
      headers: {'Content-Type': 'application/json'}
    })
    .then(function(data, status, headers, config){
      console.log('formService2: Message send via mailgun successful');
      // alert('Thank you.  An email has been sent to Miles Hochstein.');
    },
    function(data, status, headers, config){
        console.log('formService2: message send failed ' + data);
      });
}
}])
}])
