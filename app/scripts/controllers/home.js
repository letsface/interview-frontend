'use strict';

/**
 * @ngdoc function
 * @name letsfaceApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the letsfaceApp
 */
angular.module('letsfaceApp').controller('HomeCtrl', function ($scope, $rootScope, $route) {
  $rootScope.route = $route;
  $rootScope.currentLogo = "logo.png";


  $scope.dropDownMenu = [
    {
      mainName: 'About Us',
      links: [
        { 
          text: 'Human Resources',
          path: '#/about'
        },
        { 
          text: 'Business Cooperation',
          path: '#/about'
        },
        { 
          text: 'Contact us',
          path: '#/about'
        },
        { 
          text: 'News',
          path: '#/about'
        }
      ]
    },
    {
      mainName: 'Project Profile',
      links: [
        { 
          text: 'Link 1',
          path: '#/'
        },
        { 
          text: 'Link 2',
          path: '#/about'
        }
      ]
    },
    {
      mainName: 'Project Profile',
      links: [
        { 
          text: 'Link 1',
          path: '#/'
        },
        { 
          text: 'Link 2',
          path: '#/about'
        }
      ]
    }
  ];

});


