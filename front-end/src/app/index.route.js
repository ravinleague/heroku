(function() {
  'use strict';

  angular
    .module('angularmoviedb')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      }).when('/newreleases', {
        templateUrl: 'app/main/newreleases.html',
        controller: 'MainController',
        controllerAs: 'main'
      }).when('/toprated', {
        templateUrl: 'app/main/toprated.html',
        controller: 'MainController',
        controllerAs: 'main'
      }).when('/comingsoon', {
        templateUrl: 'app/main/comingsoon.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
