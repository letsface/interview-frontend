'use strict';

/**
 * @ngdoc function
 * @name letsfaceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the letsfaceApp
 */
angular.module('letsfaceApp').controller('AboutCtrl', function ($rootScope, $scope) {
  $rootScope.currentLogo = "logo_color.png"
  $scope.sections = [
    {
      name: '关于我们',
      template: 'views/_about_us_content.html'
    },
    {
      name: '商务合作',
      template: 'views/_business_content.html'
    }
  ];


  $scope.changeSection = function(section) {
    $scope.currentSection = section
  }


  var init = function () {
    $scope.currentSection = $scope.sections[0];
  };



  init();


});
